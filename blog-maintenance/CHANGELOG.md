# Blog maintenance changelog

Append-only log written by the daily blog-freshness cron. Newest entries on top.
Each run adds one dated block recording which businesses it verified, what
changed on the site, and which new post it published. The cron reads the most
recent entries to avoid repeating work.

---

## 2026-08-24 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-19:
  - Saperavi Georgian Cuisine (709 Corydon Ave) — confirmed open. Official site
    (saperavi.ca), a Yelp listing updated May 2026 with posted hours, and an
    active order.online ordering page all show it operating.
  - Starbucks (946 Corydon Ave) — confirmed open. Multiple active listings
    (Yellow Pages, DoorDash, Uber Eats, Tripadvisor) and the Starbucks careers
    site (which lists this address as store #68102, "Corydon & Stafford") all
    show it operating with posted hours.
  - Sugar + Salt Bakeshoppe (897 Corydon Ave) — confirmed open. Official site
    (sugarandsaltbakeshoppe.com), Tourism Winnipeg, and a Wheree listing
    updated July 2026 all show it active with posted hours.
  - Sunshine Chinese Restaurant (635 Corydon Ave) — **status changed from
    closed to open.** The original operator's site (sunshinechinesefood.com)
    still states "We Are Now Closed," but a separate, active site
    (winnipegsunshine.com) and Facebook page (facebook.com/SunShine635, which
    describes itself as "a new Chinese restaurant on Corydon Ave, Winnipeg")
    show a new operation under the same name at the same address, with a
    different phone number (204-615-2615) and current delivery listings on
    DoorDash and order.online. Re-added to `blog-corydon-guide.html`'s
    restaurant list, linked to winnipegsunshine.com.
  - `last_verified` set to 2026-08-24 for all four in `business-ledger.json`.
- **New post:** `blog-winnipeg-cycling-routes.html` — "Cycling Winnipeg: the
  routes and trails worth riding". A city-wide guide (not Corydon-anchored;
  the last four published posts were also city-wide, so this keeps the
  topic-breadth ratio well under the one-in-four cap) covering the
  Assiniboine River Trail, the Awasisak Mēskanow Greenway (formerly Bishop
  Grandin Greenway), the Harte Trail, and Bicycle Garden (Plain Bicycle) on
  Sherbrook Street as a bike rental option, with a closing note to check a
  current trail map since surfaces and closures change seasonally. All trail
  names, routes, and the bike shop's offerings were confirmed by web search
  before writing; no hours or prices were stated in the post itself, since
  rental rates and trail conditions change more often than a static page can
  track. This run's
  queue first idea, `manitoba-museum-planetarium-guide`, was skipped again
  (same reason as 2026-08-23: no local photo depicts the museum/planetarium
  and `manitobamuseum.ca` was unreachable from this sandbox), as was
  `winnipeg-filipino-food-guide` and several other early queue items, for
  lack of a local photo that fits the topic without misrepresenting it
  (`images.unsplash.com` is also unreachable from this sandbox, same
  restriction noted on prior runs). `winnipeg-cycling-routes` was picked
  because `images/guidebook-winnipeg-51-plain-bicycle-bicycle-garden.jpg`, a
  real photo of a Winnipeg bike shop storefront, fits it exactly. Registered
  in `articles-data.js` and `sitemap.xml`, and moved from Queue to Used in
  `post-ideas.md`.

---

## 2026-08-23 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-18:
  - Peking Chinese Food Ltd. (840 Corydon Ave) — confirmed open. Official site
    (pekingwpg.com), an active Yelp listing (updated July 2026) with posted
    hours, and DoorDash ordering all show it operating; the restaurant notes
    it has served the area since 1970.
  - Cafe 22 (823 Corydon Ave) — confirmed open. Official site (cafe22.ca /
    cafe22corydon.com), an OpenTable listing, and a Yelp listing updated
    August 2026 all show it active with posted hours.
  - Saffron's Restaurant (681 Corydon Ave) — confirmed open. Official site
    (saffronrestaurantwinnipeg.com), a Yelp listing updated July 2026, and an
    active online ordering page all show it operating with posted hours.
  - Santa Lucia Pizza (905 Corydon Ave) — confirmed open. Official site
    (santaluciapizza.com, with a page dedicated to the Corydon location),
    Tourism Winnipeg, and Facebook all show it active with posted hours.
  - `last_verified` set to 2026-08-23 for all four in `business-ledger.json`; no
    status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-wolseley-neighbourhood-guide.html` — "Wolseley: a guide
  to Winnipeg's leafiest neighbourhood". A city-wide, neighbourhood-focused
  guide (not Corydon-anchored; the last four published posts were also
  city-wide, so this keeps the topic-breadth ratio well under the one-in-four
  cap) covering the character homes on Wolseley/Westminster/Palmerston
  Avenues, the history of the Wolseley Elm (including the 1957 standoff to
  save it and the plaque that now marks the spot at 980 Palmerston Ave), the
  Assiniboine River pathway along the neighbourhood's southern edge, and the
  everyday feel of the area. All historical and geographic details were
  confirmed by web search before writing (Manitoba Historical Society's
  "Wolseley Elm" pages and neighbourhood guides); no business hours or prices
  were stated. This run's queue technically listed
  `manitoba-museum-planetarium-guide` first, but no local photo depicts the
  Manitoba Museum or Planetarium, and this run's network sandbox could not
  reach `manitobamuseum.ca` or `images.unsplash.com` (same restriction noted
  on 2026-08-19 and 2026-08-22) to verify a fallback image or current
  admission details, so that idea was left in Queue for a future run and
  `wolseley-neighbourhood-guide` (further down the same Queue) was published
  instead, using the real local photo `images/guidebook-winnipeg-44-wolseley.jpg`.
  Registered in `articles-data.js` and `sitemap.xml`, and moved from Queue to
  Used in `post-ideas.md` with a note explaining the substitution.

---

## 2026-08-22 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-17:
  - Passero Restaurant (774 Corydon Ave) — confirmed open. Multiple active
    listings (Tripadvisor, Yably, Zmenu) plus the restaurant's own site
    (passerowinnipeg.com) show it operating with posted hours.
  - Forgotten Flavours (858 Corydon Ave) — confirmed open. Official site
    (forgottenflavours.ca) lists the Corydon location on its locations page
    with current hours (Tue-Sat, 11am-6pm), and Tourism Winnipeg and
    Instagram both show it active.
  - Colosseo Ristorante Italiano (670 Corydon Ave) — confirmed open. Official
    site (colosseo.ca), a Yelp listing updated July 2026, and Tourism
    Winnipeg all show it active with posted hours.
  - Bar Italia (737 Corydon Ave) — confirmed open. Yelp (updated January
    2026), UberEats/DoorDash ordering pages, and Tourism Winnipeg all show
    it active.
  - `last_verified` set to 2026-08-22 for all four in `business-ledger.json`; no
    status changes. No closures, moves, or renames found; no page corrections
    needed on `blog-corydon-guide.html`.
- **New post:** `blog-winnipeg-ramen-japanese-guide.html` — "Where to eat
  ramen and Japanese food in Winnipeg". A city-wide guide (not
  Corydon-anchored; the last three published posts were also city-wide, so
  this keeps the topic-breadth ratio well under the one-in-four cap) covering
  Cho Ichi Ramen (Pembina Highway) and Yujiro Japanese Restaurant (River
  Heights) for ramen, Gaijin Izakaya (Regent Avenue West) and Edokko Japanese
  Food (Waterloo Street) for izakaya and sushi, and Wako Sushi Café/Sushi Ya
  on Corydon Avenue as the neighbourhood's own sushi counters, with a closing
  note that small independent kitchens change hours more often than chains.
  All business names and neighbourhoods were confirmed by web search before
  writing; no hours or prices were stated in the post itself. Registered in
  `articles-data.js` and `sitemap.xml`, and moved from Queue to Used in
  `post-ideas.md`. This run's network sandbox could not reach
  `unsplash.com`/`images.unsplash.com` (same restriction noted on
  2026-08-19), and no local photo depicts a specific ramen or Japanese dish,
  so `images/restaurant-dining.jpg` (a real Winnipeg restaurant interior,
  described accurately rather than mislabelled as a noodle dish) was used as
  the hero image instead of risking a broken external link or a misleading
  local photo. `images/pasta-dish.jpg` was considered and rejected: it is
  already used, correctly, for a tomato-based pasta dish on
  `blog-vegetarian-vegan-eats-corydon.html` and `blog-corydon-guide.html`,
  and would misrepresent the dish on a ramen post.

---

## 2026-08-21 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-16:
  - Thom Bargen Coffee Roasters (743 Corydon Ave) — confirmed open. Official
    site (thombargen.com/pages/our-cafes) lists this address as an active
    location with posted hours; multiple third-party listings (Th3rdwave,
    CaféWork, the location's own Facebook page) agree. No permanently-closed
    flag anywhere; a separate Thom Bargen location on Main St has closed, but
    that does not affect this one.
  - Tim Horton's (949 Corydon Ave) — confirmed open. Official Tim Hortons
    store locator and a Yelp listing updated June 2026 both show it active
    with posted hours; also live on UberEats and Tripadvisor.
  - Tommy's Pizzeria (842 Corydon Ave) — confirmed open. Yelp listing updated
    August 2026 shows current hours; official site and Toast ordering page
    are live.
  - Wako Sushi Café (875 Corydon Ave) — confirmed open. Yelp listing updated
    July 2026 shows current hours; also live on DoorDash and UberEats.
  - `last_verified` set to 2026-08-21 for all four in `business-ledger.json`; no
    status changes. No closures, moves, or renames found; no page corrections
    needed on `blog-corydon-guide.html`.
- **New post:** `blog-winnipeg-free-things-to-do.html` — "20 free things to do
  in Winnipeg". A city-wide listicle (not Corydon-anchored) covering free
  parks (Assiniboine Park, The Forks riverwalk, Kildonan Park, St. Vital Park,
  Vimy Ridge Memorial Park), public art and architecture (Exchange District,
  murals, the Legislative Building grounds, Union Station), museum
  free-admission days (WAG/Qaumajuq first Fridays, the Manitoba Museum's free
  days, Millennium Library), markets and neighbourhood strolls, and seasonal
  free events, with a closing note to confirm event/free-day dates on the
  venue's own site since those change year to year. Registered in
  `articles-data.js` and `sitemap.xml`, and moved from Queue to Used in
  `post-ideas.md`. Used the previously-unused local photo
  `images/guidebook-winnipeg-42-assiniboine-park.jpg` as the hero image (a
  real photo of Assiniboine Park, the post's first entry).

---

## 2026-08-20 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-15:
  - Sushi Ya (659 Corydon Ave) — confirmed open, active listings and current
    ordering page (order.online), phone number consistent across sources.
  - The Cheesemongers Fromagerie (839 Corydon Ave) — confirmed open, active
    site (thecheesemongers.ca) with a working contact page and current Yelp
    listing (updated July 2026).
  - The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave) — confirmed open,
    active site (themightykiwi.ca) with a current locations page listing the
    Corydon address, and current DoorDash/Yelp listings.
  - The Roost (651 Corydon Ave) — confirmed open, active site (theroostwpg.com)
    with hours and menu, current Yelp listing (updated February 2026).
  - `last_verified` set to 2026-08-20 for all four in `business-ledger.json`; no
    status changes. No closures, moves, or renames found; no page corrections
    needed on `blog-corydon-guide.html`.
- **New post:** `blog-winnipeg-48-hour-itinerary.html` — "Winnipeg in 48 hours: a
  first-timer's itinerary". A city-wide guide (not Corydon-anchored, per the
  topic-breadth rule: two of the last four published posts were Corydon-anchored,
  so this run picked a general-Winnipeg topic) covering The Forks, the Exchange
  District, an evening choice between Osborne Village and Corydon Avenue, and a
  day-two museum/park plus St. Boniface. Registered in `articles-data.js` and
  `sitemap.xml`, and moved from Queue to Used in `post-ideas.md`. Used the
  previously-unused local photo `images/guidebook-winnipeg-39-the-forks.jpg` as
  the hero image (a real photo of The Forks Market and riverfront, the
  itinerary's first stop).

---

## 2026-08-19 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-14:
  - Saperavi Georgian Cuisine (709 Corydon Ave) — confirmed open, active site and
    social presence, posted hours.
  - Starbucks (946 Corydon Ave) — confirmed open, active hours and a current
    Starbucks careers listing for this store.
  - Sugar + Salt Bakeshoppe (897 Corydon Ave) — confirmed open, active site and
    posted hours.
  - Sunshine Chinese Restaurant (635 Corydon Ave) — remains closed; its own
    website confirms a permanent closure. Already absent from
    `blog-corydon-guide.html` from an earlier run, so no page edit was needed.
  - `last_verified` set to 2026-08-19 for all four in `business-ledger.json`; no
    status changes.
- **New post:** `blog-st-boniface-walking-guide.html` — "A walking guide to St.
  Boniface, Winnipeg's French Quarter". A city-wide guide (not Corydon-anchored)
  covering the Esplanade Riel pedestrian bridge, the St. Boniface Cathedral
  ruins, Louis Riel's grave, Provencher Boulevard, and the Saint-Boniface
  Museum. Registered in `articles-data.js` and `sitemap.xml`, and moved from
  Queue to Used in `post-ideas.md`. Used `images/forks-river.jpg` (a real
  Red River photo already on the site) as the hero image: no local photo is
  specific to St. Boniface, and this run's network sandbox could not reach
  `unsplash.com` or `images.unsplash.com` to verify a working fallback URL, so
  a verifiable local image was used instead of risking a broken Unsplash link
  on a guest-facing page.

---

## 2026-08-18 (manual, site-wide redesign)

Out-of-band design pass by request; not a scheduled cron run. The site carried
most of the visual and verbal signatures that make a page read as
machine-generated, so the design was rebuilt around them while staying modern.

- **Removed the tells.** All 30 gradients, 60 box-shadows, every non-pin
  border-radius, all backdrop-filter blur, and every hover lift/scale are gone
  from `styles.css`, `blog-styles.css`, and `tours-styles.css`. Also removed:
  the sparkle glyphs in the logo, H1, footer links and tours heading; the
  centred section title with a teal underline bar; the italic centred tagline;
  the decorative section accent bars; the burnt-orange radial orb behind the
  map; the coloured left stripes on callouts; the pulsing floating CTA; the
  emoji feature and amenity icons; the checkmark bullets; and the animated
  "Read Article" arrow.
- **New design language.** Warm paper ground (`--paper` #F2EFE8) with warm-black
  ink and a single sienna accent, replacing the Tailwind slate palette. Flat
  tonal bands separated by hairlines instead of tinted gradients. Square
  corners, hairline borders, left-aligned headings, and a real reading measure.
  Feature and amenity blocks became editorial lists with set numerals rather
  than three shadowed cards in a row.
- **Typography.** Fraunces for headings and Libre Franklin for body, replacing
  Manrope plus an unused Playfair Display link (the same two font requests as
  before, one of which was previously wasted).
- **Copy.** Removed 1,103 decorative emoji and all 909 em dashes across 117
  pages, repunctuating rather than leaving comma splices behind (a comma before
  an independent clause became a semicolon). The five remaining emoji are a
  guest's own words inside two real reviews, left alone. Rewrote the "it isn't
  just X, it's Y" construction on the homepage and the three flagship
  neighbourhood posts.
- **Added `terms.html` and `privacy.html`**, linked from a rebuilt three-column
  footer and registered in `sitemap.xml`. The privacy page describes what the
  site actually does: no forms, no accounts, GA4 plus Google Fonts, unpkg,
  Unsplash, OpenStreetMap and the Viator affiliate widget.
- **Verified.** axe-core (WCAG 2.1 AA) reports zero violations on the homepage,
  blog index, an article page, the tours page, and both new legal pages; every
  palette pair in use meets AA contrast. Minified CSS regenerated, and the
  minifier now parses all three stylesheets without warnings (an orphaned
  keyframe fragment was cleaned up).
- **Playbook.** `AGENT-INSTRUCTIONS.md` gained a "House style" section so the
  daily cron does not reintroduce emoji meta lines, em dashes, gradients,
  rounded corners, or the old fonts in tomorrow's post.
- **Not done:** the "it isn't just X, it's Y" construction still appears 127
  times across 51 older blog posts. Mass-rewriting those with a script would have
  produced worse prose than leaving them, so they are flagged rather than
  changed. The tours page hero image is still described as a "cityscape and
  skyline", which the playbook's own image rule prohibits.

---

## 2026-08-17 (manual — content policy + SEO breadth)

Out-of-band maintenance run by request; not a scheduled cron run.

- **Post removed:** `blog-pet-friendly-spots-near-corydon-airbnb.html` (published
  2026-08-16) deleted. The property does not accept pets, so the post
  misrepresented the stay. Its entries were removed from `articles-data.js` and
  `sitemap.xml`; it was never referenced in `blog.html`, which renders from
  `articles-data.js`.
- **Standing policy added:** `AGENT-INSTRUCTIONS.md` now opens with a hard
  content rule — never publish pet-friendly content of any kind (no dogs, dog
  parks, off-leash areas, leash bylaws, pet-friendly patios, pet keywords or
  amenity claims), never queue such an idea, and never recreate the removed
  post under another slug. Repeated in the Guardrails section and in
  `post-ideas.md`.
- **Incorrect pet claims corrected elsewhere:**
  - `llms.txt` — "Pet-friendly (dogs welcome)" replaced with an explicit no-pets
    line, and the "pet-friendly accommodation" audience line rewritten. These
    were factually wrong about the listing.
  - `blog-crescentwood-liveable.html` — the "Pet-Friendly (80%)" neighbourhood
    livability bullet replaced with a walkability bullet.
  - Left as-is (incidental and non-promotional): the service-animals-only note
    about a third-party market in `blog-winnipeg-farmers-markets-guide.html`,
    passing scene-setting mentions of people walking dogs in
    `blog-peanut-park.html` and `blog-crescentwood-liveable.html`, and a guest's
    own wording in a real review on `index.html`.
- **SEO breadth:** the archive had drifted to Airbnb-proximity framing — all 15
  of the most recent posts were slugged around Corydon or "near the Corydon
  Airbnb", which targets a search term with almost no volume. Added a "Topic
  breadth" section to Part 2 of the playbook: write general Winnipeg guides by
  default, at most one post in four may be anchored to Corydon/Crescentwood, no
  defaulting to `-near-corydon-airbnb` slugs, rotate across neighbourhoods,
  seasons and intents, vary the target keyword, and keep the listing to one
  short closing paragraph.
- **Queue refilled:** `post-ideas.md` had an empty queue (the cron had been
  inventing topics for ten straight runs, which is what produced the drift and
  the pet post). Seeded 30 city-wide Winnipeg ideas spanning St. Boniface,
  Wolseley, the North End, Chinatown, museums, performing arts, cycling,
  seasonal guides, and day trips to Grand Beach, Oak Hammock Marsh and Riding
  Mountain.

---

## 2026-08-18

- **Businesses verified:** 4 of 20 (rotation batch, all tied for stalest at
  2026-08-13). Peking Chinese Food Ltd. (840 Corydon Ave), Cafe 22 (823
  Corydon Ave), Saffron's Restaurant (681 Corydon Ave), and Santa Lucia Pizza
  (905 Corydon Ave) — all confirmed open via current listings, active
  official sites, and recent reviews (Peking has an 11-review Yelp listing
  updated July 2026; Cafe 22 shows an August 2026-updated Yelp listing).
  No closures, moves, or renames found; no page corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-grove-pub-near-corydon-airbnb.html` — "A
  pint at The Grove Pub, a short walk from the Corydon Airbnb." The
  post-ideas queue was empty, so this topic was invented per the playbook:
  a guest guide to The Grove Pub & Restaurant (164 Stafford Street), a
  gastropub confirmed open and a short walk from the Airbnb, just off
  Corydon Avenue in Crescentwood. Registered in `articles-data.js` and
  `sitemap.xml`, using the existing local `guidebook-winnipeg-09-the-grove-
  pub-restaurant.jpg` image.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Saperavi Georgian Cuisine, Starbucks, Sugar +
  Salt Bakeshoppe, Sunshine Chinese Restaurant), all dated 2026-08-14.

---

## 2026-08-17

- **Businesses verified:** 4 of 20 (rotation batch, all tied for stalest at
  2026-08-12). Passero Restaurant (774 Corydon Ave), Forgotten Flavours (858
  Corydon Ave), Colosseo Ristorante Italiano (670 Corydon Ave), and Bar
  Italia (737 Corydon Ave) — all confirmed open via current listings, active
  official/social pages, and recent reviews (Passero and Colosseo both have
  2026-dated reviews). No closures, moves, or renames found; no page
  corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-forgotten-flavours-wild-yeast-bakery-near-corydon-airbnb.html`
  — "Forgotten Flavours: the wild-yeast bakery near the Corydon Airbnb"
  (queue was empty; invented per playbook). A single-business feature on the
  wild-yeast/long-fermentation bakery at 858 Corydon Ave (one of this run's
  verified businesses), covering what "wild yeast" means, what's typically
  in the case, and a note to check their site/Instagram for that day's hours
  rather than assuming. Uses the existing `guidebook-winnipeg-31-forgotten-flavours.jpg`
  bakery-case photo. Registered in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Peking Chinese Food Ltd., Cafe 22, Saffron's
  Restaurant, Santa Lucia Pizza), all still dated 2026-08-13.

---

## 2026-08-16

- **Businesses verified:** 4 of 20 (rotation batch, all tied for stalest at
  2026-08-11). Thom Bargen Coffee Roasters (743 Corydon Ave), Tim Horton's
  (949 Corydon Ave), Tommy's Pizzeria (842 Corydon Ave), and Wako Sushi Café
  (875 Corydon Ave) — all confirmed open via current listings, active
  official/social pages, and 2026-dated reviews. No closures, moves, or
  renames found; no page corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-pet-friendly-spots-near-corydon-airbnb.html`
  — "Pet-friendly spots near the Corydon Airbnb" (queue was empty; invented
  per playbook). Covers on-leash walking routes from the Airbnb (Peanut
  Park, the Wellington Crescent loop), a summary of the City of Winnipeg's
  Responsible Pet Ownership By-law leash requirements, the nearest official
  off-leash dog area (King's Park, per the City of Winnipeg parks page), and
  a general note that Corydon patio pet policies vary by business. Registered
  in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Passero Restaurant, Forgotten Flavours, Colosseo
  Ristorante Italiano, Bar Italia), all still dated 2026-08-12.

---

## 2026-08-15

- **Businesses verified:** 4 of 20 (rotation batch, all tied for stalest at
  2026-08-10). Sushi Ya (659 Corydon Ave), The Cheesemongers Fromagerie (839
  Corydon Ave), The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave), and The
  Roost (651 Corydon Ave) — all confirmed open via current listings, active
  official sites/social pages, and recent reviews. No closures, moves, or
  renames found; no page corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-wellington-crescent-walk-near-corydon-airbnb.html`
  — "A walk from the Corydon Airbnb to Wellington Crescent." A free walking
  (or biking) route from the Airbnb north through Crescentwood to the
  Wellington Crescent historic district along the Assiniboine River, with a
  pointer to extend toward Assiniboine Park. Sourced from current listings on
  the Wellington Crescent Historic District and Crescentwood neighbourhood
  boundaries; no business hours/prices involved. Queue in `post-ideas.md` was
  empty, so this topic was invented per the playbook and logged under "Used."
  Registered in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Thom Bargen Coffee Roasters, Tim Horton's,
  Tommy's Pizzeria, Wako Sushi Café), all still dated 2026-08-11.

---

## 2026-08-14

- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-08-09). Saperavi Georgian Cuisine (709 Corydon Ave),
  Starbucks (946 Corydon Ave), and Sugar + Salt Bakeshoppe (897 Corydon Ave)
  all confirmed open via current 2026-dated listings, official/ordering
  sites, and reviews (Tourism Winnipeg, Yellow Pages, order.online,
  Facebook, Instagram, the bakeshoppe's own site). Sunshine Chinese
  Restaurant (635 Corydon Ave) — already marked closed in the ledger —
  remains closed; found no evidence of reopening or a new tenant at that
  address (Yelp/Tripadvisor/Facebook listings reference the closure
  announcement, no 2026 openings found for 635 Corydon Ave). No new
  closures, moves, or renames found this run.
- **Pages updated:** none. All four checked businesses remain accurately
  listed (or correctly absent, in Sunshine Chinese's case — it was already
  removed from `blog-corydon-guide.html` in a prior run) on
  `blog-corydon-guide.html`.
- **New post published:** `blog-thermea-spa-day-near-corydon-airbnb.html` —
  "A spa day near the Corydon Airbnb: Thermëa Spa Village." The
  post-ideas queue was empty, so this is an invented, guest-relevant topic
  per the playbook: a Nordic-style hot-cold-relax spa (775 Crescent Drive,
  ~15-20 min drive/rideshare from Corydon) as a plan-ahead half-day trip for
  guests. Sourced from Yelp, Tripadvisor, and thermea.com-referencing
  listings for address, hours pattern, and reservation/village-code
  requirements; direct fetch of thermea.com was blocked by network egress
  in this environment, so guests are pointed to the official site for
  current hours/rates rather than having specific numbers stated in the
  post. Hero image uses `guidebook-winnipeg-41-thermea-spa-village-winnipeg.jpg`
  (a real photo of the spa village entrance, not previously used as a post
  hero). Registered in `articles-data.js` and `sitemap.xml`; logged in
  `post-ideas.md` under "Used."
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Sushi Ya, The Cheesemongers Fromagerie, The
  Mighty Kiwi Juice Bar & Eatery, and The Roost — all dated 2026-08-10.

---

## 2026-08-13

- **Housekeeping:** Local `main` was again left on a detached HEAD, 8 commits
  behind `origin/main` (same recurring pattern noted in every prior run — HEAD
  was already at the same commit as `origin/main`, only the `main` branch ref
  itself was stale). Checked out `main` and fast-forwarded to `origin/main`
  before starting — no content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-08-08). Peking Chinese Food Ltd. (840 Corydon Ave), Cafe 22
  (823 Corydon Ave), Saffron's Restaurant (681 Corydon Ave), and Santa Lucia
  Pizza (905 Corydon Ave) all confirmed open via current 2026-dated listings,
  official sites, and reviews (Yelp, Tripadvisor, OpenTable, official
  restaurant sites, order.online/DoorDash). One stale directory (foodpages.ca)
  flagged Peking Chinese Food as "out of business," but this is contradicted
  by multiple higher-confidence, 2026-dated sources (Yelp, Tripadvisor, two
  live ordering sites, active DoorDash listing) so it was treated as a stale
  directory entry, not a real closure. No closures, moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-renting-a-bike-near-corydon-airbnb.html` —
  "Renting a bike near the Corydon Airbnb." The post-ideas queue was empty,
  so this is an invented, guest-relevant topic per the playbook: Winnipeg has
  no citywide dockless bike-share, so guests without their own bike need to
  know where to rent one. Covers Plain Bicycle's two locations (Bicycle
  Garden at 267 Sherbrook St, and a seasonal kiosk at The Forks), sourced
  from Yelp, plainbicycle.org, and business listings; hours/rates are pointed
  to the official site and phone number rather than stated precisely, since
  sources showed minor variance. Links to the existing Corydon-to-Forks bike
  route post and the transit-basics post rather than duplicating their
  content. Hero image uses `guidebook-winnipeg-51-plain-bicycle-bicycle-garden.jpg`
  (a real photo of the Bicycle Garden storefront, not previously used as a
  post hero) — chosen over an Unsplash fallback because network egress in
  this environment blocks fetching unsplash.com, so a stock photo ID could
  not be verified as a real, working image; the local photo avoided that risk
  entirely. Registered in `articles-data.js` and `sitemap.xml`; logged in
  `post-ideas.md` under "Used."
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Saperavi Georgian Cuisine, Starbucks, Sugar +
  Salt Bakeshoppe, and Sunshine Chinese Restaurant (already marked closed in
  the ledger from a prior run) — all dated 2026-08-09.

---

## 2026-08-12

- **Housekeeping:** Local `main` was again left on a detached HEAD, 7 commits
  behind `origin/main` (same recurring pattern noted in every prior run).
  Checked out `main` and fast-forwarded to `origin/main` before starting — no
  content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-08-07). Passero Restaurant (774 Corydon Ave), Forgotten
  Flavours (858 Corydon Ave), Colosseo Ristorante Italiano (670 Corydon Ave),
  and Bar Italia (737 Corydon Ave) all confirmed open via current listings,
  active official sites/ordering pages, and reviews dated through 2026 (Yelp,
  Tripadvisor, Tourism Winnipeg, findmeglutenfree.com, forgottenflavours.ca,
  colosseo.ca, order.online). No closures, moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-wine-beer-spirits-near-corydon-airbnb.html` —
  "Where to pick up wine, beer, or spirits near the Corydon Airbnb." The
  post-ideas queue was empty, so this is an invented, guest-relevant topic
  per the playbook: Manitoba sells alcohol through government Liquor Marts
  and private vendors rather than grocery/convenience stores, which is
  unfamiliar to many out-of-town guests. Covers the two nearest Liquor Marts
  verified this run — River & Osborne Liquor Mart (469 River Ave, Osborne
  Village) and Grant Park Liquor Mart (1120 Grant Ave, the largest in the
  province) — sourced from liquormarts.ca retailer listings and Tourism
  Winnipeg. No specific hours were claimed for either store since current
  hours weren't confirmed this run; the post instead points guests to
  liquormarts.ca and notes hours can be shorter on Sundays/holidays. Hero
  image uses `guidebook-winnipeg-24-grant-park-liquor-mart.jpg` (a real photo
  of one of the featured stores, not previously used as a post hero).
  Registered in `articles-data.js` and `sitemap.xml`; logged in
  `post-ideas.md` under "Used."
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Peking Chinese Food Ltd., Cafe 22, Saffron's
  Restaurant, and Santa Lucia Pizza — all dated 2026-08-08.

---

## 2026-08-11 (reviews update, interactive session)

- **Guest reviews:** User pasted the five most recent Airbnb reviews
  (Christine Aug 6–9, Joanna Jul 30–Aug 6, Patricia Jul 23–30, Bradford
  Jul 14–19, Dominic Jun 30–Jul 12; all 5 stars). Patricia, Bradford, and
  Dominic were already in the `index.html` JSON-LD from the previous
  update; added Christine (2026-08-09) and Joanna (2026-08-06) to the top
  of the review array with full review text.
- **Review count:** 108 -> 110 in all locations per the llms.txt
  convention: JSON-LD `aggregateRating.reviewCount`, meta / OG / Twitter
  descriptions, and body copy across `index.html`, `blog.html`,
  `blog-corydon-cute-stylish-winnipeg-airbnb.html`, `articles-data.js`,
  and `articles_data.json`. Grep confirmed no stale "108" remained;
  JSON-LD blocks validated as parseable JSON.
- **Commit:** `acd040e`, pushed to `origin/main`.
- **Notes:** The Airbnb listing widget shows 86 reviews while the site
  advertises 110; the site count aggregates beyond the current Airbnb
  listing (prior update went 103 -> 108 the same way), so the convention
  of incrementing per new review was preserved. Next reviews on the
  listing after Dominic's are already covered; the next update only
  needs reviews newer than Christine's (checkout 2026-08-09).

---

## 2026-08-11

- **Housekeeping:** Local `main` was again left on a detached HEAD, 4 commits
  behind `origin/main`. Checked out `main` and fast-forwarded to
  `origin/main` before starting — no content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-08-02). Thom Bargen Coffee Roasters (743 Corydon Ave), Tim
  Horton's (949 Corydon Ave), Tommy's Pizzeria (842 Corydon Ave), and Wako
  Sushi Café (875 Corydon Ave) all confirmed open via current listings,
  official sites, and reviews dated through 2026 (Yelp, Tourism Winnipeg,
  order.online, thombargen.com, timhortons.ca location page, tommys.pizza).
  No closures, moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-sunday-on-corydon-avenue.html` — "What's
  open on Corydon Avenue on a Sunday." The post-ideas queue was empty, so
  this is an invented, guest-relevant topic per the playbook, built from
  Sunday-specific hours sourced during this run's business checks: Thom
  Bargen (~8am–9pm Sunday), Tim Horton's (~6am–11pm Sunday), and Tommy's
  Pizzeria (open Sunday, roughly noon onward, with a note to call ahead
  since listed closing times vary by source). Also flags that Wako Sushi
  Café is closed Sundays (confirmed this run) so guests don't show up
  expecting it. No specific hours were claimed for any business without a
  source found this run. Hero image uses
  `guidebook-winnipeg-05-thom-bargen-coffee-roasters.jpg` (a real photo of
  the featured business, previously used only once). Registered in
  `articles-data.js` and `sitemap.xml`; logged in `post-ideas.md` under
  "Used."
- **Notes:** Next rotation batch will pick up the four now-stalest
  remaining Corydon guide businesses — Passero Restaurant, Forgotten
  Flavours, Colosseo Ristorante Italiano, and Bar Italia — all dated
  2026-08-07.

---

## 2026-08-10

- **Housekeeping:** Local `main` was again left on a detached HEAD (same
  recurring pattern noted in every prior run), 3 commits behind
  `origin/main`. Checked out `main` and fast-forwarded to `origin/main`
  before starting — no content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining
  cohort, all dated 2026-08-06). Sushi Ya (659 Corydon Ave), The
  Cheesemongers Fromagerie (839 Corydon Ave), The Mighty Kiwi Juice Bar &
  Eatery (709 Corydon Ave), and The Roost (651 Corydon Ave) all confirmed
  open via current listings, active official sites, and recent reviews
  (order.online, Yelp current to May–July 2026, Tourism Winnipeg, each
  business's own site, and DoorDash for Sushi Ya). No closures, moves, or
  renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-work-remotely-near-corydon-airbnb.html` —
  "Where to work remotely near the Corydon Airbnb." The post-ideas queue
  was empty, so this is an invented, guest-relevant topic per the
  playbook, distinct from the existing coffee-focused post (which covers
  drink quality, not laptop-friendliness). Covers Thom Bargen Coffee
  Roasters (confirmed via multiple laptop-friendly-cafe directories as
  offering free Wi-Fi, outlets, and extended hours), Cafe 22 (confirmed
  free Wi-Fi and long daily hours via its own listings), and Cornish
  Library as a quiet, no-purchase-required backup (confirmed free Wi-Fi
  and bookable computers via the City of Winnipeg's own library pages),
  with a note that library hours shift seasonally and to check before
  heading over. No Wi-Fi/seating claims made for businesses without
  supporting sources (e.g. Forgotten Flavours was considered but dropped
  — no evidence found either way for laptop-friendly seating). Hero image
  uses the previously-once-used local photo `coffee-cafe.jpg` rather than
  either Thom Bargen photo (both already used twice elsewhere).
  Registered in `articles-data.js` and `sitemap.xml`; logged in
  `post-ideas.md` under "Used."
- **Notes:** Next rotation batch will pick up the four now-stalest
  remaining Corydon guide businesses — Thom Bargen Coffee Roasters, Tim
  Horton's, Tommy's Pizzeria, and Wako Sushi Café — all dated 2026-08-02.

---

## 2026-08-09

- **Housekeeping:** Local `main` was left on a detached HEAD again (same
  recurring pattern noted in prior runs), 2 commits behind `origin/main`.
  Checked out `main` and fast-forwarded to `origin/main` before starting —
  no content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-08-05). Saperavi Georgian Cuisine (709 Corydon Ave),
  Starbucks (946 Corydon Ave), and Sugar + Salt Bakeshoppe (897 Corydon Ave)
  all confirmed open via current listings, official sites, and recent
  reviews (Yelp current to May–July 2026, order.online, Tourism Winnipeg,
  each business's own site). Sunshine Chinese Restaurant (635 Corydon Ave,
  already flagged `closed` from an earlier run) was re-checked and remains
  closed — its own former website now shows a permanent closure message.
  No new closures, moves, or renames found this run.
- **Pages updated:** none. Saperavi, Starbucks, and Sugar + Salt remain
  accurately listed on `blog-corydon-guide.html`; Sunshine Chinese
  Restaurant remains correctly omitted from that page (already removed in
  an earlier run).
- **New post published:** `blog-date-night-on-corydon-avenue.html` — "A
  date night on Corydon Avenue near the Airbnb." The post-ideas queue was
  empty, so this is an invented, guest-relevant topic per the playbook.
  Covers dinner options using already-verified ledger businesses (Bar
  Italia, Passero Restaurant, Colosseo Ristorante Italiano, and Saperavi
  Georgian Cuisine as a non-Italian alternative, including Saperavi's
  Tue–Sun hours sourced this run), a note on booking ahead for weekend
  patio season, and a nightcap recommendation at The Roost (651 Corydon
  Ave, previously sourced official site). Considered a wine-bar-crawl
  angle instead, but dropped it after research showed Enoteca (1670
  Corydon Ave) may itself be closed per a flagged Yelp listing and Ellement
  Wine & Spirits is actually at The Forks, not Corydon — neither was used,
  to avoid stating anything unverified. No hours or prices invented for
  any business not directly sourced. Hero image uses the previously
  unused local photo `wine-dining.jpg` (a plated dinner with wine glasses),
  which fits the date-night subject without claiming to depict any one
  specific restaurant's interior. Registered in `articles-data.js` and
  `sitemap.xml`; logged in `post-ideas.md` under "Used."
- **Notes:** Next rotation batch will pick up the four now-stalest
  remaining Corydon guide businesses — Sushi Ya, The Cheesemongers
  Fromagerie, The Mighty Kiwi Juice Bar & Eatery, and The Roost — all
  dated 2026-08-06.

---

## 2026-08-08

- **Housekeeping:** Local `main` was again left on a detached HEAD, 1 commit
  ahead of local `main`'s branch pointer but already matching `origin/main`
  (same recurring pattern as prior runs). Checked out `main` and
  fast-forwarded to `origin/main` before starting — confirmed no content was
  lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-08-04). Peking Chinese Food Ltd. (840 Corydon Ave), Cafe 22
  (823 Corydon Ave), Saffron's Restaurant (681 Corydon Ave), and Santa Lucia
  Pizza (905 Corydon Ave) all confirmed open via current listings, active
  official sites, and recent reviews (Yelp current to July/August 2026,
  Tourism Winnipeg, OpenTable, each business's own website). No closures,
  moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-beat-the-heat-near-corydon-airbnb.html` —
  "Beating the summer heat near the Corydon Airbnb." The post-ideas queue was
  empty (drained as of the 2026-08-07 run), so this is an invented,
  guest-relevant seasonal topic per the playbook. Covers cold drinks on
  Corydon Avenue using already-verified ledger businesses (Thom Bargen
  Coffee Roasters for iced coffee/cold brew, The Mighty Kiwi Juice Bar &
  Eatery for smoothies/juice, Sugar + Salt Bakeshoppe for a treat to go), an
  air-conditioned option (The Leaf at Assiniboine Park — climate-controlled
  biomes confirmed open daily 9am–9pm this summer via the Assiniboine Park
  Conservancy's official hours page, with a note that hours/pricing can
  change seasonally and a link to check current details), and shaded green
  space nearby (Assiniboine Park's tree canopy/riverbank paths, Enderton
  Park/Peanut Park's shade trees), cross-linking the existing
  `blog-assiniboine-park.html` and `blog-peanut-park.html` guides. No hours
  or prices invented for any business not directly sourced. Hero image
  reuses the already-published local photo `assiniboine-park.jpg` (a shaded
  pergola), which fit the subject better than any unused local option.
  Registered in `articles-data.js` and `sitemap.xml`; logged in
  `post-ideas.md` under "Used."
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Saperavi Georgian Cuisine, Starbucks,
  Sugar + Salt Bakeshoppe, and Sunshine Chinese Restaurant (currently listed
  `status: closed` from a prior run and due for re-verification) — all dated
  2026-08-05.

---

## 2026-08-07

- **Housekeeping:** Local `main` was already up to date with `origin/main` and
  the working tree was clean before starting — no fast-forward needed.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-08-03). Passero Restaurant (774 Corydon Ave), Forgotten
  Flavours (858 Corydon Ave), Colosseo Ristorante Italiano (670 Corydon Ave),
  and Bar Italia (737 Corydon Ave) all confirmed open via current listings,
  active official sites, and recent reviews (Yelp current to July 2026,
  Tourism Winnipeg, Instagram, each business's own website). No closures,
  moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-best-breakfast-brunch-near-corydon-airbnb.html`
  — "Best breakfast and brunch within walking distance of the Corydon Airbnb."
  Covers Thom Bargen Coffee Roasters (coffee + pastry, open early daily),
  The Mighty Kiwi Juice Bar & Eatery (smoothies/juice, weekday mornings),
  French Way Café (238 Lilac St, a French breakfast/brunch menu 8am–3pm
  Tue–Sat and 9am–3pm Sun), Stella's Café & Bakery (Corydon-area location,
  linked to their official locations page rather than a specific address,
  since search sources gave conflicting street numbers for that branch), and
  Sugar + Salt Bakeshoppe (later-morning bakery stop, noted as opening at
  11am weekdays / 10am Saturdays and closed Sun–Mon). All hours sourced from
  current listings/official sites found during research; no prices stated.
  This was the last idea in the post-ideas queue (now empty — next run will
  need to invent a comparable topic per the playbook). Hero image uses the
  previously-unused local photo `guidebook-winnipeg-08-french-way-caf.jpg`.
  Registered in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Peking Chinese Food Ltd., Cafe 22, Saffron's
  Restaurant, and Santa Lucia Pizza — all dated 2026-08-04.

---

## 2026-08-06

- **Housekeeping:** Local `main` was again on a detached HEAD, 6 commits behind
  `origin/main`. Checked out `main` and fast-forwarded to `origin/main` before
  starting — confirmed no content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-08-01). Sushi Ya (659 Corydon Ave), The Cheesemongers
  Fromagerie (839 Corydon Ave), The Mighty Kiwi Juice Bar & Eatery (709
  Corydon Ave), and The Roost (651 Corydon Ave) all confirmed open via
  current listings, active official sites, and recent reviews (DoorDash/
  SkipTheDishes ordering pages, Tourism Winnipeg, Yelp with 2026 updates,
  and each business's own website). No closures, moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-osborne-village-vs-corydon-evening-compared.html`
  — "Osborne Village vs Corydon: an evening out compared." Contrasts the two
  neighbourhoods' evening character (Corydon: sit-down, unhurried, patio and
  cocktail-bar pace; Osborne Village: denser bar/restaurant district with
  more late-night options), using only already-verified Corydon businesses
  (The Roost, Bar Italia, Passero) plus well-established, multiply-sourced
  Osborne Village venues (The Toad in the Hole Pub, Zaytoon) — no hours or
  prices stated for any of them. Cross-links to the existing
  `blog-osborne-village-corydon-evening-guide.html` (a same-evening combo
  route) so the two posts stay complementary rather than duplicative, since
  that page already covers combining both areas in one night. Hero image
  reuses the already-verified `guidebook-winnipeg-03-the-roost-on-corydon.jpg`
  local photo. This was the next idea in the post-ideas queue. Registered in
  `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Passero Restaurant, Forgotten Flavours,
  Colosseo Ristorante Italiano, and Bar Italia — all dated 2026-08-03.

---

## 2026-08-05

- **Housekeeping:** Local `main` was again left on a detached HEAD, 5 commits
  behind `origin/main` (same recurring pattern as prior runs). Fetched
  `origin/main`, checked out `main`, and fast-forwarded before starting —
  confirmed no content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort,
  all dated 2026-07-31). Saperavi Georgian Cuisine (709 Corydon Ave),
  Starbucks (946 Corydon Ave), and Sugar + Salt Bakeshoppe (897 Corydon Ave)
  all confirmed open via current listings, active official sites/social
  pages, and recent reviews. Sunshine Chinese Restaurant (635 Corydon Ave)
  was re-confirmed closed (its own Facebook page posts a permanent-closure
  notice); it was already removed from `blog-corydon-guide.html` in a prior
  run, so `status: closed` in the ledger is correct and no further page edit
  was needed.
- **Pages updated:** none. All four checked businesses are already accurately
  reflected on `blog-corydon-guide.html`.
- **New post published:** `blog-cozy-winter-warm-up-spots-near-corydon-airbnb.html`
  — "Cozy winter warm-up spots near the Corydon Airbnb." Covers Thom Bargen
  Coffee Roasters, Saperavi Georgian Cuisine, and Sugar + Salt Bakeshoppe, all
  already-verified Corydon guide businesses; no hours, prices, or event dates
  invented. This was the next idea in the post-ideas queue; content is written
  as an evergreen winter guide rather than tied to today's (summer) publish
  date. Registered in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Sushi Ya, The Cheesemongers Fromagerie, The
  Mighty Kiwi Juice Bar & Eatery, and The Roost — all dated 2026-08-01.

---

## 2026-08-04

- **Housekeeping:** Local `main` was left on a detached HEAD matching an older
  commit (same recurring pattern as prior runs). Fetched `origin/main`,
  checked out `main`, and fast-forwarded to `origin/main` before starting —
  confirmed no content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort).
  Peking Chinese Food Ltd. (840 Corydon Ave), Cafe 22 (823 Corydon Ave),
  Saffron's Restaurant (681 Corydon Ave), and Santa Lucia Pizza (905 Corydon
  Ave) all confirmed open via current listings and reviews (Yelp updated as
  recently as July/August 2026, active official sites, Tourism Winnipeg,
  OpenTable) with no closures, moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-farmers-market-near-corydon-airbnb.html` —
  "Seasonal produce and the nearest farmers' market to the Corydon Airbnb."
  Covers the River Heights Farmers' Market (1370 Grosvenor Ave, Fridays
  12–5pm, July 3–September 25, 2026, run by the Corydon Community Centre),
  a short trip from the Corydon strip and corroborated across multiple
  independent sources (Tourism Winnipeg, Direct Farm Manitoba, Corydon
  Community Centre). Also notes general August produce availability in
  Manitoba (corn, tomatoes, peppers, beans, cucumbers, berries) without
  inventing vendor-specific details, and links out to the existing
  `blog-winnipeg-farmers-markets-guide.html` (St. Norbert / Downtown BIZ)
  for guests wanting a bigger market trip, so the two posts stay
  complementary rather than duplicative. Hero image reuses the
  already-verified Unsplash produce-stall photo from that existing post,
  since this environment's network policy blocked outbound fetches to
  image hosts (`images.unsplash.com` CONNECT returned 403) and a new,
  unverified image URL was judged too risky to ship. Registered in
  `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Saperavi Georgian Cuisine, Starbucks,
  Sugar + Salt Bakeshoppe, and Sunshine Chinese Restaurant (currently listed
  `status: closed` from a prior run and due for re-verification) — all dated
  2026-07-31.

---

## 2026-08-03

- **Housekeeping:** Local `main` branch pointer was stale (behind `origin/main`
  by the 2026-07-31/08-01/08-02 commits, which were on a detached HEAD from a
  prior run). Fetched `origin/main`, checked out `main`, and fast-forwarded —
  all three prior commits were already pushed and matched origin; no content
  was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort).
  Passero Restaurant (774 Corydon Ave), Forgotten Flavours (858 Corydon Ave),
  Colosseo Ristorante Italiano (670 Corydon Ave), and Bar Italia (737 Corydon
  Ave) all confirmed open via current listings (Yelp reviews current to July
  2026, active official sites, Tourism Winnipeg) with no closures, moves, or
  renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-budget-day-corydon-airbnb.html` — "A budget
  day out from the Corydon Airbnb." Covers a free park visit to Enderton Park
  (Peanut Park), a Little Free Library stop, budget-friendly coffee (Tim
  Horton's) and lunch (Santa Lucia Pizza, Peking Chinese Food) on Corydon
  Avenue, and a free walk through Little Italy — all sourced from
  already-verified ledger businesses and existing site content, and
  deliberately scoped to the Corydon strip (walking-distance, no
  transit/car needed) to stay distinct from the existing city-wide
  `blog-24-hour-winnipeg-budget.html` post. No specific prices were invented;
  readers are pointed to check current menu pricing. Registered in
  `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Peking Chinese Food Ltd., Cafe 22, Saffron's
  Restaurant, and Santa Lucia Pizza (all dated 2026-07-30).

---

## 2026-08-02

- **Housekeeping:** Local `main` was again left on a detached HEAD matching
  `origin/main` (same pattern as the 2026-08-01 run). Checked out `main`,
  fast-forwarded it to `origin/main`, and confirmed no content was lost
  before starting this run's work.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort).
  Thom Bargen Coffee Roasters (743 Corydon Ave), Tim Horton's (949 Corydon
  Ave), Tommy's Pizzeria (842 Corydon Ave), and Wako Sushi Café (875 Corydon
  Ave) all confirmed open via current listings and reviews (Yelp updated as
  recently as July 2026, active official sites/socials) with no closures,
  moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-winnipeg-transit-basics-getting-downtown-from-corydon.html`
  — "Winnipeg Transit basics: getting downtown from Corydon." Covers the
  Corydon-area bus route, the BLUE rapid transit line reachable from nearby
  Osborne Village via the Southwest Transitway, and how to pay a fare
  (peggo card / cash), with guests pointed to winnipegtransit.com and the
  Navigo trip planner for current route numbers and live schedules rather
  than hard-coding route numbers or timetables that could go stale. 2026
  cash fare ($3.45) was corroborated by two independent searches; more
  granular figures (exact peggo e-cash rate, specific route number) were
  left general since sources were inconsistent or referenced program-specific
  discounts. Registered in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses — Passero Restaurant, Forgotten Flavours,
  Colosseo Ristorante Italiano, and Bar Italia (all dated 2026-07-29).

---

## 2026-08-01

- **Housekeeping:** The 2026-07-31 run's commit had been made on a detached
  HEAD and never fast-forwarded onto `main` or pushed, so it was missing from
  the deployed site. Fast-forwarded local `main` to that commit before
  starting this run's work; confirmed it matched `origin/main` (already
  pushed) and no content was lost.
- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort).
  Sushi Ya (659 Corydon Ave), The Cheesemongers Fromagerie (839 Corydon Ave),
  The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave), and The Roost (651
  Corydon Ave) all confirmed open via current listings (Yelp updated as
  recently as July 2026, Tourism Winnipeg, active official sites) with no
  closures, moves, or renames found.
- **Pages updated:** none. All four checked businesses remain accurately
  listed on `blog-corydon-guide.html`.
- **New post published:** `blog-sweet-tooth-crawl-corydon-desserts.html` —
  "Sweet tooth crawl: bakeries, gelato, and dessert on Corydon." Covers
  Nucci's Gelati (643 Corydon Ave), Eva's Gelato & Coffee Bar (1001 Corydon
  Ave), and Sugar + Salt Bakeshoppe (897 Corydon Ave), with hours sourced
  from current listings during research. Deliberately left out Roll Cake
  Bakery & Dessert (753 Corydon Ave) after research showed it listed as
  closed, and FrenchWay Cafe & Bakery since its address (238 Lilac Street) is
  off Corydon Avenue itself. Registered in `articles-data.js` and
  `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four now-stalest remaining
  Corydon guide businesses (Thom Bargen Coffee Roasters, Tim Horton's,
  Tommy's Pizzeria, Wako Sushi Café — all dated 2026-07-28).

---

## 2026-07-31

- **Businesses verified:** 4 of 20 (rotation batch, oldest remaining cohort).
  Saperavi Georgian Cuisine (709 Corydon Ave), Starbucks (946 Corydon Ave),
  and Sugar + Salt Bakeshoppe (897 Corydon Ave) all confirmed open via
  current listings (Tourism Winnipeg, Yellow Pages, official sites/socials,
  Chamber of Commerce) with hours current as of July 2026. Sunshine Chinese
  Restaurant (635 Corydon Ave) reconfirmed closed — its own former website
  states "We Are Now Closed" — matching its existing `closed` status in the
  ledger.
- **Pages updated:** none. All three open businesses remain accurately
  listed on `blog-corydon-guide.html`; Sunshine Chinese Restaurant was
  already absent from the page from a prior run, so no further correction
  was needed.
- **New post published:** `blog-family-friendly-stops-near-corydon.html` —
  "Family-friendly stops within a short walk of the Corydon Airbnb." Covers
  Peanut Park's playground (11 Ruskin Row), a gelato/juice break (Eva's
  Gelato & Coffee Bar, Nucci's Gelati, The Mighty Kiwi Juice Bar), casual
  kid-friendly meals (Santa Lucia Pizza, Tommy's Pizzeria, Tim Horton's),
  and Little Free Libraries in the neighbourhood — all sourced from
  already-verified facts in the ledger and existing site content, with
  cross-links to the Peanut Park and Little Free Libraries guides.
  Registered in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four now-stalest
  remaining Corydon guide businesses (Sushi Ya, The Cheesemongers
  Fromagerie, The Mighty Kiwi Juice Bar & Eatery, The Roost — all dated
  2026-07-27).

---

## 2026-07-30

- **Businesses verified:** 4 of 20 (rotation batch, wrapping the rotation back
  to the second cohort). Peking Chinese Food Ltd. (840 Corydon Ave), Cafe 22
  (823 Corydon Ave), Saffron's Restaurant (681 Corydon Ave), and Santa Lucia
  Pizza (905 Corydon Ave) all confirmed open via current listings (Yelp,
  Tourism Winnipeg, active official sites/social pages) and reviews current
  as of July 2026. No closures, moves, or renames found; no page corrections
  needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-grocery-runs-near-corydon-airbnb.html` —
  "Grocery runs and quick essentials near the Corydon Airbnb." Covers 7-Eleven
  (781 Corydon Ave) for quick top-ups, The Cheesemongers Fromagerie (839
  Corydon Ave), Forgotten Flavours (858 Corydon Ave), and Sugar + Salt
  Bakeshoppe (897 Corydon Ave) for bread/deli basics, Safeway (655 Osborne St,
  Osborne Village) for a full grocery run, and Fair Havens Pharmacy (894
  Corydon Ave, weekdays only) for pharmacy needs. All addresses and hours
  confirmed via current listings during research. Registered in
  `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Saperavi Georgian Cuisine, Starbucks, Sugar +
  Salt Bakeshoppe, Sunshine Chinese Restaurant — note Sunshine is already
  marked closed in the ledger from the 2026-07-26 run), all dated 2026-07-26.

---

## 2026-07-29

- **Businesses verified:** 4 of 20 (rotation batch, wrapping the rotation back
  to the first cohort). Passero Restaurant (774 Corydon Ave), Forgotten
  Flavours (858 Corydon Ave), Colosseo Ristorante Italiano (670 Corydon Ave),
  and Bar Italia (737 Corydon Ave) all confirmed open via current listings
  (Yelp, Tourism Winnipeg, active official sites) and recent 2026 reviews. No
  closures, moves, or renames found; no page corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-little-italy-half-day-walking-loop.html` —
  "A first-timer's half-day walking loop of Little Italy." A there-and-back
  walking itinerary along Corydon Avenue from the Osborne end toward
  Cambridge, using only businesses already confirmed open in the ledger
  (The Roost, Sushi Ya, Colosseo, Thom Bargen Coffee Roasters, The
  Cheesemongers Fromagerie, Bar Italia, Passero, Sugar + Salt Bakeshoppe).
  Registered in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Peking Chinese Food Ltd., Cafe 22, Saffron's
  Restaurant, Santa Lucia Pizza), all dated 2026-07-25.

---

## 2026-07-28

- **Businesses verified:** 4 of 20 (rotation batch). Thom Bargen Coffee
  Roasters (743 Corydon Ave), Tim Horton's (949 Corydon Ave), Tommy's
  Pizzeria (842 Corydon Ave), and Wako Sushi Café (875 Corydon Ave) — all
  confirmed open via current listings, active official sites/social pages,
  and reviews updated as recently as July 2026. No closures, moves, or
  renames found; no page corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-late-night-bites-near-corydon.html` —
  "Late-night bites near Corydon after 10pm." Covers Santa Lucia Pizza
  (open until midnight/1am), Bar Italia (open until 2am nightly), The Roost
  (small plates until midnight/2am), and Tim Horton's (open until 11pm),
  all sourced from current listed hours found during research. Registered
  in `articles-data.js` and `sitemap.xml`.
- **Notes:** This rotation batch completes a full pass of all 20 ledger
  businesses (each now last_verified between 2026-07-24 and 2026-07-28).
  Next run will restart the rotation with the four now-stalest entries:
  Passero Restaurant, Forgotten Flavours, Colosseo Ristorante Italiano, and
  Bar Italia (774/858/670/737 Corydon Ave), all dated 2026-07-24.

---

## 2026-07-27

- **Businesses verified:** 4 of 20 (rotation batch). Sushi Ya (659 Corydon
  Ave), The Cheesemongers Fromagerie (839 Corydon Ave), The Mighty Kiwi
  Juice Bar & Eatery (709 Corydon Ave), and The Roost (651 Corydon Ave) —
  all confirmed open via current listings, active official sites/social
  pages, and reviews updated as recently as July 2026. No closures, moves,
  or renames found; no page corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-vegetarian-vegan-eats-corydon.html` —
  "Vegetarian and vegan eats around Corydon Village." Covers The Mighty
  Kiwi (fully plant-based menu), The Roost (vegetarian small plates), Bar
  Italia (vegetarian pizza), and Saperavi Georgian Cuisine (marked
  vegetarian dishes), all sourced from current menus/listings found during
  verification. Registered in `articles-data.js` and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Thom Bargen Coffee Roasters, Tim Horton's,
  Tommy's Pizzeria, Wako Sushi Café), all still dated 2026-07-23.

---

## 2026-07-26

- **Businesses verified:** 4 of 20 (rotation batch). Saperavi Georgian Cuisine
  (709 Corydon Ave), Starbucks (946 Corydon Ave), and Sugar + Salt Bakeshoppe
  (897 Corydon Ave) confirmed open via current official sites/listings and
  recent reviews. **Sunshine Chinese Restaurant (635 Corydon Ave) confirmed
  permanently closed** — its own site (winnipegsunshine.com) now shows a
  closure notice ("We Are Now Closed. Thank you for all the love, support,
  and memories over the years.").
- **Pages updated:** `blog-corydon-guide.html` — removed the Sunshine Chinese
  Restaurant listing from the restaurant list; updated modified dates. No new
  replacement business added (none identified that clearly fits the guide's
  scope and quality bar).
- **New post published:** `blog-rainy-afternoon-on-corydon.html` — "A rainy
  afternoon that never leaves Corydon Avenue." A stay-on-Corydon indoor plan
  (Cheesemongers Fromagerie, a sit-down Italian lunch, Thom Bargen coffee,
  Sugar + Salt dessert), deliberately distinct from the existing downtown
  museum-focused rainy-day post. Registered in `articles-data.js` and
  `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Sushi Ya, The Cheesemongers Fromagerie, The
  Mighty Kiwi Juice Bar & Eatery, The Roost), all still dated 2026-07-23.

---

## 2026-07-25

- **Businesses verified:** 4 of 20 (rotation batch). Peking Chinese Food Ltd.
  (840 Corydon Ave), Cafe 22 (823 Corydon Ave), Saffron's Restaurant (681
  Corydon Ave), and Santa Lucia Pizza (905 Corydon Ave) — all confirmed open
  via current listings, active official sites/social pages, and recent 2026
  reviews. No closures, moves, or renames found; no page corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-coffee-near-corydon-airbnb.html` — "Where to
  get coffee within a 10-minute walk of the Airbnb." Covers Thom Bargen
  Coffee Roasters, Forgotten Flavours, Sugar + Salt Bakeshoppe, Starbucks,
  and Tim Horton's, all sourced from the existing verified Corydon guide
  listing plus confirmed coffee offerings. Registered in `articles-data.js`
  and `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Saperavi Georgian Cuisine, Starbucks, Sugar +
  Salt Bakeshoppe, Sunshine Chinese Restaurant), all still dated 2026-07-23.

---

## 2026-07-24

- **Businesses verified:** 4 of 20 (rotation batch). Passero Restaurant (774
  Corydon Ave), Forgotten Flavours (858 Corydon Ave), Colosseo Ristorante
  Italiano (670 Corydon Ave), and Bar Italia (737 Corydon Ave) — all confirmed
  open via current listings, active official sites, and recent reviews. No
  closures, moves, or renames found; no page corrections needed.
- **Pages updated:** none (all four checked businesses remain accurate as
  listed on `blog-corydon-guide.html`).
- **New post published:** `blog-best-corydon-patios.html` — "Best patios on
  and near Corydon this season." Registered in `articles-data.js` and
  `sitemap.xml`.
- **Notes:** Next rotation batch will pick up the four stalest remaining
  Corydon guide businesses (Peking Chinese Food Ltd., Cafe 22, Saffron's
  Restaurant, Santa Lucia Pizza), all still dated 2026-07-23.

---

## 2026-07-23 (manual seed)

- **Businesses verified:** All 20 Corydon guide listings checked; all confirmed
  open, no closures. Added Forgotten Flavours (858 Corydon Ave), Colosseo
  Ristorante Italiano (670 Corydon Ave), and Bar Italia (737 Corydon Ave).
  Corrected bakeshop name to Sugar + Salt Bakeshoppe.
- **Pages updated:** `blog-corydon-guide.html` (restaurant list + modified dates).
- **New post published:** none (seed entry).
- **Notes:** Ledger seeded with last_verified 2026-07-23 for all 20 businesses.
  West-of-Cambridge spots (Né de Loup 1670, Naan Culture 1700) intentionally
  left out to keep the guide within its stated Osborne-to-Cambridge scope.
