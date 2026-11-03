#!/usr/bin/env python3
"""Validate events-data.js and regenerate the generated parts of events.html.

Run from the repo root after any change to events-data.js:
    python3 blog-maintenance/update-events.py          # validate + regenerate
    python3 blog-maintenance/update-events.py --check  # validate only, exit 1 on problems

Validation (every problem is printed; the script exits 1 and writes nothing if
any is fatal):
  - every entry has title, url, start, end and status
  - url is "/blog-<slug>.html" and that file exists in the repo (the calendar
    links straight to it, so a missing post is a dead link)
  - start and end are YYYY-MM-DD, start <= end
  - status is "confirmed" or "typical"
  - the array is sorted by start (warning only; the script re-sorts in output)
It also reports entries whose end date has passed ("stale"), which the daily run
should refresh to the next edition's dates or remove.

Regeneration rewrites two marked spans in events.html:
  <!-- events-list:start --> ... <!-- events-list:end -->
      the static "Upcoming events" list grouped by month (events whose end date
      is today or later), which is what no-JavaScript visitors and crawlers see
  <!-- events-jsonld:start --> ... <!-- events-jsonld:end -->
      an ItemList of schema.org Event objects, confirmed entries only
"""
import datetime
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "events-data.js")
PAGE = os.path.join(ROOT, "events.html")
SITE = "https://staywinnipeg.ca"
MONTHS = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"]
WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


def load():
    js = open(DATA, encoding="utf-8").read()
    try:
        return json.loads(js[js.index("["):js.rindex("]") + 1])
    except ValueError as exc:
        sys.exit(f"events-data.js: the array is not valid JSON ({exc}). "
                 "Keep the entries as plain JSON objects, double quotes, no trailing commas.")


def parse_date(s):
    try:
        return datetime.date.fromisoformat(s)
    except (TypeError, ValueError):
        return None


def validate(events, today):
    problems, warnings, stale = [], [], []
    prev = ""
    for i, e in enumerate(events):
        label = f"entry {i + 1} ({e.get('title', '?')!r})"
        for key in ("title", "url", "start", "end", "status"):
            if not e.get(key):
                problems.append(f"{label}: missing {key}")
        url = e.get("url", "")
        if url and not re.fullmatch(r"/blog-[a-z0-9-]+\.html", url):
            problems.append(f"{label}: url must look like /blog-<slug>.html, got {url}")
        elif url and not os.path.exists(os.path.join(ROOT, url.lstrip("/"))):
            problems.append(f"{label}: {url} does not exist; every calendar event needs its blog post")
        s, t = parse_date(e.get("start")), parse_date(e.get("end"))
        if e.get("start") and not s:
            problems.append(f"{label}: start is not YYYY-MM-DD")
        if e.get("end") and not t:
            problems.append(f"{label}: end is not YYYY-MM-DD")
        if s and t and s > t:
            problems.append(f"{label}: start {s} is after end {t}")
        if e.get("status") not in ("confirmed", "typical"):
            problems.append(f"{label}: status must be \"confirmed\" or \"typical\"")
        for key in e:
            if key not in ("title", "url", "start", "end", "time", "venue", "status"):
                warnings.append(f"{label}: unknown field {key!r} is ignored by the calendar")
        if e.get("start") and e["start"] < prev:
            warnings.append(f"{label}: array is not sorted by start")
        prev = e.get("start") or prev
        if t and t < today:
            stale.append((t, e))
    return problems, warnings, stale


def fmt_range(s, t):
    if s == t:
        return f"{WEEKDAYS[s.weekday()]}, {MONTHS[s.month - 1]} {s.day}"
    if s.year == t.year and s.month == t.month:
        return f"{MONTHS[s.month - 1]} {s.day} to {t.day}"
    if s.year == t.year:
        return f"{MONTHS[s.month - 1]} {s.day} to {MONTHS[t.month - 1]} {t.day}"
    return f"{MONTHS[s.month - 1]} {s.day}, {s.year} to {MONTHS[t.month - 1]} {t.day}, {t.year}"


def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;"))


def build_list(events, today):
    upcoming = [e for e in events if parse_date(e["end"]) >= today]
    out = ["<h2>Upcoming events</h2>"]
    if not upcoming:
        out.append("<p>No upcoming events are listed yet. Check back soon.</p>")
    month = None
    for e in upcoming:
        s, t = parse_date(e["start"]), parse_date(e["end"])
        key = (s.year, s.month)
        if key != month:
            if month is not None:
                out.append("</ul>")
            out.append(f"<h3>{MONTHS[s.month - 1]} {s.year}</h3>")
            out.append('<ul class="events-list">')
            month = key
        date = fmt_range(s, t)
        if e.get("time"):
            date += f", {e['time']}"
        if e["status"] == "typical":
            date += " (typical dates; not yet confirmed by the organiser)"
        line = (f'<li><a href="{esc(e["url"])}">{esc(e["title"])}</a>'
                f'<span class="events-list-date">{esc(date)}</span>')
        if e.get("venue"):
            line += f'<span class="events-list-venue">{esc(e["venue"])}</span>'
        out.append(line + "</li>")
    if month is not None:
        out.append("</ul>")
    out.append(f'<p class="events-updated">Calendar last updated {MONTHS[today.month - 1]} {today.day}, {today.year}. '
               "Dates come from each organiser; confirm on their site before you book travel around an event.</p>")
    return "\n".join(out)


def build_jsonld(events, today):
    items = []
    for e in events:
        if e["status"] != "confirmed" or parse_date(e["end"]) < today:
            continue
        ev = {
            "@type": "Event",
            "name": e["title"],
            "startDate": e["start"],
            "endDate": e["end"],
            "url": SITE + e["url"],
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
                "@type": "Place",
                "name": e.get("venue") or "Winnipeg",
                "address": {"@type": "PostalAddress", "addressLocality": "Winnipeg",
                            "addressRegion": "MB", "addressCountry": "CA"},
            },
        }
        items.append({"@type": "ListItem", "position": len(items) + 1, "item": ev})
    data = {"@context": "https://schema.org", "@type": "ItemList",
            "name": "Winnipeg events calendar", "url": SITE + "/events.html",
            "numberOfItems": len(items), "itemListElement": items}
    body = json.dumps(data, indent=4, ensure_ascii=False)
    body = "\n".join("    " + line for line in body.splitlines())
    return '    <script type="application/ld+json">\n' + body + "\n    </script>"


def replace_span(text, name, new):
    pattern = re.compile(rf"(<!-- {name}:start[^>]*-->)(.*?)(<!-- {name}:end -->)", re.S)
    if not pattern.search(text):
        sys.exit(f"events.html: could not find the <!-- {name}:start --> ... <!-- {name}:end --> markers")
    return pattern.sub(lambda m: m.group(1) + "\n" + new + "\n    " + m.group(3), text, count=1)


def main():
    check_only = "--check" in sys.argv
    today = datetime.date.today()
    events = load()
    problems, warnings, stale = validate(events, today)
    for w in warnings:
        print("warning:", w)
    for p in problems:
        print("PROBLEM:", p)
    for t, e in sorted(stale, key=lambda x: x[0]):
        print(f"stale: {e['title']!r} ended {t} ({(today - t).days} days ago); refresh it to the next edition, or remove it once it is more than 30 days past")
    if problems:
        sys.exit(f"{len(problems)} problem(s); nothing written")
    events.sort(key=lambda e: (e["start"], e["end"], e["title"]))
    if check_only:
        print(f"events-data.js: {len(events)} entries, "
              f"{sum(1 for e in events if parse_date(e['end']) >= today)} upcoming, {len(stale)} stale")
        return
    page = open(PAGE, encoding="utf-8").read()
    page = replace_span(page, "events-list", build_list(events, today))
    page = replace_span(page, "events-jsonld", build_jsonld(events, today))
    open(PAGE, "w", encoding="utf-8").write(page)
    upcoming = sum(1 for e in events if parse_date(e["end"]) >= today)
    confirmed = sum(1 for e in events if e["status"] == "confirmed" and parse_date(e["end"]) >= today)
    print(f"events.html: {upcoming} upcoming events listed ({confirmed} confirmed in JSON-LD), "
          f"{len(stale)} stale entries in events-data.js, last updated {today}")


if __name__ == "__main__":
    main()
