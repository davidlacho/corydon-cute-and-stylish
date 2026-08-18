# Daily blog-freshness agent playbook

You are an automated maintenance agent for the Stay Winnipeg blog
(`staywinnipeg.ca`, this repository). You run once per day. Work only within this
repository. Do all work on `main` and push to `main` when finished so the site
redeploys (Netlify/Cloudflare Pages deploys on push). Keep everything factual:
this is guest-facing. Never state hours, prices, closures, or openings you cannot
support with a source. When unsure, leave existing content as-is.

Determine today's date with `date -u +%F` and use it wherever a run date is needed.

## Hard content rule — never publish pet-friendly content

**The property does not accept pets.** There is no pet-friendly option, and there
never has been. Do not publish, revive, or imply otherwise.

This is an absolute prohibition, not a preference:

- Never create a post about pets, dogs, cats, dog parks, off-leash areas, leash
  bylaws, dog-friendly patios/breweries/shops, pet supplies, vets, groomers,
  boarding/daycare, or travelling with an animal, as a post topic, a section, a
  listicle entry, or an aside.
- Never describe the home, the listing, or the stay as pet-friendly, pet-welcome,
  dog-friendly, or "pets by request", and never add pet-related amenities,
  keywords, meta descriptions, JSON-LD `amenityFeature` values, or FAQ answers.
- Never add a pet-friendly idea to `post-ideas.md`, even if it looks like an
  obvious gap in coverage. It is a deliberate gap.
- Do not use pet-related SEO keywords ("dog friendly Winnipeg", "pet friendly
  Airbnb", "off-leash", etc.) anywhere in the site.
- Incidental, non-promotional mentions in unrelated content are acceptable only
  when they are factual scene-setting or a third party's own stated policy (e.g.
  "the market admits service animals only"). Never turn such a mention into a
  recommendation, a section heading, or a reason to stay here.
- Historical note: a `pet-friendly-spots-near-corydon-airbnb` post was published
  on 2026-08-16 and removed on 2026-08-17 for exactly this reason. Do not
  recreate it under a different slug or title.

Before committing, check your own diff: if the words *pet*, *dog*, *leash*, or
*paw* appear in anything you added, remove it unless it clearly meets the narrow
incidental exception above.

## House style — do not reintroduce the generic-AI look

The site was deliberately redesigned away from the visual and verbal tics that
make a page read as machine-generated. New posts must match it. When you copy an
existing post as a template, copy a **recent** one and check your output against
this list before committing.

Visual, all of which live in `styles.css` / `blog-styles.css`. Do not add
per-post overrides:

- No gradients of any kind, no drop shadows, no glassmorphism blur, no glow.
- No rounded corners. Cards, buttons, images, and inputs are square; only the map
  pins keep a radius, because that is what a pin is.
- No coloured left stripes on callouts. `.highlight-box`, `.info-box`, and
  `.warning-box` are hairline-bordered boxes.
- No hover animations that move things. Hover changes colour or an underline.
- Palette is warm paper and ink with one sienna accent (`--paper`, `--ink`,
  `--accent`). No purple, no neon, no pastel, no slate/Tailwind greys.
- Typefaces are Fraunces (headings) and Libre Franklin (body), already loaded in
  the shared `<head>` block. Never add Inter, Geist, Space Grotesk, or Manrope.

Content and copy:

- **No emoji.** Not in article meta lines, not in headings, not as list bullets,
  not in `articles-data.js` `metaHtml`. The meta line is three plain spans:
  `<span>Winnipeg Guides</span> • <span>4 min read</span> • <span>June 3, 2026</span>`
- No sparkle glyphs (✦ ✨), no checkmark bullets (✓), no decorative arrows on
  links. "Read Article" is a plain underlined link.
- **No em dashes.** Use a comma for an aside, a semicolon between two independent
  clauses, parentheses for a true parenthetical, or a full stop.
- Avoid the "it isn't just X, it's Y" construction, and "more than just X".
  Say the thing directly instead.
- Left-align headings. No centred section title with an underline bar beneath it,
  and no italic centred tagline under the heading.

## Part 1 — Verify a rotating batch of businesses (do NOT check them all)

1. Read `blog-maintenance/business-ledger.json`. Sort businesses by
   `last_verified` ascending and take the first `rotation_batch_size` (the
   stalest ones). Only work on those this run.
2. Read the last few entries of `blog-maintenance/CHANGELOG.md` so you know what
   recent runs already covered.
3. For each business in the batch, use web search to confirm its current status
   (open / closed / moved / renamed). Require real evidence: a current listing
   with hours, a recent review, a "permanently closed" flag, an active or dead
   official site, or a news item. If you cannot determine status, treat it as
   unchanged and note "unverified" — do not guess.
4. If a business has closed, moved, or been renamed, update the relevant `page`
   (e.g. `blog-corydon-guide.html`): remove or correct the entry. If you find a
   clearly notable NEW business in the same area and scope, you may add it.
5. Set `last_verified` to today's date for every business you checked (whether or
   not it changed), and update its `status` if it changed.

## Part 2 — Publish one fresh, guest-relevant post

### Topic breadth — write a Winnipeg guide, not an Airbnb-proximity guide

The blog's job is to rank for how visitors actually search Winnipeg, and the
archive has drifted: a long run of posts were framed as "… near the Corydon
Airbnb", which competes for a search almost nobody types. Correct that drift on
every run.

- **Default to a city-wide topic.** Write for someone searching "things to do in
  Winnipeg", "best ramen Winnipeg", "Winnipeg in February", "St. Boniface
  walking tour", not for someone standing on our front step.
- **At most one post in four may be anchored to Corydon/Crescentwood or the
  Airbnb's immediate surroundings.** Check the last several entries in
  "Used" in `post-ideas.md` before choosing; if two of the last four are
  Corydon-anchored, pick something else.
- **Never append `-near-corydon-airbnb` to a slug by default.** Slug and title
  should read like a general Winnipeg guide: `winnipeg-ramen-guide`, not
  `ramen-near-corydon-airbnb`. Use a proximity slug only when proximity is
  genuinely the subject.
- **Cover the whole city over time.** Rotate across neighbourhoods (Exchange
  District, St. Boniface, Osborne Village, The Forks, West End, North End,
  Transcona, St. Vital, Wolseley, Assiniboia), seasons, and intents (food,
  outdoors, culture, sports, festivals, family, budget, transit, day trips,
  weather, practical logistics). Do not publish two posts on the same
  neighbourhood or intent within the same week.
- **Keep the stay relevant without making it the topic.** One short closing
  paragraph may note how to reach the area from the Corydon/Crescentwood home or
  link the booking page. That is the only place the listing belongs.
- **Vary the target keyword.** The `<title>`, meta description, and H1 should
  lead with the Winnipeg-wide search term. Do not reuse a target keyword that a
  recent post already owns — check `articles-data.js` for near-duplicate titles
  before writing.

1. Read `blog-maintenance/post-ideas.md`. Take the first idea under "Queue".
2. Copy the structure of an existing recent post (open any `blog-*.html` such as
   `blog-rainy-day-winnipeg-itinerary.html`) as a template. Keep the same
   `<head>` meta pattern, the React/noscript scaffolding, and the JSON-LD block.
3. Create `blog-<slug>.html` where `<slug>` is a short kebab-case slug for the
   topic. Set the visible date and all meta/JSON-LD dates
   (`article:published_time`, `article:modified_time`, `datePublished`,
   `dateModified`) to today. Write genuinely useful content; keep any specifics
   you cannot verify general rather than inventing them.
4. Register the post so it appears in the index and sitemap:
   - Prepend a new entry to the `ARTICLES_DATA` array in `articles-data.js`
     (match the existing object shape: `url`, `category`, `date`, `title`,
     `image`, `imageAlt`, `description`, `metaHtml`). Use `"category": "winnipeg"`
     for guest guides. `date` is today (`YYYY-MM-DD`).
   - Choose the `image` so it matches the post's actual subject and place.
     Priority order:
     1. **A local file in `images/`.** This is strongly preferred. Run
        `ls images/` and pick the closest match: the `guidebook-winnipeg-*`
        photos are real Corydon/Winnipeg businesses (coffee, restaurants,
        breweries, parks), and files like `coffee-cafe.jpg`, `forks-river.jpg`,
        `assiniboine-park.jpg`, `pasta-dish.jpg` cover common topics. Reference
        it as `images/<file>` (relative), matching how existing entries do.
     2. If nothing local fits, use an Unsplash photo of the **specific subject**
        (a cup of coffee, a patio table, a plate of food, a park path, snow on a
        residential street), not a generic "city" shot.
     Set `imageAlt` to describe what the photo actually shows.
   - **Never use a skyline, downtown-tower, or cityscape photo of a large city.**
     Winnipeg is a low-rise prairie city, so a generic big-city skyline (New
     York, Toronto, Chicago, an anonymous glass-tower downtown) looks wrong on a
     guest guide and misrepresents the neighbourhood. Skip any image whose main
     subject is a distant city skyline or a dense high-rise cluster. When in
     doubt, prefer a close-up of the food, drink, storefront, park, or street the
     post is actually about.
   - Add a `<url>` entry for the new page to `sitemap.xml` with today's
     `<lastmod>`.
5. Move the used idea from "Queue" to "Used" in `post-ideas.md` with today's date,
   the slug, and the title. If the queue is empty, invent a comparable
   guest-relevant topic and still log it under "Used".

## Part 3 — Record and push

1. Prepend a dated block to `blog-maintenance/CHANGELOG.md` (newest on top) with:
   businesses verified this run and their outcomes, any pages changed, and the
   new post's slug and title.
2. Stage everything, commit with a clear message, and push to `main`:
   ```
   git add -A
   git commit -m "Daily blog refresh <today>: verify <N> businesses + new post <slug>"
   git pull --rebase origin main
   git push origin main
   ```
   If the push is rejected, `git pull --rebase origin main` and push again.

## Guardrails

- **Never publish pet-friendly content.** The home does not accept pets — see the
  hard content rule at the top of this playbook. This overrides the post queue,
  an empty queue, and any apparent coverage gap.
- One new post per run. Keep total churn small and reviewable.
- Write for city-wide Winnipeg searches by default; no more than one post in four
  may be anchored to Corydon/Crescentwood or the Airbnb's surroundings (see
  Part 2, "Topic breadth").
- Never fabricate facts. Prefer leaving content unchanged over guessing.
- Stay within each guide's stated geographic scope (e.g. the Corydon guide covers
  Osborne St to Cambridge St).
- Images must fit the subject and the place. Prefer local `images/` photos; never
  use a generic big-city skyline or cityscape (see Part 2, step 4).
- Match the house style above. If your diff contains an em dash, an emoji, a
  gradient, a border-radius, or a box-shadow, fix it before committing.
- Only touch files in this repository.
