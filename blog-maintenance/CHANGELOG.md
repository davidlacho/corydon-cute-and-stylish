# Blog maintenance changelog

Append-only log written by the daily blog-freshness cron. Newest entries on top.
Each run adds one dated block recording which businesses it verified, what
changed on the site, and which new post it published. The cron reads the most
recent entries to avoid repeating work.

---

## 2026-09-10 (cron)

- **Housekeeping:** local checkout started on a detached HEAD matching
  `origin/main` at `9c15782`. Checked out `main` and fast-forwarded to
  `origin/main` before starting; no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-06:
  - Peking Chinese Food Ltd. (840 Corydon Ave) — confirmed open. A Yelp
    listing dated July 2026, Tripadvisor, Wanderlog, Yellow Pages, the
    restaurant's own site (pekingmbtogo.com), and a DoorDash ordering page
    all show it active at this address.
  - Cafe 22 (823 Corydon Ave) — confirmed open. The restaurant's own site
    (cafe22.ca), Tourism Winnipeg's dining listing, OpenTable, Yellow Pages,
    and a Yelp listing dated August 2026 all show it active at this
    address.
  - Saffron's Restaurant (681 Corydon Ave) — confirmed open. The
    restaurant's own site (saffronrestaurantwinnipeg.com), a Yelp listing
    dated July 2026, Tripadvisor, Yellow Pages, and an active online-order
    page all show it active at this address.
  - Santa Lucia Pizza (905 Corydon Ave) — confirmed open. The chain's own
    site (santaluciapizza.com, with a dedicated page for the 905 Corydon
    location), Tourism Winnipeg, Tripadvisor, and Facebook all show it
    active at this address, operating since 1971.
  - `last_verified` set to 2026-09-10 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-west-end-guide.html`, "Winnipeg's West End: A
  Neighbourhood Guide." The queue's first item, manitoba-museum-planetarium-guide,
  was skipped again for lack of a fitting local photo; manitobamuseum.ca and
  images.unsplash.com remain unreachable from this sandbox (confirmed again
  via curl through the agent proxy, both returning connect_rejected/403 at
  the CONNECT stage). The rest of the queue (grand-beach-day-trip,
  winnipeg-live-music-venues, manitoba-legislative-building-tour,
  winnipeg-performing-arts-season, royal-aviation-museum-guide,
  winnipeg-bookstores-record-shops, oak-hammock-marsh-birding,
  riding-mountain-national-park-trip, northern-lights-near-winnipeg,
  winnipeg-chinatown-guide) was skipped for the same lack-of-photo reason.
  winnipeg-indian-south-asian-food was skipped not for a photo reason but
  because "food" as an intent was used 3 days ago (2026-09-07,
  winnipeg-filipino-food-guide), inside the one-week no-repeat window; the
  last four Used entries also already covered "drink" (craft-distilleries,
  09-06), "festivals"/"culture" (fringe-festival-guide, 09-08), and
  "shopping" (thrift-vintage-shopping, 09-09), which ruled out inventing
  another food- or drink-themed post this run too. winnipeg-with-kids-indoor
  was skipped again as a near-duplicate of existing indoor/family-attraction
  posts. winnipeg-west-end-guide was invented instead (not in the queue)
  because images/guidebook-winnipeg-28-feast-cafe-bistro.jpg, a real,
  previously unused interior photo of Feast Café Bistro on Ellice Avenue,
  fits a West End neighbourhood guide's hero directly, and "neighbourhood
  guide" is a distinct rotation category from the recently-used intents
  above (the last dedicated neighbourhood guide, wolseley-neighbourhood-guide,
  ran 2026-08-23). No existing post covers the West End as a neighbourhood.
  Facts (the West End's boundaries and its status as Winnipeg's most
  ethnically diverse neighbourhood, roughly 51% Caucasian/21% Filipino/15%
  Indigenous per the 2011 census; the West End Cultural Centre's 1908 origin
  as St. Matthews Church, its 1987 conversion to a music venue by Mitch
  Podolak and Ava Kobrinsky, its October 23, 1987 opening concert by Spirit
  of the West, and its 2009 addition; Sherbrook Pool's 1930 construction as
  a Depression relief project, its March 1931 opening, its Art Deco design
  by R.B. Pratt and D.A. Ross, and its 1991 municipal heritage designation;
  and Feast Café Bistro at 587 Ellice Ave as a 100% Indigenous-owned
  restaurant founded by Christa, a Peguis First Nation member) were
  confirmed by web search against Wikipedia, Travel Manitoba, Tourism
  Winnipeg, Historic Places Days, and the restaurant's own coverage. No
  hours or prices were stated. This is a city-wide neighbourhood guide, not
  anchored to Corydon; the last four Used entries (craft-distilleries,
  filipino-food-guide, fringe-festival-guide, thrift-vintage-shopping) were
  also all city-wide, so the topic-breadth ratio is unaffected. Registered
  in `articles-data.js` and `sitemap.xml`; the idea was moved from Queue to
  Used in `post-ideas.md`. As in recent runs, `blog.html`'s `blogPost`
  JSON-LD array, its `<noscript>` article-card section, and `llms.txt`'s
  post count were left unmodified (they have not tracked new posts since
  before this cron's current run history; updating them for every post this
  cron has missed is out of scope for a single day's run and would be a
  large, unrelated change).

---

## 2026-09-09 (cron)

- **Housekeeping:** local `main` was on a detached HEAD at commit `b677ecf`
  (matching `origin/main` after a fetch). Checked out `main` and
  fast-forwarded to `origin/main` before starting; no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-04:
  - Passero Restaurant (774 Corydon Ave) — confirmed open. Tripadvisor,
    Yellow Pages, and the Tourism Winnipeg dining listing all show it active
    at this address; coverage describes it as having moved from The Forks
    Market to this larger Corydon space under chef Scott Bagshaw and Amanda
    Coe, with posted hours (Mon-Sat 5-10pm, closed Sunday).
  - Forgotten Flavours (858 Corydon Ave) — confirmed open. The bakery's own
    site (forgottenflavours.ca), Tourism Winnipeg, and Wanderlog/Instagram
    listings all show it active at this address with posted hours
    (Tue-Sat 11am-6pm).
  - Colosseo Ristorante Italiano (670 Corydon Ave) — confirmed open. The
    restaurant's own site (colosseo.ca), a July 2026-dated Yelp listing, and
    Tourism Winnipeg all show it active at this address, operating since
    1973.
  - Bar Italia (737 Corydon Ave) — confirmed open. A January 2026-dated
    Yelp listing, Tourism Winnipeg's nightlife listing, DoorDash/Uber Eats
    ordering pages, and a Yellow Pages listing all show it active at this
    address.
  - `last_verified` set to 2026-09-09 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-thrift-vintage-shopping.html`, "Thrift,
  Vintage, and Secondhand Shopping in Winnipeg." The queue's first item,
  manitoba-museum-planetarium-guide, was skipped again for lack of a
  fitting local photo; manitobamuseum.ca and images.unsplash.com remain
  unreachable from this sandbox (confirmed again via curl through the agent
  proxy, both returning a 403 at the CONNECT stage). grand-beach-day-trip,
  winnipeg-live-music-venues, and manitoba-legislative-building-tour were
  skipped for the same reason. winnipeg-thrift-vintage-shopping was picked
  next because images/guidebook-winnipeg-46-exchange-district.jpg, a real
  photo of a heritage warehouse storefront in the Exchange District, fits
  the topic directly: two of the shops covered, Ragpickers Antifashion
  Emporium and Clothing Bakery, are themselves in that district. This is a
  city-wide guide spanning five neighbourhoods (Exchange District, Osborne
  Village, the West End, East Kildonan, and Corydon Avenue), not anchored to
  Corydon; the last four Used entries (craft-distilleries, filipino-food,
  fringe-festival, accessible-attractions) were also all city-wide, so the
  topic-breadth ratio is unaffected, and "shopping" as an intent was last
  used on 2026-08-29 (winnipeg-shopping-districts), well outside the
  one-week no-repeat window. No existing post covers thrift or vintage
  shopping specifically. Facts (Ragpickers Antifashion Emporium at 90
  Annabella St, 3rd floor, in business since 1984 with over 10,000 vintage
  pieces from the 1880s-1980s and a costume-rental sideline; Clothing Bakery
  at 70 Arthur St; Shop Take Care at 109 Osborne St, gender-inclusive
  consignment open since 2017, with a second location at 217 McDermot Ave;
  Old Gold Vintage Vinyl at 187 Osborne St; MCC thrift stores at 644 Burnell
  and 445 Chalmers Ave in East Kildonan; and Things at 911/913 Corydon Ave,
  run by the Royal Winnipeg Ballet's Volunteer Committee) were confirmed by
  web search against each shop's own site or Yelp/Facebook listing, the
  Exchange District BIZ business directory, and MCC Thrift's own locations
  page. No hours or prices were stated. Registered in `articles-data.js` and
  `sitemap.xml`; the idea was moved from Queue to Used in `post-ideas.md`.

---

## 2026-09-08 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-02:
  - Thom Bargen Coffee Roasters (743 Corydon Ave) — confirmed open. The
    roaster's own site (thombargen.com), a Th3rdwave Winnipeg profile, and
    active café directory listings (Corner, CaféWork) all show it active at
    this address with posted hours.
  - Tim Horton's (949 Corydon Ave) — confirmed open. Tim Hortons' own store
    locator lists this address (Unit 2), and Tripadvisor and Yellow Pages
    listings corroborate posted hours (5am-11pm daily).
  - Tommy's Pizzeria (842 Corydon Ave) — confirmed open. The pizzeria's own
    site (tommys.pizza), a September 2026-dated Yelp listing, Tourism
    Winnipeg, and active Toast/SkipTheDishes ordering pages all show it
    active at this address.
  - Wako Sushi Café (875 Corydon Ave) — confirmed open. A July 2026-dated
    Yelp listing, Yellow Pages, and an active DoorDash listing all show it
    active with posted hours (Mon-Fri 11am-8pm, Sat 1-8pm, closed Sunday).
  - `last_verified` set to 2026-09-08 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-fringe-festival-guide.html`, "How to do the
  Winnipeg Fringe Festival." The queue's first item,
  manitoba-museum-planetarium-guide, was skipped again for lack of a fitting
  local photo, manitobamuseum.ca still unreachable from this sandbox. Several
  further queue items (grand-beach-day-trip, winnipeg-live-music-venues,
  manitoba-legislative-building-tour, winnipeg-thrift-vintage-shopping,
  winnipeg-performing-arts-season, royal-aviation-museum-guide,
  winnipeg-bookstores-record-shops) were skipped for the same reason.
  winnipeg-indian-south-asian-food was skipped not for a photo reason but
  because winnipeg-filipino-food-guide, published the day before, already
  used the "food" intent within the same week (the topic-breadth guardrail
  against repeating an intent within a week). oak-hammock-marsh-birding was
  skipped for lack of a photo, and winnipeg-with-kids-indoor was skipped
  again as a near-duplicate of existing indoor/family-attraction posts.
  winnipeg-fringe-festival-guide was picked instead because
  images/exchange-district-pepsi.jpg, a real photo of the vintage Pepsi-Cola
  mural on a heritage building in the Exchange District, was previously
  unused and fits the topic directly: Fringe venues and its free outdoor Old
  Market Square stage sit in that same district. No existing post covers the
  Fringe Festival. This is a city-wide guide, not anchored to Corydon; the
  last four Used entries (fall-colours, accessible-attractions,
  craft-distilleries, filipino-food-guide) were also all city-wide, so the
  topic-breadth ratio is unaffected. Facts (founded 1988 by the Royal
  Manitoba Theatre Centre with Larry Desrochers as first executive producer,
  its standing as the second-largest independent fringe festival in North
  America, the non-juried lottery selection and artist-keeps-100%-of-box-office
  model, Old Market Square as the free outdoor hub, the Exchange District's
  roughly 150 heritage buildings from 1880-1920, and 2026's July 15-26 dates
  and ticket pricing) were confirmed by web search against Wikipedia, the
  Exchange District BIZ, CBC News, Tourism Winnipeg, and winnipegfringe.com.
  The post states 2026's dates only as a past reference point and tells
  readers to confirm current dates and prices at winnipegfringe.com; no
  future-year dates, hours, or prices were invented. Registered in
  `articles-data.js` and `sitemap.xml`; the idea was moved from Queue to Used
  in `post-ideas.md`.

---

## 2026-09-07 (cron)

- **Housekeeping:** local `main` was on a detached HEAD at commit `910bf9e`
  (matching `origin/main`). Checked out `main` and fast-forwarded to
  `origin/main` before starting; no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-01:
  - Sushi Ya (659 Corydon Ave) — confirmed open. Yelp, Tripadvisor, Tourism
    Winnipeg's Peg City Grub feature, DoorDash/SkipTheDishes delivery
    listings, and a Yellow Pages listing (Sushiya Ltd) all show it active at
    this address with posted hours.
  - The Cheesemongers Fromagerie (839 Corydon Ave) — confirmed open. The
    shop's own site (thecheesemongers.ca), a Tourism Winnipeg listing, and
    a July 2026-dated Yelp listing all show it active at this address.
  - The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave) — confirmed open.
    The business's own site (themightykiwi.ca), a Tourism Winnipeg listing,
    Yelp, and active DoorDash/Uber Eats listings all show it active at this
    address.
  - The Roost (651 Corydon Ave) — confirmed open. The bar's own site
    (theroostwpg.com), a September 2026-dated Yelp listing, an active
    Facebook page, and a Tourism Winnipeg listing all show it active with
    posted hours.
  - `last_verified` set to 2026-09-07 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-filipino-food-guide.html`, "Winnipeg's
  Filipino food scene: lumpia, lechon, and silog breakfasts." Queue's first
  item, manitoba-museum-planetarium-guide, was skipped again for lack of a
  fitting local photo (images.unsplash.com and manitobamuseum.ca remain
  unreachable from this sandbox, confirmed again via curl through the agent
  proxy, both returning connect_rejected at the CONNECT stage). The queue's
  second item, winnipeg-filipino-food-guide, was picked instead: no
  dedicated local photo of Filipino food or a Filipino restaurant exists,
  but `images/restaurant-dining.jpg`, a generic restaurant dining room
  already reused across four other cuisine posts, was reused a fifth time
  with the same honest, non-specific alt text those posts use. No existing
  post covers Filipino food specifically (`blog-filipino-billiards-winnipeg.html`
  covers Filipino billiards culture, a different topic). This is a
  city-wide guide, not anchored to Corydon; the last four Used entries
  (spring-river-thaw, fall-colours, accessible-attractions,
  craft-distilleries) were also all city-wide, so the topic-breadth ratio
  is unaffected. Facts (Winnipeg having Canada's largest per-capita Filipino
  population and third-largest in raw numbers at 50,000+, settlement
  beginning in 1959, Kalan at 1449 Arlington St in the West End since 2010,
  Max's Restaurant at 1255 St. James St, and Pampanga Restaurant & Banquet
  Hall at 349 Henry Ave family-run since 2005) were confirmed by web search
  against Yelp, Tripadvisor, Yellow Pages, and each restaurant's own site.
  No hours or prices were stated. Registered in `articles-data.js` and
  `sitemap.xml`; the idea was moved from Queue to Used in `post-ideas.md`.

---

## 2026-09-06 (cron, 22:08 UTC slot)

This is the scheduled 22:08 UTC run anticipated by the operations note below
(the schedule moved from `0 10 * * *` to `0 22 * * *` earlier today). As that
note predicted, a CHANGELOG block and a registered post already existed for
2026-09-06 (`blog-winnipeg-craft-distilleries.html`, published by the manual
06:32 UTC run, commit `b3bd0b3`), so **no new post was published this run**,
per the one-post-per-run guardrail and the same precedent set by the earlier
refused run today.

- **Verified 4 businesses** (the next stalest batch, `rotation_batch_size` 4),
  all last checked 2026-08-30:
  - Saperavi Georgian Cuisine (709 Corydon Ave) — confirmed open. Tourism
    Winnipeg's eat-and-drink and patio listings, an active Facebook page
    (facebook.com/saperavi.ca), Instagram (@saperavicorydon), a Yellow Pages
    listing at 3-709 Corydon Ave with posted hours, and an active online
    ordering page (order.online) all show it active as the Prairies' first
    Georgian restaurant.
  - Starbucks (946 Corydon Ave) — confirmed open. Tripadvisor, Yellow Pages,
    and active DoorDash, Uber Eats, and SkipTheDishes delivery listings all
    show it active at this address with posted hours and a 4.5-star DoorDash
    rating.
  - Sugar + Salt Bakeshoppe (897 Corydon Ave, Unit 103) — confirmed open. The
    bakery's own site (sugarandsaltbakeshoppe.com), a Tourism Winnipeg
    listing, and a Chamber of Commerce directory listing all show it active
    with posted hours (Tue-Fri 11-5, Sat 10-4) and a 4.8 Google rating.
  - Sunshine Chinese Restaurant (635 Corydon Ave) — confirmed open. The
    restaurant's own site (winnipegsunshine.com), an active Facebook page,
    Tripadvisor (2026 reviews), and a Yelp listing all show it active with
    posted hours.
  - `last_verified` set to 2026-09-06 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** none. A post for 2026-09-06 already exists and is already
  registered in `articles-data.js` and `sitemap.xml`; publishing a second post
  on the same calendar date would violate the one-post-per-run guardrail and
  double up the date-based bookkeeping used elsewhere (post-ideas.md's
  last-four-Used check, the topic-breadth ratio). `post-ideas.md` was left
  untouched; its first queue item remains available for the next run.

---

## 2026-09-06 (operations note — written by hand, no content published)

Not a maintenance run. This block records why four dated blocks are missing
above, so later runs reading recent entries are not puzzled by the gaps.

- **Missing publication dates:** 2026-08-25, 2026-08-31, 2026-09-04 and
  2026-09-05. The 2026-09-03 slot also failed but was covered by the manual
  catch-up on 2026-09-04.
- **Cause:** the Routine fired on time every one of those days and was
  rejected at startup on the account's five-hour usage limit. The run logs
  show the same signature each time: sandbox allocated, repository cloned,
  Claude Code started, then `rate_limit: rejected (five_hour)` and exit
  after 12-16 seconds having consumed nothing. Healthy runs take 4-7
  minutes, so the duration alone distinguishes them. The Routine was never
  paused or misconfigured.
- **Why the budget was exhausted:** a separate Routine, "Airbnb sync
  monitor" on `davidlacho/airbnb-automations`, ran every hour at :30, 24
  times a day at roughly 105 seconds each. The blog run fired at 10:08 UTC,
  33 minutes after one of them, into a window that also held four earlier
  monitor runs plus the owner's interactive sessions.
- **Fix applied 2026-09-06:** the monitor moved from `30 * * * *` to
  `30 */3 * * *` (24 runs a day to 8), and this Routine moved from
  `0 10 * * *` to `0 22 * * *`. The new window, 17:08-22:08 UTC, holds two
  monitor runs instead of five, and 22:08 UTC is midnight in the owner's
  timezone, when interactive usage is nil.
- **Backfill:** deliberately not attempted beyond one run. `post-ideas.md`
  is a queue, so no ideas were lost by the missed days; the queue simply
  resumes. A second run on 2026-09-06 correctly refused to publish, citing
  the one-post-per-run guardrail, since a block for the date already
  existed. That guardrail worked as intended and was left alone.
- **Consequence for 2026-09-06:** the day's single post was published by a
  manually triggered run at 06:32 UTC (`winnipeg-craft-distilleries`,
  commit `b3bd0b3`). The 22:08 scheduled run will therefore find the date
  already recorded and publish nothing. Normal daily service resumes
  2026-09-07 at 22:08 UTC.

---

## 2026-09-06 (cron)

- **Housekeeping:** local `main` was on a detached HEAD at commit `a74f6b8`
  (the 2026-09-04 catch-up run), matching `origin/main`. Checked out and
  fast-forwarded `main` to `origin/main` before starting; no content was
  lost. Note: the 2026-09-05 scheduled run appears to have been missed
  entirely (no CHANGELOG entry, no post dated 2026-09-05, and the note left
  by the prior run about a same-day second post for 2026-09-04 also never
  materialized). No catch-up post was published for either missed date this
  run; only the regular single post for today, per the one-post-per-run
  guardrail.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-08-29:
  - Peking Chinese Food Ltd. (840 Corydon Ave) — confirmed open. A July
    2026-dated Yelp listing, an active DoorDash page, a Yellow Pages listing,
    and the restaurant's own site (pekingmbtogo.com) all show it active at
    this address, describing over 50 years serving the area.
  - Cafe 22 (823 Corydon Ave) — confirmed open. The restaurant's own site
    (cafe22.ca / cafe22corydon.com), an August 2026-dated Yelp listing,
    OpenTable, and a Tourism Winnipeg listing all show it active with posted
    hours.
  - Saffron's Restaurant (681 Corydon Ave) — confirmed open. A July
    2026-dated Yelp listing, an active Facebook page, OpenTable, Tourism
    Winnipeg, and an active online ordering page all show it active with
    posted hours.
  - Santa Lucia Pizza (905 Corydon Ave) — confirmed open. The restaurant's
    own site (santaluciapizza.com), Tourism Winnipeg, an active Facebook
    page, and OpenTable all show it active at this address.
  - `last_verified` set to 2026-09-06 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html`
    already match current names/addresses, so no page corrections were
    needed.
- **New post:** `blog-winnipeg-craft-distilleries.html` — "Winnipeg's craft
  distilleries: a guide to the city's gin, vodka, and whisky". A city-wide,
  non-Corydon-anchored guide (the last four published posts were also all
  city-wide, keeping the topic-breadth ratio well under the one-in-four cap)
  covering Patent 5 Distillery (the Exchange District's 1903 Dominion
  Express building, whisky production returning downtown after 139 years),
  Capital K Distillery (Manitoba's first family-owned craft spirits
  producer, distilling since 2016 in St. James), and Shrugging Doctor
  Beverage Company (a St. James fruit winery with a restaurant and wine
  bar, described accurately as a winery rather than a spirits distillery).
  The queue's first item, manitoba-museum-planetarium-guide, was skipped
  again for lack of a fitting local photo; images.unsplash.com and
  manitobamuseum.ca remain unreachable from this sandbox (confirmed again
  via curl through the agent proxy, both returning connect_rejected at the
  CONNECT stage). The rest of the queue was also skipped for the same
  reason (no fitting unused local photo), and winnipeg-with-kids-indoor was
  skipped again as a near-duplicate of existing indoor/family-attraction
  posts. winnipeg-craft-distilleries was invented instead because
  guidebook-winnipeg-29-patent-5-distillery.jpg, a real photo of Patent 5
  gin and cocktail ingredients inside the distillery's own tasting room, was
  previously unused and fits the topic exactly, and no existing post covers
  craft distilling specifically (blog-winnipeg-breweries.html already
  covers beer). All facts were confirmed by web search against CBC News,
  the Exchange District BIZ, Patent 5's and Capital K's own sites, Tourism
  Winnipeg, and Travel Manitoba. No hours or prices were stated; the post
  tells readers to check each venue's own site before visiting. Registered
  in `articles-data.js` and `sitemap.xml`, and logged into "Used" in
  `post-ideas.md`.

---

## 2026-09-04 (manual catch-up for the missed 2026-09-03 run)

Run by hand, not by the cron. **The 2026-09-03 scheduled run failed and did no
work at all:** it was rejected at startup on a five-hour account usage limit
("You've hit your session limit, resets 10:30am UTC"), fired at 10:11:43 UTC
and finished 16 seconds later having consumed zero tokens. Nothing was
published, no businesses were verified, and no changelog entry was written for
that date. The Routine itself was never paused or misconfigured; it remains
enabled on `0 10 * * *`. This run covers that missed slot.

- **Businesses verified:** 4 of 20 (rotation batch, all tied for stalest at
  2026-08-28). Passero Restaurant (774 Corydon Ave), Forgotten Flavours (858
  Corydon Ave), Colosseo Ristorante Italiano (670 Corydon Ave), and Bar Italia
  (737 Corydon Ave). All four confirmed open: Passero has a live booking page
  and a current Tripadvisor listing; Forgotten Flavours has an active site,
  Tourism Winnipeg listing and Instagram; Colosseo's own site is live and its
  Yelp listing was updated July 2026; Bar Italia's Yelp listing was updated
  January 2026 and it carries current Tourism Winnipeg nightlife and patio
  listings. No closures, moves, or renames; no corrections needed on
  `blog-corydon-guide.html`.
- **New post published:** `blog-winnipeg-accessible-attractions.html`, "Accessible
  attractions and step-free days out in Winnipeg", taken from the queue. Covers
  the Canadian Museum for Human Rights (ramped galleries, loanable mobility
  devices, Braille and tactile maps, descriptive audio, captioning, ASL on
  screen, Aira support), WAG-Qaumajuq (accessible galleries, wheelchairs at the
  desk, universal washrooms, adaptable tours, the Art to Inspire program),
  The Forks (the Wall of Time ramp route to the river trail, accessible water
  buses), Assiniboine Park and The Leaf (paved paths, zoo device rentals, and
  the caveat that the outdoor Gardens at The Leaf are paving stones and compact
  gravel), and getting around on Winnipeg Transit's roughly 640 low-floor
  kneeling buses plus Transit Plus. Sourced from humanrights.ca, wag.ca,
  assiniboinepark.ca, theforks.com, Winnipeg Transit and Tourism Winnipeg. No
  hours or prices stated, and the post tells readers to confirm with each venue.
- **Image:** the existing local photo
  `guidebook-winnipeg-38-canadian-museum-for-human-rights.jpg`. Checked as a
  close-up of a single landmark rather than a skyline, so it passes the image
  guardrail. Also checked and rejected
  `guidebook-winnipeg-34-cargo-bar.jpg` as a candidate for
  winnipeg-live-music-venues: despite its filename it shows an outdoor park
  patio beside a pond, not a music venue.
- **Template fix:** four existing posts already used portrait hero photographs,
  which rendered taller than the window because `.article-hero-image img` was
  `width: 100%; height: auto` with no cap. Added `max-height: 78vh` with
  `object-fit: contain`, so tall images are bounded and centred rather than
  stretched or cropped. Landscape heroes are unaffected.
- **Notes:** the regular cron is still scheduled and due at about 10:08 UTC
  today, so it will publish a second post for 2026-09-04. That is the intended
  catch-up: one post making up 2026-09-03 and one for today. The next rotation
  batch is Peking Chinese Food Ltd., Cafe 22, Saffron's Restaurant and Santa
  Lucia Pizza, all dated 2026-08-29.

---

## 2026-09-02 (cron)

- **Housekeeping:** Local `main` was again on a detached HEAD at commit
  `dd23db8` (the 2026-09-01 run), matching `origin/main`. Checked out and
  reset `main` to `origin/main` before starting; no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-08-27:
  - Thom Bargen Coffee Roasters (743 Corydon Ave) — confirmed open. The
    location's own listing (th3rdwave.coffee/thom-bargen-corydon,
    cafe-work.com), corner.inc, and Wanderlog all show it active at this
    Corydon address with posted hours.
  - Tim Horton's (949 Corydon Ave) — confirmed open. The official Tim
    Hortons store locator, Uber Eats, Yellow Pages, and a June 2025-dated
    Yelp listing all show it active at this address.
  - Tommy's Pizzeria (842 Corydon Ave) — confirmed open. The restaurant's
    own site (tommys.pizza), Tourism Winnipeg, a Facebook page, and
    SkipTheDishes/Toast ordering pages all show it active.
  - Wako Sushi Café (875 Corydon Ave) — confirmed open. The restaurant's own
    site (wakosushiwpg.com), a July 2026-dated Yelp listing, DoorDash, and a
    Yellow Pages listing with posted hours all show it active.
  - `last_verified` set to 2026-09-02 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-fall-colours.html` — "Where to see fall
  colours in and around Winnipeg". A city-wide, non-Corydon-anchored guide
  (the last four published posts were also all city-wide, keeping the
  topic-breadth ratio well under the one-in-four cap) covering when
  Winnipeg's short fall colour season typically runs, the city's roughly
  160,000-elm urban forest (the largest mature elm population left in
  North America) and the toll Dutch elm disease continues to take on it,
  Kildonan Park's elm-and-ash canopy, Assiniboine Park's English Garden,
  the Bois-des-Esprits riverbank forest along the Seine River in St. Vital,
  and the elm-lined streets of River Heights, Wolseley, and Crescentwood
  including Wellington Crescent. The queue's first eight items
  (manitoba-museum-planetarium-guide, winnipeg-filipino-food-guide,
  grand-beach-day-trip, winnipeg-live-music-venues,
  manitoba-legislative-building-tour, winnipeg-thrift-vintage-shopping,
  winnipeg-performing-arts-season, royal-aviation-museum-guide) were
  skipped again for lack of a fitting local photo; images.unsplash.com
  remains unreachable from this sandbox (confirmed again via curl through
  the agent proxy, returning a 403 at the CONNECT stage). winnipeg-fall-colours
  was picked next, both because it was seasonally timely for early
  September and because images/guidebook-winnipeg-42-assiniboine-park.jpg,
  a real photo of Assiniboine Park's English Garden with leaves visibly
  turning gold, fits the topic directly; that image is already used on
  blog-winnipeg-free-things-to-do.html, consistent with the site's existing
  practice of reusing strong local photos across posts (e.g.
  images/restaurant-dining.jpg, images/assiniboine-park.jpg). No existing
  post previously covered fall foliage specifically. All facts (the elm
  population figures, Dutch elm disease impact, Kildonan Park and
  Bois-des-Esprits details, Wellington Crescent's elm canopy) were
  confirmed by web search against Tourism Winnipeg, Global News, CBC News,
  and CPAWS Manitoba/Winnipeg Trails Association sources before writing;
  only general seasonal timing (mid-September into early October) was
  stated, with no specific year's peak-colour date claimed. Registered in
  `articles-data.js` and `sitemap.xml`, and moved into "Used" in
  `post-ideas.md`.

---

## 2026-09-01 (cron)

- **Housekeeping:** Local `main` was again on a detached HEAD, matching
  `origin/main` at commit `6ed4930` (the 2026-08-30 run). Checked out and
  fast-forwarded `main` to `origin/main` before starting; no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-08-26:
  - Sushi Ya (659 Corydon Ave) — confirmed open. Yelp (14 reviews, updated
    May 2026), a Yellow Pages listing with posted hours, DoorDash, and
    SkipTheDishes all show it active at this address.
  - The Cheesemongers Fromagerie (839 Corydon Ave) — confirmed open. The
    shop's own site (thecheesemongers.ca), a Tourism Winnipeg listing with
    posted hours (Tue-Sat, 10am-6pm), and an active Instagram account all
    show it active.
  - The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave) — confirmed open.
    The business's own site (themightykiwi.ca), a Tourism Winnipeg listing,
    DoorDash, and Yelp all show it active at this address.
  - The Roost (651 Corydon Ave) — confirmed open. The bar's own site
    (theroostwpg.com), an active Facebook page, Yelp (19 reviews, updated
    February 2026), and a Tourism Winnipeg listing with posted hours all
    show it active.
  - `last_verified` set to 2026-09-01 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-spring-river-thaw.html` — "Winnipeg in
  spring: river thaw, patios, and what opens when". A city-wide,
  non-Corydon-anchored guide (the last four published posts were also all
  city-wide, keeping the topic-breadth ratio well under the one-in-four cap)
  covering when the Red and Assiniboine rivers typically break up, why Red
  River Valley flood watches are a routine spring occurrence rather than an
  alarm, and when patios and outdoor life actually start relative to the
  City of Winnipeg's official April 1 patio-permit window. The queue's first
  eleven items (manitoba-museum-planetarium-guide, winnipeg-filipino-food-guide,
  grand-beach-day-trip, winnipeg-live-music-venues,
  manitoba-legislative-building-tour, winnipeg-thrift-vintage-shopping,
  winnipeg-performing-arts-season, royal-aviation-museum-guide,
  winnipeg-fall-colours, winnipeg-bookstores-record-shops,
  winnipeg-indian-south-asian-food, oak-hammock-marsh-birding) were skipped
  again for lack of a fitting local photo; `images.unsplash.com` and
  `manitobamuseum.ca` remain unreachable from this sandbox (confirmed again
  via curl through the agent proxy, both returning a 403 at the CONNECT
  stage). winnipeg-thrift-vintage-shopping was additionally skipped because
  the 2026-08-29 post already used "shopping" as its intent three days
  earlier, inside the one-week no-repeat-intent window. winnipeg-with-kids-indoor
  was skipped again as a near-duplicate of existing indoor/family-attraction
  coverage. winnipeg-spring-river-thaw was invented per the playbook (the
  queue's fitting items were all exhausted for lack of a photo) because
  `images/forks-river.jpg`, a real photo of the Red and Assiniboine Rivers
  meeting at The Forks, fits a river-thaw topic directly, and no existing
  post covers spring river-breakup timing specifically. Ice-breakup timing
  and flood-watch facts were confirmed by web search against Manitoba
  government flood-outlook news releases and CBC News coverage; patio-season
  dates were confirmed against the City of Winnipeg's seasonal patio permit
  program page. No specific year's crest levels, closures, or business hours
  were stated, only general seasonal timing. Registered in
  `articles-data.js` and `sitemap.xml`, and moved into "Used" in
  `post-ideas.md`.

---

## 2026-08-30 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-24:
  - Saperavi Georgian Cuisine (709 Corydon Ave) — confirmed open. Tourism
    Winnipeg, the restaurant's own site (saperavi.ca), a June 2026-dated Yelp
    listing, and an active Instagram account all show it active with posted
    hours (Tue-Sun, closed Mondays).
  - Starbucks (946 Corydon Ave) — confirmed open. The Starbucks careers page
    lists this address as store #68102 (Corydon & Stafford), corroborated by
    UberEats, DoorDash, and a Yellow Pages listing with posted hours.
  - Sugar + Salt Bakeshoppe (897 Corydon Ave, Unit 103) — confirmed open.
    The bakery's own site (sugarandsaltbakeshoppe.com), Tourism Winnipeg, and
    a Chamber of Commerce directory listing all show it active with posted
    hours.
  - Sunshine Chinese Restaurant (635 Corydon Ave) — confirmed open. The
    restaurant's own site (winnipegsunshine.com), an active Facebook page, and
    a Yellow Pages listing all show it active with posted hours.
  - `last_verified` set to 2026-08-30 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses (including the existing link to
    winnipegsunshine.com), so no page corrections were needed.
- **New post:** `blog-winnipeg-steakhouses-bbq.html` — "Steakhouses and
  barbecue in Winnipeg". A city-wide, non-Corydon-anchored guide (the last
  four published posts were also all city-wide, keeping the topic-breadth
  ratio well under the one-in-four cap) covering Winnipeg's classic
  steakhouses (Rae & Jerry's, open since 1957; Hy's Steakhouse), a newer
  generation (529 Wellington's converted mansion, Chop Steakhouse, The Keg),
  and barbecue/smokehouse spots (Danny's Whole Hog BBQ & Smokehouse, Smokin'
  Hawg BBQ, Carnaval Brazilian BBQ's rodizio format). All businesses named
  were confirmed by web search before writing, corroborated across multiple
  listings (Yelp, Tripadvisor, OpenTable, and restaurants' own sites); no
  specific hours or prices were stated. The queue's first item,
  manitoba-museum-planetarium-guide, was skipped again for the usual reason
  (no local photo, manitobamuseum.ca and images.unsplash.com still
  unreachable from this sandbox). The next eleven items were skipped for the
  same lack-of-photo reason. winnipeg-with-kids-indoor, next in the queue,
  was checked against a candidate local photo (images/family-activities.jpg,
  a generic close-up of a child, and images/guidebook-winnipeg-37-the-leaf.jpg,
  a real interior photo of The Leaf at Assiniboine Park) but was skipped
  regardless: `articles-data.js` shows the topic is already substantially
  covered by three existing pages (`blog-family-activities.html`,
  `blog-assiniboine-park-zoo-leaf-guide.html`, and
  `blog-rainy-day-winnipeg-itinerary.html`, the last of which is explicitly an
  indoor/rainy-day attractions guide), so a new post would be a near-duplicate
  rather than filling a real gap. winnipeg-steakhouses-bbq was picked next
  because no existing post covers steakhouses or barbecue, and
  `images/restaurant-dining.jpg`, an upscale dining-room photo, fits the
  subject; it was already in use on three other restaurant-topic posts
  (`blog-winnipeg-vietnamese-pho-guide.html`,
  `blog-winnipeg-ramen-japanese-guide.html`, `blog-restaurants.html`), so this
  is its fourth reuse, slightly beyond the 2-3-times pattern noted in prior
  runs, accepted here for lack of a closer local alternative (no photo of an
  actual steak or smoker exists in `images/`). Registered in
  `articles-data.js` and `sitemap.xml`, and moved from Queue to Used in
  `post-ideas.md`.

---

## 2026-08-29 (cron)

- **Housekeeping:** Local `main` was again on a detached HEAD, 6 commits behind
  `origin/main` (the 2026-08-23 through 2026-08-28 runs were not reflected on
  the local branch ref, the same recurring pattern as prior runs). Fetched and
  fast-forwarded `main` to `origin/main` before starting; no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-23:
  - Peking Chinese Food Ltd. (840 Corydon Ave) — confirmed open. The
    restaurant's own site (pekingwpg.com), a July 2026-dated Yelp listing, and
    DoorDash all show it active with posted hours; it has operated at this
    address since 1970.
  - Cafe 22 (823 Corydon Ave) — confirmed open. The restaurant's own site
    (cafe22.ca), OpenTable, and Yellow Pages all show it active with posted
    hours.
  - Saffron's Restaurant (681 Corydon Ave) — confirmed open. Tourism
    Winnipeg, a July 2026-dated Yelp listing, and OpenTable all show it
    active with posted hours.
  - Santa Lucia Pizza (905 Corydon Ave) — confirmed open. The restaurant's own
    site (santaluciapizza.com), Tourism Winnipeg, and Tripadvisor all show it
    active with posted hours; it has operated in Winnipeg since 1971.
  - `last_verified` set to 2026-08-29 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses (including the existing link to
    santaluciapizza.ca), so no page corrections were needed.
- **New post:** `blog-winnipeg-shopping-districts.html` — "Where to shop in
  Winnipeg, district by district". A city-wide shopping guide (not
  Corydon-anchored, though Corydon Avenue is covered as one of several
  districts; the last four published posts were also city-wide, keeping the
  topic-breadth ratio well under the one-in-four cap) covering the Exchange
  District, Osborne Village, Academy Road, Corydon Avenue, downtown/The Forks
  Market, and the city's three major enclosed malls (CF Polo Park, St. Vital
  Centre, Kildonan Place). It was also picked deliberately to give the recent
  run of posts a different intent: the 2026-08-26 and 2026-08-28 posts were
  both food-and-history pieces, so this run intentionally moved to a shopping
  topic instead of adding a third. Facts about each district and mall were
  confirmed by web search before writing (Travel Manitoba and Tourism
  Winnipeg's own shopping and neighbourhood pages); no specific hours or
  prices were stated, since those change too often for a general guide to
  own. The queue's first fifteen items (manitoba-museum-planetarium-guide,
  winnipeg-filipino-food-guide, grand-beach-day-trip, winnipeg-live-music-venues,
  manitoba-legislative-building-tour, winnipeg-thrift-vintage-shopping,
  winnipeg-performing-arts-season, royal-aviation-museum-guide,
  winnipeg-fall-colours, winnipeg-bookstores-record-shops,
  winnipeg-indian-south-asian-food, oak-hammock-marsh-birding,
  winnipeg-with-kids-indoor, winnipeg-fringe-festival-guide,
  riding-mountain-national-park-trip) were skipped again for lack of a
  confidently fitting local photo; `images.unsplash.com` and
  `manitobamuseum.ca` remain unreachable from this sandbox (reconfirmed via a
  direct `curl` through the agent proxy, both rejected with a 403 at the
  CONNECT stage). One additional candidate was explicitly rejected rather than
  just skipped: `guidebook-winnipeg-40-true-north-square.jpg`, considered for
  `winnipeg-live-music-venues`, was ruled out because its main subject is a
  cluster of downtown glass towers, which the house style guardrails forbid
  regardless of topic fit. `winnipeg-shopping-districts` was picked because
  `guidebook-winnipeg-46-exchange-district.jpg`, a real photo of a heritage
  Exchange District storefront, fits it well (this image is already in use on
  the existing Exchange District self-guided tour post, but that post covers
  only the one neighbourhood while this one is a citywide shopping guide, so
  the reuse was judged acceptable, consistent with other images reused
  2-3 times elsewhere on the site). Registered in `articles-data.js` and
  `sitemap.xml`, and moved from Queue to Used in `post-ideas.md`.

---

## 2026-08-28 (cron)

- **Housekeeping:** Local `main` was again on a detached HEAD, 5 commits behind
  `origin/main` (2026-08-22 through 2026-08-27 runs were not reflected on the
  local branch ref). Checked out `main` and fast-forwarded to `origin/main`
  before starting; no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-22:
  - Passero Restaurant (774 Corydon Ave) — confirmed open. Tripadvisor, Yelp
    equivalents (Yably, Wheree), and the restaurant's own site
    (passerowinnipeg.com) all show it active; hours vary slightly between
    sources (dinner-only vs. lunch-through-dinner), so no specific hours were
    changed on the site.
  - Forgotten Flavours (858 Corydon Ave) — confirmed open. The bakery's own
    site (forgottenflavours.ca) lists this as its Winnipeg location with
    posted hours (Tue-Sat 11am-6pm), corroborated by Tourism Winnipeg and
    Instagram activity.
  - Colosseo Ristorante Italiano (670 Corydon Ave) — confirmed open. Official
    site (colosseo.ca), Tourism Winnipeg, and a Yelp listing updated July 2026
    all show it active, operating since 1973.
  - Bar Italia (737 Corydon Ave) — confirmed open. Tourism Winnipeg, Yelp
    (updated January 2026), UberEats, and DoorDash all show it active.
  - `last_verified` set to 2026-08-28 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-north-end-history-food.html` — "The North End:
  history, bakeries, and delis". A city-wide, non-Corydon-anchored guide
  (the last four published posts were also all city-wide, keeping the
  topic-breadth ratio well under the one-in-four cap) covering the CPR-driven
  immigrant settlement of the North End, Selkirk Avenue's history as its
  commercial and multilingual heart, Gunn's Bakery (open since 1937, still
  operating at 247 Selkirk Ave, current status and hours confirmed by web
  search), and the seasonal Ross House Museum. KUB Bakery, historically a
  North End institution, was deliberately not featured: it closed in 2022 and
  web search shows its post-2022 ownership operating from other addresses
  (Erin St / Larche Cres listings), not confirmed as a current North End
  storefront, so it was left out rather than risk stating an unverified
  location. Luda's Deli, already the subject of the 2026-08-26 perogies post,
  was not re-featured to avoid duplicating that post's content. The queue's
  first eleven items (manitoba-museum-planetarium-guide,
  winnipeg-filipino-food-guide, grand-beach-day-trip,
  winnipeg-live-music-venues, manitoba-legislative-building-tour,
  winnipeg-thrift-vintage-shopping, winnipeg-performing-arts-season,
  royal-aviation-museum-guide, winnipeg-fall-colours,
  winnipeg-bookstores-record-shops, winnipeg-indian-south-asian-food,
  oak-hammock-marsh-birding) were skipped again for lack of a fitting local
  photo; `manitobamuseum.ca` and `images.unsplash.com` remain unreachable from
  this sandbox. `winnipeg-north-end-history-food` was picked out of order
  because `images/guidebook-winnipeg-blog-gunns-bakery.jpg`, a real,
  previously-unused photo of North End-style baking, fits it exactly.
  Registered in `articles-data.js` and `sitemap.xml`, and moved from Queue to
  Used in `post-ideas.md`.

---

## 2026-08-27 (cron)

- **Housekeeping:** Local `main` was left on a detached HEAD (matching `origin/main`'s commit already, only the `main` branch ref itself was stale, same recurring pattern as many prior runs). Checked out `main` and fast-forwarded to `origin/main` before starting — no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-21:
  - Thom Bargen Coffee Roasters (743 Corydon Ave) — confirmed open. Corner.inc
    and CaféWork listings, an active Facebook page with a post from within the
    last day, and a Wheree listing updated April 2026 all show it operating
    with posted hours (thombargen.com itself could not be reached directly
    from this sandbox, so secondary listings and social media were used
    instead).
  - Tim Horton's (949 Corydon Ave) — confirmed open. The official Tim Hortons
    store locator lists this address directly, and a Yelp listing updated June
    2026 agrees.
  - Tommy's Pizzeria (842 Corydon Ave) — confirmed open. Official site
    (tommys.pizza), an active Toast online-ordering page, SkipTheDishes, and a
    2026-dated Tripadvisor listing all show it active.
  - Wako Sushi Café (875 Corydon Ave) — confirmed open. DoorDash, a Yelp
    listing updated July 2026, and a 2026-dated Tripadvisor listing all show
    it active; minor hours discrepancies between sources were noted but do not
    affect status.
  - `last_verified` set to 2026-08-27 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-airport-arrival-guide.html` — "Landing at YWG:
  getting from the airport into Winnipeg". A city-wide, practical-logistics
  guide (not Corydon-anchored; the last four published posts were also
  city-wide, so this keeps the topic-breadth ratio well under the one-in-four
  cap) covering taxi and rideshare pickup, Winnipeg Transit's airport service,
  on-site rental car counters, and the airport's single, compact terminal.
  Facts were confirmed by web search before writing: the airport's identity,
  its rough distance/drive time from downtown (sources ranged 6-9 km /
  15-25 minutes, so a hedged range was used rather than a single precise
  figure), the presence of a taxi stand and Uber pickup at the airport (Lyft's
  presence at the airport specifically was flagged as unconfirmed by one
  source, so the post does not claim Lyft operates there), Winnipeg Transit's
  post-redesign airport routes (D12/D13/224, confirmed via the Transit site
  and corroborated by transitapp.com/TransSee), and the five rental agencies
  on site. No specific taxi fare, exact distance figure, or transit
  first/last-bus times were stated, since sources for those numbers were
  either unofficial fare aggregators or showed conflicting values between
  searches. This run's queue technically listed `manitoba-museum-planetarium-guide`
  first, but that idea and several others down the queue
  (winnipeg-filipino-food-guide, grand-beach-day-trip,
  winnipeg-live-music-venues, manitoba-legislative-building-tour,
  winnipeg-thrift-vintage-shopping, winnipeg-performing-arts-season,
  royal-aviation-museum-guide, winnipeg-fall-colours,
  winnipeg-bookstores-record-shops) were skipped for lack of a fitting local
  photo; `manitobamuseum.ca` and `images.unsplash.com` remain unreachable from
  this sandbox (confirmed again via the agent proxy's status log, which shows
  both hosts rejected with a 403 at the CONNECT stage). `winnipeg-airport-arrival-guide`
  was picked instead because `images/airport-terminal.jpg`, a real in-flight
  photo already on the site, fits a landing/arrival topic well, and airport
  logistics is a practical topic no existing post covers. Registered in
  `articles-data.js` and `sitemap.xml`, and moved from Queue to Used in
  `post-ideas.md` with a note on the substitution.

---

## 2026-08-26 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all last
  checked 2026-08-20:
  - Sushi Ya (659 Corydon Ave) — confirmed open. Yelp (updated May 2026, 14
    reviews), Tripadvisor (4.6/5), and an active order.online ordering page
    all show it operating with posted hours.
  - The Cheesemongers Fromagerie (839 Corydon Ave) — confirmed open. Official
    site (thecheesemongers.ca), Tourism Winnipeg, and a Yelp listing updated
    July 2026 all show it active; in-store shopping is currently by
    pre-arranged pickup or delivery only, with the shop itself still
    operating.
  - The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave) — confirmed open.
    Official site (themightykiwi.ca), Tourism Winnipeg, and an active
    order.online ordering page all show it active with posted hours.
  - The Roost (651 Corydon Ave) — confirmed open. Official site
    (theroostwpg.com), Tourism Winnipeg, and a Yelp listing updated February
    2026 all show it active with posted hours.
  - `last_verified` set to 2026-08-26 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-perogies-ukrainian-food.html` — "Perogies,
  holubtsi, and Winnipeg's Ukrainian food scene". A city-wide, North
  End-focused guide (not Corydon-anchored; the last four published posts
  were also city-wide, so this keeps the topic-breadth ratio well under the
  one-in-four cap) covering Luda's Deli (410 Aberdeen Ave) for homemade
  perogies, kubasa, and borscht, the long history of Alycia's (opened in the
  North End in 1971, closed in 2011, now revived at the Royal Albert Arms in
  the Exchange District), and the Oseredok Ukrainian Cultural Centre and
  Ukrainian Labour Temple as the cultural landmarks behind the food. All
  business names, addresses, and historical details were confirmed by web
  search before writing; no prices were stated, and hours were described
  only in general terms (daytime only, cash-only, a shorter weekly schedule)
  rather than exact posted hours, since small independent kitchens change
  these often. This run's queue first idea, `manitoba-museum-planetarium-guide`,
  was skipped again for the same reason as prior runs: `manitobamuseum.ca`
  remains unreachable from this sandbox and no local photo depicts the
  museum or planetarium. `winnipeg-perogies-ukrainian-food` was picked
  because `images/guidebook-winnipeg-10-luda-s-deli.jpg`, a real photo of
  the deli's dining room, fits it exactly and had not been used on any
  other page. Registered in `articles-data.js` and `sitemap.xml`, and moved
  from Queue to Used in `post-ideas.md`.

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
