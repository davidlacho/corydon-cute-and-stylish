# Daily blog-freshness agent playbook

You are an automated maintenance agent for the Stay Winnipeg blog
(`staywinnipeg.ca`, this repository). You run once per day. Work only within this
repository. Do all work on `main` and push to `main` when finished so the site
redeploys (Netlify/Cloudflare Pages deploys on push). Keep everything factual:
this is guest-facing. Never state hours, prices, closures, or openings you cannot
support with a source. When unsure, leave existing content as-is.

Determine today's date with `date -u +%F` and use it wherever a run date is needed.

Structural and stylistic conventions for posts live in `CLAUDE.md` at the repo
root. Follow it for meta tags, JSON-LD, component structure, and accessibility;
this playbook covers only the daily run itself.

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

## Writing — vary the form so the archive does not read as one machine

A daily post written to the same template, in the same cadence, with the same
openers, is what a search engine's scaled-content filter is built to spot, and
it is what readers skim past. Google does not penalise machine-written text as
such; it demotes pages that add nothing a reader could not get elsewhere and
that arrive in bulk looking identical. The defence is specificity and variety.
Every post must carry facts a visitor cannot get from the organiser's own page
(what the walk from the bus stop is like, which entrance has the shorter line,
what the wind does on that block in February), and no two consecutive posts may
share a shape.

### Pick the post's form before writing, by rule, not by habit

Read the "Used" list in `post-ideas.md` and note the form of the last three
posts (record the form in the "Used" entry from now on, e.g.
`2026-09-22 - nuit-blanche-winnipeg - Nuit Blanche ... (form: walk)`). Choose a
form that none of the last three used:

- **walk**: a route in order, written as movement through the place; time and
  distance between stops; no bullet lists.
- **question and answer**: five to eight questions a visitor actually types,
  each answered in a short paragraph; no other headings.
- **one-day plan**: hour by hour, with the trade-offs stated (what you give up
  by choosing this order).
- **ranked short list**: five to seven entries, each a single tight paragraph
  with a reason for its rank; nothing else.
- **explainer**: how the thing works (the pavilion passport system, the river
  trail's freeze rules, the transit fare), written as continuous prose with at
  most two headings.
- **host's notes**: first person plural, the voice of the people who run the
  house and have been to the event; opinions allowed, hedged facts not.
- **comparison**: two or three options set against each other on the axes a
  visitor cares about (cost, time, weather exposure, kids).

Vary within the form as well: some posts open with a scene, some with the
practical answer, some with a date; some run 500 words, some 1,200; some use a
single `.info-box`, most use none. Never end with a heading called Conclusion,
Final Thoughts, Wrapping Up, or Plan Your Visit, and never open with "Winnipeg
is known for" or "Whether you're a … or a …".

### Sentence-level tells to remove before committing

Run these greps over your new or changed HTML and rewrite every hit:

```
grep -n -i -E "isn't just|not just|more than just|it's worth noting|it is worth|no discussion|plays a vital|a testament|vibrant|nestled|bustling|hidden gem|must-visit|must-see|breathtaking|stunning|rich (history|heritage|tapestry)|whether you're|in conclusion|overall,|delve|elevate|seamless|unforgettable|immerse|boasts|offers something for everyone|look no further|ultimate guide|treasure trove|cozy up|embrace" blog-<slug>.html
grep -n -E "—" blog-<slug>.html
```

Also check for these patterns, which a grep will not catch:

- Every paragraph the same length, every sentence the same length. Cut one
  sentence to four words somewhere; let another run long.
- A bolded lead-in followed by a sentence that restates it ("**Parking:**
  Parking is available"). Either drop the bold or say something new.
- Three-item lists by reflex ("food, drink and fun"). Use two items or four.
- A trailing "-ing" clause manufacturing significance ("… making it a perfect
  choice for families"). Delete it.
- Attribution to nobody ("many visitors say", "locals know"). Name the source
  or cut the claim.
- The same closing move as the previous post (the how-to-get-there-from-
  Crescentwood paragraph in the same words). Rewrite it for this event; put it
  earlier in the post one time in three.
- Headings that could sit on any post ("Getting There", "What to Expect",
  "Tips for Visitors"). Make headings specific to the subject or drop them.

### Specificity is the real signal

Before publishing, confirm the post contains at least three of: a street name
with a direction; a price or admission rule with the organiser named as the
source; a transit route number; a time span in minutes for a walk; a named
building, stage, gate or rink; a weather or daylight fact for that month in
Winnipeg. If it does not, the post is not ready.

## Run budget — keep each run short and predictable

The run should finish in well under an hour of agent time. To keep it there:

- Read only what the run needs: this playbook, `post-ideas.md`, the ledger, the
  last three `CHANGELOG.md` entries, one recent post as a template, and the
  pages you are actually editing. Do not read the whole archive or run
  repo-wide searches except the greps named in this playbook.
- Web search only for the businesses in this run's batch and for the facts in
  the one post you are writing. One or two well-chosen sources per fact; stop
  when you have a source, do not keep collecting.
- Write the post in one pass, then do one editing pass against the checks above.
  Do not redraft the whole post more than once.
- Run `pa11y` on the one or two pages you changed, not the sitemap.
- One commit at the end of the run.

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

1. Read `blog-maintenance/post-ideas.md`. **If an "Events queue" section exists
   and has entries, take its first entry** (see "Event posts" below). Otherwise
   take the first idea under "Queue".
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
   - Complete the rest of the post-creation checklist in `CLAUDE.md`: the same
     entry in `articles_data.json`, the `<noscript>` card and the JSON-LD
     `blogPost` entry in `blog.html`, and a Markdown link line in `llms.txt`.
5. Move the used idea from "Queue" to "Used" in `post-ideas.md` with today's date,
   the slug, the title, and the form you chose (`(form: walk)` etc., see
   "Writing" above). If the queue is empty, invent a comparable
   guest-relevant topic and still log it under "Used".

### Event posts (while the "Events queue" in `post-ideas.md` has entries)

Added 2026-09-21. Winnipeg hosts a run of name-brand events (Heritage Classic,
JUNO Week, Festival du Voyageur, Folklorama, Folk Festival, Fringe, and so on)
that visitors search for by name, months ahead, while deciding where to stay.
Until the events queue is empty, each run publishes or refreshes one event page
so those searches land on us. When the queue is empty, delete the section from
`post-ideas.md` and go back to the general queue.

- **Order is fixed.** Take the top entry; it is chronological, so the nearest
  event gets covered first. Do not skip ahead or reorder.
- **Refresh, do not duplicate.** Entries marked "refresh" name an existing
  `blog-*.html`. Update that file in place: new dates, venue, tickets and on-sale
  timing, what is new this year, `article:modified_time`, `dateModified`, the
  sitemap `<lastmod>`, and the `description` copies in `articles-data.js`,
  `articles_data.json` and `blog.html`. Keep the slug and URL. Log the run under
  "Used" with the existing slug and "(refresh)".
- **Answer the search first.** The `<title>`, meta description, H1 and opening
  paragraph must state the event, the year and the dates (or the typical window)
  plainly: "JUNO Week in Winnipeg 2027: April 1 to 4, Tickets, Venues and Where
  to Stay". Then cover: what it is, when and where, how tickets or admission
  work and where to check them, how to get there by transit and on foot from
  Crescentwood, what to wear or bring, and where to eat nearby.
- **Dates: confirmed versus typical.** The queue marks each fact "confirmed" or
  "typical window". Write typical windows as "usually" or "in past years". On
  the day you write, check the organiser's site; if a firm date has since been
  announced, use it and say the organiser announced it. Never present an
  inferred date as confirmed and never invent prices, capacities or line-ups.
- **The stay is the point of these pages, so it may take one full section**, not
  just a closing line: a short "Where to stay for <event>" section that states
  the distance and transit time from the Crescentwood home to the venue, notes
  that event weekends book out early, and links the booking page. Keep it
  factual; no superlatives. This section is exempt from the one-in-four
  Corydon-anchor rule and from the "one closing paragraph" limit in "Topic
  breadth"; the rest of the post still follows house style.
- **Same-intent rule suspended.** Consecutive event posts are expected while
  this queue runs; the "no two posts on the same intent within a week" rule in
  "Topic breadth" does not apply to it.
- **Images.** Prefer a local `images/` photo of the venue or the activity (rink,
  stadium, stage, street); otherwise an Unsplash close-up of the activity. No
  skylines, and never a photo that implies the home is at the venue.
- **Category** stays `"winnipeg"`. Slug is the event name plus the year only when
  the queue entry includes the year.

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
- One new post (or one event-page refresh) per run. Keep total churn small and
  reviewable.
- While the "Events queue" in `post-ideas.md` has entries, it takes priority
  over the general queue (see Part 2, "Event posts").
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
