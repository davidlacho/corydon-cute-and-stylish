# Blog maintenance changelog

Append-only log written by the daily blog-freshness cron. Newest entries on top.
Each run adds one dated block recording which businesses it verified, what
changed on the site, and which new post it published. The cron reads the most
recent entries to avoid repeating work.

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
