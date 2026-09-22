#!/usr/bin/env python3
"""Regenerate the blog-post sections of llms.txt from articles-data.js.

Run from the repo root after adding or retitling a post:
    python3 blog-maintenance/update-llms.py
It rewrites "# Content Overview" and "# Content Pages by Category" (every post,
newest first, as Markdown links), refreshes the post count under "# Site
Structure", and sets "# Last Updated" to today. Everything else is left as is.
"""
import datetime
import json
import re
import sys

ROOT = __import__("os").path.dirname(__import__("os").path.dirname(__import__("os").path.abspath(__file__)))
JS = ROOT + "/articles-data.js"
LLMS = ROOT + "/llms.txt"

js = open(JS, encoding="utf-8").read()
data = json.loads(js[js.index("["):js.rindex("]") + 1])
data.sort(key=lambda d: d["date"], reverse=True)

cats = [
    ("winnipeg", "Winnipeg Attractions & Activities", "guides"),
    ("hosting", "Hosting & Airbnb Philosophy", "posts"),
    ("travel", "Travel Experiences & Stories", "posts"),
]
by = {k: [d for d in data if d["category"] == k] for k, _, _ in cats}
unknown = [d for d in data if d["category"] not in by]
if unknown:
    sys.exit("unknown category in articles-data.js: " + ", ".join(d["url"] for d in unknown))

overview = ["# Content Overview", f"Total Blog Posts: {len(data)}"]
overview += [f"- {name}: {len(by[k])} {noun}" for k, name, noun in cats]
sections = ["# Content Pages by Category", ""]
for k, name, noun in cats:
    sections.append(f"## {name} ({len(by[k])} {noun})")
    for d in by[k]:
        sections.append(f"- [{d['title']}](https://staywinnipeg.ca{d['url']})")
    sections.append("")

t = open(LLMS, encoding="utf-8").read()
new_block = "\n".join(overview) + "\n\n" + "\n".join(sections).rstrip("\n") + "\n\n"
t, n = re.subn(r"# Content Overview\n.*?(?=# Property Information\n)", new_block, t, count=1, flags=re.S)
if n != 1:
    sys.exit("could not find the Content Overview .. Property Information span in llms.txt")
t = re.sub(r"(- Blog posts?: )\d+", lambda m: m.group(1) + str(len(data)), t)
t = re.sub(r"(- \d+ )individual blog post", lambda m: f"- {len(data)} individual blog post", t)
t = re.sub(r"listing all \d+ blog posts", f"listing all {len(data)} blog posts", t)
today = datetime.date.today().strftime("%B %-d, %Y")
t = re.sub(r"(# Last Updated\n)[^\n]*", lambda m: m.group(1) + today, t, count=1)
open(LLMS, "w", encoding="utf-8").write(t)
print(f"llms.txt: {len(data)} posts ({', '.join(f'{len(by[k])} {k}' for k, _, _ in cats)}), last updated {today}")
