# Stay Winnipeg Site Maintenance

This repository contains the static website for [staywinnipeg.ca](https://staywinnipeg.ca/), including the homepage, blog listing, individual blog posts, and tours page.

## Accessibility Testing with Pa11y

Use `pa11y` to run WCAG 2.1 AA checks before finishing content, layout, or style changes.

### Prerequisite

`npx` is used directly, so no global install is required.

### Single Page Check

```bash
npx --yes pa11y "https://staywinnipeg.ca/<page>" --standard WCAG2AA
```

Example:

```bash
npx --yes pa11y "https://staywinnipeg.ca/blog.html" --standard WCAG2AA
```

### Homepage Check

```bash
npx --yes pa11y "https://staywinnipeg.ca/" --standard WCAG2AA
```

### Full Sitemap Audit

Run this when changes affect multiple pages or shared styles/components:

```bash
python3 - <<'PY'
import subprocess, xml.etree.ElementTree as ET, json, pathlib
from datetime import datetime

sitemap = pathlib.Path('sitemap.xml')
root = ET.parse(sitemap).getroot()
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [loc.text.strip() for loc in root.findall('sm:url/sm:loc', ns) if loc.text and loc.text.strip()]

results = []
for url in urls:
    run = subprocess.run(
        ['npx', '--yes', 'pa11y', url, '--standard', 'WCAG2AA'],
        capture_output=True,
        text=True
    )
    output = (run.stdout or '') + ('\n' + run.stderr if run.stderr else '')
    passed = run.returncode == 0 and 'No issues found!' in output
    results.append({
        'url': url,
        'status': 'pass' if passed else 'fail',
        'output': '' if passed else output[-12000:]
    })

summary = {
    'generated_at': datetime.utcnow().isoformat() + 'Z',
    'total_urls': len(urls),
    'passed': sum(1 for r in results if r['status'] == 'pass'),
    'failed': sum(1 for r in results if r['status'] == 'fail'),
    'results': results
}

pathlib.Path('pa11y-sitemap-report.json').write_text(
    json.dumps(summary, indent=2),
    encoding='utf-8'
)

print(f"Passed: {summary['passed']} Failed: {summary['failed']} Total: {summary['total_urls']}")
print("Report: pa11y-sitemap-report.json")
PY
```

## Accessibility Failure Priorities

Fix failures in this order:

1. Color contrast (text and interactive controls)
2. Duplicate `id` attributes
3. Missing `title` on `iframe`
4. Missing alt text and ARIA labels

Re-run the relevant `pa11y` command(s) after fixes to confirm clean results.
