#!/usr/bin/env python3
"""Check that every post is registered everywhere the blog index needs it.

Run from the repo root before committing any run that adds, retitles or
refreshes a post:
    python3 blog-maintenance/check-blog-listing.py
It treats articles-data.js as the source of truth and checks, for every post:
  - the blog-*.html file exists
  - articles_data.json has the same entry (same title and description)
  - blog.html has a <noscript> article card for it, with matching title and
    description
  - blog.html has a BlogPosting entry in the "blogPost" JSON-LD array, with
    matching headline and description
  - sitemap.xml has a <url> entry for it
It also reports cards, JSON-LD entries or JSON entries for posts that are not
in articles-data.js. It edits nothing. Exit code 0 means everything matches;
1 means at least one problem, listed one per line.

Added 2026-11-11 after 53 of 184 posts were found missing from the blog.html
noscript grid and JSON-LD, mostly posts the daily run published that summer.
"""
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(name):
    with open(os.path.join(ROOT, name), encoding="utf-8") as f:
        return f.read()


def norm(s):
    """Compare text the way a reader sees it: unescape entities, collapse spaces."""
    return re.sub(r"\s+", " ", html.unescape(s or "")).strip()


problems = []

js = read("articles-data.js")
articles = json.loads(js[js.index("["):js.rindex("]") + 1])
by_url = {}
for a in articles:
    if a["url"] in by_url:
        problems.append(f"articles-data.js lists {a['url']} twice")
    by_url[a["url"]] = a

legacy = {a["url"]: a for a in json.loads(read("articles_data.json"))}

blog = read("blog.html")
cards = {}
for m in re.finditer(
    r'<a href="(/blog-[^"]+)" class="article-card"[^>]*>(.*?)</a>', blog, re.S
):
    body = m.group(2)
    h2 = re.search(r"<h2>(.*?)</h2>", body, re.S)
    p = re.search(r"<p>(.*?)</p>", body, re.S)
    if m.group(1) in cards:
        problems.append(f"blog.html noscript has two cards for {m.group(1)}")
    cards[m.group(1)] = (h2.group(1) if h2 else "", p.group(1) if p else "")

ld = {}
for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', blog, re.S):
    try:
        data = json.loads(block)
    except ValueError as e:
        problems.append(f"blog.html has a JSON-LD block that does not parse: {e}")
        continue
    for post in data.get("blogPost", []) if isinstance(data, dict) else []:
        url = post.get("url", "").replace("https://staywinnipeg.ca", "")
        if url in ld:
            problems.append(f"blog.html blogPost lists {url} twice")
        ld[url] = post

sitemap = set(
    u.replace("https://staywinnipeg.ca", "")
    for u in re.findall(r"<loc>(https://staywinnipeg\.ca/blog-[^<]+)</loc>", read("sitemap.xml"))
)

for url, a in by_url.items():
    title, desc = norm(a["title"]), norm(a["description"])
    if not os.path.exists(os.path.join(ROOT, url.lstrip("/"))):
        problems.append(f"{url}: file does not exist")
    j = legacy.get(url)
    if not j:
        problems.append(f"{url}: missing from articles_data.json")
    elif norm(j.get("title")) != title or norm(j.get("description")) != desc:
        problems.append(f"{url}: articles_data.json title/description differs from articles-data.js")
    c = cards.get(url)
    if not c:
        problems.append(f"{url}: no noscript card in blog.html")
    else:
        if norm(c[0]) != title:
            problems.append(f"{url}: blog.html card title differs from articles-data.js")
        if norm(c[1]) != desc:
            problems.append(f"{url}: blog.html card description differs from articles-data.js")
    e = ld.get(url)
    if not e:
        problems.append(f"{url}: no blogPost JSON-LD entry in blog.html")
    else:
        if norm(e.get("headline")) != title:
            problems.append(f"{url}: blog.html JSON-LD headline differs from articles-data.js")
        if norm(e.get("description")) != desc:
            problems.append(f"{url}: blog.html JSON-LD description differs from articles-data.js")
    if url not in sitemap:
        problems.append(f"{url}: missing from sitemap.xml")

for name, urls in (("noscript card", cards), ("blogPost JSON-LD entry", ld), ("articles_data.json entry", legacy)):
    for url in sorted(set(urls) - set(by_url)):
        problems.append(f"{url}: has a blog.html/articles_data.json {name} but is not in articles-data.js")

# Owner's rule (2026-11-25): every link to the Airbnb listing goes through /book-now.html,
# which records the click before forwarding. Flag any direct href to the listing.
import glob as _glob
_direct = re.compile(r"""href\s*[:=]\s*["']https?://(?:www\.)?airbnb\.(?:ca|com)/(?:rooms/716340250371431352|h/corydon-cute-and-stylish)""")
for _f in sorted(_glob.glob("*.html") + ["blog-components.js", "load-components.js", "src/index-app.jsx"]):
    if _f in ("book-now.html", "reviews-now.html") or not os.path.exists(_f):
        continue
    for _n, _line in enumerate(open(_f, encoding="utf-8"), 1):
        if _direct.search(_line):
            problems.append(f"{_f}:{_n}: links straight to Airbnb; use /book-now.html?source=<slug> instead")

if problems:
    print(f"FAIL: {len(problems)} problem(s) across {len(by_url)} posts")
    for p in problems:
        print("  " + p)
    sys.exit(1)
print(f"OK: all {len(by_url)} posts are listed in articles_data.json, the blog.html noscript grid, "
      "the blogPost JSON-LD and sitemap.xml, with matching titles and descriptions")
