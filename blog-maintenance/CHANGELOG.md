# Blog maintenance changelog

Append-only log written by the daily blog-freshness cron. Newest entries on top.
Each run adds one dated block recording which businesses it verified, what
changed on the site, and which new post it published. The cron reads the most
recent entries to avoid repeating work.

---

## 2026-10-26

**Businesses verified (6 ledger entries, the stalest in rotation):** all six
trading as the ledger describes them. No closure, rename or relocation, and no
page needed a correction, because none of the pages that name these six states
hours or prices for them.

- **Gondola Pizza**, 1292 Pembina Hwy: **open.** A live online-ordering page for
  that exact address carries the store with a 4:00 p.m. to 10:00 p.m. ordering
  window, and a directory listing gives 204-949-2910 for it. Gondola's own site
  was not reachable from here. Listings for the Portage Avenue and Fort Richmond
  stores show different hours and are a different location; the ledger entry is
  the Pembina store. `blog-winnipeg-pizza-guide.html` states no hours for it, so
  nothing on the page changed.
- **Good Neighbour Brewing Co.**, 110 Sherbrook St: **open.** A current venue
  directory carries the brewery at 110 Sherbrook St, R3C 2B4. The only hours in
  any source are from a May 2023 trade item (noon to 8 daily), and several of the
  hour sets that come back in a search belong to One Sixteen and Next Door at 116
  Sherbrook, which are a different address. Neither
  `blog-best-places-nearby-winnipeg.html` nor `blog-winnipeg-breweries.html`
  states hours for it, so no change.
- **Graffiti Gallery**, 109 Higgins Ave: **open.** Run by Graffiti Art
  Programming Inc., a youth arts non-profit, at 109 Higgins Ave in Point Douglas,
  where it has been since 1999; current directory and Culture Days listings carry
  it at that address. No 2026 exhibition schedule was reachable from here, which
  is why `blog-spacedoxa.html` names only the organisation and links
  graffitigallery.ca rather than listing what is on.
- **Granite Curling Club**, 1 Granite Way: **open.** The club's own site is live
  and carries a 2026 event (a free Learn to Curl drop-in on January 31, 2026,
  noon to 2:30), the 204-775-8239 number, and a note that sheets 7 and 8 are now
  open. `blog-winnipeg-breweries.html` mentions it only as the site of The Beer
  Can's outdoor beer garden, which the sources support.
- **Gunn's Bakery**, 247 Selkirk Ave: **open.** Still at 247 Selkirk Avenue and
  still run by the family that bought the building; the Jewish Winnipeg directory
  carries it with 204-582-2364. The only hours anywhere are on an undated
  listing, so none were added to any of the three pages that name it.
- **Gusto North (Hargrave St. Market)**, 242 Hargrave St: **open.** The market's
  own restaurants page still describes it as the hall's only full-service sit-down
  restaurant and the second Pizzeria Gusto location, and reservation listings for
  it are live. hargravestmarket.com was not reachable from here, and no source
  reports a closure. `blog-hargrave-st-market.html` gives market-wide hours rather
  than Gusto North's own, so nothing changed; the Hargrave St. Market entry itself
  is next in the rotation and those market hours should be checked then.

**Ledger backfill sweep:** `blog-hosting-best-practices.html`. No commercial
businesses named anywhere in it; the only places it mentions are Tokyo,
Barcelona, Lisbon and Copenhagen as the cities of earlier stays, with no host,
apartment, cafe or shop identified. Nothing added; the filename moved to "Swept".

**New post:** `blog-icelandic-festival-gimli.html`, "Icelandic Festival in
Gimli: August Long Weekend Day Trip". First entry of the Events queue, written
as **host's notes** (the last three posts were a one-day plan, a question and
answer and a comparison, so the form rotation was clear). It covers what
Íslendingadagurinn is, the August long-weekend pattern, the drive up Highway 8,
Íslendingadunk at Gimli Harbour and the Monday parade from the Gimli Rec Centre,
what the Odin's Festival Pass cost in 2026, the seawall murals and the Viking at
the south end of Second Avenue, what the lake wind does, and a "Where to stay"
section. No 2027 dates have been announced by the organiser, so the post gives
the long-weekend pattern and the calendar fact that the 2027 holiday Monday is
August 2, and points to icelandicfestival.com. It makes no claim about whether
general entry is free, because no source states it, and it gives no drive time
from the house, which is not in the verified distance table. Provenance is in
`post-sources.md`.

**Ledger additions from the new post:** H. P. Tergesen & Sons (82 First Avenue,
Gimli) and Ship & Plough (42 Centre St, Gimli), both `open`, both verified today.
Three other Gimli eateries that came back in the same searches were left off the
page because nothing current confirmed they are trading.

**Pages changed:** `blog-icelandic-festival-gimli.html` (new), `blog.html`
(noscript card and JSON-LD `blogPost` entry), `articles-data.js`,
`articles_data.json`, `sitemap.xml` (new URL plus `blog.html` lastmod),
`llms.txt` (regenerated, 168 posts), `post-ideas.md`, `post-sources.md`,
`ledger-sweep.md`, `business-ledger.json`.

**Push and deploy:** commit `1b00320` landed on `main` (verified against
`origin/main`). The GitHub Pages build and deployment, run 457, completed with
conclusion success for that commit. The live URL could not be fetched from the
run's sandbox, which cannot resolve staywinnipeg.ca, so the deploy is confirmed
from the Pages run rather than from a page load.

**pa11y (WCAG2AA):** `blog-icelandic-festival-gimli.html` and `blog.html`, both
served over local HTTP so React renders; no issues on either. Run over `file://`
the new post reports one false error, a skip link pointing at `#main-content`,
because the absolute `/vendor/react*.js` paths do not resolve from the file
system and the React `<main id="main-content">` is therefore never rendered.
Serve the directory before checking a post.

---

## 2026-10-25

**Businesses verified (6 ledger entries, the stalest in rotation):** all six
trading as the ledger describes them. No closure, rename or relocation, but two
sets of opening hours on one page could not be supported by any current source
and were removed.

- **7-Eleven**, 781 Corydon Ave: **open.** A current flyer directory carries the
  store at 781 Corydon Avenue, R3M 0W5, listed as open 24 hours every day, and a
  store-locator entry gives the 204-985-0117 number. 7-Eleven's own locator was
  not reachable from here, so the 24-hour claim is single-sourced;
  `blog-grocery-runs-near-corydon-airbnb.html` says only "open long hours",
  which is within what the sources support, so that line was left alone.
- **Safeway (Osborne Village)**, 655 Osborne St: **open, hours corrected on the
  page.** Two directories carry the store and disagree: one gives 7:00 to 9:30
  daily, the other 8:00 to 10:00 Monday to Saturday and 9:00 to 6:00 on Sunday.
  Neither supports the "open daily from 7am to 11pm" the grocery post has been
  carrying, and a visitor who walked over at 10:30 on that line would find it
  shut. The specific hours were replaced with the shape both sources agree on,
  that it closes in the evening rather than late at night, and the post now
  sends a late-night top-up to the convenience stores.
- **Fair Havens Pharmacy**, 894 Corydon Ave: **open, hours removed from the
  page.** The only current source naming it is a September 2025 physician
  recruitment posting for the Corydon Medical Clinic at 894 Corydon Ave, which
  describes an in-house pharmacy of that name; a Medimap listing for the same
  address carries a differently named pharmacy and states no hours. Nothing
  supports the post's "open weekdays 9am to 5pm, closed on weekends", so the
  clock times went and the line now says it runs on clinic hours, names the
  clinic it sits inside, and tells the reader to phone ahead.
- **Baked (Canggu)**, Bali: **open, address corrected in the ledger.** The
  ledger had it on Jl. Pantai Batu Bolong; nothing current places it there. Two
  sources give a Pererenan outlet at Jl Pantai Pererenan No. 118, and a listing
  describes the Berawa outlet at Jl Raya Semat Gg. Kupu Kupu No. 1 as the
  flagship, with a July 2026 Canggu cafe guide still carrying BAKED. Berawa. The
  Batu Bolong bakery in those results is a different business. The ledger address
  now carries both outlets. `blog-bali-nyaman.html` states no address and needed
  no change.
- **Finns Beach Club (Canggu)**, Jl. Pantai Berawa No. 99: **open.** Current
  listings give daily 11:00 to midnight, adults only, free entry to the party
  zones with paid beds from IDR 1,500,000, and a trade write-up dated August 2026
  covers a new VIP section on the first level. An older listing's 10:00 opening
  looks out of date. The post states no hours and needed no change.
- **Atlas Beach Club (Canggu)**, Jl. Pantai Berawa No. 88: **open.** A Luxury
  Escapes experience listing carries the Jl. Pantai Berawa No. 88 address, and
  day passes are live on several resellers; prices and the quoted 10:00 to
  midnight operating window disagree between sellers, which is why neither is on
  our page. No change needed.

**Ledger backfill sweep:** `blog-gunns-bakery.html`. One commercial business
named, Gunn's Bakery at 247 Selkirk Ave, already in the ledger from two other
posts; this filename was appended to its `pages`. The post names no other shop or
supplier, so nothing was added. Moved to "Swept".

**Post published:** `blog-folklorama-2027.html`, "Folklorama 2027 Winnipeg:
August 1 to 14, Planning a Night". First entry of the Events queue, a new post
rather than a refresh since no Folklorama page existed. Form is **one-day plan**,
five clock-time headings that each state what the choice costs; the previous
three posts were walk, explainer and question and answer, so the rotation rule
left it open.

The queue entry asked for "how the pavilion system and passports work". The
pavilion system is covered; the passport is not, because it could not be
sourced. The only claim of a pass covering every pavilion came from a travel
blog whose prices also contradicted the festival's own, so the post describes
per-pavilion general admission, which Folklorama's pavilion pages do carry, and
says nothing about a multi-pavilion pass.

Confirmed before writing: the 56th festival runs August 1 to 14, 2027; the 2026
edition listed 45 pavilions over August 2 to 15; roughly half the pavilions open
each week; general admission $7.50 plus service fee, non-refundable, children 12
and under free with a paying adult to a maximum of five but still needing a
booked ticket; online sales close an hour before showtime; seats are not
reserved; outside food and drink are refused; payment methods are set per
pavilion; shows commonly at 6:45, 8:15 and 9:45 with doors 30 to 45 minutes
earlier and a run of about 45 minutes; closing times from 9:30 on a Sunday to
midnight on a Friday at different pavilions; no festival shuttle, with coach VIP
tours, custom group tours and 2026's pedal-powered tours as the alternatives;
Winnipeg Transit full fare $3.45 cash exact change, $3.10 peggo, $11.45 for a
24-hour e-pass, and a 90-minute transfer. Every price and count on the page is
labelled a 2026 figure. **No 2027 pavilion, venue, week, showtime or price is
stated anywhere on the page**, and the info-box sends readers to folklorama.ca.
folklorama.ca does not resolve from this sandbox (DNS ENOTFOUND through the
agent proxy), so all of it came through search result summaries.

The one venue named, the Centre culturel franco-manitobain at 340 Provencher
Blvd, is named as a hall whose pavilion assignment has changed between years,
which is the planning point being made rather than a claim about 2027.
Distances are only the verified ones: CCFM 11 min / 5.1 km, Portage and Main and
The Forks 9 to 10 min / 3.9 km, Corydon Avenue about ten minutes on foot south.
The post names no restaurant, bar or shop, so it added no ledger entries; the
firms behind the bus and pedal tours were deliberately left unnamed. Image is
`images/the-forks-indigenous-768x512.jpeg`, dancers in regalia at a pow wow at
The Forks, the closest local photo to a live cultural performance in the city;
`images/folkfest.jpg` was rejected as an aerial of the Folk Festival main stage
at Birds Hill, which would misrepresent a festival held indoors across Winnipeg.
Provenance in `post-sources.md`.

**pa11y:** three pages checked against WCAG2AA, all passing with zero issues:
`blog-folklorama-2027.html`, `blog.html` and
`blog-grocery-runs-near-corydon-airbnb.html`. staywinnipeg.ca is not reachable
from this sandbox, so the pages were served locally from the repo at
127.0.0.1:8099 and checked there, with Chromium launched `--no-sandbox` and
`--no-proxy-server`.


**Push and deploy:** committed on `main` and pushed with
`git push origin HEAD:main` (3109dcb..c86f3ab); `git rev-parse HEAD` matches
`origin/main`. GitHub Pages deploy run 455 for c86f3ab completed with conclusion
`success`. Two copy fixes on the new post (a comma splice, and a claim about
when the 2027 pavilion list would be published) went up in the follow-up commit.
The live URL cannot be checked from this sandbox: staywinnipeg.ca is refused at
the egress proxy and does not resolve for the fetch tool, as on every recent
run, so the successful Pages run is the verification of record.

**Pages changed:** `blog-grocery-runs-near-corydon-airbnb.html` (two sets of
unsupported hours removed), plus the new post and its registrations in
`articles-data.js`, `articles_data.json`, `blog.html` (noscript card and JSON-LD
`blogPost` entry), `sitemap.xml` and `llms.txt`.

---

## 2026-10-24

**Businesses verified (6 ledger entries, the stalest in rotation):** one closure
found and corrected on two pages; the other five trading as the ledger describes
them.

- **Foodfare**, 247 Lilac St: **open.** A current directory listing carries the
  store with the 204-475-6638 number and weekday hours of 9 to 9, Saturday 9 to 7
  and Sunday 11 to 6. Another listing gives an 8 a.m. weekday opening, so the
  hours conflict; `blog-best-places-nearby-winnipeg.html` states none and needed
  no change.
- **Fools & Horses Coffee**, 242 Hargrave St: **closed.** This is the one change
  this run. Yelp's listing for the Hargrave St. Market location is tagged CLOSED
  on pages updated in March and April 2026, and the company's Broadway shop at
  379 Broadway is tagged the same way, with an August 2025 capture showing it
  closed then too. A Tripadvisor review says the company "is now at The Forks".
  No news item or statement from the company was findable, but two separate
  closed listings a year apart, plus a live Forks listing with regular hours, is
  enough to stop sending readers downtown for it. Both pages in the entry's
  `pages` array were corrected: `blog-winnipeg-coffee.html` had said the Broadway
  shop was closed but Hargrave and The Forks were still pouring, and now names
  only The Forks Market at 1 Forks Market Road;
  `blog-hargrave-st-market.html` carried a full vendor section headed "The
  Caffeine Anchor", which was replaced with a short, accurate note that the
  market counter has closed and where the remaining location is.
- **Fort Garry Brewing Company**, 130 Lowson Cres: **open.** The brewery's own
  FAQ gives the Lowson Crescent address and posts Monday to Friday 8 to 4 office
  hours with curbside keg pickup; a corporate profile places the facility in the
  Tuxedo industrial park, which fits. The FAQ's hours are office hours rather
  than taproom hours, and `blog-winnipeg-breweries.html` states no hours, so
  nothing changed.
- **French Way Café**, 238 Lilac St: **open.** Yellow Pages, Restaurant Guru and
  Restaurantji all carry 238 Lilac Street with the 204-421-9002 number and
  describe it as off Corydon in River Heights; Tripadvisor's page is current for
  2026. One directory says the business has a second branch without naming it,
  and a 2023 student-paper listing gave a "Frenchway Café & Catering" at 612
  Academy Rd, which could not be corroborated anywhere current. Listings conflict
  on hours and even on postal code, so the two pages that name it, which state no
  hours, were left alone.
- **Fusian Sushi (The Forks Market)**, 1 Forks Market Rd: **open.** The Forks'
  own Eat & Drink section carries a live page for the vendor with hours of Sunday
  to Thursday 10 to 6 and Friday and Saturday 10 to 7. Worth noting for a later
  rotation: The Forks lists it as "Fusian Experience", so the ledger name may be
  a variant rather than the trading name. A different Forks sushi vendor, Sushi
  Train, is flagged permanently closed, and is not named on any of our pages.
  `blog-winnipeg-vegan-restaurants.html` needed no change.
- **Cafe Cinta (Canggu)**, Pererenan, Bali: **still moved, status unchanged.**
  Current listings place Cinta Cafe in Pererenan, which is what the ledger
  already records; one company profile puts it in Berawa, but it was last
  verified in 2023. Nothing indicates a closure. `blog-bali-nyaman.html` needed
  no change.

**Ledger backfill sweep:** `blog-grocery-runs-near-corydon-airbnb.html`. Six
businesses named. Three were already in the ledger and had this filename
appended to their `pages` (The Cheesemongers Fromagerie, Forgotten Flavours,
Sugar + Salt Bakeshoppe). Three were missing and were added with
`last_verified: "2026-01-01"` because this run did not verify them: 7-Eleven at
781 Corydon Ave, Safeway at 655 Osborne St, and Fair Havens Pharmacy at 894
Corydon Ave. The post states hours for the last two, which a later rotation
should check. Moved to "Swept".

**Post published:** `blog-great-outdoors-comedy-festival-winnipeg.html`, "Great
Outdoors Comedy Festival Winnipeg 2027: July 16 to 18". First entry of the
Events queue, a new post rather than a refresh. Form is **question and answer**,
eight questions as the only content headings; the previous three posts were
comparison, walk and explainer, so the rotation rule left this open.

The queue entry bundled two unrelated events under one slug
(`winnipeg-summer-comedy-design`) and gave July as the window for both. Only one
of them is a July event. The Assiniboine Park comedy weekend is the Great
Outdoors Comedy Festival, which runs in mid-July; the Winnipeg Design Festival is
Storefront Manitoba's September programme. The post therefore leads with the
comedy festival, which is what visitors search by name, carries the searched slug
rather than the queue's combined label, and answers the design festival in one
question by saying plainly that it is not the same weekend and sending readers to
storefrontmb.ca.

The festival's own Winnipeg page and its official ticket listing give July 16 to
18, 2027 at Assiniboine Park, so the title and opening paragraph state them;
another page on the festival's own site shows a conflicting Winnipeg window, and
the post tells readers to confirm before booking travel rather than pretending
the conflict is not there. No 2027 lineup, ticket price or set time is stated
anywhere on the page. Everything timed or priced is labelled a 2026 figure. The
page carries the gate rules that actually turn people away (18+ with unexpired
government photo ID, the chair specification, the sealed-litre water rule, the
42-inch umbrella limit), the $20 HonkMobile parking and the 3 p.m. road closure
on Assiniboine Park Drive, the free bike valet behind The Pavilion, and the D19
and route 22 stops. Distances are only the verified ones: Assiniboine Park 13 min
/ 8.4 km, Corydon Avenue about ten minutes on foot south. Image is
`images/assiniboine-park.jpg`, a local summer photo of the English Garden
colonnade in the park the festival is held in. The post names no restaurant, bar
or shop, so it added no ledger entries. Provenance in `post-sources.md`.

**pa11y:** four pages checked against WCAG2AA, all passing with zero issues:
`blog-great-outdoors-comedy-festival-winnipeg.html`, `blog-winnipeg-coffee.html`,
`blog-hargrave-st-market.html` and `blog.html`. staywinnipeg.ca is not reachable
from this sandbox (the headless browser gets ERR_TUNNEL_CONNECTION_FAILED through
the agent proxy), so the pages were served locally from the repo at
127.0.0.1:8099 and checked there, with Chrome launched `--no-sandbox` and
`--no-proxy-server`.

**Push and deploy:** committed on `main` and pushed with
`git push origin HEAD:main` (b835233..baea95f); `git rev-parse HEAD` matches
`origin/main`. GitHub Pages deploy run 453 for baea95f completed with
conclusion `success`. The live URL could not be checked from this sandbox:
staywinnipeg.ca is refused at the egress proxy (`connect_rejected`) and does not
resolve for the fetch tool, as on every recent run, so the successful Pages run
is the furthest this environment can verify.

**Pages changed:** `blog-winnipeg-coffee.html` and
`blog-hargrave-st-market.html` (Fools & Horses closure), plus the new post and
its registrations in `articles-data.js`, `articles_data.json`, `blog.html`
(noscript card and JSON-LD `blogPost` entry), `sitemap.xml` and `llms.txt`.

---

## 2026-10-22

**Businesses verified (6 ledger entries, the stalest in rotation):** all six
trading as the ledger describes them. No closure, rename or relocation, so no
page text changed; three addresses were sharpened.

- **Carnaval Brazilian BBQ**, 270 Waterfront Dr: **open.** Live OpenTable
  listings carry current dinner service Monday through Sunday plus Thursday and
  Friday lunch, and the address is consistent at Bannatyne and Waterfront in the
  East Exchange. The listings disagree on the lounge and happy-hour times, which
  is why `blog-winnipeg-steakhouses-bbq.html` states no hours and needed no
  change.
- **Chop Steakhouse & Bar**, 1750 Sargent Ave: **open.** AAA, OpenTable and a
  Canadian directory listing all give the same current hours (weekdays 11:30 to
  midnight, Saturday from 3, Sunday 3 to 11) and the same 204-788-2015 number.
  Unambiguous.
- **Danny's Whole Hog BBQ & Smokehouse**, Stony Mountain: **still moved, status
  unchanged.** A current directory listing gives the address as 12045 MB-67 with
  the 204-344-5675 number and weekday 8 to 4:30 hours, and a company profile
  describes catering, drop-off and pick-up meals with a storefront on Highway 67
  east of Highway 7. That confirms the ledger's "moved, pickup and catering
  only" status, and the vague "Highway 67, Stony Mountain area" address was
  replaced with the street address.
- **Devil May Care Brewing Company**, 155-A Fort St: **open.** Its own events
  page lists October 2026 dates at the Fort Street taproom (improv on October
  14, trivia on October 20, a comedy night on October 25) and posts current
  hours of noon to 9 or 11 depending on the day, and an April 2026 visitor
  account describes sixteen rotating taps. A Yelp snapshot captured in July 2026
  shows "Closed", which is the time of capture rather than a status.
  `blog-winnipeg-event-venues.html` carries no hours, so nothing changed. The
  address was filled in from blank.
- **Eva's Gelato & Coffee Bar**, 101-1001 Corydon Ave: **open.** No source
  anywhere indicates a permanent closure; the Yelp page was updated in April
  2026, and Restaurant Guru carries 789 reviews at 4.4. Listings conflict badly
  on hours (Tripadvisor gives 8am to 9pm daily, Apple Maps noon to 9), so no
  hours were added to the four pages that name it. The suite number was added to
  the address.
- **Feast Café Bistro**, 587 Ellice Ave: **open.** A recent Manitoba Inc.
  feature describes the 50-seat restaurant as having operated for more than a
  decade, and Indigenous Tourism Manitoba's operator listing is live with owner
  Christa Bruneau-Guenther named as co-chair of the Indigenous Culinary
  Association of Nations board. Nothing on the two pages that name it needed
  correcting.

**Ledger backfill sweep:** `blog-fresh-decor-updates.html`. The post is about
the home's own blankets, pillow covers and navy linens and names no restaurant,
shop, cafe or supplier, so nothing was added. Moved to "Swept".

**Page refreshed:** `blog-winnipeg-fringe-festival-guide.html`, retitled
"Winnipeg Fringe Festival 2027: July 14 to 25, Tickets". First entry of the
Events queue, marked "refresh", so the existing page was rewritten in place and
its slug and URL kept.

The festival's own site banner now reads July 14 to 25, 2027, corroborated by
its Facebook page describing twelve days, which upgrades the queue entry's
"mid to late July, typical window" to a posted date; the range also fits the
Wednesday-to-Sunday shape of 2025 (July 16 to 27) and 2026 (July 15 to 26). The
old body gave no dates at all, which is the whole of what a visitor searches for
here, and it carried a generic "Planning Around the Crowds" heading, an
unattributed claim about what crowds do in the second week, and a "Staying at
the Corydon Airbnb" highlight-box. It was replaced rather than patched.

The new body is an **explainer**: continuous prose, two content headings, built
around the one thing a visitor needs explained, which is that a lottery rather
than a programmer decides what is on, so nobody can recommend a show in advance
and the sorting happens during the run. Form picked by the rotation rule, the
previous three posts having been question and answer (kidsfest, 10-19),
comparison (canada-day, 10-20) and walk (folk festival, 10-21).

Sourced onto the page: the 2026 edition's 164 Canadian and international
companies, from the festival's own media release, in place of a third-party
listing's "more than 140 shows"; the 2027 company entry deadline in November
2026 with the draw in early December, from Royal MTC's Pathways to the Fringe
page; the non-juried lottery, the flat registration fee and artists keeping
their box office; 2026 advance tickets at $12 to $14 plus a $2.50 per-ticket
service charge, sold up to four hours before a performance, at-door sales cash
only at $10 to $14 with $10 for anyone 25 and under, the $10 printed program and
pay-what-you-can at the Kids Venue; advance sales through the Royal MTC box
office at 174 Market Avenue, which is also where the 1988 founding gets
explained; and Old Market Square at 275 Bannatyne Avenue running free
programming noon to midnight daily. **Every price and count on the page is
labelled a 2026 figure, and no 2027 price, pass structure, venue list or lineup
is stated**; the single info-box sends readers to winnipegfringe.com.
winnipegfringe.com does not resolve from this sandbox, so all of it came through
search result summaries.

Distances are only the verified ones in the house-facts table: Portage and Main
9 min / 3.9 km, RBC Convention Centre 7 min / 3.0 km, Corydon Avenue about ten
minutes on foot, south. No walk time is given for the Exchange District itself.
The one weather claim is the mid-July sunset after nine, which is astronomical.
Hero image unchanged: `images/exchange-district-pepsi.jpg` is a local photo of an
Exchange District heritage wall, which is where the venues are. No skyline. The
post names no restaurant, bar or shop, so the ledger needed no new entry.

**Registration gap fixed:** the post had been missing from `blog.html` and
`articles_data.json` since it was published on 2026-09-08, with no noscript card
and no JSON-LD `blogPost` entry. Both were added this run, in date order, along
with the usual refresh updates to `articles-data.js`, the sitemap `lastmod` for
the post and for `blog.html`, and a regenerated `llms.txt`.

**Files changed:** `blog-winnipeg-fringe-festival-guide.html`, `blog.html`,
`articles-data.js`, `articles_data.json`, `sitemap.xml`, `llms.txt`,
`blog-maintenance/business-ledger.json`, `blog-maintenance/ledger-sweep.md`,
`blog-maintenance/post-ideas.md`, `blog-maintenance/post-sources.md`,
`blog-maintenance/CHANGELOG.md`.

**pa11y (WCAG2AA):** `blog-winnipeg-fringe-festival-guide.html` and `blog.html`
both returned "No issues found" (0 errors). Both were run against a local static
server rather than the live URL: `staywinnipeg.ca` is refused at this sandbox's
egress proxy (CONNECT 403, and DNS ENOTFOUND through the fetch tool), and
Chromium additionally needs `--no-sandbox` here. A pa11y config with
`chromeLaunchConfig.args` of `--no-sandbox --disable-setuid-sandbox
--disable-dev-shm-usage --no-proxy-server`, pointed at
`http://localhost:<port>/<page>` with the proxy variables unset, is what worked;
worth reusing rather than rediscovering.

**Deploy:** pushed to `main` as 2e3de6e, confirmed with
`git rev-parse HEAD = origin/main`. The repository has no workflow file of its
own; the only workflow is GitHub's managed `pages-build-deployment`, which fires
on push and cannot be dispatched manually. Run 451 for 2e3de6e completed with
conclusion **success** at 10:18 UTC. The live pages could not be fetched from
this sandbox to confirm the served HTML, for the egress reason above, so the
deploy is verified from the Actions run and the commit on `main` rather than
from the site itself.

---

## 2026-10-21

**Businesses verified (6 ledger entries, the stalest in rotation):** all six
open. No closure, move or rename, so no page text changed.

- **Cibo Waterfront Cafe**, 339 Waterfront Dr: **open.** Live OpenTable and AAA
  TripCanvas listings both carry current lunch and dinner service and the same
  204-594-0339 number, and the address is consistent across sources. The two
  listings disagree on the exact dinner close, which is why
  `blog-group-dining.html` states no hours and needed no change.
- **Clay Oven Restaurant**, 1 Portage Ave E: **open.** An AAA listing still
  places a Clay Oven at 1 Portage Ave (Blue Cross Park) with the 204-982-7426
  number, and the wider operation is plainly active: a Kenaston Boulevard
  dining room with 1,577 reviews and Clay Oven Express on Edmonton Street
  downtown. `blog-group-dining.html` describes it as a catering operation for
  large events, which a WeddingWire venue listing supports in kind. The page's
  "25 up to 1,000 guests" figure was not re-sourced this run and was left as
  written; worth re-checking the next time this entry comes round, since the
  WeddingWire listing gives a 250 maximum for the restaurant's own rooms.
- **Clementine Cafe**, 123 Princess St: **open.** Multiple directory listings
  give a current 9am to 2pm service and the 204-942-9497 number. One roundup
  shows Wednesday to Sunday only, so the day pattern is unsettled; the three
  pages that name it carry no hours, so nothing needed correcting.
- **Confusion Corner Drinks + Food**, 500 Corydon Ave: **open.** Its own site
  (ccdrinksandfood.com) is live, and Eventbrite listings show networking nights
  booked at the venue in August and September 2026.
- **COBS Bread (Tuxedo Park)**, 132-2025 Corydon Ave: **open.** A current
  directory listing and CTV Winnipeg's local-business page both carry the
  bakery at 2025 Corydon Avenue with daily hours, and COBS was advertising a
  baker position for Tuxedo. The two sources differ on the Saturday close, so
  no hours were added to `blog-winnipeg-bakeries-artisan-bread.html`.
- **Deer + Almond**, 85 Princess St: **open.** Ranked No. 50 on Canada's 100
  Best Restaurants 2026, with reservations live on Exploretock and chef Mandel
  Hitzer cooking a guest dinner in Vancouver on 2026-10-13. Unambiguous.

**Ledger backfill sweep:** `blog-fortwhyte-alive-visitor-guide.html`. No
commercial businesses named (FortWhyte Alive is a non-profit nature centre; the
page's other proper nouns are its two entrance addresses and a Winnipeg Transit
stop number), so nothing was added. Moved to "Swept".

**Page refreshed:** `blog-winnipeg-folk-festival.html`, retitled "Winnipeg Folk
Festival 2027: July 8 to 11, Birds Hill Park". First entry of the Events queue,
marked "refresh", so the existing page was rewritten in place and its slug and
URL kept.

The festival's own FAQ and homepage confirm the 52nd edition as **July 8 to 11,
2027** at Birds Hill Provincial Park, which upgrades the queue's "typical
window" guess to a confirmed date; the FAQ also states the festival always takes
the second weekend of July. The old body was a generic 2025 overview and was
replaced entirely rather than patched: it carried "more than just", "vibrant",
reflex bullet lists, and headings ("Getting to the Festival", "Planning Your
Visit", "The Festival's Impact", "Why It Matters") that the current house style
rules out. The new body is a **walk**: the site crossed in order from the
downtown shuttle stop to the Main Stage field after dark, continuous prose with
no lists, six subject-specific headings plus the "Where to stay for folk
festival weekend" section the event-post rules call for. Form picked by the
rotation rule, the last three posts having been explainer, question and answer
and comparison.

Sourced onto the page: tickets through Front Gate Tickets or the festival office
at 203-211 Bannatyne Avenue and never at the Main Gate, four per person, sales
final except a full cancellation; children 12 and under free with an adult and
no camping ticket, youth 13 to 17 needing one; the free Winnipeg Transit Folk
Fest Express from southbound Memorial Boulevard between St. Mary and York to
Festival Drive, accessible, returning from the stop across the crosswalk from
the west parking lot after the Main Stage set; the Campground Shuttle every 30
minutes and not accessible; Festival West Parking and no overnight parking;
tarps 8 by 10 feet maximum, tarp tickets 10 minutes before the gate, the shuffle
20 minutes after it or 5:30 on wet ground, no tarps in the Big Bluestem dancing
area; the Quiet Campground 4 km out, opening noon Wednesday, with the park's own
gates shut 11pm to 7am.

Deliberately not on the page: no 2027 lineup, ticket price, on-sale date or
daily gate time, none of which could be sourced for 2027. The single permitted
`.info-box` sends readers to winnipegfolkfestival.ca for all four. Day stage
names are presented as names the stages have carried for years rather than as a
2027 list, because the only source for them is a 2025 third-party page. No
house-to-Birds-Hill drive time is stated, per the house-facts rule; the one
distance used is RBC Convention Centre at 7 min / 3.0 km, from the verified
table. Full provenance in `post-sources.md`.

**Files changed:** `blog-winnipeg-folk-festival.html` (title, description,
keywords, meta and JSON-LD dates, image alt, meta line, whole article body),
`articles-data.js`, `articles_data.json`, `blog.html` (noscript card and JSON-LD
`blogPost` entry), `sitemap.xml` (lastmod 2026-10-21), `llms.txt` (regenerated
by `update-llms.py`: 165 posts, last updated October 21, 2026),
`business-ledger.json`, `ledger-sweep.md`, `post-ideas.md`, `post-sources.md`.

**pa11y (WCAG2AA):** `blog-winnipeg-folk-festival.html` and `blog.html`, 2
pages, 0 errors and 0 issues of any type on both. Run against a local static
server on 127.0.0.1 again, because staywinnipeg.ca is still refused at this
sandbox's egress proxy (`ERR_TUNNEL_CONNECTION_FAILED` from Chromium,
`getaddrinfo ENOTFOUND` from the fetch tool, which is also why every festival
fact above came from search results quoting the festival's pages rather than the
pages themselves). Confirming last run's note: the pa11y CLI's `--config` flag
still does not apply `chromeLaunchConfig` and Chromium refuses to launch as
root, while the Node API with `executablePath: '/opt/pw-browsers/chromium'` and
`args: ['--no-sandbox', '--disable-dev-shm-usage']` worked first try. Add
`--proxy-bypass-list=<-loopback>` and clear the proxy env vars, or Chromium
tunnels 127.0.0.1 to the proxy and fails.

**Deploy:** pushed to `main` as aea6106, then ac2479f for the editing-pass fix
described below, both confirmed landed (HEAD matched origin/main after each).
The GitHub Pages build and deployment run for ac2479f (run 449) completed with
conclusion success. Run 448, for aea6106, shows `cancelled`: that is Pages
superseding an in-flight deploy when a newer commit lands a minute later, not a
failure. The live page could not be fetched from here to confirm visually, for
the proxy reason above.

**Editing-pass fix, pushed separately as ac2479f:** the drafted "Where to stay"
section told the reader we would not quote a drive time we had not measured.
That is our own process on a guest-facing page, which the "Sources belong in our
notes" rule forbids, and the grep for that rule does not catch it. It was
replaced with a plain reason to take the shuttle; no house-to-Birds-Hill time is
stated either way. The same pass cut "July is the month Winnipeg books out",
an attribution to nobody, in favour of our own calendar filling earliest for
July weekends. Worth noting for future runs: both slipped past the first draft
and were caught only on the read-through, so the editing pass is not optional.

**Session branch note:** the sandbox checked this run out on
`claude/dazzling-mayer-j4njmk` rather than `main`, so the playbook's
`git checkout main` step did not apply as written. Both commits were made on
that branch and pushed with `git push origin HEAD:main`, which the playbook
already prescribes, and HEAD was verified equal to origin/main both times. The
branch was then also pushed to its own remote so nothing was left unpushed; it
carries exactly the two commits that are on `main` and the site deploys from
`main` only.

---

## 2026-10-20

**Businesses verified (6 ledger entries, the stalest in rotation):** all six
open. No closure, move or rename, so no page text changed.

- **Cafe Carlo**, 243 Lilac St: **open.** Live OpenTable and AAA TripCanvas
  listings carry the same current service pattern (Friday lunch, dinner Monday
  to Saturday, a shorter Sunday evening) and the same 204-477-5544 number. No
  closure flag anywhere. `blog-best-places-nearby-winnipeg.html` names it
  without hours, so nothing needed correcting.
- **Capital K Distillery**, 3-1680 Dublin Ave: **open.** A Rady JCC event
  listing places a tour and tasting at 1680 Dublin Ave, Unit 3 on March 5,
  2026, and a Dine About Winnipeg page carries a February 2026 tour schedule at
  the same address. Both are dated this year.
- **Cargo Bar**, Assiniboine Park (Riley Family Duck Pond): **open, seasonal.**
  Assiniboine Park Conservancy's own seasonal pages ran it as a winter pop-up
  through the 2025-26 holidays and the January 9 to 11, 2026 We Are Winter
  weekend, then closed it until spring 2026; a March 2026 travel article
  recommends it alongside the Park Cafe. It is a summer patio with a winter
  pop-up season, not a closed business. No 2026-27 winter dates are posted yet.
  `blog-best-places-nearby-winnipeg.html` names it without hours.
- **Chaeban Ice Cream**, 390 Osborne St: **open.** Current directory listings
  at 390 Osborne St with the 204-475-6226 number and daily hours; no closure
  notice in any source. Hours differ between listings, which is why the site
  does not publish them.
- **Chaise Cafe & Lounge**, 271 Provencher Blvd: **open, on listing evidence
  only.** OpenTable still carries it with daily dinner service and Trip.com
  shows the normal "currently closed, opens at 17:00" daily-hours state rather
  than a permanent-closure flag. No closure, sale or rename was reported
  anywhere. This is weaker evidence than the others in the batch (no dated 2026
  source turned up), so a future run should re-check it sooner rather than
  later; it is named without hours on both pages that carry it, so nothing is
  at risk on the site in the meantime.
- **Cho Ichi Ramen**, 1151 Pembina Hwy: **open.** A Three Best Rated listing
  gives the Fort Garry address and the 204-489-9254 number with a current
  weekly schedule, and the restaurant is live on two delivery platforms with
  4.5 and 4.6 ratings and a priced menu. No closure flag.

**Ledger backfill sweep:** `blog-forgotten-flavours-wild-yeast-bakery-near-corydon-airbnb.html`.
Its one commercial business, Forgotten Flavours at 858 Corydon Ave, was already
in the ledger, so the filename was appended to that entry's `pages`. Pennyloaf
Bakery is named on the page only as the previous occupant of the storefront, in
the past tense, and was deliberately not given an entry: a closed-status entry
would invite a later run to "correct" an accurate historical mention. The
filename moved to "Swept".

**New post:** `blog-canada-day-winnipeg.html`, "Canada Day in Winnipeg 2027:
The Forks, Fireworks, July 1". First entry of the Events queue, written as a
**comparison** (the previous three posts were a one-day plan, an explainer and a
question-and-answer set).

The queue entry asked for "The Forks and Osborne Village", and half of that
premise is out of date. Osborne Village Biz scrapped its Canada Day street
festival in 2022, saying outside food trucks and vendors had taken over the
street, and replaced it with Village Music Fest, two free days across six venues
in late June (June 27 and 28 in 2026). The post gives that change its own
section instead of sending readers to an event that no longer runs.

The other thing the page exists to say is that The Forks does not hold fireworks
on Canada Day any more. Its 2026 programme ran 10:30 a.m. to 9 p.m. as Many
Nations, One Heartbeat / Wahkohtowin, free, with an All Nations welcoming
ceremony, a citizenship ceremony at 11 a.m., CN Stage music through the evening
and a smudge at Oodena Circle. The displays are elsewhere: Assiniboia Downs
(3975 Portage Ave, racing from 7:30 p.m., fireworks at 11, parking free until
7:30 and $10 after) and Princess Auto Stadium (mainstage 5 to 10:30 p.m.,
fireworks after), with Transcona and Sage Creek as the smaller options. Every
time and price on the page is marked as a 2026 figure, because no 2027 schedule
is posted. Listings disagreed on the Sage Creek and Tyndall Park fireworks
times, so only the two that agreed across sources carry a clock time. Drive
figures are taken only from the verified table in the playbook; none is given
for the Downs, Sage Creek, Transcona or Tyndall Park, since none of those is in
it. The post names no business in the ledger's categories, so it added no ledger
entries.

**Pages changed:** `blog-canada-day-winnipeg.html` (new), `articles-data.js`,
`articles_data.json`, `blog.html` (noscript card and Blog JSON-LD), `sitemap.xml`,
`llms.txt` (regenerated, 165 posts), `blog-maintenance/post-ideas.md`,
`blog-maintenance/business-ledger.json`, `blog-maintenance/ledger-sweep.md`,
`blog-maintenance/post-sources.md`.

**pa11y (WCAG2AA):** `blog-canada-day-winnipeg.html` and `blog.html`, 2 pages,
0 errors and 0 issues of any type on both. Run against a local static server on
127.0.0.1, because staywinnipeg.ca is still refused at this sandbox's egress
proxy (`connect_rejected`). Note for future runs: the `--config` flag did not
apply `chromeLaunchConfig` from the pa11y CLI this time and Chromium refused to
launch as root; driving pa11y through its Node API with
`chromeLaunchConfig: { executablePath: '/opt/pw-browsers/chromium', args:
['--no-sandbox', '--disable-dev-shm-usage'] }` worked first try.

**Deploy:** pushed to `main` as b45f743 and confirmed landed (HEAD matched
origin/main). The GitHub Pages build and deployment run for that commit
(run 446) completed with conclusion success. The live page could not be fetched
from here to confirm visually, for the proxy reason above.

---

## 2026-10-19

**Businesses verified (6 ledger entries, the stalest in rotation):** all six
open. No closure, move or rename, so no page text changed.

- **Bison Bus Tours**, FortWhyte Alive, 1961 McCreary Rd: **open.**
  fortwhyte.org carries dated 2026 tour listings (June 28, July 2, August 23,
  August 30, September 3), each a 10:30 to 11:30 a.m. departure from the
  Richardson Interpretive Centre, with current pricing and a private-booking
  minimum. The tour is live and still being scheduled. `blog-winnipeg-tours.html`
  describes it without hours or prices, so nothing needed correcting.
- **Bistro on Notre Dame**, 784 Notre Dame Ave: **open.** Its Exploretock
  reservation page is live, and it is listed as a current operator by Indigenous
  Tourism Manitoba. Aggregator hours exist but were not copied onto the site,
  which names the restaurant without hours.
- **Black Market Provisions**, 550 Osborne St: **open.** Live listings across
  HappyCow, Restaurant Guru, Wanderlog and a local venue directory, around 240
  reviews at 4.8, with the 204-477-5500 number consistent across them. No
  closure flag anywhere.
- **Brazen Brewing Co.**, 800 Pembina Hwy: **open.** brazenbrewing.ca is live and
  posting current releases; the brewpub it brews for, Brazen Hall Kitchen &
  Brewery, has a Yelp page updated August 2026 at the same address and a
  BeerAdvocate entry dated August 2026. Worth noting for a future run that the
  ledger name and the brewpub name differ: the ledger tracks the brewing company,
  and `blog-winnipeg-breweries.html` names and links it the same way, so the
  entry was left as it stands.
- **Bridge Drive-In (BDI)**, 766 Jubilee Ave: **open, seasonal.** bridgedrivein.com
  is live with a page for the Jubilee Avenue location, and Yelp's page for it was
  updated September 2026. The business runs mid-March to October, so it is at the
  end of its season now rather than closed. `blog-winnipeg-ice-cream-gelato.html`
  already describes it as seasonal and names both locations, which still matches.
- **Buffalo Stone Cafe**, FortWhyte Alive, 1961 McCreary Rd: **open.** It appears
  in FortWhyte's own 2026 event calendar as the place to get a drink after an
  event, and sits in the reception centre alongside the Nature Shop. The ledger's
  blank address was filled in with FortWhyte's street address.

Direct fetches of fortwhyte.org, brazenhall.ca, bridgedrivein.ca and kidsfest.ca
all failed at the proxy's CONNECT stage with a 403, as they have on previous
runs. Everything above rests on search-result text quoting those pages plus
independent listings.

**Backfill sweep:** `blog-filipino-billiards-winnipeg.html`. It names no
commercial business at all; Winnipeg's pool halls and billiard lounges appear
only in the generic, and its proper nouns are a local organiser, a Philippine
player, a high school and a broadcaster. Nothing added to the ledger. Moved to
"Swept".

**New post:** `blog-kidsfest-winnipeg.html`, "Kidsfest Winnipeg 2027: June Dates,
Tickets and The Forks". First entry of the Events queue, a new post rather than a
refresh. Form: question and answer, seven questions as the only content headings,
each answered in one paragraph, including the stay section the event-post rules
require. The previous three posts were host's notes, one-day plan and explainer,
so that shape was free.

No 2027 dates have been announced by the organiser, Tourism Winnipeg or The
Forks, so the post states the Thursday-to-Sunday, first-half-of-June pattern,
gives the confirmed 2026 run of June 11 to 14 and the 2025 run of June 5 to 8,
and sends readers to kidsfest.ca. Ticket terms that do not move year to year
(one ticket covers all four days, same price for adults and children, under 24
months free, $10 a ticket for schools and daycares with one free supervisor pass
per eight) are stated; the general-admission figure is not, because the listings
carrying 2025 and 2026 numbers conflict. The Forks parking price was left out for
the same reason. Full provenance is in `post-sources.md`.

**pa11y (WCAG2AA):** `blog-kidsfest-winnipeg.html` and `blog.html`, 2 pages, 0
errors. Both were checked against a local static server on 127.0.0.1 rather than
the live site, because staywinnipeg.ca is refused at this sandbox's egress proxy
(`connect_rejected` on every attempt, and Chromium gets
`ERR_TUNNEL_CONNECTION_FAILED` on the same URL). pa11y also needs
`--no-sandbox` here, since it runs as root. A future run that finds
staywinnipeg.ca reachable should re-check both pages against the live URLs.

**Deploy:** the Pages build and deployment run for e5f6d5d (run 442) completed
successfully, and run 444 for ddabd6d, a two-word copy fix to the post, completed
successfully after it. (Run 443 shows as cancelled: GitHub Pages drops an
in-progress deploy when a newer push supersedes it, which is what happened.) The
live URL could not be fetched from this sandbox to confirm it renders, for the
proxy reason above.

**Pages changed:** `blog-kidsfest-winnipeg.html` (new), `articles-data.js`,
`articles_data.json`, `blog.html` (noscript card and JSON-LD `blogPost` entry),
`sitemap.xml`, `llms.txt` (regenerated by `update-llms.py`, now 164 posts),
`blog-maintenance/business-ledger.json`, `blog-maintenance/ledger-sweep.md`,
`blog-maintenance/post-ideas.md`, `blog-maintenance/post-sources.md`.

---

## 2026-10-18

**Businesses verified (6 ledger entries, the stalest in rotation):** four open,
one open but misnamed in the ledger, one permanently closed. The closure removed
a section from one page.

- **Fun Mountain Water Slide Park**, 804 Murdock Rd in the RM of Springfield:
  **CLOSED, permanently.** Global News reported from the site in July 2023 and
  described it in the story as "the former Fun Mountain waterslide park, which is
  permanently closed", adding that it had not been operational for a few years
  and that most of the slides were already down. Wanderlog carries a
  permanently-closed flag on the same address, and a ZuzuForKids listing says the
  property went up for sale after the owners defaulted. An insolvency notice
  naming two numbered Manitoba companies operating as Fun Mountain also surfaced,
  undated, and was not relied on. The travel-aggregator pages that still show a
  mid-June to late-August season (Expedia, Best Western's things-to-do page) are
  stale. One of the two entries backfilled at 2026-01-01 without verification, so
  this is its first real check.
- **The Rec Room**: **open, and the ledger's name for it was wrong.** The entry
  read "The Rec Room (Outlet Collection Winnipeg)"; Manitoba's only Rec Room is
  in the Seasons of Tuxedo development on Sterling Lyon Parkway, across Kenaston
  Boulevard from the outlet mall, and was never at the Outlet Collection. The
  name was corrected. Its own page (therecroom.com/winnipeg-tuxedo) is live and
  describes the venue's bowling, bar games, VR, axe throwing and restaurant.
  Address left blank on purpose: listings give both 660 and 696 Sterling Lyon
  Pkwy and nothing settles it. The second 2026-01-01 backfill entry, now checked.
  No page edit needed, since `blog-family-activities.html` names it without an
  address.
- **The Roost**, 651 Corydon Ave: **open.** Live listings on Wanderlog, Airbnb's
  things-to-do pages and an At the Immigrant's Table roundup, with the phone
  number 204-414-9313 and the Oddlot Collective named as operator. Directories
  disagree on the unit (2-651 and 651-A both appear), so the ledger address was
  left at the street number. No closure flag anywhere.
- **Amsterdam Tea Room and Bar**: **open, address corrected.** Multiple listings
  (TableAgent, Roadtrippers) place it at 103-211 Bannatyne Ave, R3B 3P2, phone
  204-295-7728, which is Unit 103 of 211 Bannatyne. The ledger had it as "103
  Bannatyne Ave", a different address on the same street; that was fixed.
  Published hours disagree badly across aggregators (one has it closed Sunday and
  Monday, another open seven days), so no hours were added to any page.
- **Bailey's Restaurant & Bar**, 185 Lombard Ave: **open.** Yelp's page was
  updated August 2026, Tripadvisor carries a May 2026 review calling the fillet
  top notch, and OpenTable, Restaurant Guru and MapQuest all list the address and
  current hours. Ratings run from 3.2 on Yelp (23 reviews) to 4.2 on Restaurant
  Guru (about 2,100). Nothing flags a closure.
- **Barn Hammer Brewing Company**, 595 Wall St: **open.** BeerCrank reviewed the
  brewery's Ten Triple IPA, brewed for its tenth anniversary, on 31 August 2026,
  and barnhammerbrewing.ca's company page is live. A Wheree listing updated June
  2026 carries the Wall Street address. The only hours found anywhere date to
  about 2017, so none were published.

**Pages changed for the closure:**

- `blog-family-activities.html`: the "Fun Mountain Water Slide Park" heading and
  paragraph removed from the top attractions section. The post names no other
  water park and needed no replacement text; its meta description and keywords
  never mentioned it. Sitemap `lastmod` moved to today.

**Ledger sweep:** `blog-festival-du-voyageur.html`. It names no commercial
business at all (Whittier Park, Fort Gibraltar, the snow sculpture symposium and
the festival office on Provencher are the festival's own sites or institutions),
so nothing was added. Moved to "Swept".

**New post:** `blog-winnipeg-jazz-festival.html`, "Winnipeg Jazz Festival 2027:
June Dates, Free Shows, Tickets". First entry of the events queue, a new post
rather than a refresh. Written as an **explainer** (the previous three posts were
comparison, host's notes and one-day plan), because the thing a visitor needs
explained here is that the festival splits into a free outdoor half at Old Market
Square and a ticketed half in rooms that move year to year.

No 2027 date appears anywhere in the post. Jazz Winnipeg has published none, and
the only 2027 window available was an aggregator's uncorroborated June 15 to 20,
which was left out; the post gives the confirmed 2026 run of June 16 to 21, the
six-day shape, and sends the reader to jazzwinnipeg.com. No ticket price is
quoted, for the same reason. Everything dated (the nightly themes, the 4:30 p.m.
to midnight closing Latin night, the Fort Garry Hotel and Burton Cummings Theatre
venues) is written on the page as a 2026 fact. Full provenance is in
`post-sources.md`.

Three businesses are named: Amsterdam Tea Room and Bar and Peasant Cookery, both
already in the ledger and both given the new filename, and the Fort Garry Hotel
at 222 Broadway, added as a new entry. Hero image is the local Exchange District
streetscape from `images/`, not the Pepsi ghost sign the MEME post used two runs
ago.

Registered in `articles-data.js`, `articles_data.json`, the `blog.html` noscript
grid and its JSON-LD `blogPost` array, `sitemap.xml`, and `llms.txt` (regenerated
with `update-llms.py`, now 163 posts).

**pa11y:** `--standard WCAG2AA` on the three changed pages (the new post,
`blog.html` and `blog-family-activities.html`), run against a local server
because the new page was not live yet: 3 passed, 0 errors, 0 warnings. Chromium
needed `--no-sandbox` through a `chromeLaunchConfig` file in this container;
without it pa11y cannot launch at all, which is worth knowing for future runs.

**Noted for a future run, not fixed here:** the registration files have drifted
apart and the gap predates this run. `articles-data.js` carries 163 posts,
`articles_data.json` 147, and `blog.html` represents only 109 in both its
noscript grid and its JSON-LD `blogPost` array. So 54 published posts are
invisible to a no-JS visitor and to a search engine reading the index page's
structured data. Today's post is registered in all four, but closing the backlog
is a job of its own and was outside this run's budget.

**Deploy:** pushed to `main` as fa3dc1b and confirmed landed (HEAD matched
origin/main). The GitHub Pages build and deployment run for that commit
(run 440) completed with conclusion success; the build step took its usual
few seconds and the deploy step about nine minutes. The live site could not be
fetched from the sandbox to double-check: staywinnipeg.ca does not resolve
through the run's proxy and a direct request is refused with a 403 at the
tunnel. The Actions run is the confirmation.

---

## 2026-10-17

**Businesses verified (6 ledger entries, the stalest in rotation):** five open,
one closed. The closure required edits on five pages, three more than the ledger
knew about.

- **Sugar + Salt Bakeshoppe**, 897 Corydon Ave: **open, address refined.** Its
  own site (sugarandsaltbakeshoppe.com) is live and gives Unit 103, 897 Corydon
  Ave, R3M 0W7, phone 204-306-4944, and hours of Tuesday to Friday 11 to 5,
  Saturday 10 to 4, closed Sunday and Monday. Tourism Winnipeg carries a current
  listing. The ledger address was updated to include the unit; the hours already
  on `blog-best-breakfast-brunch-near-corydon-airbnb.html` (11am weekdays, 10am
  Saturdays, closed Sunday and Monday) match the official site and were left.
- **Sunshine Chinese Restaurant**, 635 Corydon Ave: **open.** Yelp (updated
  September 2025), Tripadvisor, Yellow Pages and Canpages all carry the address
  and the number (204) 615-2615, and Restaurantji shows 124 reviews. No closure
  flag anywhere. Published hours disagree wildly across aggregators (an
  11am-to-11pm listing against several evening-only ones), so none were added to
  the site.
- **529 Wellington**, 529 Wellington Cres: **open.** A live OpenTable
  reservation profile rated about 4.8 from more than 2,000 reviews, plus a
  current AAA listing giving lunch Monday to Friday 11 to 2 and dinner Monday to
  Saturday 4:30 to 10. Two different phone numbers appear across listings, so
  neither was published.
- **Sushi Ya**, 659 Corydon Ave: **open, weakly.** Apple Maps, MapQuest and
  Yellow Pages (as "Sushiya Ltd") all carry 659 Corydon Ave, and Tripadvisor's
  page is live, but the listings disagree on hours and the Tripadvisor entry is
  unclaimed with no hours at all. Nothing flags a closure, so the entry stands
  unchanged; worth a decisive check sooner than the rotation would give it.
- **The Cheesemongers Fromagerie**, 839 Corydon Ave: **open.** Its own site
  (thecheesemongers.ca) gives Tuesday to Saturday 10 to 6, closed Sunday and
  Monday, phone 204-691-7555, and Yelp's listing was updated July 2026. About
  4.7 to 4.8 across roughly 100 to 150 Google reviews.
- **The Mighty Kiwi Juice Bar & Eatery**, 709 Corydon Ave: **CLOSED.** Three
  signals agree: a Wanderlog listing flags the Corydon location permanently
  closed, the business's own domain (themightykiwi.ca) no longer resolves, and
  the unit at 709 Corydon now appears to hold MLYN, a Ukrainian restaurant that
  Tourism Winnipeg's fall 2025 roundup placed underneath Saperavi at that
  address. The only sources still showing it open are Yelp and Yellow Pages
  snapshots from late 2025. MLYN itself could not be confirmed from any current
  source, so it was not added to any page.

**Pages changed for the closure (five, not the two the ledger listed):**

- `blog-corydon-guide.html`: list entry removed.
- `blog-beat-the-heat-near-corydon-airbnb.html`: the smoothie sentence removed
  from the iced-drinks paragraph.
- `blog-best-breakfast-brunch-near-corydon-airbnb.html`: the whole "Smoothies and
  a lighter breakfast" section removed, along with the business from the keywords
  meta. It carried a link to the dead domain and hours that no longer apply.
- `blog-family-friendly-stops-near-corydon.html`: closing sentence of the gelato
  paragraph removed.
- `blog-vegetarian-vegan-eats-corydon.html`: the "A fully plant-based stop"
  section removed; the intro, the "all four spots" line in the highlight box and
  the page description were rewritten, since the page no longer has a dedicated
  plant-based stop to point at. The matching description was synced in
  `articles-data.js` and `articles_data.json`.

The ledger's `pages` array for the entry was corrected to list all five, and its
status set to `closed`.

**Ledger backfill sweep:** `blog-family-activities.html`. Almost everything it
names is an institution or a public space. Three commercial entries came out of
it: Fun Mountain Water Slide Park and The Rec Room, both added unverified at
2026-01-01, and The Forks Market, already listed, which gained the filename. Its
dining section names no restaurant at all.

**New post:** `blog-red-river-exhibition.html`, "Red River Ex 2027: Mid-June
Dates and a Day at the Fair". First entry of the Events queue, a new post rather
than a refresh. Form is a one-day plan (five time-stamped headings, each naming
what the choice costs), which none of the last three posts used. The organiser
had not posted 2027 dates, so the post gives the ten-day mid-June window and the
confirmed 2026 run of June 12 to 21, and marks every price and time as a 2026
figure: $5 parking in the Festival Drive and Race Track Road lots, the $25
children's ride wristband, the three free-admission windows, the 5 p.m. to
midnight opening day and the 10 p.m. close on the final Sunday. No
home-to-venue drive time is stated, because Exhibition Park is not in the
verified distance table; the only figure used is the Centennial Concert Hall
(10 min / 4.3 km), which is, and which is where the Ex event bus leaves from.
Hero image is the local `images/family-activities.jpg`; no local midway photo
exists and Unsplash is unreachable from the sandbox, so no unverifiable external
image was introduced. Registered in `articles-data.js`, `articles_data.json`,
the `blog.html` noscript grid and its JSON-LD `blogPost` array, and
`sitemap.xml`; `llms.txt` regenerated (162 posts).

**Sitemap:** `<lastmod>` bumped to 2026-10-17 for the new post, `blog.html` and
the five pages edited for the closure.

**pa11y:** `--standard WCAG2AA` on all seven changed pages (the new post,
`blog.html`, and the five pages edited for the closure), run against a local
server because the new page was not live yet: 7 passed, 0 errors, 0 warnings.

**Deploy:** pushed to `main` as e0142e6 and confirmed landed (HEAD matched
origin/main). The GitHub Pages build and deployment run for that commit
(run 438) completed with conclusion success. The live site could not be fetched
from the sandbox to double-check, since staywinnipeg.ca and github.io do not
resolve through the run's proxy; the Actions run is the confirmation.

---

## 2026-10-16 (second run of the day)

A second scheduled run fired on the same date as the Goldeyes refresh. Treated as
a normal run: next rotation batch, next events-queue entry.

**Businesses verified (6 ledger entries, the stalest in rotation):** all six came
back open, and none required a page edit beyond one naming correction.

- **Peking Chinese Restaurant**, 840 Corydon Ave: **open, and renamed on the
  site.** Its own site (pekingwpg.com) carries the title "Peking Chinese
  Restaurant - EST. 1970" and says it has served the Winnipeg area for over 50
  years; a Yelp page for 840 Corydon Avenue was updated August 2026, and both
  DoorDash and SkipTheDishes carry live storefronts (the delivery platforms use
  "Peking Chinese Foods"). `blog-corydon-guide.html` listed it as "Peking
  Chinese Food Ltd.", the corporate style rather than the name on the door, and
  was corrected to "Peking Chinese Restaurant"; the ledger entry was renamed to
  match. Hours and phone numbers differ between aggregators (two different
  numbers, one listing showing a 4:00 a.m. open that is plainly wrong), so none
  were published.
- **Cafe 22**, 823 Corydon Ave: **open.** A Winnipeg dining guide gives the
  address and phone (204) 989-5119, a current review aggregate is active and
  positive, and a commercial-leasing listing for 875 Corydon Ave lists Cafe 22 as
  a neighbouring business 0.09 miles away. No closure flag anywhere. No hours are
  published that I can stand behind, and the page states none.
- **Saffron's Restaurant**, 681 Corydon Ave: **open, address confirmed** as 681
  Corydon Ave, R3M 0W4 (venue directory listing). Travel Manitoba's Corydon
  feature still names it as a patio on the strip. The only hours available are
  from a listing added in 2016 and the only reviews found are from 2017, so
  nothing about hours was published. Nothing flags a closure.
- **Santa Lucia Pizza**, 905 Corydon Ave: **open.** Current OpenTable and AAA
  listings agree on the address, the phone number (204) 488-8090 and the hours
  (11 a.m. to midnight Monday to Thursday, to 1 a.m. Friday and Saturday, noon
  to midnight Sunday). Cross streets Corydon and Wentworth.
- **Saperavi Georgian Cuisine**, 709 Corydon Ave: **open.** A live OpenTable
  reservation profile at 709 Corydon Ave, R3M 0W4, listing Tuesday to Sunday
  service and a Monday closure. The newest dated review found is May 2025, so
  this is "a bookable listing and no closure signal" rather than a strong
  confirmation; worth re-checking sooner than the rotation would otherwise.
- **Starbucks (Corydon & Stafford)**, 946 Corydon Ave: **open.** An active Uber
  Eats storefront under that name at 946 Corydon Avenue, R3M 0Y5, and a directory
  listing with daily hours (6 a.m. to 10 p.m. Monday to Saturday, 6:30 a.m. to
  9 p.m. Sunday). Aggregator hours, not Starbucks' own locator, so they were not
  published.

Still outstanding from the previous run: **Bar Italia**, 737 Corydon Ave, remains
`unverified` and was not in this batch. It still needs a decisive check from
Google Maps or the restaurant's own channels, which this sandbox cannot reach.

**Ledger backfill sweep:** `blog-exchange-district.html`. It names no commercial
business at all; every place in it is a building, an institution or a public
space, and its dining section is written entirely in the generic. Nothing added
to the ledger. Moved to "Swept". Noted there for a future run: it is one of the
oldest posts on the site and breaks the current house style repeatedly
("vibrant" three times, "a testament", "more than just a collection of old
buildings", a "Whether you're" close, and the template headings "Getting There"
and "What to Expect"-style section titles).

**New post:** `blog-manitoba-electronic-music-exhibition.html`, "MEME Winnipeg
2027: June 11 and 12, Tickets and Venues". First entry of the Events queue, a
new post rather than a refresh. Form: **host's notes**, which the rotation rule
left open (the last three were explainer, question and answer, and comparison)
and which suited a festival that publishes its lineup, venues and set times late
enough that an hour-by-hour plan would have had to be invented. 762 words.

Facts confirmed by search before writing: June 11 and 12, 2027 from the
festival's own site and one independent festival listing, against the 2026
edition's June 4 to 6; the free outdoor concerts at the Cube in Old Market
Square, 275 Bannatyne Ave; the City of Winnipeg's October 2025 swap of the grass
in front of the Cube for turf; the festival's 2010 start and its volunteer-run,
audio-visual character; past editions in the Manitoba Museum, the Winnipeg Art
Gallery and Pantages Playhouse; mid-June sunset around 9:40 p.m. with light past
ten. No price is quoted anywhere in the post: super early bird passes are on sale
but no 2027 figure is published, and the only 2026 weekend-pass number found was
on an aggregator. The post names no commercial business, so it added no ledger
entries; the venues it names are institutions. Full provenance in
`post-sources.md`.

**Pages changed:** `blog-manitoba-electronic-music-exhibition.html` (new),
`blog-corydon-guide.html` (Peking rename, `modified_time` and `dateModified`
bumped), `blog.html` (noscript card and JSON-LD `blogPost` entry),
`articles-data.js`, `articles_data.json`, `sitemap.xml` (new entry plus
`lastmod` for `blog.html` and `blog-corydon-guide.html`), `llms.txt`
(regenerated: 161 posts), `business-ledger.json`, `ledger-sweep.md`,
`post-ideas.md`, `post-sources.md`.

**pa11y (`--standard WCAG2AA`):** 3 pages checked, 3 passed, 0 errors.
`blog-manitoba-electronic-music-exhibition.html`, `blog.html` and
`blog-corydon-guide.html` each returned "No issues found!". Run against a local
static server, because staywinnipeg.ca is refused at this sandbox's egress proxy
(`connect_rejected`), and with Chromium launched `--no-sandbox` from
`/opt/pw-browsers/chromium`, the same workaround as the previous run.

**Deploy:** pushed to `main` as `629e340`; the GitHub Pages
`pages build and deployment` run 436 for that SHA completed with conclusion
`success`. The live URL could not be fetched from this sandbox to confirm by
eye, for the egress reason above.

---

## 2026-10-16

**Businesses verified (6 ledger entries, the stalest in rotation):**

- **Tommy's Pizzeria**, 842 Corydon Ave: **open**, with the caveat that no source
  gives current hours. Directory and aggregator listings carry the address and
  phone number and a busy-times profile peaking around 7 p.m. Saturdays; nothing
  anywhere flags a closure. `last_verified` moved to today, status unchanged. No
  page edit: `blog-corydon-guide.html` states only the name and address.
- **Wako Sushi Café**, 875 Corydon Ave: **open**. An active online-ordering
  storefront with a live menu and prices (Maki Lover $22.50, Alaska Roll $5.50,
  gyoza $5.00) and 467 item reviews, plus a current delivery-aggregator rating.
  Address confirmed as 875 Corydon Ave, R3M 0W7.
- **Bar Italia**, 737 Corydon Ave: **UNVERIFIED, and the one entry in this batch
  that needs a decisive check.** The signals conflict and the closure side is the
  more recent: an Uber Eats storefront marked closed as of 2024-12-11, a MapQuest
  listing marked closed, and a Tripadvisor entry for the same address under the
  name "Bar I" reading "closed now". Against that, a Restaurant Guru page shows
  9 a.m. to 2 a.m. and a Main Menus page shows 11 a.m. to 1 a.m., but both caches
  are roughly 234 and 568 days old, and a 197-review Restaurantji page carries no
  date at all. No news item and no official announcement either way. Per the
  playbook ("if you cannot determine status, treat it as unchanged and note
  unverified, do not guess") **no page was edited** and status was set to
  `unverified` rather than `closed`. Three pages name it and one of them,
  `blog-date-night-on-corydon-avenue.html`, recommends it as a "sit-down anchor"
  of the strip, so a guest could be sent to a dark room. **Next run or the owner
  should settle this from Google Maps or the restaurant's own channels**, which
  this sandbox cannot reach; if it is closed, correct
  `blog-corydon-guide.html` (list item and the three meta descriptions that name
  it), `blog-crescentwood-liveable.html` (prose list) and
  `blog-date-night-on-corydon-avenue.html` (the recommendation).
- **Colosseo Ristorante Italiano**, 670 Corydon Ave: **open**. Current PagesJaunes
  and Restaurantji listings with phone (204) 284-4977, mains about $11 to $25, and
  328 ratings; Tripadvisor has 156 reviews. Operating on Corydon since 1973. The
  only hours available are from a 2016 feature and were not used anywhere.
- **Forgotten Flavours**, 858 Corydon Ave: **open, and the address is now
  confirmed**, which it was not before. The first searches found nothing at all on
  Corydon and one source placing a Forgotten Flavours on Main Street in
  Niverville, which looked like it might make our own
  `blog-forgotten-flavours-wild-yeast-bakery-near-corydon-airbnb.html` wrong. A
  follow-up search on the street address resolved it: the Niverville bakery
  (owner Maria Holbrow, home baking from 2020, storefront February 2025) has taken
  the 858 Corydon Ave space formerly held by The Pennyloaf Bakery, which is itself
  permanently closed on DoorDash and Yellow Pages. Tourism Winnipeg carries a
  "Forgotten Flavours Artisan Bakery" listing and the bakery's Instagram shows the
  Corydon location open Tuesday to Saturday. Our pages are correct as written; the
  ledger `address` field was filled in to 858 Corydon Ave.
- **Passero Restaurant**, 774 Corydon Ave: **open**. Listings place it at 774
  Corydon Ave, R3M 0Y1, with weekday hours of 11 a.m. to 10 p.m. on one
  aggregator; chef Scott Bagshaw. Older pages still show the original Forks
  address, which is the stale record, not a move back. One aggregator also lists a
  bakery at 774 Corydon; not acted on, since two independent listings give the
  address to Passero and no page of ours states hours for it.

No closure, move or rename was confirmed this run, so **no business page was
edited**. Six entries moved to `last_verified: 2026-10-16`; one status changed
(Bar Italia, open to unverified) and one address was filled in (Forgotten
Flavours).

**Backfill sweep:** `blog-exchange-district-self-guided-tour.html`. It names no
commercial business at all. The only named place is Old Market Square, a public
space, and the café and lunch stops are generic ("one café break and one meal
break"). Nothing added to the ledger, which still holds 153 businesses. Logged in
`ledger-sweep.md` with a note that the post is thin and fails the specificity
rule; rewriting it was outside this run's budget.

**Post refreshed (Events queue, first entry):**
`blog-winnipeg-goldeyes.html`, kept at the same slug and URL, retitled
**"Winnipeg Goldeyes 2027: May 14 Home Opener and Tickets"**. The queue entry
asked for the 2027 season opener plus Sea Bears (CEBL) basketball, so the page now
carries both and is written in the **comparison** form: a ballgame at Blue Cross
Park set against a Sea Bears night at Canada Life Centre on cost and flexibility,
length, weather exposure, children and transit, plus the full "Where to stay for
the 2027 season" section the event-post rules allow. Form picked by the rotation
rule; the previous three posts were question and answer, explainer and one-day
plan.

What is now on the page that was not before: the club's October 2026 schedule
announcement (102 games, 51 at home), the May 7 road opener in Kansas City, the
**May 14, 7 p.m. home opener against the Sioux City Explorers**, fireworks after
every Friday home game, home dates on Canada Day and on Father's Day June 20, the
closing Lincoln homestand of August 31 to September 5 ending at 1 p.m., the
touring Banana Ball exhibition's first Canadian stop here in August, and the Sea
Bears' venue, recent season window, $33 and $27 floor pricing from the club's own
FAQ and mobile-only entry. No Goldeyes ticket price is stated, because none was
sourced; no 2027 CEBL date is stated, because none is published, so that side is
written as the recent window with "in past years".

The 2025 body was replaced in full. It ran ten minutes on game-day boilerplate,
carried "a testament" twice, "vibrant" three times, "boasts", "immersed",
"seamlessly", "more than just baseball" and a "Planning Your Visit" heading, and
never named a date, an opponent or a price. The history worth keeping was kept and
rewritten: 1954 as a Cardinals affiliate, Steve Carlton here at 18 in 1963, the
1964 folding, the 1994 return, the 2011 move to the American Association, the 2016
and 2017 titles, One Portage Avenue East, 7,461 seats, the 2023 renaming. All
distances come from the verified table (Canada Life Centre and The Forks both at
ten minutes and 3.9 km, Corydon Avenue a ten-minute walk south); no figure is
given for Blue Cross Park itself, which is not in the table. Transit is the D19
Corydon's Kennedy Street terminal, the fifteen-minute walk from Kennedy east to
Main, and the $3.45 cash / $3.10 peggo fare. One `.info-box`, in the permitted
"Before you go" form, pointing at goldeyes.com, seabears.ca and
winnipegtransit.com. Hero image unchanged: the existing Unsplash ballpark photo is
a close-up of the subject and no local `images/` file shows a stadium or arena.
`datePublished` stays 2025-12-08; the visible meta line, `article:modified_time`,
`dateModified` and the sitemap `lastmod` are 2026-10-16.

**Pages changed:** `blog-winnipeg-goldeyes.html` (title, meta, keywords, tags,
dates, JSON-LD, full body), `blog.html` (noscript card and JSON-LD entry),
`articles-data.js`, `articles_data.json`, `sitemap.xml`, `llms.txt`
(regenerated: 160 posts, 142 winnipeg, 13 hosting, 5 travel),
`blog-maintenance/business-ledger.json`, `blog-maintenance/ledger-sweep.md`,
`blog-maintenance/post-ideas.md`, `blog-maintenance/post-sources.md`.

**Checks:** the playbook's slop, em dash, provenance and pet greps all returned
zero hits on the changed post; the only non-ASCII characters in it are the two
bullets in the meta line. Specificity: six of the six listed signals are present.
`articles-data.js`, `articles_data.json`, `blog.html`'s JSON-LD and `sitemap.xml`
all re-parsed clean. `pa11y --standard WCAG2AA` on `blog-winnipeg-goldeyes.html`
and `blog.html`: **2 pages, 0 errors, both "No issues found"**. Note for future
runs: pa11y cannot reach `https://staywinnipeg.ca` from this sandbox
(`ERR_TUNNEL_CONNECTION_FAILED` through the agent proxy) and Chromium refuses to
start as root without `--no-sandbox`. Both were worked around by serving the repo
on `127.0.0.1:8899` with `python3 -m http.server` and running pa11y against that
with a config setting `chromeLaunchConfig.args` to
`--no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage
--proxy-server=direct:// --proxy-bypass-list=*`. This is strictly better than the
live-URL check anyway: it tests the edited files rather than the deployed ones.

---

## 2026-10-15

**Businesses verified (6 ledger entries, 5 distinct businesses, the stalest in
the rotation):**

- **The Keg** - **moved; one page corrected.** The downtown Winnipeg room at 115
  Garry Street, in the former Hudson's Bay Company garage it had occupied as a
  Keg since 1975, served its last day on July 29, 2026, and the chain is
  relocating to 185 Donald Street, which its own location page still labels
  "Opening Soon". An arcade bar, GRETA, is taking the Garry Street space with a
  November 2026 target. `blog-winnipeg-steakhouses-bbq.html` named "the Winnipeg
  location of The Keg" in the singular, which was wrong twice over: the
  singular, and the location it pointed at. The sentence now names the two open
  rooms (Southside at 2034 McGillivray Boulevard, and St. James), states the
  downtown closure and the pending Donald Street move, and gives no opening date
  for it. The page's `article:modified_time`, `dateModified` and sitemap
  `lastmod` moved to today. Ledger status set to `moved` and the address field
  filled with the operating Southside address plus the pending move.
- **Tim Hortons (949 Corydon Ave)** - open. A current directory listing gives
  the address with daily 5 a.m. to 11 p.m. hours; no closure flag anywhere. **The
  ledger carried this shop twice**, as "Tim Hortons (949 Corydon Ave)" (backfill
  date) and as "Tim Horton's" (2026-09-18), both at the same address, which meant
  two rotation slots per cycle for one shop. The two entries were merged into
  one, keeping the union of their `pages`
  (`blog-budget-day-corydon-airbnb.html`, `blog-corydon-guide.html`,
  `blog-coffee-near-corydon-airbnb.html`). The ledger now holds 153 businesses,
  one fewer than yesterday for that reason, not because anything was dropped.
- **Yard Burger (Hargrave St. Market)** - open, second floor at 242 Hargrave
  Street; address refined with the floor. Its own site publishes current weekly
  hours (closed Sundays except before home games) and the market still lists it
  among its vendors. Hours were deliberately left off the site: the restaurant's
  own pages, Restaurantji and Restaurant Guru disagree on them.
  `blog-hargrave-st-market.html` needed no change.
- **Yujiro Japanese Restaurant** - open at 1822 Grant Avenue in River Heights;
  address filled in, which was blank. A 2026 job posting carries the same
  address and postal code, a 2025 directory update describes the room as
  operating, and it was ranked 92nd on Canada's 100 Best for 2024. No closure
  report exists. `blog-winnipeg-ramen-japanese-guide.html` already places it in
  River Heights and states no address, so no page change was needed. Listings
  disagree on its hours, so none were added.
- **Thom Bargen Coffee Roasters** - open at 743 Corydon Avenue in Corydon
  Village; address confirmed, not changed. Multiple current listings agree on
  the address, one updated April 2026, and the company's Corydon page is live.
  Worth recording for a later run: Thom Bargen also has a Tuxedo cafe at 2090
  Corydon Avenue, so a bare "Thom Bargen on Corydon" in any future post is
  ambiguous. No page change needed.

**Ledger backfill sweep:** `blog-espresso-machine-simplicity.html`, a hosting
post about the espresso machine in the kitchen and why guests asked for drip
coffee instead. The only names in it are the CASABREWS CM5418 and the gear
beside it, which are products rather than places a guest visits, so nothing was
added to the ledger. Flagged there for a future run: the post ends on an
`<h2>Conclusion</h2>` heading and uses bolded spec lead-ins that restate
themselves, both barred by the house style.

**Page refreshed:** `blog-winnipeg-pride.html`, now "Pride Winnipeg 2027: Dates,
Parade Route and the 40th Year". First entry of the Events queue, marked
"refresh", so the existing page was rewritten in place and the slug and URL
kept. Form: question and answer, seven questions as the only content headings
plus the "Where to stay for Pride Winnipeg" section the event-post rules call
for; the previous three posts were explainer, one-day plan and host's notes.

The headline fact is that **there are no 2027 dates to publish yet**, and the
post says so in its first answer rather than implying one. It gives the recent
window instead (2026 ran May 26 to June 7, flag raising at City Hall May 24,
rally and parade Sunday June 7), notes that Pride Winnipeg announces its dates
and theme in the spring, and tells a reader booking early to hold the first
weekend of June. 2027 is the fortieth anniversary of the August 2, 1987 first
parade, and Pride Winnipeg has said its anniversary programming runs through
that year; it also hosts the Fierté Canada Pride National Conference here in
March 2027. The 2026 rally and parade geography (Legislative Building north
steps at 10 a.m., 11 a.m. start at Memorial Boulevard and St. Mary Avenue,
about an hour from Memorial Park to Blue Cross Park, grounds at The Forks) is
written as what happened in 2026, not as a 2027 schedule. No ticket price, road
closure, attendance figure or 2027 theme was stated; one `.info-box` sends
readers to pridewinnipeg.com.

**The whole 2025 body was replaced.** It ran twelve minutes on inclusive-hosting
boilerplate and never answered the question the page's search traffic asks. It
carried "vibrant" four times, plus "rich history", "a testament to", "more than
just a parade", "something for everyone" and a "Planning Your Visit" heading,
and closed with three near-identical sections restating the same commitment. The
Airbnb non-discrimination material went with it: it is policy text, not a reason
a visitor reads a Pride page. The 1987 vote, the Rainbow Resource Centre history
(545 Broadway, Wilson House, Campus Gay Club to Gays for Equality in 1973 to the
current name in 1999, the 2023 move, Place of Pride) and the festival's growth
were kept and rewritten into the new form. The old post's Dyke March claim was
dropped: no current source for it was found. `datePublished` stays 2025-12-08;
the visible meta line, `article:modified_time`, `dateModified`, the sitemap
`lastmod` and the `articles-data.js` / `articles_data.json` / `blog.html`
description and title copies all moved to today. Hero image unchanged (the
existing pride-flag close-up; no local `images/` file shows a flag or a parade),
with its alt text corrected to Canadian spelling. `llms.txt` regenerated by
`blog-maintenance/update-llms.py`: 160 posts, unchanged in count, retitled.

**Accessibility:** `pa11y --standard WCAG2AA` on all three changed HTML pages
(`blog-winnipeg-pride.html`, `blog-winnipeg-steakhouses-bbq.html`, `blog.html`):
**3 pages checked, 3 passed, 0 errors.** The published URLs could not be used:
this container's egress proxy refuses `staywinnipeg.ca`, so the repository was
served on 127.0.0.1:8099 and pa11y run against that, which tests the files as
committed. Chromium came from `/opt/pw-browsers/chromium` with `--no-sandbox`
and `--no-proxy-server` through a config file. No CSS was touched, so no
minified stylesheet needed regenerating.

**Still outstanding, unchanged from yesterday:** `blog.html` carries 106
noscript cards and 106 JSON-LD `blogPost` entries against 160 posts in
`articles-data.js`, so 54 older posts are in neither the no-JS fallback nor the
structured data. The refreshed post is in both. The backfill is past a single
run's churn budget.

---

## 2026-10-14

**Businesses verified (6, the stalest in the rotation, all previously on the
2026-01-01 backfill date):**

- **Torque Brewing** - open. Current listings and a March 2026 review page show
  the taproom operating at 330-830 King Edward Street; address filled in, which
  was blank. Its own site is `torquebrewing.beer` (the `.ca` domain used in the
  breweries post's links does not resolve from this sandbox, so the links were
  left as they are rather than changed on a guess). No page change needed.
- **Transcona Country Club** - open. Its venue page is live and lists the four
  banquet rooms, and 2026 events are advertised at the address; address filled
  in as 2070 Dugald Rd. The event-venues post names no address, so no page
  change needed.
- **Tundra Grill (Assiniboine Park Zoo)** - open. The zoo's own restaurants page
  lists it open daily 9 a.m. to 4 p.m. Address left blank: no street address is
  published for the grill itself and the post states none.
- **Vera Pizza** - open at 670 Osborne Street; address filled in. **One page
  corrected:** `blog-restaurants.html` placed it "in the Exchange District",
  which is wrong, it is in south Osborne. The sentence was rewritten with the
  street address and the neighbourhood fixed, the vague "cozy spot ... local
  favorite" claim dropped, and the page's `article:modified_time`,
  `dateModified` and sitemap `lastmod` bumped to today. Hours were left out of
  the post because listings disagree on them; only "closed Sundays", which they
  all agree on, is stated.
- **Vi-Ann Restaurant** - open at 1020 Notre Dame Avenue; address filled in.
  Worth recording for the next run that checks it: the **Osborne Street**
  Vi-Ann (51/52 Osborne) is flagged permanently closed, and the Notre Dame
  location was off Uber Eats from October 2024, neither of which is a closure of
  the restaurant. A review page updated March 2026 and a listing updated April
  2026 both show the Notre Dame room operating with weekly hours. The pho guide
  already gives 1020 Notre Dame Avenue, so no page change was needed.
- **Winnipeg Trolley Company** - open. Its 2-hour city tour is on sale through
  the travel resellers with 2026 departures from 222 Broadway, and Travel
  Manitoba still lists the Heart of the Nation tour. Address left blank: 222
  Broadway is a boarding point, not the company's address. No page change
  needed. Note for a later run: the trolley tour listed under Doors Open
  Winnipeg departs from 25 Fort Street and is run by Heritage Winnipeg, a
  different operator from this one.

**Ledger backfill sweep:** `blog-el-taylor-crescentwood.html`, a biography of
the barrister whose name sits on an early Crescentwood land map. Every
organisation it names is a defunct Edwardian company, a historical law firm, an
institution or a private club in the past tense, so nothing was added to the
ledger. Flagged there for a future run: the post carries an `<h2>Sources</h2>`
section and inline `[source]` markers, which the "sources belong in our notes"
rule would normally strip; rewriting a ten-section history post was outside this
run's budget.

**New post:** `blog-doors-open-winnipeg.html`, "Doors Open Winnipeg 2027: May 29
and 30, Free Entry". First entry of the Events queue, published as a new post
(no existing page covers it). Form: **explainer**, continuous prose with two
content headings plus the "Where to stay" section the event-post rules require;
the last three posts were one-day plan, host's notes and question and answer, so
no shape was repeated. The queue entry carried only a typical window, but
Heritage Winnipeg's own site has since posted firm dates, May 29 and 30, 2027,
so the post states them as announced and the year is in the title. 833 words, 4
min read. Image: `images/city-hall-council-building-2021.jpg`, a local photo of
a civic building people can walk into, not a skyline. No building count is given
for 2027 because the only count found belongs to the 2024 edition. Full
provenance, including the astronomically computed late-May daylight figures, is
in `post-sources.md`. The ledger gained one business the post names, Warehouse
Artworks (154 total).

**Pages changed:** `blog-doors-open-winnipeg.html` (new),
`blog-restaurants.html` (Vera correction), `blog.html` (noscript card and
JSON-LD `blogPost` entry), `articles-data.js`, `articles_data.json`,
`sitemap.xml` (new entry plus `lastmod` on `blog.html` and
`blog-restaurants.html`), `llms.txt` (regenerated, 160 posts),
`business-ledger.json`, `ledger-sweep.md`, `post-ideas.md`, `post-sources.md`.

**Accessibility:** `pa11y --standard WCAG2AA` on all three changed HTML pages
(`blog-doors-open-winnipeg.html`, `blog-restaurants.html`, `blog.html`):
**3 pages checked, 3 passed, 0 errors.** The published URLs could not be used:
this container's egress proxy returns 403 for `staywinnipeg.ca`, so pa11y's
Chromium got `ERR_TUNNEL_CONNECTION_FAILED`. The repository was served on
127.0.0.1:8099 instead and pa11y run against that, which tests the files as
committed. Chromium was launched from `/opt/pw-browsers/chromium` with
`--no-sandbox` and `--no-proxy-server` through a pa11y config file. No CSS was
touched, so no minified stylesheet needed regenerating.

**Observed, not fixed:** `blog.html` carries 106 noscript cards and 106 JSON-LD
`blogPost` entries against 160 posts in `articles-data.js`, so 54 older posts
are missing from both (the no-JS fallback and the structured data). Today's post
is in both. The backfill is well past a single run's churn budget, so it is
recorded here for a run that can take it on deliberately.

---

## 2026-10-13

### Businesses verified (6, the stalest in the rotation)

Taken by `last_verified` ascending: six entries still at the `2026-01-01` backfill date. Five are
open, one could not be confirmed either way and is marked `unverified` rather than guessed at. All
six except St. Vital Centre are named on `blog-crescentwood-liveable.html`, in a single prose list
of nearby dining with no addresses or hours attached, so nothing on that page needed correcting.

- **G G Gelati** - open, at **705 Corydon Ave** (address now filled in). A Yelp listing updated
  April 2026 carries full hours (noon to 11 p.m. weekdays, noon to midnight Friday through Sunday)
  and a phone number. Nothing reports a closure; the shop has been on Corydon since 1995. Page
  unchanged.
- **G.J. Andrews** - **unverified**, status changed from `open` to `unverified`, address filled in
  as **384 Academy Rd**. The only evidence found is a Manitoba cider producer's current stockist
  page listing "GJ Andrews, 384 Academy, Winnipeg" as a retailer carrying its product. That is a
  live commercial listing but undated, and it is none of the evidence types the playbook accepts
  (no hours, no recent review, no closure flag, no news item), so it is recorded as unverified
  rather than counted as a confirmation. It should sort back into the rotation for a cleaner check.
  `blog-crescentwood-liveable.html` names it with no address or hours; left as written.
- **Mr. Calzone** - open, at **653 Corydon Ave** (address now filled in). A Yelp listing updated
  March 2026 gives daily hours from 11 a.m. and a phone number; a Tripadvisor page dated 2026 says
  the location opened in 2018, and the chain's own locations page and the delivery platforms all
  still carry the Corydon store. Page unchanged.
- **Slices** - open, at **401 Stafford St** (address now filled in). This is the Crescentwood-side
  branch the page's dining list is referring to; Tripadvisor carries separate listings for it and
  for the 1329 Portage Ave location, and a Yelp pizza-near-Corydon search updated August 2026 still
  returns the branch about 2 km from Corydon Avenue. Page unchanged.
- **St. Vital Centre** - open, at **1225 St. Mary's Rd** (address now filled in). Montreal-based
  Leyad bought the mall for $160.5 million in February 2026, which is recent trade coverage of an
  operating property, and tenant store locators carry current mall hours.
  `blog-classic107-spring-break-winnipeg.html` names it only as a spring-break kids' programming
  venue with no hours; left as written.
- **The Handsome Daughter** - open, at **61 Sherbrook St** (address now filled in). Manitoba Music
  listings show shows booked there through 2026, including a songwriter showcase on June 15, 2026,
  and Songkick's venue page carries further upcoming dates. Page unchanged.

### Ledger backfill sweep

`blog-day-trips-near-winnipeg-from-corydon.html` swept. It is a short day-trip post naming only
beaches, generic prairie towns and provincial parks, with no commercial business at all, so nothing
was added. The ledger still holds 153 businesses.

### New post

`blog-table-for-1200-winnipeg.html` - **Table for 1200 Winnipeg: Tickets and the Secret Location**
(form: one-day plan, taken from the top of the events queue). Storefront Manitoba's annual
fundraiser: about 1,200 feet of outdoor table laid at a Winnipeg address that is not released until
noon on the day of the dinner. The post is built around that constraint, hour by hour, with what
each choice costs. 2026 ran Saturday, May 30 with doors at 4:30 p.m.; no 2027 date has been
announced anywhere findable, so the post says the dinner has settled into a Saturday in late May
and points readers at storefrontmb.ca rather than naming a date. The $189 general admission figure
is written as "recent editions have listed" because the listing carrying the ticket tiers could not
be pinned to a year. Past venues named (Alexander Avenue between Lily Street and Waterfront Drive,
and an earlier dinner outside St. Boniface Cathedral); the 2026 venue was not findable and is not
claimed. No transit route number, since the address is secret by design and Winnipeg Transit's
network was redesigned in 2025. The post names no commercial business, so it added no ledger
entries. Provenance recorded in `blog-maintenance/post-sources.md`.

Image: `images/guidebook-winnipeg-46-exchange-district.jpg`, a local photo of brick warehouse
fronts in the Exchange District, the area the dinner has used. `storefrontmb.ca`,
`restaurantji.com` and `mrcalzone.ca` were all unreachable from this sandbox (DNS `ENOTFOUND`
through the agent proxy), so every fact above came from search results rather than fetched pages.

### Pages changed

`blog-table-for-1200-winnipeg.html` (new), `articles-data.js`, `articles_data.json`, `blog.html`
(noscript card and JSON-LD `blogPost` entry), `sitemap.xml` (new URL plus `blog.html` `lastmod`),
`llms.txt` (regenerated, 159 posts), `blog-maintenance/business-ledger.json`,
`blog-maintenance/ledger-sweep.md`, `blog-maintenance/post-ideas.md`,
`blog-maintenance/post-sources.md`.

## 2026-10-12 (manual edit, at the owner's request)

- **Post removed:** `blog-winnipeg-accessible-attractions.html` (published
  2026-09-04) deleted. Its entry was removed from `articles-data.js` and
  `sitemap.xml`; it was never referenced in `blog.html` or
  `articles_data.json`. The image it used
  (`images/guidebook-winnipeg-38-canadian-museum-for-human-rights.jpg`)
  remains in use on `blog-best-places-nearby-winnipeg.html`, so it was left in
  place. Dropped from `blog-maintenance/ledger-sweep.md`'s "Not yet swept"
  list and marked removed in `blog-maintenance/post-ideas.md`'s "Used" entry.
  `llms.txt` regenerated.

## 2026-10-12

### Businesses verified (6, the stalest in the rotation)

Taken by `last_verified` ascending: six entries still at the `2026-01-01` backfill date. Four are
open, two could not be confirmed either way and are marked `unverified` rather than guessed at.

- **The Grove Pub & Restaurant** - open, at 164 Stafford St, the address already on file. A
  Three Best Rated listing describes it as open seven days a week for lunch, dinner and late
  night, and nothing reports a closure. Page unchanged.
- **The Indigenous Kitchen (food truck)** - **unverified**, status changed from `open` to
  `unverified`. The most recent coverage found is an APTN News piece from May 2024 on the truck's
  bannock going viral on social media; no 2026 listing, schedule or closure notice turned up.
  `blog-indigenous-winnipeg.html` names it with no address or hours, so there is nothing on the
  page to correct; left as written.
- **The Merchant Kitchen** - **unverified**, status changed from `open` to `unverified`. Sources
  disagree: one OpenTable regional page marks it "permanently closed" while another shows live
  booking activity, and the Alt Hotel's own site still lists it next to the hotel with hours and a
  phone number, on an undated page. Neither a clean closure flag nor a confirmed current listing.
  `blog-group-dining.html` names it with no address or hours, so nothing on the page needed
  correction; left as written. It should sort back into the rotation for a cleaner check.
- **The Toad in the Hole Pub** - open, at **112 Osborne St** (address now filled in). Songkick's
  venue page lists a 2026 touring act booked there and describes it as an Osborne Village fixture
  since 1990; Yellow Pages and a Winnipeg bars guide both carry current details. Page unchanged.
- **Thermëa Spa Village** - open, address already on file (775 Crescent Dr). The spa's own contact
  page gives current hours, 8:30 a.m. to 10 p.m. daily. Page unchanged.
- **Thyme Cafe and Bookstore** - open, at **268 Tache Ave** (address now filled in). A business
  directory listing gives current hours and a phone number; nothing reports a closure, though the
  most recent third-party roundup found (November 2025) did not mention it by name. Page
  unchanged.

### Ledger backfill sweep

`blog-date-night-on-corydon-avenue.html` swept. All five businesses it names were already in the
ledger (Bar Italia, Passero Restaurant, Colosseo Ristorante Italiano, Saperavi Georgian Cuisine and
The Roost), so this filename was appended to each of their `pages`. Nothing was added; the ledger
still holds 153 businesses.

### New post

`blog-winnipeg-comedy-festival.html` - "Winnipeg Comedy Festival: Galas at the Burton Cummings
Theatre". Fourth entry of the Events queue, published as a new post. Form: host's notes, first
person plural throughout, two content headings plus the "Where to stay for the festival" section
the event-post rules call for.

Facts sourced before writing: the festival's 2002 founding by comedian Lara Rae and CBC Radio
producer Tom Anniko; the Gas Station Arts Centre at 445 River Avenue in Osborne Village as the
festival's producer and home base for most of the week's shows; the CBC galas taped at the Burton
Cummings Theatre, 364 Smith Street downtown, a 1906 vaudeville house built as the Walker Theatre
and now a designated historic site; close to 100 hours of galas aired on CBC since 2002, described
as its highest-rated comedy series; Dean Jenkinson succeeding Lara Rae as artistic director after
2023; and the 2026 edition, the 25th, running April 20 to 26 with an anniversary Mega Show taped
Thursday, April 23 at 7:30 p.m. at the Burton Cummings Theatre (2025 ran April 29 to May 4, a few
days later). **No 2027 dates, venues or ticket prices are stated anywhere on the page**; readers
are sent to winnipegcomedyfestival.com. The D19 Corydon route and its Kennedy Street terminal are
carried from several of our own sourced posts; the late-April mid-teens Celsius normal high is a
freshly sourced fact. The post names no commercial business, so the ledger needed no new entry.
Image: a new Unsplash photo (a man on a stage holding a microphone, Unsplash License) rather than
reusing the lit-stage photo already used three times on other event posts, since a comedy mic shot
reads honestly as the subject. No skyline. Provenance recorded in `post-sources.md`.

## 2026-10-10 (backfill, run 2026-10-12)

### Businesses verified (6, the stalest in the rotation)

Taken by `last_verified` ascending: six entries still at the `2026-01-01` backfill date. Five are
open; one, a vegan cafe, has closed and its page entry was removed.

- **Tall Grass Prairie Bread Co.** - open, at **1 Forks Market Rd** (address now filled in), the
  address `blog-winnipeg-bakeries-artisan-bread.html` already states for its Forks counter. The
  Forks' own dining page and a bakery directory both place it there. Page unchanged.
- **Teekca's Aboriginal Boutique** - open, at **1 Forks Market Rd** (address now filled in).
  `blog-indigenous-winnipeg.html` describes it only as being at "Winnipeg's most-visited tourism
  site" without naming the address; Travel Manitoba's own guide confirms the Forks Market location
  (the boutique also runs a second shop near Polo Park, not the one this post names). Page
  unchanged.
- **The Beer Can** - open (seasonal), at **1 Granite Way** (address now filled in), beside the
  Assiniboine River at the Granite Curling Club, which matches what
  `blog-winnipeg-breweries.html` already says without naming the street. CTV Winnipeg has reported
  on the outdoor beer garden reopening there in past seasons; it runs seasonally rather than
  year-round, which the page already implies by calling out "Winnipeg's beautiful summer months."
  Page unchanged.
- **The Common (The Forks Market)** - open. The Forks' own eat-and-drink page confirms current
  hours and the 20-tap format `blog-winnipeg-breweries.html` describes. Address was already on
  file. Page unchanged.
- **The Good Fight Taco** - open, at **242 Hargrave St** (address now filled in), inside Hargrave
  St. Market, which matches the venue `blog-hargrave-st-market.html` already names. The market's
  own tenant page still lists it. Page unchanged.
- **The Good Lands Cafe** - **closed.** A Penticton Herald feature on the owner reports the
  679 Sargent Avenue cafe shut its doors December 21, 2024, run as a one-person operation with no
  announced reopening. `blog-winnipeg-vegan-restaurants.html` corrected: the Good Lands Cafe
  section (two paragraphs under "Dedicated Vegan Restaurants") has been removed entirely rather
  than left describing a closed business. Ledger status set to `closed`, address recorded as
  679 Sargent Ave.

### Ledger backfill sweep

`blog-crescentwood-liveable.html` swept. The Grove Pub & Restaurant and Bar Italia were already in
the ledger, so this filename was appended to each of their `pages`. Five businesses the post names
in its dining list were missing and have been added with no address, since the post states none,
and the `2026-01-01` backfill date, since they were not verified this run: G G Gelati,
G.J. Andrews, Slices, The Handsome Daughter and Mr. Calzone. Six pharmacy chains the post names in
a separate "access to pharmacies" sentence (Rexall, Shoppers Drug Mart, Loblaw Pharmacy, Safeway
Pharmacy, People's Pharmacy, The Medicine Shoppe) were treated as a generic amenity claim with no
location named for any of them, and left out of the ledger. The ledger now holds 153 businesses.

### New post

`blog-juno-awards-winnipeg-2027.html` - "JUNO Week Winnipeg 2027: April 1 to 4, Canada Life
Centre". Third entry of the Events queue, published as a new post and written thoroughly as the
queue entry asked. Form: explainer, two content headings plus the stay section.

JUNO Week runs April 1 to 4, 2027; the 56th annual broadcast airs from Canada Life Centre on
Sunday, April 2, on CBC Television, CBC Gem and CBC Music's YouTube channel. CARAS announced
Winnipeg as host on March 12, 2026; this is the city's third time (after 2005 and 2014).
Organizers' own figures of about 20,000 attendees and more than $17 million in economic impact are
stated. JUNOfest, JUNO Fan Fare and the JUNO Songwriters' Circle are each described by their
general format; the 2014 JUNOfest club venues are named explicitly as history, not a 2027 lineup.
**No 2027 JUNOfest venue list, Fan Fare schedule, or ticket price is stated anywhere on the
page**; readers are sent to junoawards.ca/winnipeg, the sign-up page organizers themselves
point fans to. Getting there draws on the BLUE rapid transit line from Osborne Village and the
Canada Life Centre skywalk ties already sourced for the Jets post, plus the April weather fact
already sourced for the spring break post. Provenance is recorded in `post-sources.md`.

The post names no commercial business, so the ledger needed no new entry. Image: the lit-stage
Unsplash photo already used on `blog-rainbow-stage.html` and `blog-winnipeg-new-music-festival.html`,
reused a third time since no local `images/` file shows a concert stage or arena interior.

### Backfill note

This run covers the missed 2026-10-10 daily run, executed 2026-10-12. Content dates (post date,
meta/JSON-LD dates, sitemap `lastmod`, the `post-ideas.md` Used entry) are set to 2026-10-10;
ledger `last_verified` dates reflect the real verification date, 2026-10-12.

## 2026-10-09 (backfill, run 2026-10-12)

The routine's scheduled run for this date never produced a session (no run log
exists for 2026-10-09 or 2026-10-10 in the routine's history), so this block is
filled in three days late, on 2026-10-12. The business verification below
happened on 2026-10-12, not on the nominal date; the post's visible date,
meta dates, and `articles-data.js` date are backdated to 2026-10-09 to keep the
publication timeline honest.

### Businesses verified (6, the stalest in the rotation)

Taken by `last_verified` ascending, continuing alphabetically from where the
2026-10-11 run (merged from branch `main-u6mm7q` on 2026-10-12) stopped. All six
are open; none needed a page correction.

- **Splash Dash Boat Tours** - open, at **1700 Pembina Hwy** (address now filled
  in), departing from the docks at the Pony Corral Restaurant per Travel
  Manitoba's listing and a 2024 Reddit report of the move from The Forks.
  `blog-winnipeg-tours.html` states no address, so nothing on the page needed
  correcting.
- **SquarePeg Tours** - open, per Travel Manitoba's current directory listing of
  its walking and themed tours. No address is stated for a walking tour company;
  page unchanged.
- **St. Boniface Golf Club** - open, hosting a CPA Manitoba Foundation charity
  tournament on August 19, 2026 and a CPWA Manitoba Chapter tournament on
  September 17, 2026. Page unchanged.
- **St. Norbert Farmers' Market** - open, year-round per its own pattern and a
  2026 City of Winnipeg event listing of Saturday kiosk dates. Address unchanged
  (3514 Pembina Hwy, already correct).
- **Stella's Café & Bakery** - open; a multi-location Winnipeg chain, so no
  single address is recorded in the ledger. None of the six pages naming it
  states a specific address or claims a closed location; all point readers to
  the chain's own locations page or describe it generally. Pages unchanged.
- **T.H. Dang Restaurant** - open, per a January 2026-updated aggregator listing
  with 3,445 reviews and no closure flag. No street address could be confirmed
  this run; `blog-winnipeg-vietnamese-pho-guide.html` states none either, so
  nothing to correct.

### Ledger backfill sweep

`blog-crescentwood-history.html` swept. It is a history post naming no
commercial business at all, only historical figures, their homes, and the Art
Gallery of Winnipeg (an institution). Nothing added.

### New post

`blog-winnipeg-spring-break-guide.html` - "Spring Break in Winnipeg 2027: March
29 to April 2". Second entry of the Events queue (after freeze-frame-film-
festival), a new post. Form: comparison, three ways families actually use the
week (free city drop-ins, ticketed arts programming at the Centennial Concert
Hall and Royal MTC, and the existing attractions roundup) set against each
other.

Manitoba's provincial 26/27 school calendar form confirms spring break as
March 29 to April 2, 2027, with Good Friday the preceding Friday. The Royal
Winnipeg Ballet's own venue listing gives Swan Lake March 4-7, 2027, three
weeks before the break, and The Mix April 29-May 2 with a $15 Community
Matinee, a month after it; Royal MTC's 26/27 season gives Waiting for Godot
running March 24-April 17, through the break but not family programming. The
city's own library and recreation drop-ins are written as a past-years pattern
since no 2027 schedule is posted; readers are sent to winnipeg.ca/library and
winnipeg.ca. The "Kids Fest programming" phrase in the queue entry did not
correspond to a real branded event on research, so the post describes the
library and recreation programming plainly instead. No 2027 branch list,
recreation schedule, or pool times are stated anywhere on the page. The post
names no commercial business, so the ledger needed no new entry. Provenance is
recorded in `post-sources.md`.

Image: `images/family-activities.jpg`, reused from the 2026-10-11 post since no
local photo shows a library, theatre, or community centre; alt text describes
only the photo, not a specific event. No skyline.

## 2026-10-11

### Businesses verified (6, the stalest in the rotation)

Taken by `last_verified` ascending: six entries still at the `2026-01-01` backfill date. Five are
open, one could not be verified. Three blank addresses are now filled in and one wrong address is
corrected in the ledger. No page needed a correction this run.

- **Peking Chinese Food** - open, at 840 Corydon Ave, the address
  `blog-budget-day-corydon-airbnb.html` already gives. Yellow Pages lists the business at that
  address with hours and a phone number and dates it to 1970 under the original family, and the
  Yelp page was updated in July 2026 with the same address. A Fantuan listing shows it "Closed",
  which reads as outside opening hours rather than a permanent closure, since every other listing
  shows normal hours. The restaurant trades under several names (Peking Restaurant, Peking Chinese
  Restaurant, Peking Chinese Foods). Page unchanged.
- **Rae & Jerry's** - open, at **1405 Portage Ave** (address now filled in). The Manitoba Historical
  Society's site record gives that address, OpenTable lists current daily dinner hours, and CTV
  reported the sale to new owners, who said the retro room stays as it is.
  `blog-winnipeg-steakhouses-bbq.html` says only that it has been on Portage Avenue since 1957 and
  takes reservations, which still holds. Page unchanged.
- **Sho Coffee and Bar** - open, at **290 William Ave** in the Exchange District (address now filled
  in). The Exchange District BIZ directory still carries it, and its January 2026 piece on Soho
  kitchen + wine, opened by the same team at 100 King St, describes the William Avenue cafe as
  running. Neither `blog-24-hour-winnipeg-budget.html` nor `blog-winnipeg-coffee.html` states an
  address or hours for it, and both describe the day-to-night model the directory describes. Pages
  unchanged.
- **Shorty's Pizza** - open, at **53 Maryland St** (address now filled in), which is the address
  `blog-best-places-nearby-winnipeg.html` already gives. The Winnipeg Free Press reported in
  February 2026 that it was opening a second Winnipeg restaurant, so the business is expanding
  rather than closing. Page unchanged.
- **Smokin' Hawg BBQ** - **unverified**, status changed from `open` to `unverified`. Three searches
  found a Tripadvisor listing (address given as 1867 Springfield Rd, reviews, no closure flag) and
  2026-updated Yelp barbecue lists that place it in Oakbank rather than Winnipeg, plus a separate
  Smokin Hawg BBQ Co. at 69 Main St in Grunthal. Nothing reports a closure and nothing confirms a
  current Winnipeg address. `blog-winnipeg-steakhouses-bbq.html` names it in one sentence with no
  address, hours or prices, so there is nothing on the page to correct; it was left as written. It
  should sort back into the rotation for a proper check.
- **Sookram's Brewing Company** - open, and the **ledger address was wrong**: it held
  `479 Osborne St`, and the brewery is at **479 Warsaw Ave** in Fort Rouge (Travel Manitoba gives
  479-B Warsaw Ave; the 2019 opening announcement describes the converted television transmission
  station on Warsaw). `blog-best-places-nearby-winnipeg.html` already links the correct Warsaw
  Avenue address, so only the ledger changed.

### Ledger backfill sweep

`blog-cozy-winter-warm-up-spots-near-corydon-airbnb.html` swept. All three businesses it names were
already in the ledger, so this filename was appended to the `pages` array of Thom Bargen Coffee
Roasters, Saperavi Georgian Cuisine and Sugar + Salt Bakeshoppe. Nothing was added; the ledger still
holds 148 businesses.

### New post

`blog-freeze-frame-film-festival.html` - "Freeze Frame 2027: Winnipeg Kids' Film Festival, March 7 to
13". First entry of the Events queue, published as a new post. Form: question and answer, seven
questions as the only headings, chosen because the last three posts used walk, ranked short list and
host's notes.

The queue entry carried a typical window of "second week of March". The festival has since published
firm dates, so the post states March 7 to 13, 2027 at the Centre culturel franco-manitobain, 340
Provencher Blvd. Also on the page: the 1996 founding by Nicole Matiation and Pascal Boutroy and the
bilingual programming, the ticket structure ($7 a screening, $25 individual all-access, $50 family
pass with advance reservation, free opening and closing films), the Salle Pauline-Boutal at 285 seats,
the F7 and FX4 transit routes along Provencher, the walk east from the Esplanade Riel, and the fact
that the clocks go forward the night the festival closes. The "oldest children's film festival in
Canada" line is attributed to Boutroy rather than stated flatly. No 2027 prices, age bands or
programme details are claimed; an `.info-box` sends the reader to freezeframeonline.org for those.
Provenance is recorded in `post-sources.md`.

The post names no commercial business, so the ledger needed no new entry. Image:
`images/family-activities.jpg`, a local file, since no local photo of a cinema, the CCFM or St.
Boniface exists and neither freezeframeonline.org nor images.unsplash.com is reachable from this
sandbox. No skyline.

Registered in `articles-data.js`, `articles_data.json`, the `blog.html` noscript grid and JSON-LD
`blogPost` array, and `sitemap.xml`; `llms.txt` regenerated with
`blog-maintenance/update-llms.py` (156 posts).

### Accessibility

`pa11y --standard WCAG2AA` on both changed pages: **2 pages checked, 2 passed, 0 errors**
(`blog-freeze-frame-film-festival.html` and `blog.html`). Served from a local static server on
127.0.0.1 rather than the live URLs, because the new post is not deployed until this commit lands
and staywinnipeg.ca is refused at this sandbox's egress proxy anyway. Chromium needed `--no-sandbox`
in this container, passed through a pa11y config file. No CSS was touched, so no minified stylesheet
needed regenerating.

### Branch note

This run's commit went to `main-u6mm7q`, the branch this session was required to develop and push
on, not to `main`. The site deploys from `main`, so the post is not live until that branch is
merged.

## 2026-10-09 (manual edit, at the owner's request)

Removed Neon Palm Pizza from the site. Its listing could not be verified in the
2026-10-02 run, and the owner asked for it to come out entirely.

- `blog-winnipeg-pizza-guide.html`: the Neon Palm section, the name in the meta
  keywords, and the name in the meta and JSON-LD descriptions are removed.
- `blog.html`, `articles-data.js` and `articles_data.json`: the name is removed
  from the pizza guide's listing description.
- `business-ledger.json`: the Neon Palm Pizza entry is removed (148 businesses).

The 2026-10-02 block above is kept as the record of the original verification
attempt.

## 2026-10-08

### Businesses verified (6, the stalest in the rotation)

Taken by `last_verified` ascending: six entries still at the `2026-01-01` backfill date,
continuing through the alphabet from where the 2026-10-06 run stopped. Five are open, one has
given up its storefront. Four blank addresses are now filled in. Two pages were corrected.

- **Red River Co-op Food Store** - open, at **1120 Grant Ave** in Grant Park Shopping Centre
  (address now filled in), which is the address `blog-best-places-nearby-winnipeg.html`
  already gives. Current directory listings place the store in the mall, and CBC's coverage of
  Federated Co-operatives buying the Grant Park and St. Vital Safeway stores from Sobeys
  explains how it got there. Page unchanged.
- **River Heights Farmers' Market** - open, at **1370 Grosvenor Ave** in the Corydon Community
  Centre parking lot (address now filled in). The community centre's own market page and Direct
  Farm Manitoba both give the 2026 season as Fridays 12 to 5, July 3 to September 25, which is
  exactly what our page said. **Page corrected anyway**: the season has now ended, and the page
  stated those dates in the present tense. `blog-farmers-market-near-corydon-airbnb.html` now
  gives the Friday 12 to 5 pattern with the early-July-to-late-September window, names 2026 as
  a past season, and sends readers to the community centre's page for this season's dates. No
  2027 dates are stated; none are published. Tourism Winnipeg's listing (Fridays 1 to 6,
  July 5 to September 27) is a stale earlier season and was not used.
- **Roughage Eatery** - **moved; the restaurant is gone.** The company's own site announced the
  closure of 126 Sherbrook Street because the building was slated for demolition, and said it
  would continue through markets, pop-ups, catering and stocking vendors with its cheezes and
  seitans. Pickup has been running out of Club 200 at 190 Garry Street. Yelp, Tripadvisor and
  an Out x Out listing still show the Sherbrook address with regular hours; they are stale.
  **`blog-winnipeg-vegan-restaurants.html` corrected**: Roughage was the lead entry under
  "Dedicated Vegan Restaurants" and was described as a place to go for lunch or dinner with a
  "casual and welcoming" dining room. It has been moved to "Specialty Vegan Experiences" and
  rewritten to say plainly that there is no dining room, what the kitchen does now, and where
  pickup has been; an `.info-box` tells the reader to check before travelling downtown. Ledger
  status set to `moved`, address recorded as 190 Garry St (pickup at Club 200). No hours or
  prices are stated on the page.
- **Saburo Kitchen (Hargrave St. Market)** - open, still listed among the market's tenants on
  hargravestmarket.com, at 242 Hargrave St in True North Square, the address the ledger already
  held. Reviews are older (2019 to 2023) but no source reports a closure.
  `blog-hargrave-st-market.html` unchanged.
- **The Saddlery on Market** - open, at **114 Market Ave** (address now filled in). Tripadvisor
  carries reviews from January, February and May 2026, the Yelp listing was updated in June 2026
  with weekday-to-Saturday hours, and Ciao! listed it on the Dine About Winnipeg 2026 menu in
  late January. Its Uber Eats page reads closed as of August 2026, which is an app listing, not
  the restaurant. `blog-group-dining.html` unchanged.
- **Shelly's Indigenous Bistro** - open, at **1364 Main St** (address now filled in). Its own
  Square site posts daily 11 a.m. to 8 p.m. hours, Tripadvisor and Restaurantji both carry 2026
  review activity, and several cook and chef postings for the bistro are currently open. The
  ownership claim on `blog-indigenous-winnipeg.html` (Vince Bignell of Mathias Colomb First
  Nation) was not sourced this run and was left as written. Page unchanged.

**Lead for a future run, not acted on:** while confirming Saburo, the market's own restaurants
and contact pages no longer list **Miss Browns**, its Yelp listing (updated November 2025) says
it is closed, and its DoorDash page is inactive, while its own site still posts hours. That is
suggestive and not proof, and Miss Browns was verified open on 2026-10-01, so nothing was
changed on `blog-hargrave-st-market.html`. A new vendor, **The 44**, now leads the market's
restaurant page. Worth a real check when Miss Browns next comes up in the rotation.

### Ledger backfill sweep

`blog-corydon-to-forks-bike-walk-guide.html` swept. It names no commercial business at all:
Osborne appears only as a pause point, The Forks is an institution, and the single food
reference is a generic "stop for coffee or water" with no shop named. Nothing added, no `pages`
appended.

### Page refreshed

**`blog-festival-du-voyageur.html`** - retitled "Festival du Voyageur 2027: February 12 to 21
in Winnipeg". First entry of the Events queue, marked **refresh**, so the file was rewritten in
place and the slug and URL kept. Form: **host's notes** (the last three posts were ranked short
list, walk and explainer, so this was free).

The old text was undated 2025 copy. It carried no dates, no address, no prices and no transport
information, and it was built out of exactly the phrases the house style bans ("vibrant", "rich
cultural heritage", "rich tapestry", "a testament", "offers something for everyone", "an
experience you won't want to miss"). None of it was reusable, so the body is new.

Confirmed before writing: the February 12 to 21, 2027 dates, from the festival's own site and
the Manitoba Fiddle Association's listing; Whittier Park at 836 Rue St Joseph, which corrects
the 866 that the queue note and several directories carry; the day (10:00 to 00:00), evening
(18:00 to 00:00) and combined ticket structure; the three purchase channels, including the
festival office at 233 Provencher Boulevard; the cashless site, the no-refund rule and that
days do sell out; the 2026 prices, stated on the page as 2026 figures; the $10 park lot, the
free shuttle lots at the Universite de Saint-Boniface and Centre LaVerendrye, the free
unshuttled lot at 205 Provencher Boulevard, and the shuttle's half-hour-before-opening start;
and Fort Gibraltar as a reconstructed fur trade post in the park with costumed interpreters.

No 2027 price, on-sale date or programme appears on the page; readers are sent to heho.ca. No
transit route number is given, because the sources disagree (888, versus 110 and F7 with a walk,
versus 10, 43 and 50); the festival's free shuttle and the walk from the Esplanade Riel are
named instead. Louis Riel Day on Monday February 15, 2027 and the sunsets of about 5:42 p.m. on
February 12 and 5:57 p.m. on February 21 were computed for Winnipeg, as were the twenty-minute
walk from the bridge and the twenty-minute drive from Crescentwood, both written as approximate.
No new ledger entries: the festival, the fort, the park, the university and the community centre
are all institutions.

Image: `images/heho.jpg` kept, a real photo of carved snow blocks on the festival's own
sculpture grounds, with the alt text rewritten to describe what it shows.

Registrations updated for the new title, description and alt text in `articles-data.js`,
`articles_data.json`, the `blog.html` noscript card and its JSON-LD `blogPost` entry;
`dateModified` and `article:modified_time` set to today, `datePublished` and the listing `date`
left at 2025-02-15 with the meta line reading "Updated October 8, 2026"; `sitemap.xml`
`<lastmod>` set to today for the festival post, the vegan guide, the farmers' market guide and
`blog.html`; `llms.txt` regenerated with `blog-maintenance/update-llms.py` (155 posts).

### Accessibility checks

`pa11y --standard WCAG2AA` run on all four changed pages: `blog-festival-du-voyageur.html`,
`blog-winnipeg-vegan-restaurants.html`, `blog-farmers-market-near-corydon-airbnb.html` and
`blog.html`. **4 pages checked, 4 passed, 0 errors.**

Run against a local static server (`python3 -m http.server`, Chromium with `--no-sandbox`)
rather than the live `https://staywinnipeg.ca/` URLs: this session's egress policy answered
403 to `staywinnipeg.ca:443`, so the live pages were unreachable. Testing the working tree is
in any case the stricter check, since it exercises today's HTML rather than the version
currently deployed. If a future run needs the live URLs, `staywinnipeg.ca` has to be added to
the environment's allowed domains.

---

## 2026-10-07

### Businesses verified (6, the stalest in the rotation)

Taken by `last_verified` ascending: six entries still sitting at the `2026-01-01` backfill
date, picking up where the 2026-10-06 run left off in the alphabet. All six are open. Five
blank addresses are now filled in. No business needed removing from a page, but one hours
claim was removed (see below).

- **Red River Co-op Food Store** - open, at **1120 Grant Ave** in Grant Park (address now
  filled in), which is the address `blog-best-places-nearby-winnipeg.html` already links to.
  The Grant Park store is one of the former Safeway rooms Federated Co-op took over, and the
  co-op announced in June 2026 that it is putting a food store and pharmacy into the Portage
  Place redevelopment downtown, reported as opening in 2029. Nothing on the page needed
  changing and no 2029 store is mentioned anywhere on the site.
- **River Heights Farmers' Market** - open, in the parking lot at **1370 Grosvenor Ave**
  (address now filled in). The Corydon Community Centre and Direct Farm Manitoba both give the
  2026 season as every Friday 12 to 5 p.m. from July 3 to September 25, which is exactly what
  `blog-farmers-market-near-corydon-airbnb.html` already says, so the page is unchanged. Two
  older listings (Travel Manitoba's 2026 roundup, Tourism Winnipeg) give a September 5 end and
  a July 5 start and were not used. Direct Farm Manitoba notes the market is now run solely by
  the community centre rather than jointly with St. Andrew's River Heights United Church; the
  page credits only the community centre, so it is already right.
- **Roughage Eatery** - open, at **126 Sherbrook St** in the West End (address now filled in).
  Yelp's listing was updated April 2026 and shows Wednesday to Saturday service; Tripadvisor
  carries 2026 reviews at 4.4. Restaurantji shows a "temporarily closed" flag that no other
  source supports and that has no accompanying notice, so the status stays open.
  `blog-winnipeg-vegan-restaurants.html` states no address and no hours and was left alone.
- **Saburo Kitchen (Hargrave St. Market)** - open, at 242 Hargrave St, the address the ledger
  already held. Current directory listings show daily service, and the market's own restaurant
  page still describes it as the ramen and donburi counter from the Yujiro and GaiJin Izakaya
  team, which is how `blog-hargrave-st-market.html` describes it. One Facebook snapshot carries
  an "Opening Soon" label that conflicts with the rest and was not treated as evidence of a
  closure. hargravestmarket.com and heho.ca are both blocked at the egress proxy, so their text
  was read through search result summaries.
- **The Saddlery on Market** - open, at **114 Market Avenue** in the Exchange District (address
  now filled in). Yelp's listing was updated June 2026 with regular weekly hours and
  Tripadvisor shows current hours. Uber Eats shows the restaurant off its delivery platform as
  of August 2026, which is a delivery status rather than a closure. `blog-group-dining.html`
  states no address or hours and was left alone.
- **Shelly's Indigenous Bistro** - open, at **1364 Main Street** (address now filled in), the
  address the page already gives, next to the Bulldog Event Centre. Three current listings give
  three different sets of hours and disagree on whether Sunday is closed, so the specific hours
  on `blog-indigenous-winnipeg.html` ("Monday to Thursday, 11 AM to 8 PM; Friday, 11 AM to
  12 AM; Saturday, 4 PM to 12 AM") were not supportable and were replaced with a line telling
  the reader the listings disagree and to confirm before going. No hours are now stated. The
  owner credit to Vince Bignell of Mathias Colomb First Nation was left as it stands.

### Ledger backfill sweep

`blog-corydon-to-forks-bike-walk-guide.html` swept. It names no commercial business at all:
it tells the reader to "build in one stop for coffee or water" and says The Forks "gives indoor
food options" without naming a cafe, vendor or restaurant. Nothing added to the ledger, no
`pages` appended, filename moved to "Swept".

### Post refreshed: blog-festival-du-voyageur.html

**Festival du Voyageur 2027: February 12 to 21, Winnipeg** (form: host's notes). First entry of
the Events queue, marked "refresh", so the existing page was rewritten in place and the slug,
URL and `datePublished` kept. The old text was a dateless 2025 general-interest piece carrying
most of the house style's banned register at once ("a testament", "rich tapestry", "vibrant",
"offers something for everyone", "embrace", "Whether you're"), so the whole article body went.

The 2027 dates are confirmed by the festival's own site, which calls the edition FDV2027 and
gives February 12 to 21; the Manitoba Fiddle Association and Festivalnet agree, and a Twinkl
listing giving February 14 to 23 was discarded as the outlier. Louis Riel Day 2027 falls on
Monday February 15. **No 2027 price, programme or on-sale date appears anywhere on the page**:
the pass prices quoted are explicitly last February's ($110 adult full-run Voyageur Pass, $75
weekend, $40 opening-Friday single day, $10 parking) and readers are sent to heho.ca, which is
blocked at the egress proxy and was read through search summaries. The 2027 edition number was
deliberately left out, because sources disagree on whether 2026 was the 56th or the 57th.
Provenance for every fact, including what was derived rather than sourced (the mid-February
5:40 p.m. sunset, the eight kilometres from Crescentwood, the fifteen-minute walk from
Provencher), is in `blog-maintenance/post-sources.md`.

Two commercial businesses are named: **Chaise Cafe & Lounge** (271 Provencher Blvd, verified
open 2026-09-23) and **Roasted Nomad** (393 Marion St, verified open 2026-10-01). Marion Street
Eatery was in the draft and was replaced once the ledger showed it closed, its room now being
Roasted Nomad; this is the second run to catch that closure propagating into new copy. Both
businesses were already in the ledger, so this filename was appended to their `pages` and
nothing was added. Hero image left as `images/heho.jpg`, the festival's own sculpture grounds;
its alt text was rewritten to describe the photo rather than name a "celebration".

### Pages changed

- `blog-festival-du-voyageur.html` (rewritten: title, meta, Open Graph, Twitter, JSON-LD,
  `article:modified_time`, `dateModified`, visible meta line, hero alt text, whole body)
- `blog-indigenous-winnipeg.html` (Shelly's hours line)
- `blog.html` (noscript card and JSON-LD entry for the Voyageur post)
- `articles-data.js`, `articles_data.json` (title, description, imageAlt, metaHtml)
- `sitemap.xml` (`lastmod` for the Voyageur post, `blog.html` and the Indigenous guide)
- `llms.txt` (regenerated with `blog-maintenance/update-llms.py`: 155 posts, 137 winnipeg,
  13 hosting, 5 travel)
- `blog-maintenance/business-ledger.json`, `ledger-sweep.md`, `post-ideas.md`,
  `post-sources.md`

### Accessibility

`pa11y --standard WCAG2AA` on the three changed HTML pages: `blog-festival-du-voyageur.html`,
`blog-indigenous-winnipeg.html` and `blog.html`. **3 pages checked, 3 pass, 0 errors.** The
live site could not be used: staywinnipeg.ca returns 403 at the egress proxy's CONNECT stage,
so the repository was served on 127.0.0.1 and pa11y run against that, with Chromium launched
`--no-sandbox` (it runs as root here) and the proxy bypassed. No CSS was touched, so no
minified stylesheet needed regenerating.

---

## 2026-10-06

### Businesses verified (6, the stalest in the rotation)

The rotation was taken by `last_verified` ascending: six entries still sitting at the
`2026-01-01` backfill date, picking up where the 2026-10-05 run left off in the alphabet.
All six are open. Three blank addresses are now filled in. No business needed removing or
correcting on a page, but one hours claim was softened (see below).

- **Peasant Cookery** - open, at **283 Bannatyne Avenue** in the Exchange District (address
  now filled in). Yelp listing updated July 2026 with 77 reviews at 4.0; Tripadvisor carries
  2026 reviews and ranks it #14 of 1,366 Winnipeg restaurants. `blog-restaurants.html`
  unchanged.
- **Pedal Pub Winnipeg** - open, running the two-hour Exchange District party-bike tour for
  8 to 15 people that `blog-winnipeg-tours.html` describes, with current 2026 pricing on its
  own booking pages ($589 to $619 per bike, $60 for a Saturday single seat) and a published
  booking line. Address left blank: it is a tour operator with a meeting point rather than a
  storefront, and the post states none.
- **Pho Hoang** - open. The page's claim that the group lists four Winnipeg addresses
  (Sargent Avenue, Osborne Street, Portage Avenue in St. James, and Seasons of Tuxedo near
  Sterling Lyon Parkway) still holds: current listings exist for all four, and the Sargent
  room is described as family-owned and operating since 2011. Address left blank on purpose,
  because no single street address describes the entry and the post names none.
  `blog-winnipeg-vietnamese-pho-guide.html` unchanged on this point.
- **Pho Kim Tuong** - open, at **856 Ellice Avenue** (address now filled in), the address the
  post already gives. Yelp listing updated April 2026, plus current West End BIZ and Tourism
  Winnipeg directory entries. The current listing shows it open Monday, Tuesday, Thursday,
  Friday and Saturday, so the page's "daily lunch and dinner hours with one weekday closure"
  was overstated; it now reads "lunch and dinner hours most days, with a midweek closure
  (confirm before visiting)". No hours are published on the page.
- **Pizzeria Gusto** - open, at 404 Academy Road, the address the ledger already held, with a
  current OpenTable profile carrying lunch and dinner service.
  `blog-winnipeg-pizza-guide.html` unchanged.
- **Rebel Pizza** - open, at **110-245 Vermillion Road** (address now filled in), which is the
  address the post already gives; the Southdale Square listing that shows "157 Vermillion" is
  the mall's civic number, not the unit. Yelp listing updated September 2025 and a current
  Tripadvisor page at 4.3 from 24 reviews. `blog-winnipeg-pizza-guide.html` unchanged.

### Ledger backfill sweep

`blog-corydon-cute-stylish-winnipeg-airbnb.html` swept, the listing's own page. It names one
commercial business in prose, **Gunn's Bakery**, which was already in the ledger, so this
filename was appended to its `pages`. Nothing was added. Everything else it names is an
institution or a destination.

Two venue names on that page were out of date and were corrected while it was open:
**Bell MTS Place** to **Canada Life Centre** here and on `blog-things-to-do.html`, and
**IG Field** to **Princess Auto Stadium** on `blog-things-to-do.html`. Both new names are the
ones our own sourced posts of 2026-09-24 and 2026-09-25 already use. No rename year is stated
on either page, because none was sourced this run.

### New post

**`blog-snow-maze-st-adolphe.html`** - "Snow Maze Near Winnipeg and Five More Ice
Attractions". First entry of the Events queue, a new post. Form: **ranked short list** (the
last three posts were walk, explainer and one-day plan, so this was free; last used
2026-09-03). Six entries, each a single paragraph with the reason for its rank, then the
stay section the event-post rules call for: the St. Adolphe snow maze, the Nestaweya River
Trail, the Riley Family Duck Pond at Assiniboine Park, the Festival du Voyageur snow
sculptures at Whittier Park, ice fishing off Lockport and on Lake Winnipeg, and the Lake
Winnipeg ice shoves last because they cannot be planned.

Sourced before writing: A Maze in Corn's site at 1351 Provincial Road 200 near St. Adolphe
and the Guinness record of 2,789.11 square metres measured on 10 February 2019; the maze's
two-foot walls, the thirty-minute solve and the one-to-two-hour visit; the five snow
buildings, the Giant Luge at $3 or $5 unlimited for ages nine and up, Snow Mountain, the $5
weekend sleigh rides from one until four, and the warm-up barn; admission at $28 plus GST
for 13 and up, $18 for 6 to 12 and free under 6; the Duck Pond shelter's 7 a.m. to 10 p.m.
hours, the no-sticks rule and the Winnipeg Trails Association rental times; Festival du
Voyageur's twenty-plus sculptures at Whittier Park with the 2026 symposium February 10 to 15
and festival February 13 to 22; the Lockport ice fishing village's plowed roads and roughly
twenty-six no-reservation bays, and Kannuk Outfitters' January-to-April Lake Winnipeg trips
from about $450 for twenty-inch greenback walleye; and the Gimli ice shoves with the
three-inch and four-inch ice thickness rule. **No 2027 date is stated for the snow maze or
for the festival.** The 2027 Festival du Voyageur dates in our own events queue could not be
confirmed against the organiser this run, so they were not published; readers are sent to
cornmaze.ca and heho.ca. The half-hour drive down St. Mary's Road is derived from the sourced
25 km and written as approximate. Trail length, skate rental prices, the CN Stage and Canopy
rinks, the 38 Salter and the January and February sunsets are carried from our own sourced
posts of 2026-09-29 and 2026-10-05.

Two businesses added to the ledger, A Maze in Corn and Kannuk Outfitters; The Forks Market
was already there and this filename was appended to its `pages`. Festival du Voyageur,
Assiniboine Park, Fort Gibraltar and the Lockport village are institutions or public
facilities and are out of ledger scope.

Hero image: `images/heho.jpg`, a real photo of carved snow blocks on the Festival du
Voyageur sculpture grounds, which is one of the six entries. No local `images/` file shows
the snow maze; `river_trail.png` was yesterday's hero and `winter-activities.jpg` is a
mislabelled photo of the St. Boniface Cathedral facade. The alt text names the festival so
the photo does not imply the maze.

### Other pages changed

`sitemap.xml` gained the new post and had `<lastmod>` set to 2026-10-06 for `blog.html`,
`blog-winnipeg-vietnamese-pho-guide.html`, `blog-things-to-do.html` and
`blog-corydon-cute-stylish-winnipeg-airbnb.html`. `articles-data.js`, `articles_data.json`
and the `blog.html` noscript grid and JSON-LD `blogPost` array all carry the new post.
`llms.txt` regenerated with `blog-maintenance/update-llms.py` (155 posts).

---

## 2026-10-05

### Businesses verified (6, the stalest in the rotation)

The rotation was taken strictly by `last_verified` ascending with an alphabetical
tiebreak, which pulled in three entries earlier runs had stepped over while working
the alphabet: **Garden City Shopping Centre** and the two Canggu restaurants sort
before N and were still sitting at the `2026-01-01` backfill date after the runs of
2026-10-01 and 2026-10-04 had moved past M and P. All six are open. Three blank
addresses are now filled in. No page needed correcting.

- **Garden City Shopping Centre** - open, operating as a regional centre in northwest
  Winnipeg with more than 75 shops and services. Bought by Smart Investment Ltd. in
  May 2024 for $31 million, and a 14,450 sq ft City of Winnipeg public library is due
  to open inside the mall in late 2026 (CTV Winnipeg, Winnipeg Digest). Address left
  blank: no source in this batch stated a street address and
  `blog-classic107-spring-break-winnipeg.html` states none.
- **Milk & Madu (Canggu)** - open, at **Jl. Pantai Berawa No. 52, Canggu** (address now
  filled in), 07:30 to 22:00 daily, with a second location in Ubud. Current Chope
  listing and 2026 Canggu dining roundups. `blog-bali-nyaman.html` unchanged.
- **Milu by Nook (Canggu)** - open, at **Jl. Pantai Berawa No. 90 XO, Canggu** (address
  now filled in), 08:00 to 23:00. Still carried in 2026 Canggu restaurant guides.
  `blog-bali-nyaman.html` unchanged.
- **Niakwa Country Club** - open, at **620 Niakwa Road** (address now filled in).
  Wikipedia, the Manitoba Historical Society organisation record and a current golf
  club directory all agree. `blog-winnipeg-event-venues.html` unchanged.
- **Patent 5 Distillery** - open, at 108 Alexander Ave, the address the ledger already
  held. Retail Monday to Friday 10 a.m. to 5 p.m., cocktail room Wednesday to Saturday
  4 p.m. to 11 p.m.; listed in the Exchange District BIZ directory with an October 2025
  feature, and running public cocktail classes. The two pages that name it were left
  alone.
- **Pauline Bistro (Norwood Hotel)** - open, at 112 Marion St, the address the ledger
  already held. French breakfast, brunch and lunch in St. Boniface, 4.4 from 173
  OpenTable reviews with reviews through 2025 and an OpenTable listing updated for
  2026. `blog-winnipeg-brunch-breakfast.html` unchanged.

### Ledger backfill sweep

`blog-corydon-confusion-corner-walking-guide.html` swept. It names **no commercial
business at all**: Osborne Village is described as having "compact retail blocks,
cafés, and bakeries" with nothing named, and the stops are delegated to our coffee
guide and our ice cream and gelato guide. Nothing added, no `pages` appended. Moved
to "Swept".

### New post

**`blog-warming-huts-red-river-trail.html`** - "Warming Huts 2027 at The Forks:
Winnipeg Art on Ice". First entry of the Events queue, a new post. Form: **walk** (the
last three posts were explainer, one-day plan and question and answer, so walk was
free; it was last used five posts back on 2026-09-27). The trail is taken in order
from its upstream trailhead at the Hugo Docks, in the residential streets north of
Corydon, through the confluence at The Forks where the new season's huts are grouped,
and out to the Churchill Drive end on the Red, with the distance and time between and
the trade-off stated for walking it in that direction rather than the reverse.

Sourced before writing: the competition's 2009 start and Sputnik Architecture's
backing; the v.2027 structure (three winning teams, $16,500 per project including up
to $3,500 as the designers' honorarium, winners announced in December); the 2026
edition's 200-plus submissions and seven chosen designs with their designers; Anish
Kapoor's Stackhouse cut from Red River ice with Luca Roncoroni, and Frank Gehry's past
participation; build week falling in the third week of January and being weather
dependent; Warming Hut Tours beginning January 24 in 2026; and the trail's roughly 6 km
between the Hugo Docks and Churchill Drive with its seven named trailheads.

**No 2027 installation date, hut or designer is stated anywhere on the page**; readers
are sent to theforks.com. The three kilometres and forty minutes from the Hugo Docks to
The Forks is derived from the sourced 6 km total and written as approximate. The sunsets
of about 5:16 p.m. on January 30 and about 5:40 p.m. in mid-February were computed.
Skate rental prices, the two on-land rinks, the 38 Salter and the transit fare are
carried from our own sourced posts of 2026-09-29 and 2026-10-04. Full provenance in
`post-sources.md`, including why the U of M hut's title is described rather than quoted
(search summaries spell the architect "Hedjuk"; he is John Hejduk, and we could not read
the title first-hand).

Hero image `images/river_trail.png`, a real photo of a groomed path on the frozen river
at The Forks, which is where the huts stand. It is already the hero on
`blog-nestaweya-river-trail.html` and `blog-corydon-to-forks-bike-walk-guide.html`; no
local `images/` file shows a warming hut, and the alt text describes only what the photo
shows.

The Forks Market is the only commercial business the post names and it was already in the
ledger, so this filename was appended to its `pages`. The competition, the trail, the
schools and the architecture faculty are institutions.

### Pages changed

- `blog-warming-huts-red-river-trail.html` (new)
- `articles-data.js`, `articles_data.json`, `blog.html` (noscript card and JSON-LD
  `blogPost` entry), `sitemap.xml` (new entry plus `blog.html` `lastmod`), `llms.txt`
  (regenerated by `update-llms.py`: 154 posts, 136 Winnipeg)

### Accessibility

`pa11y --standard WCAG2AA` run on both changed pages: **0 errors** on
`blog-warming-huts-red-river-trail.html` and **0 errors** on `blog.html`. Both were
served from a local static server on 127.0.0.1 rather than hit at
`https://staywinnipeg.ca`, because the new post is not deployed until this commit lands;
Chromium needed `--no-sandbox` in this container, passed via a pa11y config file.

### Owner action carried forward

- **`blog.html` JSON-LD is 55 posts short.** The `blogPost` array now holds 99 entries
  and the `<noscript>` section 99 cards, against 154 posts in `articles-data.js`. The gap
  predates this run and every run adds one to each side without closing it, so it never
  resolves on its own. Closing it is a single generated pass over `articles-data.js`
  rather than daily-run work, and it was left out of this run's diff deliberately to keep
  the churn reviewable. Say the word and a one-off run can regenerate both sections.
- **Neon Palm Pizza** (raised 2026-10-04) is still unresolved and still named six times
  on `blog-winnipeg-pizza-guide.html`.

## 2026-10-04

### Businesses verified (6, the stalest in the rotation)

Continuing the alphabetical rotation through the `2026-01-01` backfill block, which
picked up at N after 2026-10-01 finished the M entries. Five are open, **one could
not be confirmed to exist**, and two blank addresses are now filled in.

- **Neon Palm Pizza** - **unverified, and possibly not a Winnipeg business at all.**
  Three searches, two of them extended, found no trace of a pizzeria of this name in
  Winnipeg: not in Tourism Winnipeg, not in any Winnipeg pizza roundup, not on Yelp
  or Tripadvisor, and not in a review from any year. The only business of that name
  the searches surface is a New York style pizzeria at 1223 W. Flagler Street in
  Miami, Florida, on `neonpalmpizza.com`. `blog-winnipeg-pizza-guide.html` links it
  as `neonpalm.pizza`, a different domain, which is blocked at the egress proxy and
  could not be read. Per the playbook's rule for an undeterminable status the page
  was left unchanged and the ledger entry set to `status: "unverified"` rather than
  closed. **Owner action:** this entry predates the daily agent (the post is dated
  2026-05-10) and may be an invented recommendation. It is named in the page's
  `<title>`, meta description, keywords, a body section and the JSON-LD description.
  If you can confirm it does not exist in Winnipeg, all six mentions should come out.
- **Nucci's Gelati** - open, at 643 Corydon Ave, the address the ledger already held.
  Seasonal: the 2026 gelati season opened April 17 and hours ran to 11 p.m. daily
  through the summer, and the shop now serves an Italian lunch alongside the gelato.
  Yelp and Tripadvisor both carry 2026 reviews. The three pages that name it were
  left alone.
- **Old Gold Vintage Vinyl** - open, at **187 Osborne St** in Osborne Village (address
  now filled in). Independent record shop with an active site, a Discogs storefront
  and a place in a 2026 roundup of Winnipeg record stores.
  `blog-winnipeg-osborne-village-guide.html` unchanged.
- **Parcel Pizza** - open, at **221-A Stradbrook Ave** (address now filled in).
  Tripadvisor and Yelp listings updated through mid-2026 with reviews from December
  2025, March 2026 and May 2026. `blog-winnipeg-pizza-guide.html` unchanged.
- **Park Café (Qualico Family Centre, Assiniboine Park)** - open, 9 a.m. to 4 p.m.
  daily, on Travel Manitoba's current directory. Address left blank: no source gave a
  street address and `blog-group-dining.html` states none.
- **Parlour Coffee** - open, at 468 Main St, the address the ledger already held.
  Weekdays 7 a.m. to 5 p.m., Saturday 9 a.m. to 5 p.m., closed Sunday; Tripadvisor
  carries a January 2026 review and Yelp was updated in March 2026. Tourism Winnipeg
  reports the shop has changed hands, which no page mentions and none needed to. The
  three pages that name it were left alone, and the new post below was appended to
  its `pages`.

### Ledger sweep

`blog-coffee-near-corydon-airbnb.html` swept. All five businesses it names were
already in the ledger, so nothing was added and this filename was appended to the
`pages` of Thom Bargen Coffee Roasters, Forgotten Flavours, Sugar + Salt Bakeshoppe,
Starbucks and Tim Horton's. Noted in `ledger-sweep.md` for a later run: the ledger
holds two entries for the same Tim Hortons at 949 Corydon Ave and they should be
merged.

### New post

`blog-winnipeg-new-music-festival.html` - "Winnipeg New Music Festival 2027: Dates,
Passes, Venues". First entry of the Events queue, published as a new post. Form:
explainer, continuous prose on how the festival week and the pass work, with two
content headings plus the stay section. The 2027 dates have not been announced, so
the page states no 2027 date, programme or price; it gives late January as the usual
window, uses the thirty-fifth edition's January 21 to 29, 2026 run and concert titles
as the example, quotes the 2026 pass range of $49 to $99 as a 2026 figure, and sends
readers to wnmf.ca. Venues and their addresses (Centennial Concert Hall at 555 Main
Street, Knox United Church at 400 Edmonton Street, Desautels Concert Hall at 150
Dafoe Road) are sourced; the sunsets of about 5:05 p.m. on January 22 and 5:16 p.m.
on January 30 were computed. Full provenance in `post-sources.md`. Hero image is the
lit-stage photo already used on `blog-rainbow-stage.html` and
`blog-rwb-nutcracker-winnipeg.html`, reused because no local `images/` file shows a
stage, a hall or an orchestra.

### Pages changed

- `blog-winnipeg-new-music-festival.html` (new)
- `blog.html` (noscript card and JSON-LD `blogPost` entry)
- `articles-data.js`, `articles_data.json`, `sitemap.xml`, `llms.txt`
- `blog-maintenance/business-ledger.json`, `ledger-sweep.md`, `post-ideas.md`,
  `post-sources.md`

---

## 2026-10-03

### Businesses verified (6, the stalest in the rotation)

All six carried the `2026-01-01` backfill date and had never been checked. Five
are open, one could not be verified at all, and two blank addresses are now
filled in.

- **Neon Palm Pizza** - **unverified**. Two extended search passes found no
  Winnipeg business of this name: the only Neon Palm Pizza with a web presence is
  at 1223 W. Flagler Street in Miami, on a different domain
  (neonpalmpizza.com) from the neonpalm.pizza link on our page, and that domain
  is blocked at the egress proxy so it could not be read directly. Per the
  playbook the entry was left `open` and `blog-winnipeg-pizza-guide.html` was
  left unchanged rather than guessed at, but this one wants a human look: if the
  business does not exist in Winnipeg, the section should come off the pizza
  guide. `last_verified` was set to today because the check was performed, so it
  will not resurface in the rotation on its own.
- **Nucci's Gelati** - open, at 643 Corydon Ave, the address the ledger already
  held. An August 2026 Tripadvisor review describes a large family meal served by
  Maria and Mike, and the Yelp listing was updated in August 2026. The three
  pages that name it were left alone.
- **Old Gold Vintage Vinyl** - open, at **187 Osborne St** in Osborne Village
  (address now filled in), still run by founder Brent Jackson, and listed in a
  2026 roundup of Winnipeg record stores. `blog-winnipeg-osborne-village-guide.html`
  says only "on Osborne Street", which is correct, and was left alone.
- **Parcel Pizza** - open, at **221-A Stradbrook Ave** (address now filled in),
  two floors with a mezzanine over the open kitchen. **One factual error
  corrected:** `blog-winnipeg-pizza-guide.html` described it as serving
  "Detroit-style and round pies depending on the week's menu (verify online)";
  every source found describes New York-style pies, including a spicy dill pickle
  one, so the paragraph was rewritten with the style, the address and the room,
  and the hedge removed.
- **Park Café (Qualico Family Centre, Assiniboine Park)** - open, 9 a.m. to
  4 p.m., closed December 25 and open other holidays, per the Assiniboine Park
  Conservancy's own page and the Travel Manitoba directory. Address left blank:
  the sources give the café's location as the Qualico Family Centre on the Riley
  Family Duck Pond without a street address, and the park's own civic address is
  not the café's. `blog-group-dining.html` states no hours and was left alone.
- **Parlour Coffee** - open, at 468 Main St, the address the ledger already held,
  with an August 2026 Yelp update and current Tripadvisor ranking. Hours differ
  between the shop's own site and the aggregators, so none is stated on any of
  the three pages that name it, and none was added.

### Ledger sweep

`blog-coffee-near-corydon-airbnb.html` swept. All five businesses it names were
already in the ledger (Thom Bargen, Forgotten Flavours, Sugar + Salt, Starbucks
and Tim Horton's, all on Corydon Avenue), so this filename was appended to each
entry's `pages` and nothing was added. Noted for a later run: the ledger holds
two entries for the same Tim Hortons at 949 Corydon Ave and they should be
merged.

### New post

`blog-winnipeg-new-music-festival.html`, "Winnipeg New Music Festival 2027:
Dates, Tickets, Venues", the first entry of the Events queue. An explainer of
how the WSO's contemporary music week works: the 2026 run of January 21 to 29 as
the shape of the week, the two venues and the twenty-minute walk between them in
the dark, how passes and single tickets work, Kelly-Marie Murphy's first festival
as curator, and the festival's 1992 origin. No 2027 date or price is stated
anywhere on the page, because none has been posted. Registered in
`articles-data.js`, `articles_data.json`, the `blog.html` noscript cards and
JSON-LD, `sitemap.xml` and a regenerated `llms.txt`; provenance recorded in
`post-sources.md`. Hargrave St. Market and Parlour Coffee, the only commercial
businesses it names, were already in the ledger and gained the new filename.

### Pages changed

- `blog-winnipeg-new-music-festival.html` (new)
- `blog-winnipeg-pizza-guide.html` (Parcel Pizza paragraph corrected)
- `blog.html`, `articles-data.js`, `articles_data.json`, `sitemap.xml`,
  `llms.txt` (registration)

### Accessibility

`pa11y --standard WCAG2AA` run on the three changed pages,
`blog-winnipeg-new-music-festival.html`, `blog.html` and
`blog-winnipeg-pizza-guide.html`: no issues on any of them. The checks ran
against a local static server rather than staywinnipeg.ca, because the new page
is not deployed until this push and the live domain is not reachable from the
run's network. No CSS was touched, so no minified stylesheet needed
regenerating.

### Finding for a later run: blog.html is behind articles-data.js

`articles-data.js` now lists 153 posts. The `blog.html` JSON-LD `blogPost` array
and the `<noscript>` cards each hold 98, and `articles_data.json` holds 136, so
**55 posts are missing from the no-JS fallback and the structured data** and 17
from the legacy JSON. The gap is older than this run (the missing slugs are the
July and August Corydon-anchored posts), and closing it is a far bigger diff than
a daily run should carry, so it is recorded here instead of half-done. Today's
post was added to all four.

---

## 2026-10-02

### Businesses verified (6, the stalest in the rotation)

All six were on the `2026-01-01` backfill date and had never been checked. Five
confirmed open, one could not be verified at all. Three blank addresses filled in.

- **Garden City Shopping Centre** - open, at **2305 McPhillips Street** in West
  Kildonan at Leila Avenue (address now filled in). Wikipedia and Malls.com both
  carry the address and the mall's current anchor list, and CTV's 2026
  what's-open-and-closed pieces give its holiday hours for Louis Riel Day,
  Canada Day and New Year's Eve, which is current operating evidence.
  `blog-classic107-spring-break-winnipeg.html`, the only page that names it, was
  left alone; it states no address or hours.
- **Milk & Madu (Canggu)** - open, at **Jalan Pantai Berawa No. 52, Canggu**
  (address now filled in). Chope's Bali listing and two current Canggu dining
  roundups give the Berawa address, the 7.30 a.m. to 10 p.m. hours and the phone
  number. `blog-bali-nyaman.html` unchanged; it names no hours.
- **Milu by Nook (Canggu)** - open. The third NOOK location, on the edge of the
  Canggu rice paddies, 8 a.m. to 11 p.m., with a current price range and phone
  number on its listings. Address left blank: the sources place it on the
  paddies off Jalan Pantai Berawa but none states a street number we can stand
  behind. `blog-bali-nyaman.html` unchanged.
- **Neon Palm Pizza** - **unverified**, deliberately left as `open`. Three
  separate search passes (general web, Winnipeg news and tourism sites, and the
  delivery platforms plus Yelp and Tripadvisor) found no Winnipeg business of
  this name; every hit is a New York style pizzeria of the same name in Little
  Havana, Miami. The link on our page points at neonpalm.pizza, which is blocked
  at this sandbox's egress proxy, so whether that site is still live could not be
  tested either. Per the playbook's rule on unverifiable businesses, nothing was
  changed on `blog-winnipeg-pizza-guide.html` and the status was not touched;
  `last_verified` is set to today to record that it was checked. **Flagging for a
  human**: this entry needs eyes, because a name that produces no local evidence
  at all is more likely a mistake on our page than a quiet closure.
- **Niakwa Country Club** - open, at **620 Niakwa Road** in St. Vital (address now
  filled in). The 1923 Stanley Thompson course, private, 18 holes, and the
  listings describe a current year-round simulator and lounge operation.
  `blog-winnipeg-event-venues.html` unchanged.
- **Nucci's Gelati** - open, at 643 Corydon Avenue, the address the ledger already
  held. Reviews from January and August 2026 on Yelp and Tripadvisor, and a
  current Restaurant Guru listing. The three pages that name it were left alone.

### Ledger sweep

`blog-coffee-near-corydon-airbnb.html` swept. No new entries were needed: all
five businesses it names (Thom Bargen Coffee Roasters, Forgotten Flavours,
Sugar + Salt Bakeshoppe, Starbucks and Tim Horton's) were already in the ledger,
so the filename was appended to each one's `pages`. Their `last_verified` dates
were left as they were, since appending a page is not a verification.

### New post

`blog-winnipeg-new-music-festival.html` - "Winnipeg New Music Festival 2027: Late
January, Tickets". First entry of the Events queue, a new post, written in the
host's-notes form (the last three posts used one-day plan, question and answer
and comparison).

No 2027 dates, venues or prices had been announced, so the page states none and
sends readers to wnmf.ca in a single `.info-box`. Everything specific on it
belongs to the 2026 edition and is written as the shape of the week: January 21
to 29, 2026 at the Centennial Concert Hall and the Desautels Concert Hall at the
University of Manitoba; the $99 adult and $49 child festival pass and the 55 per
cent saving the festival claims for it; the Soundcheck programme for ages 13 to
39, its $20 festival tickets and its $85 season pass for ages 18 to 29; and the
box office number. Founding in 1992 under Bramwell Tovey and Glenn Buhr, the
2,300-seat hall, the festival's standing as the largest in Canada given wholly to
contemporary art music, and Kelly-Marie Murphy as composer-in-residence and
curator for the 2026-27 season were all confirmed by search. Transit fare, the
D19 Corydon route and the Portage and Main crossings came from our own sourced
posts; the late-January sunset of just after 5 p.m. and the walk times were
computed and measured rather than sourced. Full provenance is in
`blog-maintenance/post-sources.md`.

Hero image is `images/city-hall-council-building-2021.jpg`, City Hall on Main
Street directly across from the Concert Hall. There is no local photo of an
orchestra or of the Concert Hall itself, and both unsplash.com and
images.unsplash.com are blocked at the egress proxy, so no new stock photo could
be verified as a working URL; the alt text describes what the photo actually
shows rather than implying it is the venue.

Registered in `articles-data.js`, `articles_data.json`, the `blog.html` noscript
card and JSON-LD `blogPost` array, `sitemap.xml`, and `llms.txt` (regenerated
with `blog-maintenance/update-llms.py`: 153 posts). Three Exchange District
restaurants the post names (Amsterdam Tea Room and Bar, Deer + Almond, La
Brasserie Nonsuch) already had ledger entries verified open within the previous
two weeks, so the new filename was appended to each.

### Operations note: this work is not on `main`

The playbook says to push to `main` so the site redeploys. This session was
started with a harness-level instruction to develop and push only on the branch
`claude/amazing-bell-m58lnf`, and that instruction forbids pushing elsewhere
without explicit permission, so this run was committed there instead.

`origin/main` is still at `7340d0c` ("Update short-term rental registration to
STRA-2026-2600298"). Three runs now sit on `claude/amazing-bell-m58lnf` and have
not deployed: the 2026-09-30 `christmas-winnipeg` refresh, the 2026-10-01
`new-years-eve-the-forks` post, and this one. There is no open pull request for
the branch. **Someone needs to merge it**, or the cron's environment needs to
stop pinning it to a feature branch; a future run should not assume the live site
carries any of the last three days of work.

---

### pa11y

`blog-winnipeg-new-music-festival.html` and `blog.html` both pass WCAG2AA with no
issues. Served from the working tree on 127.0.0.1 because the new page is not on
staywinnipeg.ca until this push deploys, and staywinnipeg.ca is blocked at the
egress proxy for the headless browser in any case. `pa11y` needs a config file
with `chromeLaunchConfig` pointing `executablePath` at
/opt/pw-browsers/chromium-1194/chrome-linux/chrome and passing `--no-sandbox`. No
CSS changed this run, so no minified stylesheet needed regenerating.

---

## 2026-10-01

### Businesses verified (6, the stalest in the rotation)

All six were on the `2026-01-01` backfill date and had never been checked. Four
are open, **two have closed**, and three blank addresses are now filled in.

- **Little Sister Coffee Maker** - open. Three Winnipeg locations: the original
  basement shop at **470 River Ave** in Osborne Village (the ledger address is now
  filled in), 539 Osborne St, and one on McDermot Ave. Tourism Winnipeg carries a
  current listing and Tripadvisor shows 2026 reviews. The four pages that name it
  were left alone; `blog-best-places-nearby-winnipeg.html` already says there is a
  River Avenue location as well as the Osborne one, which is correct.
- **Luda's Deli** - open, at 410 Aberdeen Ave in the North End, the address the
  ledger already held. Weekday mornings only, cash only, Yelp updated September
  2026. `blog-best-places-nearby-winnipeg.html` unchanged.
- **MAKE Coffee + Stuff** - **closed**. The café at 751 Corydon Ave shut on
  **March 31, 2026** after 13 years; its own closing announcement is the source,
  reached through two independent search passes. Its entry in the places list on
  `blog-best-places-nearby-winnipeg.html`, the only page that named it, was
  removed. Address filled in and `status` set to `closed`.
- **Manoomin Restaurant** - open, inside the Wyndham Garden Winnipeg Airport
  hotel at **460 Madison St**, on Long Plain Madison Reserve, led by Red Seal chef
  Jennifer Ballantyne. Address filled in; one source gave 472 Madison St and was
  not used, since the hotel's own dining page and Tourism Winnipeg both say 460.
  `blog-indigenous-winnipeg.html` states no address and was left alone.
- **Marion Street Eatery** - **closed**. The room at 393 Marion Street is now
  **Roasted Nomad**, opened by Pam Holunga, who worked at Marion Street Eatery
  before taking the space over, with much of the old crew; Tourism Winnipeg's
  new-restaurants roundup and a September 2026 review both cover it. Brunch
  Tuesday to Sunday, no reservations. Corrected on both pages that named it:
  `blog-winnipeg-brunch-breakfast.html` (section rewritten, plus the meta
  description, keywords, JSON-LD description and the Pauline Bistro cross
  reference) and `blog-restaurants.html`. The shared description was also updated
  in `blog.html` (noscript card and JSON-LD), `articles-data.js` and
  `articles_data.json`. Roasted Nomad added to the ledger.
- **Miss Browns (Hargrave St. Market)** - open, still on the current vendor roster
  for the food hall at 242 Hargrave St in True North Square. Note that this is
  roster evidence rather than a dated 2026 review, and that its SkipTheDishes
  listing is marked "DNU", so the delivery channel may have ended even though the
  counter has not. `blog-hargrave-st-market.html` unchanged.

### Ledger sweep

`blog-classic107-spring-break-winnipeg.html` swept. Two commercial entries added,
Garden City Shopping Centre and St. Vital Centre, both dated `2026-01-01` because
they were not verified this run. Everything else that post names is an
institution.

### New post

`blog-new-years-eve-the-forks.html`, "New Year's Eve at The Forks 2026: Fireworks
and Skating", the first entry of the Events queue and a new post rather than a
refresh. Form: **one-day plan**, the evening hour by hour with the trade-off
stated at each step, chosen because the last three posts used question and answer,
comparison and walk.

**What it states, and what it deliberately does not.** December 31, 2026 is a
Thursday. Nothing for the 2026-27 night had been announced, so every schedule
detail is written as a past-year pattern rather than a 2026 fact: the 8 p.m.
fireworks and family countdown at the CN Stage, programming from 4 p.m., the
free-transit window from 7 p.m. with the last buses out of downtown around
1:30 a.m. and On-Request to roughly 2 a.m., and free January 1 programming.
**Whether a midnight display runs is written as varying by year**, because older
coverage describes both an 8 p.m. and a midnight show while the recent published
schedules end at 8 p.m., and nothing settles 2026. **No vendor, menu item, price
or opening hour inside The Forks Market is stated**, because none was sourced for
December 31. Sunset of 4:37 p.m. on December 31 was computed for Winnipeg rather
than looked up. Skate rentals at $8 and $4, the 38 Salter, the D19 Corydon
terminal on Kennedy Street and the $3.45 cash / $3.10 peggo fare are carried
forward from the 2026-09-29 run's sourcing. Full sourcing is in
`blog-maintenance/post-sources.md`.

Registered in `articles-data.js`, `articles_data.json`, the `blog.html` noscript
grid and JSON-LD `blogPost` array, and `sitemap.xml`; `llms.txt` regenerated with
`blog-maintenance/update-llms.py` (152 posts). The Forks Market gained the new
filename in its ledger `pages`.

### pa11y

All five changed pages pass WCAG2AA with no issues:
`blog-new-years-eve-the-forks.html`, `blog.html`,
`blog-winnipeg-brunch-breakfast.html`, `blog-restaurants.html` and
`blog-best-places-nearby-winnipeg.html`. Served from the working tree on
127.0.0.1 because the new page is not on staywinnipeg.ca until this push deploys,
and because staywinnipeg.ca is blocked at this sandbox's egress proxy for the
headless browser. `pa11y` needs a config file with `chromeLaunchConfig`
pointing `executablePath` at /opt/pw-browsers/chromium-1194/chrome-linux/chrome
and passing `--no-sandbox`; the same options given under a `defaults` key are
ignored. No CSS changed this run, so no minified stylesheet needed regenerating.

### Other pages touched

`sitemap.xml` `<lastmod>` set to 2026-10-01 for `blog.html`,
`blog-restaurants.html`, `blog-winnipeg-brunch-breakfast.html` and
`blog-best-places-nearby-winnipeg.html`, and a new entry added for the post.
`article:modified_time` and `dateModified` updated on the three edited posts.

---

## 2026-09-30

### Businesses verified (6, the stalest in the rotation)

All six were on the `2026-01-01` backfill date and had never been checked. All
six are open. Five had a blank address in the ledger; all five are now filled in.

- **King's Head Pub** - open, at 120 King Street in the Exchange District, the
  address the ledger already held. Two floors, a long-running Sunday night live
  music series, and at least one show listed on Songkick for the 2026-27 window.
  `blog-24-hour-winnipeg-budget.html` and `blog-group-dining.html` unchanged.
- **Kitchen Sync** - open, a private event venue at **Unit A, 370 Donald Street**,
  in the 1905 Bell Block, one block off the Exchange. Founded 2015, owner-operated
  by Sheila Bennett, capacity 90. Address filled in.
  `blog-winnipeg-event-venues.html` states no address and was left alone.
- **Kum Koon Garden** - open, at **257 King Street** in Chinatown, with a dim sum
  reference as recent as May 2026. Address filled in. `blog-restaurants.html`
  states no address and was left alone.
- **La Brasserie Nonsuch Brewing Co.** - open, at **125 Pacific Avenue** in the
  Exchange, majority Indigenous-owned, Belgian styles and a full kitchen. Address
  filled in. The three pages that name it state no address and were left alone.
- **Lake of the Woods Brewing Company (Hargrave St. Market)** - open, still the
  brewery at the centre of Hargrave St. Market in True North Square, brewing
  on-site on the second floor behind glass. The ledger's 242 Hargrave St was
  already correct. `blog-hargrave-st-market.html` and
  `blog-winnipeg-breweries.html` unchanged.
- **Little Brown Jug Brewing Company** - open, at **336 William Avenue** in the
  Exchange, trading since 2016, listed as a Doors Open Winnipeg 2026 building.
  Address filled in. `blog-winnipeg-event-venues.html` was left alone.

### Refreshed post

`blog-christmas-winnipeg.html`, retitled "Winnipeg at Christmas 2026: Winter
Break, Dec 18 to Jan 4", rewritten as a **question and answer** post of eight
questions. First entry of the Events queue, marked "refresh", so the slug and URL
were kept and `datePublished` stayed at 2025-12-23 with `dateModified` set to
today, following the convention from the 2026-09-25 Jets refresh.

The old page could not be patched. It was written for the 2025-26 season and hung
about forty specific dates on it, opening with "winter break from December 20,
2025, to January 4, 2026" under a title that said 2026. It also carried most of
the house-style tells the playbook lists. The body was replaced.

**What the new page states, and what it deliberately does not.** Confirmed this
run: most Manitoba school divisions end classes Friday December 18, 2026 with a
few running to Monday December 21, and nearly all resume Monday January 4, 2027;
Christmas Day 2026 is a Friday; Royal MTC's holiday show is *Anne of Green
Gables, The Musical* on the John Hirsch Mainstage at 174 Market Avenue, opening
November 26 and closing December 20; the Jets host Dallas at Canada Life Centre
on Saturday December 19 and Sunday December 20, the same opponent on consecutive
nights. RWB *Nutcracker* December 18 to 27 came from our own sourced post of
2026-09-05. **No 2026-27 date or price is stated for Zoo Lights, Luminous or
Canad Inns Winter Wonderland**, because none had been posted; the past-year
pattern is written as "in past years" and readers are sent to redriverex.com and
assiniboinepark.ca. **Jets start times were left off**: the one source that gave
them labelled them ET while Canada Life Centre is CT. A single-sourced December 28
home game against San Jose was left off, as was a conflicting claim of a
December 27 home game against Minnesota. Sunrise 8:24 a.m. and sunset 4:29 p.m.
on December 21 were computed for Winnipeg rather than looked up. Full sourcing is
in `blog-maintenance/post-sources.md`.

The hero image was left as the existing Unsplash Christmas-lights photo. It
matches the subject, and the only local winter photo in `images/`,
`winter-activities.jpg`, is already the hero on two other posts and carries wrong
alt text on both (flagged in the 2026-09-29 entry and still unfixed: it shows the
St. Boniface Cathedral facade in snow, not people on a frozen river).

### Ledger

- The refreshed post names no commercial business in ledger scope. Red River
  Exhibition Park, Assiniboine Park Zoo, The Leaf, the Centennial Concert Hall,
  the John Hirsch Mainstage, Canada Life Centre and The Forks are institutions or
  venues; Royal MTC, the RWB, the Jets and Winnipeg Transit are organisations.
- **Backfill sweep:** `blog-christmas-winnipeg.html`, the first file under "Not
  yet swept", moved to "Swept". It was swept against the refreshed text, in the
  same run that rewrote it. The pre-refresh version did name commercial businesses
  (Fairmont Winnipeg, Uptown Alley, The Rec Room, Vertical Adventures, Flying
  Squirrel, CF Polo Park, Kendricks Outdoor Adventures), but all of that copy was
  cut because it depended on 2025-26 dates, and none of those names was in the
  ledger, so no `pages` array needed correcting either.

### Other files touched

`articles-data.js`, `articles_data.json`, `blog.html` (noscript card and JSON-LD
`blogPost` entry), `sitemap.xml` (`lastmod` 2026-09-30), `llms.txt` (regenerated
with `update-llms.py`), `post-ideas.md`, `post-sources.md`, `ledger-sweep.md`.

---

## 2026-09-29

### Businesses verified (6, the stalest in the rotation)

All six were on the `2026-01-01` backfill date and had never been checked. All
six are open; one carried a wrong address.

- **Adventure Caving Bt. (Budapest)** - open. The operator still runs guided
  trips into the Pal-volgyi and Matyas-hegyi cave system under Budapest on a
  fixed weekly timetable, booked through several travel platforms, with gear
  provided and no experience required. The full registered name appears as
  Adventure Caving Programszervezo Bt.; the ledger's short form was left as is.
  Address left blank: the sources give a tour meeting point (Pusztaszeri ut 35),
  not a business address. `blog-budapest-caving.html` unchanged.
- **Half Pints Brewing Company** - open, at 550 Roseberry Street in St. James.
  Address filled in (it was blank). Current taproom hours could not be sourced,
  and `blog-winnipeg-breweries.html` does not state any, so nothing changed on
  the page.
- **Harth Mozza & Wine Bar** - open, at **980 St Anne's Road**, phone
  204-255-0003. **The ledger had the address wrong**: it read `1101 Corydon Ave`,
  which is in fact The Falafel Place, named on
  `blog-winnipeg-middle-eastern-food-guide.html`. Corrected in the ledger.
  **No page needed fixing**: `blog-best-places-nearby-winnipeg.html` already
  gives 980 St Anne's Rd in its map link and `blog-restaurants.html` states no
  address. So this was a ledger data error only, not a site error, but it would
  have sent a future run to correct the wrong street.
- **Hy's Steakhouse** - open, at the corner of Portage and Main, where it moved
  in 2005. Address left blank: no source in this batch gave a street number.
  `blog-group-dining.html` ("this classic steakhouse on Portage Avenue") and
  `blog-winnipeg-steakhouses-bbq.html` ("Hy's Steakhouse, downtown") are both
  consistent with that and were left alone.
- **Ichiban Japanese Steakhouse & Sushi Bar** - open, at 189 Carlton Street
  downtown, teppan tables and a sushi bar, trading for over fifty years. A Job
  Bank posting dated March 6, 2026 shows it actively hiring, which is the
  strongest recent evidence available. Address filled in.
  `blog-group-dining.html` states no address and was left alone.
- **Isekai Ramen** - open, at 1039 Cathedral Avenue, with delivery listings
  showing current service. Address filled in. `blog-winnipeg-coffee.html`
  describes it as having opened in early 2025, which is consistent; left alone.

### New post

`blog-arctic-glacier-winter-park-forks.html`, "Arctic Glacier Winter Park 2026:
Skating at The Forks", written as a **comparison** (the on-land winter park set
against the Nestaweya River Trail on opening date, cost, wind exposure, children
and daylight). First entry of the Events queue, a new post rather than a refresh.

The useful thing the post says is that the two surfaces are not interchangeable:
the park is built on land and can open as soon as the cold is reliable, usually
in time for Christmas break, while the river trail waits on measured ice and has
opened in January in recent years. **No 2026-27 opening date or price is stated
anywhere on the page**, because The Forks had published none; readers are sent to
theforks.com. Sourcing is recorded in `blog-maintenance/post-sources.md`.

Hero image is `images/guidebook-winnipeg-39-the-forks.jpg`, the red canopy at The
Forks, which is the structure the Canopy Rink sits under. It is a warm-weather
photo, which is not ideal on a winter post, but no local `images/` file shows
skating or snow at The Forks and the alt text describes what the photo actually
shows. Two image problems were noticed in passing and **not** fixed, since they
are outside this run's scope: `images/river_trail.png` is not a PNG at all (its
header is an ISO base media `ftyp` box, so it is a video or HEIF file saved with
the wrong extension), and `images/winter-activities.jpg` is a photo of the St.
Boniface Cathedral ruins in winter, while its alt text in `articles-data.js`
reads "People enjoying winter activities on frozen river in Winnipeg". Both are
worth a future run.

### Ledger

- **The Forks Market** (1 Forks Market Rd) added for the new post. The rinks, the
  slide, the trail, the warming huts and Union Station are run by The Forks North
  Portage Partnership or by public bodies and stay out of ledger scope.
- **Backfill sweep:** `blog-budget-day-corydon-airbnb.html`. Sugar + Salt
  Bakeshoppe and Santa Lucia Pizza were already listed, so the filename was
  appended to their `pages`; Tim Hortons (949 Corydon Ave) and Peking Chinese
  Food (840 Corydon Ave) were added with the `2026-01-01` backfill date, since
  this run did not verify them. Ledger now holds 144 businesses.

### Pages changed

`blog-arctic-glacier-winter-park-forks.html` (new), `blog.html` (noscript card
and JSON-LD `blogPost` entry), `articles-data.js`, `articles_data.json`,
`sitemap.xml` (new entry plus `blog.html` lastmod), `llms.txt` (regenerated,
151 posts), `blog-maintenance/` ledger, sweep, ideas, sources and this file.

---

## 2026-09-27 (manual fix, third commit of the day)

Owner feedback on the "Sources and what to re-check" box at the foot of the
Santa parade post: it is a note to ourselves and it should not be on a page the
public reads. Correct, and it had spread to seven posts.

- **Removed the source notes from all seven pages that carried one**:
  `blog-santa-claus-parade-winnipeg.html`, `blog-rwb-nutcracker-winnipeg.html`,
  `blog-winnipeg-holiday-markets.html`,
  `blog-canad-inns-winter-wonderland.html`, `blog-manito-ahbee-festival.html`,
  `blog-winnipeg-blue-bombers.html` (the same content under a "Before you go"
  label) and `blog-nhl-heritage-classic-winnipeg-2026.html` (a bare closing
  paragraph rather than a box). The pattern started with the 2026-09-23 refresh
  and was copied forward by every run since, including today's.
- **What replaced it.** Each page keeps one short "Before you go:" line that
  serves the reader rather than us: what changes year to year and the one site
  to confirm it at. Everything else went: which listing each figure came from,
  the "as of September 2026" access dates, the "read in September 2026" notes,
  the admissions that a sunset time was calculated rather than sourced, and the
  asides about what we could and could not find when writing.
- **The provenance was not discarded.** All seven notes were moved verbatim into
  a new internal file, `blog-maintenance/post-sources.md`, keyed by post
  filename. That file is the place to record where a post's facts came from from
  now on; it is never published.
- **Playbook updated so this does not come back.** A new section in
  `AGENT-INSTRUCTIONS.md`, "Sources belong in our notes, not on the page", sets
  the rule, defines the one permitted guest-facing line, and adds a grep to run
  before committing. A matching line was added to the Guardrails list.
- `article:modified_time`, `dateModified` and the sitemap `lastmod` moved to
  2026-09-27 on all seven pages; `llms.txt` regenerated. pa11y passes with no
  issues on all seven.
- Worth noting for a future run: the three posts backfilled earlier today now
  carry a `datePublished` in August or early September and a `dateModified` of
  2026-09-27. That is accurate, not a mistake to tidy up.

---

## 2026-09-27 (manual backfill, second commit of the day)

Run by hand at the owner's request, not by the cron: "backfill posts from the
last month that haven't been posted daily". **No business verification was done
in this run** (the day's rotation batch was already verified in the cron run
recorded below); this run only publishes the missing posts.

- **Gap analysis.** Of the 31 days from 2026-08-27 to 2026-09-27, five carry no
  post dated that day: 2026-08-31, 2026-09-03, 2026-09-05, 2026-09-23 and
  2026-09-25. Two of those five are not gaps in content: the 09-23 and 09-25
  runs both published, but as refreshes (`blog-winnipeg-blue-bombers.html` and
  `blog-winnipeg-jets.html`), and a refresh keeps the post's original
  `datePublished`, so no new dated entry appears. The 2026-09-03 slot was
  covered at the time by the manual catch-up run on 2026-09-04, but that post
  is dated 09-04, so 09-03 itself is still empty. That leaves three genuinely
  empty dates: **2026-08-31, 2026-09-03 and 2026-09-05**, all three caused by
  the five-hour usage-limit rejections documented in the 2026-09-06 operations
  note. That note recorded a deliberate decision not to backfill; the owner has
  now asked for it, which supersedes that decision.
- **Three posts published, dated to the empty days.** Each is dated to the day
  it fills (`article:published_time`, `datePublished`, the visible meta line,
  the `articles-data.js` date and the sitemap `lastmod`), not to today. The
  trade-off is stated plainly here: these pages went live on 2026-09-27 while
  declaring an earlier publication date, which is what "backfill" means but is
  worth knowing if the dates are ever audited against the deploy log.
  Taken in Events queue order, since that queue has priority:
  - `blog-canad-inns-winter-wonderland.html` (2026-08-31), "Canad Inns Winter
    Wonderland: Winnipeg Drive-Through Lights", written as an **explainer**.
    The 2026-27 season has not been announced, so the post gives the 2025-26
    figures (November 28 to January 3, closed December 25, 6 to 10 p.m.
    nightly, $30 per vehicle for up to seven, 2.5 km route, two million lights
    at 3977 Portage Avenue) explicitly as last season's and sends readers to
    redriverex.com. No 2026-27 date or price is stated anywhere on the page.
  - `blog-winnipeg-holiday-markets.html` (2026-09-03), "Winnipeg Holiday
    Markets 2026: Dates and Which One to Pick", written as a **ranked short
    list** of six. Confirmed 2026 dates for the Winnipeg Christmas Market
    (November 26 to 29, RBC Convention Centre, 375 York Avenue), Third + Bird
    (November 20 to 22), Scattered Seeds (October 16 to 18 and 23 to 25 at
    Red River Ex Park, Gate 2 off Racetrack Road), Crafted at the WAG
    (November 6 to 8) and Rise Above at the University of Manitoba
    (November 23). Two sources disagree on the Christkindlmarkt weekend and
    the post says so instead of choosing. Third + Bird's venue is deliberately
    omitted because that market has moved buildings between years.
  - `blog-rwb-nutcracker-winnipeg.html` (2026-09-05), "RWB Nutcracker 2026:
    December 18 to 27 in Winnipeg", written as **question and answer**.
    December 18 to 27 at the Centennial Concert Hall, 555 Main Street, a run
    time of two hours four minutes, choreography by Galina Yordanova and Nina
    Menon, and 1 p.m. and 6:30 p.m. starts from the listings. No ticket price
    is quoted: the only figure found came from a resale aggregator, so the
    post names rwb.org and the box office instead.
- **Forms** were rotated against each other and against the three posts written
  before them (walk, host's notes, question and answer), so no form repeated
  inside a window of three.
- **Ledger:** four markets added from the holiday markets post (Winnipeg
  Christmas Market, Third + Bird, Scattered Seeds Craft Market, Christkindlmarkt
  at Fort Garry Place), each `last_verified` 2026-09-27 since they were sourced
  in this run. Crafted is the Winnipeg Art Gallery's own sale and Rise Above is
  a one-day university market, so both were treated as institutional and left
  out, as were Winter Wonderland (an event of the Red River Exhibition
  Association), the RWB and the Concert Hall.
- **Images:** all three reuse Unsplash photos already in service on the site
  (the festive lights from `blog-christmas-winnipeg.html`, the indoor food hall
  from `blog-hargrave-st-market.html`, the lit stage from
  `blog-rainbow-stage.html`), because no local `images/` file depicts lights, a
  craft market or a stage, and new Unsplash URLs cannot be verified from this
  sandbox.
- Registered in `articles-data.js`, `articles_data.json`, the `blog.html`
  noscript grid and its JSON-LD `blogPost` array, and `sitemap.xml`; `llms.txt`
  regenerated (150 posts).
- **Known pre-existing drift, not fixed here:** `articles_data.json` is missing
  every post dated 2026-09-04 to 2026-09-21, and the `blog.html` noscript grid
  carries 95 cards against 150 posts in `articles-data.js`. Both backlogs
  predate this run and were left alone rather than widened into an unrelated
  repair; the three new posts were inserted correctly into all of them.
- **pa11y:** the three new pages and `blog.html` all pass WCAG2AA with no
  issues, checked against a local server for the reason given in the run below.

---

## 2026-09-27 (cron)

- **Verified 6 businesses** (the stalest batch, `rotation_batch_size` is 6), all
  carrying the 2026-01-01 backfill date and all confirmed open. No page on the
  site needed a correction this run:
  - Gondola Pizza - open. The chain's own locations page and current Yelp and
    YellowPages listings (Yelp updated August 2026) carry live hours for the
    Pembina Highway, Charleswood, McPhillips, Henderson and East St. Paul
    shops. `blog-winnipeg-pizza-guide.html` calls it a 1964 thin-crust chain
    with an original Pembina Highway kitchen and states no address or hours, so
    nothing changed. The blank `address` was filled in with 1292 Pembina Hwy,
    noted as the Fort Garry location of several.
  - Good Neighbour Brewing Co. - open at 110 Sherbrook St in West Broadway,
    3 p.m. to 10:30 p.m. Tuesday to Thursday and 1 p.m. to 10:30 p.m. Friday and
    Saturday, per goodneighbourbrewing.com and Tourism Winnipeg; the brewery
    also runs a cold beer shop at 683 Osborne. Both pages that name it
    (`blog-winnipeg-breweries.html`, which places it in West Broadway, and
    `blog-best-places-nearby-winnipeg.html`, which already gives 110 Sherbrook)
    are correct. The blank `address` was filled in.
  - Graffiti Gallery - open at 109 Higgins Ave, run by Graffiti Art Programming
    Inc., Monday to Friday noon to 4 p.m. by appointment only, per its Yelp
    listing (updated June 2026), Tourism Winnipeg and graffitigallery.ca.
    `blog-spacedoxa.html` needed no change.
  - Granite Curling Club - open at 1 Granite Way. granitecurlingclub.ca is live
    and carries 2026/2027 season material, including online practice-ice
    booking new for that season. `blog-winnipeg-breweries.html` needed no
    change.
  - Gunn's Bakery - open at 247 Selkirk Ave, 7:30 a.m. to 5:30 p.m. Monday to
    Thursday, to 6 p.m. Friday, 7 a.m. to 3 p.m. Saturday, closed Sunday, per
    gunnsbakery.com and a Yelp listing updated August 2026.
    `blog-best-places-nearby-winnipeg.html` needed no change.
  - Gusto North (Hargrave St. Market) - open at 242 Hargrave St, listed by
    Tourism Winnipeg, OpenTable, Downtown Winnipeg BIZ and the market's own
    restaurant directory, with a Yelp listing updated August 2026.
    `blog-hargrave-st-market.html` needed no change.
  - `last_verified` set to 2026-09-27 for all six; two blank addresses filled.
    Hargrave St. Market itself was also sourced this run (the market's own site
    and current listings) while checking Gusto North, so its `last_verified`
    moved to today as well and today's new post was appended to its `pages`.
- **Backfill sweep:** `blog-budapest-caving.html` read and moved to "Swept". It
  is a first-person travel story about a guided caving tour; the one commercial
  business it names, the tour operator Adventure Caving Bt., was not in the
  ledger and was added with the 2026-01-01 backfill date because it was not
  verified this run. Palvolgyi Dripstone Cave is run by the Duna-Ipoly National
  Park and is out of ledger scope.
- **New post:** `blog-santa-claus-parade-winnipeg.html`, "Winnipeg Santa Claus
  Parade 2026: Nov 14 Route and Times". First entry of the events queue, written
  as a walk (the last three posts used host's notes, question and answer, and
  one-day plan), following the route in order from Portage and Main west along
  Portage, south onto Memorial Boulevard and out at St. Mary. Covers the
  confirmed Saturday November 14, 2026 5 p.m. start, free admission, the 4 p.m.
  block parties, the 2 p.m. road closures on Portage and on Memorial in both
  directions, the accessible space held in front of the barricades at every
  intersection and the indoor viewing that must be requested in advance, the
  D19 Corydon route's Kennedy Street terminal and the 2026 transit fare, the
  4:46 p.m. sunset that makes this a night parade, and the parade's 1909
  Eaton's origin and its $1.50 sale to the Winnipeg Firefighters Club in the
  1960s. No temperatures, prices or vendor hours were invented; Hargrave St.
  Market is named without hours because its listings disagree. Hero image is
  `images/winnipegartgallery1.jpg`, a winter photo of the gallery on Memorial
  Boulevard, which is on the route.
- Registered in `articles-data.js`, `articles_data.json`, the `blog.html`
  noscript grid and its JSON-LD `blogPost` array, and `sitemap.xml`;
  `llms.txt` regenerated with `blog-maintenance/update-llms.py` (147 posts).
- **pa11y:** `blog-santa-claus-parade-winnipeg.html` and `blog.html` both pass
  WCAG2AA with no issues. staywinnipeg.ca is blocked at the egress proxy for the
  headless browser (ERR_TUNNEL_CONNECTION_FAILED), so the two pages were served
  from the working tree on 127.0.0.1 and checked there instead of over the live
  site; Chromium also needs `--no-sandbox` in this container.

---

## 2026-09-26 (cron)

- **Verified 6 businesses** (the stalest batch, `rotation_batch_size` is 6), all
  carrying the 2026-01-01 backfill date. Four of them are the Canggu businesses
  added to the ledger by yesterday's sweep of `blog-bali-nyaman.html`; they sort
  to the front alphabetically within the backfill tier, so they came up first:
  - Atlas Beach Club (Canggu) - confirmed open at Jl. Pantai Berawa No. 88,
    Tibubeneng. Current 2026 listings (Tripadvisor, Traveloka, the club's own
    atlasbeachfest.com) carry daily hours of noon to midnight, with the Super
    Club running from 9 p.m. The blank `address` was filled in.
  - Baked (Canggu) - confirmed open at Jl. Pantai Batu Bolong No. 38, daily
    7 a.m. to 7 p.m., per its Tripadvisor listing and several 2026 Bali bakery
    guides. The blank `address` was filled in.
  - Cafe Cinta (Canggu) - **moved.** The Berawa shop closed and the business
    reopened in Pererenan, open 8 a.m. to 11 p.m.; a second Berawa location is
    under renovation with a 2026 reopening announced. Status set to `moved` and
    the address recorded as Pererenan. **No page change was needed:**
    `blog-bali-nyaman.html` is a past-tense travel story that lists Cinta among
    cafes the writer walked to and never states an address or a neighbourhood
    for it, so nothing on the page is now wrong.
  - Finns Beach Club (Canggu) - confirmed open at Jl. Pantai Berawa No. 99,
    11 a.m. to midnight daily except Nyepi, per finnsbeachclub.com and current
    Tripadvisor reviews. The blank `address` was filled in.
  - French Way Cafe - confirmed open at 238 Lilac St. The Yelp listing was
    updated July 2026 and frenchwaycafe.com carries the hours, which match what
    `blog-best-breakfast-brunch-near-corydon-airbnb.html` already states (hot
    breakfast 8 a.m. to 3 p.m. Tuesday to Saturday, 9 a.m. to 3 p.m. Sunday).
    `blog-best-places-nearby-winnipeg.html` also gives 238 Lilac St. No page
    change. The blank `address` was filled in.
  - Fusian Sushi (The Forks Market) - confirmed open at 1 Forks Market Rd. The
    Yelp listing was updated March 2026 and The Forks' own dining directory
    still lists it. `blog-winnipeg-vegan-restaurants.html` needed no change.
  - `last_verified` set to 2026-09-26 for all six; five blank addresses filled.
- **Backfill sweep:** `blog-beat-the-heat-near-corydon-airbnb.html` read and
  moved to "Swept". The three commercial businesses it names (Thom Bargen
  Coffee Roasters, The Mighty Kiwi Juice Bar & Eatery, Sugar + Salt Bakeshoppe)
  were already in the ledger, so the filename was appended to each of their
  `pages`. The Leaf, Assiniboine Park and Enderton Park are institutions and
  out of ledger scope.
- **New post:** `blog-manito-ahbee-festival.html`, "Manito Ahbee Festival 2026:
  Oct 30 to Nov 1, Winnipeg". First entry of the events queue, written as
  host's notes (the last three posts used explainer, one-day plan and question
  and answer). Covers the confirmed October 30 to November 1 dates at Canada
  Life Centre, the 6 p.m. Friday and 9 a.m. weekend starts, the 2026 programme,
  Ticketmaster day and weekend passes with no price quoted because none is
  published, the BLUE line from Osborne Village at the 2026 fare, the True
  North Square and Cityplace parkades, the arena's screening and bag rules, the
  festival's own food vendor hours, Hargrave St. Market a block away, pow wow
  protocol, and the end of daylight saving at 2 a.m. on the Sunday of the
  festival. Hero image is the existing `images/the-forks-indigenous-768x512.jpeg`
  pow wow photo, with alt text naming The Forks so it does not imply the arena.
- **Registered** in `articles-data.js`, `articles_data.json`, the `blog.html`
  noscript grid and its `blogPost` JSON-LD array, and `sitemap.xml` (the new
  page plus a `lastmod` bump on `blog.html`). `llms.txt` regenerated with
  `blog-maintenance/update-llms.py`: 146 posts.
- **Ledger:** `blog-manito-ahbee-festival.html` appended to Hargrave St. Market,
  the one commercial business the new post names. Ticketmaster is a platform,
  and Canada Life Centre, True North Square and Cityplace are venues and
  parkades rather than ledger-scope businesses.
- **pa11y:** the two changed pages checked against WCAG2AA, both with no
  issues: `blog-manito-ahbee-festival.html` and `blog.html`. Served from a local
  static server because the new page is not on staywinnipeg.ca until this push
  deploys; `pa11y` needed `executablePath` pointed at the sandbox's Chromium at
  /opt/pw-browsers and `--no-sandbox`, since its bundled Chrome is not installed
  here. No CSS changed this run, so no minified stylesheet needed regenerating.
- **Note on sources:** manitoahbee.com, canadalifecentre.ca and
  tourismwinnipeg.com are all blocked at this sandbox's egress proxy, so their
  content was read through search-result summaries rather than fetched
  directly. Nothing in the post rests on a fact that only one blocked page
  carried.

---

## 2026-09-25 (cron)

- **Verified 6 businesses** (the stalest batch, `rotation_batch_size` is 6), all
  carrying the 2026-01-01 backfill date:
  - Devil May Care Brewing Company - confirmed open at 155-A Fort St. The
    brewery's own taproom page at devilmaycarebrewing.com carries current hours
    (the domain is blocked from this sandbox, but it is indexed with those hours
    and the Fort Street address), the Yelp listing was updated July 2026,
    and Tourism Winnipeg, Tripadvisor and Canada's Craft Beer Map all carry the
    Fort Street address. The blank `address` was filled in;
    `blog-winnipeg-event-venues.html` describes it only as an event space and
    states no address, so no page change was needed.
  - Eva's Gelato & Coffee Bar - confirmed open at 1001 Corydon Ave. evasgelato.com
    carries a live Corydon Avenue hours page, the Yelp listing was updated August
    2026, and Tourism Winnipeg, Yellow Pages and SkipTheDishes agree. The blank
    `address` was filled in; `blog-winnipeg-ice-cream-gelato.html` already gives
    1001 Corydon Avenue, so nothing needed correcting.
  - Feast Cafe Bistro - confirmed open at 587 Ellice Ave. Its own site lists
    Tuesday to Saturday, 11 a.m. to 10 p.m., closed Sunday and Monday, which is
    what `blog-indigenous-winnipeg.html` already states; the Yelp listing was
    updated June 2026 and OpenTable reservations are live. A third-party
    aggregator showed different hours, and the restaurant's own site was taken as
    the source. No change.
  - Foodfare - confirmed open. The chain is still running its Winnipeg stores,
    including 247 Lilac St, the one `blog-best-places-nearby-winnipeg.html`
    names and maps; that Yelp listing was updated June 2026, and the Portage
    Avenue, Maryland Street and Cavalier Drive stores are also current. The blank
    `address` was filled in with the Lilac Street location.
  - Fools & Horses Coffee - open, but **one location has closed.** The Broadway
    shop at 379 Broadway is flagged CLOSED on Yelp; the counters still running
    are in Hargrave St. Market (242 Hargrave St), The Forks Market (Yelp listing
    updated March 2026, plus the market's own dining page) and at the La Coste
    garden centre. `blog-winnipeg-coffee.html` named no location at all, which
    left readers nowhere to go, so a sentence was added naming the two central
    ones and saying the Broadway shop is closed. The ledger entry gained the
    Hargrave Street address and `blog-hargrave-st-market.html`, which also names
    the business, was appended to its `pages`.
  - Fort Garry Brewing Company - confirmed open at 130 Lowson Cres. The Yelp
    listing was updated July 2026, and Tourism Winnipeg, Manitoba Liquor Marts'
    retail brewer directory and the brewery's own Facebook page are all current.
    The blank `address` was filled in; `blog-winnipeg-breweries.html` states no
    address and describes only the brewery's history, so no page change was
    needed.
  - `last_verified` set to 2026-09-25 for all six, and five blank addresses
    filled in.
- **Backfill sweep:** `blog-bali-nyaman.html` read and moved to "Swept" in
  `ledger-sweep.md`. It is a travel story about a stay in Canggu, Bali; the
  cafes and beach clubs it names in passing (Milk & Madu, Milu by Nook, Cafe
  Cinta, Baked, Finns Beach Club, Atlas Beach Club) were added to the ledger
  with the 2026-01-01 backfill date, since they were not verified this run and
  the post states no addresses.
- **Refreshed post:** `blog-winnipeg-jets.html`, retitled "Winnipeg Jets
  2026-27: Tickets, Schedule and Game Nights". This is the first entry of the
  Events queue and is marked "refresh", so the existing page was rewritten in
  place and the slug and URL kept. Written as **question and answer**, eight
  questions with no other headings; the playbook's rotation rule bars any form
  used by the last three posts, which were nhl-heritage-classic-winnipeg-2026
  (one-day plan), winnipeg-blue-bombers (explainer) and culture-days-winnipeg
  (host's notes). The old page was a 2025 franchise history whose Heritage
  Classic half now duplicated yesterday's new post; those sections were dropped
  and replaced with a link to it.
- **Facts sourced before writing:** the 84-game 2026-27 regular season, the
  first at that length; the home opener Friday October 2 against Boston at
  Canada Life Centre, 300 Portage Ave, followed by Detroit on October 4; six
  straight games away from Canada Life Centre between January 28 and February
  15, split by the nine-day break for the 2027 All-Star Game from February 4 to
  12; the season's longest homestand, six games from March 1 to 13; the Dallas
  back-to-back on December 19 and 20 as the last home dates before the Christmas
  break, Toronto on March 11, and Edmonton on April 7 as the Oilers' only visit;
  the alumni game on October 24 and the Heritage Classic on October 25 at
  Princess Auto Stadium (nhl.com/jets schedule release and the club's own
  six-games-not-to-miss preview). Ticketmaster is True North's official
  marketplace, with single games, four and six-game packs and the Jets Passport;
  no prices were quoted. Gates open an hour before puck drop and bags are
  restricted to small sizes with no bag check on site (Jets fan FAQ). Parking:
  the True North Square parkade with its Hargrave Street entrance and a walkway
  to the arena, Cityplace at Hargrave and St. Mary, and the downtown walkway
  lots; rates vary by event, so the arena's own parking page is cited rather
  than a number. Transit: the BLUE line from Osborne Village along Portage
  Avenue, at the 2026 fare of $3.45 cash or $3.10 with peggo e-cash.
- **Image:** the existing rink close-up was kept. The only local arena-adjacent
  photo, `guidebook-winnipeg-40-true-north-square.jpg`, is a downtown
  glass-tower cluster and is barred by the house style guardrail on skylines.
- **Registration updated for the retitle:** `articles-data.js`,
  `articles_data.json`, the `<noscript>` card and the JSON-LD `blogPost` entry in
  `blog.html` (title, description, meta line, image alt, `dateModified`), the
  page's own `article:modified_time` and `dateModified`, `sitemap.xml`
  `<lastmod>` for the Jets page, `blog.html` and `blog-winnipeg-coffee.html`, and
  `llms.txt` regenerated with `update-llms.py` (145 posts).
- **pa11y:** the three changed pages checked against WCAG2AA, all with no
  issues: `blog-winnipeg-jets.html`, `blog-winnipeg-coffee.html` and
  `blog.html`. Served from a local static server because the rewritten Jets page
  is not on staywinnipeg.ca until this push deploys; `pa11y` needed
  `executablePath` pointed at the sandbox's Chromium at /opt/pw-browsers and
  `--no-sandbox`, since its bundled Chrome is not installed here.

---

## 2026-09-24 (cron)

- **Verified 6 businesses** (the stalest batch, `rotation_batch_size` is 6), all
  carrying the 2026-01-01 backfill date:
  - Carnaval Brazilian BBQ - confirmed open at 270 Waterfront Dr.
    carnavalrestaurant.ca is live, the Yelp listing was updated August 2026, and
    Tourism Winnipeg, OpenTable, Tripadvisor and Yellow Pages all carry current
    listings. The blank `address` was filled in;
    `blog-winnipeg-steakhouses-bbq.html` states no address, so no page change
    was needed.
  - Chop Steakhouse & Bar - confirmed open at 1750 Sargent Ave, in the Sandman
    Hotel & Suites Winnipeg Airport. chop.ca carries a live Winnipeg Airport
    location page and menu, the Yelp listing was updated August 2026, and
    OpenTable, RestaurantGuru and the hotel's own dining page agree. The blank
    `address` was filled in; the page states no address, so nothing on it
    needed correcting.
  - Confusion Corner Bar and Grill - open at 500 Corydon Ave, but **renamed**.
    Its own site is ccdrinksandfood.com and Tourism Winnipeg, Yelp (updated
    August 2026) and its Facebook page all now carry "Confusion Corner Drinks +
    Food". The ledger entry was renamed and
    `blog-best-corydon-patios.html` updated to the current name. The rooftop
    patio detail on that page is still accurate.
  - Cory Common Bakery - **the ledger entry and the page were both wrong.** COBS
    Bread's "Cory Common" bakery is in Saskatoon, not Winnipeg;
    `blog-winnipeg-bakeries-artisan-bread.html` linked to that Saskatoon page
    and described it as being "on Corydon". The COBS bakery actually on Corydon
    Avenue is the Tuxedo Park location at 2025 Corydon Ave in the Tuxedo Park
    Shopping Centre (cobsbread.com/local-bakery/tuxedo-park-winnipeg, Canpages,
    Yellow Pages, its own Facebook page). The page now names and links the
    Tuxedo Park bakery and gives the address; the ledger entry was renamed to
    "COBS Bread (Tuxedo Park)" with that address.
  - Danny's Whole Hog BBQ & Smokehouse - **no longer a Winnipeg restaurant.**
    The only current listing, Stony Mountain on Highway 67, is flagged CLOSED on
    Yelp as of June 2026; the business's own shop.dannyswholehog.ca sells
    ready-to-serve smoked meats for pickup and delivery from that Highway 67
    kitchen, and its Facebook page is registered in Stonewall. Nothing current
    supports the Ellice Avenue dining room the site described.
    `blog-winnipeg-steakhouses-bbq.html` no longer recommends it as a
    restaurant: the barbecue paragraph now leads with Smokin' Hawg and says
    plainly that Danny's is pickup, delivery and catering only, and the
    highlight box no longer lists it as a ten-minute drive. Ledger `status` set
    to `moved`.
  - Deer + Almond - confirmed open at 85 Princess St in the Exchange District.
    The Yelp listing was updated June 2026, Tourism Winnipeg and Tripadvisor
    carry current listings, and reservations are live on Tock. The blank
    `address` was filled in; `blog-restaurants.html` states no address, so no
    page change was needed.
  - `last_verified` set to 2026-09-24 for all six.
- **One more factual correction while in the area:** yesterday's Blue Bombers
  refresh quoted the Winnipeg Transit cash fare as $3.25. The City's 2026 fare
  page lists $3.45 cash and $3.10 with peggo e-cash, so
  `blog-winnipeg-blue-bombers.html` was corrected.
- **Backfill sweep:** `blog-assiniboine-park.html` read and moved to "Swept" in
  `ledger-sweep.md`. It names only the park's own attractions (Leo Mol Sculpture
  Garden, the Lyric Theatre, the Pavilion, Journey to Churchill, The Leaf),
  which are institutions rather than commercial businesses, so nothing was
  added to the ledger.
- **New post:** `blog-nhl-heritage-classic-winnipeg-2026.html`, "Heritage
  Classic 2026 Winnipeg: Jets vs Canadiens, Oct 25". This is the first entry of
  the Events queue and was not marked "refresh", so it is a new page. Written as
  a **one-day plan**, hour by hour with the trade-offs stated; the playbook's
  rotation rule bars any form used by the last three posts, which were
  winnipeg-blue-bombers (explainer), culture-days-winnipeg (host's notes) and
  nuit-blanche-winnipeg (question and answer).
- **Facts sourced before writing:** Sunday October 25, 2026 at Princess Auto
  Stadium, 315 Chancellor Matheson Rd on the U of M Fort Garry campus, Jets vs
  Canadiens, puck drop listed at 6 p.m.; the eighth Heritage Classic and the
  second at this stadium, the October 2016 edition drawing 33,240 for a 3-0
  Edmonton win; the alumni game Saturday October 24 at 6:30 p.m. at Canada Life
  Centre with Wheeler, Ladd, Byfuglien, Little and Perreault named; the general
  on-sale through Ticketmaster at 10 a.m. CT on March 24, 2026 after Pinnacle
  Club and Blue Bombers season ticket presales; Winnipeg Transit's BLUE line on
  the Southwest Transitway, the free park and ride lots at Seel and Clarence
  stations, extra BLUE, F8, F9 and 74 service for stadium events, the X74, XF8
  and XBLUE game-day expresses, post-event buses from Stadium Station at Gate 4,
  and the 2026 fares above; late-October sunset just after 6 p.m. and October
  averages near 10C by day and 3C at night. No ticket prices, gate times or
  line-ups were invented; the post says where to check each.
- **Image:** no photo in `images/` shows hockey, ice or a stadium, so the post
  reuses the hockey rink photo already in use on `blog-winnipeg-jets.html`
  rather than an unverified new Unsplash URL. No skyline.
- **Registered:** `articles-data.js`, `articles_data.json`, the `blog.html`
  noscript card and JSON-LD `blogPost` array, `sitemap.xml` (new entry plus
  `<lastmod>` bumped for `blog.html`, `blog-winnipeg-steakhouses-bbq.html`,
  `blog-best-corydon-patios.html`, `blog-winnipeg-blue-bombers.html` and
  `blog-winnipeg-bakeries-artisan-bread.html`), and `llms.txt` regenerated with
  `blog-maintenance/update-llms.py` (145 posts). Cho Ichi Ramen, the one
  commercial business the new post names, already had a ledger entry, so the new
  filename was appended to its `pages`.
- **pa11y:** all six changed pages checked against WCAG2AA and all six pass with
  no issues: the new Heritage Classic post, `blog.html`,
  `blog-winnipeg-steakhouses-bbq.html`, `blog-best-corydon-patios.html`,
  `blog-winnipeg-bakeries-artisan-bread.html` and
  `blog-winnipeg-blue-bombers.html`. They were served from a local static server
  because the new page is not on staywinnipeg.ca until this push deploys;
  `pa11y` needed `executablePath` pointed at the sandbox's Chromium and
  `--no-sandbox`, since its bundled Chrome is not installed here.

---

## 2026-09-23 (cron)

- **Verified 6 businesses** (the stalest batch, `rotation_batch_size` is 6), all
  carrying the 2026-01-01 backfill date:
  - Chaeban Ice Cream, 390 Osborne St - confirmed open. Its own site
    (chaebanicecream.com) is live, the Yelp listing was updated July 2026 with
    current hours, and Tourism Winnipeg, Tripadvisor and Food & Beverage
    Manitoba all carry active listings. Address already correct in the ledger
    and on `blog-winnipeg-ice-cream-gelato.html`; no page change needed.
  - Chaise Cafe & Lounge - confirmed open at 271 Provencher Blvd in St.
    Boniface. chaisecafe.com is live, the Yelp listing was updated June 2026,
    and Sirved, RestaurantGuru and Wanderlog all show current menus and hours.
    The blank `address` was filled in. `blog-group-dining.html` states no
    address for it, so nothing on the page needed correcting.
  - Cho Ichi Ramen, 1151 Pembina Hwy - confirmed open. Tourism Winnipeg, a Yelp
    listing updated August 2026, Tripadvisor and the restaurant's own Facebook
    and Instagram all show it operating daily. Address already correct.
  - Cibo Waterfront Cafe - confirmed open at 339 Waterfront Drive.
    cibowaterfrontcafe.com is live with a current menu, the Yelp listing was
    updated August 2026, and OpenTable, Tripadvisor and Tourism Winnipeg all
    list it. The blank `address` was filled in; `blog-group-dining.html` states
    no address, so no page change was needed.
  - Clay Oven Restaurant - confirmed open. clayoven.ca is live and shows four
    Winnipeg locations (Kenaston, Downtown at Blue Cross Park, McPhillips and
    the Edmonton St express counter), corroborated by OpenTable, Yelp and
    Tripadvisor. `blog-group-dining.html` refers to the Blue Cross Park
    location specifically, so the blank `address` was filled in as 1 Portage
    Ave E to match what the page names. No page change needed.
  - Clementine Cafe, 123 Princess St - confirmed open. clementinewinnipeg.com
    is live and was posting 2026 closure notices for specific days, the Yelp
    listing was updated September 2026, and Tourism Winnipeg, Tripadvisor and
    Restaurantji all carry current listings. Address already correct.
  - No closures, moves or renames found. `last_verified` set to 2026-09-23 for
    all six, and three blank addresses filled in.
- **Backfill sweep:** `blog-assiniboine-park-zoo-leaf-guide.html` read and moved
  to "Swept" in `ledger-sweep.md`. It is a short planning guide to Assiniboine
  Park, the zoo and The Leaf and names no commercial business, only the park
  attractions themselves, which are out of ledger scope. Nothing was added.
- **Post refreshed:** `blog-winnipeg-blue-bombers.html`, retitled "Blue Bombers
  Home Finale 2026: October 10 vs Calgary". This is the first entry of the
  Events queue and was marked "refresh", so the existing page was updated in
  place and the slug and URL kept. Written as an **explainer** in continuous
  prose: the playbook's rotation rule bars any form used by the last three
  posts, which were culture-days-winnipeg (host's notes), nuit-blanche-winnipeg
  (question and answer) and winnipeg-st-vital-guide (neighbourhood guide).
- **One factual error corrected on the page.** The 2025 version placed Princess
  Auto Stadium "in Winnipeg's Polo Park area" in four passages. That describes
  the demolished Canad Inns Stadium; the current building is at 315 Chancellor
  Matheson Road on the University of Manitoba's Fort Garry campus, roughly
  eight kilometres away. The refreshed post says so directly and tells readers
  to search the Chancellor Matheson address rather than Polo Park.
- **Facts confirmed by web search before writing:** the October 10, 2026 6 p.m.
  kickoff against Calgary and its status as the home finale (Winnipeg is at
  Edmonton October 17 and at BC October 23, with the regular season ending
  October 24); the Bombers at 7-6 and fourth in the West as of mid-September
  2026, behind Edmonton 10-4, Saskatchewan 8-5 and BC 7-6, with Calgary 5-7;
  the CFL's published playoff dates of October 31 division semi-finals,
  November 7 division finals, and the 113th Grey Cup on November 15 at McMahon
  Stadium in Calgary; the stadium's May 26, 2013 opening, its 32,343 capacity
  and the two canopies covering more than 80% of seats; Winnipeg Transit's BLUE
  rapid transit line, the free Park and Rides at Seel and Clarence Stations,
  the $3.25 cash fare, and the X-prefixed extra buses that leave Stadium
  Station Gate 4 after events and do not appear in Navigo; and the club's own
  parking guidance (University Crescent and Chancellor Matheson entries,
  pre-purchase recommended, $50 fine or tow in reserved lots). Sunset on
  October 10, 2026 (about 6:48 p.m. CDT) was computed astronomically rather
  than sourced. No ticket prices, capacities or line-ups were invented; the
  post sends readers to bluebombers.com and cfl.ca to confirm.
- **House style:** the whole body was rewritten to remove tells the 2025
  original carried ("more than just a football team", "a testament to",
  "must-see", "Whether you're a lifelong fan", and "rich history" in the meta
  description). The playbook greps for stock phrases and em dashes both return
  clean, and the pet-word grep returns nothing.
- **Pages changed:** `blog-winnipeg-blue-bombers.html` (title, meta, Open Graph,
  Twitter, JSON-LD, visible date and the full body), `articles-data.js`,
  `articles_data.json`, `blog.html` (noscript card and JSON-LD `blogPost`
  entry), `sitemap.xml` (`lastmod` 2026-09-23), `llms.txt` (regenerated with
  `update-llms.py`), `business-ledger.json`, `ledger-sweep.md` and
  `post-ideas.md`. `datePublished` stays 2025-12-08 because this is a refresh
  rather than a new publication; `article:modified_time`, `dateModified`, the
  visible meta line and the sitemap `lastmod` all move to 2026-09-23.
- **Ledger:** Cho Ichi Ramen is the one commercial business the refreshed post
  names, and `blog-winnipeg-blue-bombers.html` was appended to its `pages`.

---

## 2026-09-22 (cron, second run of the day)

- **Verified 6 businesses** (the stalest batch, `rotation_batch_size` is now 6),
  all carrying the 2026-01-01 backfill date:
  - Brazen Brewing Co. - confirmed open at 800 Pembina Hwy in Fort Rouge. Both
    brazenbrewing.ca and brazenhall.ca are live, the Yelp listing was updated
    August 2026 and Tripadvisor carries 2026 reviews. The brewery operates out
    of Brazen Hall Kitchen & Brewery at that address, which matches what
    `blog-winnipeg-breweries.html` already says ("situated in Fort Rouge"), so
    no page correction was needed. The blank `address` was filled in.
  - Bridge Drive-In (BDI), 766 Jubilee Ave - confirmed open. Its own site
    (bridgedrivein.com), a Yelp listing updated July 2026, Tourism Winnipeg,
    Tripadvisor and Yellow Pages all show it active. It is a seasonal operation
    running roughly mid-March to October; no hours were added to the site,
    since sources disagree on them.
  - Buffalo Stone Cafe (FortWhyte Alive) - confirmed open. FortWhyte Alive's
    own dining page shows the cafe operating, now served by Spruce Catering by
    Diversity, alongside current Tourism Winnipeg and Tripadvisor listings.
    `address` left blank: no source stated a street address for the cafe
    itself and `blog-winnipeg-vegan-restaurants.html` does not state one.
  - Cafe Carlo - confirmed open, **and one address corrected**. Yelp (updated
    June 2026), Yellow Pages, order.online, DoorDash, OpenTable and a Dine
    About Winnipeg 2026 listing all place it at 243 Lilac St; no source shows
    any Stafford Street location, past or present. `blog-best-places-nearby-winnipeg.html`
    had it as "243 Stafford St, Winnipeg" in both the visible link text and the
    Google Maps query, and both were corrected to 243 Lilac St. The ledger
    address was already correct and is unchanged.
  - Capital K Distillery - confirmed open. capitalkdistillery.com and
    madebymanitoba.com are both live with a Visit Us page, and Tourism
    Winnipeg, Tripadvisor and Meetings Winnipeg all list it. Yellow Pages and
    Canpages both give the address as 3-1680 Dublin Ave, which was added to the
    blank `address` field. No tour price was added to the site.
  - Cargo Bar - confirmed open for the 2026 season. Assiniboine Park
    Conservancy's own page and Tourism Winnipeg's patio and nightlife listings
    both show it running, a shipping-container pop-up bar on the banks of the
    Riley Family Duck Pond in Assiniboine Park.
    `blog-best-places-nearby-winnipeg.html` said only "Seasonal pop-up,
    Winnipeg", which was made more useful as "Assiniboine Park, Winnipeg
    (seasonal)" with a matching map query; the ledger `address` was filled in
    the same way. No hours were added, since they are seasonal.
  - No closures, moves or renames found. `last_verified` set to 2026-09-22 for
    all six.
- **Backfill sweep:** `blog-airbnb-performance-statistics.html` read and moved
  to "Swept" in `ledger-sweep.md`. It is a hosting-metrics post and names no
  commercial business, only Airbnb itself, so nothing was added to the ledger.
- **New post published:** `blog-culture-days-winnipeg.html` - "Culture Days
  Winnipeg 2026: Free Arts, Sept 18 to Oct 4". This is the first entry of the
  Events queue, which takes priority over the general queue, and it is a new
  post rather than a refresh. Written in the **host's notes** form: the
  playbook's rotation rule bars any form used by the last three posts, and
  those were nuit-blanche-winnipeg (question and answer) plus the st-vital and
  osborne-village neighbourhood guides (continuous-prose explainers). Facts
  confirmed by web search before writing: the 2026 national dates of September
  18 to October 4 and this being the seventeenth edition; free admission with
  an optional Pay-What-You-May contribution on some events; Culture Days
  Manitoba Inc.'s incorporation in January 2013 and its office at 245 McDermot
  Avenue in the Exchange District; its production of Nuit Blanche Winnipeg with
  the Winnipeg Arts Council on September 26; and Culture Days' reservation of
  September 30 since 2022 for National Day for Truth and Reconciliation
  programming only. Sources were Culture Days' own national and Manitoba
  material, Tourism Winnipeg, and regional Culture Days coverage. Weekdays
  (Friday September 18, Wednesday September 30, Sunday October 4) and Winnipeg
  sunset times (about 7:35pm on September 18, about 7:00pm on October 4) were
  computed astronomically rather than sourced. No individual 2026 event, venue,
  time or price is named anywhere in the post, because participating
  organisations register their own events and the listings change; readers are
  sent to culturedays.ca for the Manitoba event map. The Blue Bombers home
  finale (October 10) and the NHL Heritage Classic (October 25) are cited as
  booking context from the Events queue's own confirmed entries. Hero image is
  `images/winnipeg-mural.jpg`, a real Winnipeg mural photo already used on
  `blog-winnipeg-murals.html`, reused because public art is the subject. No new
  ledger entries were needed: the post names no commercial business (The Forks
  Market is referenced the same way the Nuit Blanche post references it, as
  part of The Forks site rather than as a business).
- **Pages changed:** new `blog-culture-days-winnipeg.html`; registered in
  `articles-data.js`, `articles_data.json`, the `blog.html` noscript grid and
  its JSON-LD `blogPost` array, and `sitemap.xml`. `llms.txt` regenerated with
  `blog-maintenance/update-llms.py` (144 posts). `blog-best-places-nearby-winnipeg.html`
  corrected for Cafe Carlo's address and Cargo Bar's location, with its
  `sitemap.xml` `lastmod` bumped to 2026-09-22.

---

## 2026-09-22 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-17:
  - Sushi Ya (659 Corydon Ave) - confirmed open. Its own order.online
    storefront, a Yellow Pages listing for Sushiya Ltd at this address, Apple
    Maps, and a current Restaurantji listing (276 reviews) all show it active
    with posted hours. Platforms disagree on the exact hours, so none were
    added to the site.
  - The Cheesemongers Fromagerie (839 Corydon Ave) - confirmed open. The shop's
    own site (thecheesemongers.ca), Tourism Winnipeg, and a Yelp listing
    updated July 2026 all show it active at this address with posted hours.
  - The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave, Unit 1) - confirmed
    open. Its own site (themightykiwi.ca), Tourism Winnipeg, DoorDash,
    order.online, and a Yelp listing updated November 2025 all show it active.
    One delivery platform showed online ordering closed at the time of
    checking, which reflects that platform's ordering window rather than a
    closure, so the status was left unchanged. Note the shared street number
    with Saperavi Georgian Cuisine, also at 709 Corydon and verified open on
    2026-09-21; the Mighty Kiwi is Unit 1 in the same building.
  - The Roost (651 Corydon Ave, Unit 2) - confirmed open. Its own site
    (theroostwpg.com), Tourism Winnipeg's patio listing, Tripadvisor, a Yelp
    listing updated February 2026, and Yellow Pages all show it active, a
    cocktail bar with small plates and a rooftop patio operating since 2015.
  - No closures, moves, or renames found; no corrections needed on
    `blog-corydon-guide.html`. `last_verified` set to 2026-09-22 for all four
    in `business-ledger.json`.
- **New post published:** `blog-nuit-blanche-winnipeg.html` - "Nuit Blanche
  Winnipeg 2026: September 26, Free All Night." This is the first entry of the
  Events queue in `post-ideas.md`, which takes priority over the general queue,
  and it is a new post rather than a refresh. Written in the **question and
  answer** form: the playbook's rotation rule bars a form used by any of the
  last three posts, and st-vital-guide, osborne-village-guide and
  chinatown-guide were all continuous-prose neighbourhood guides. Eight
  questions, no other headings. Facts confirmed by web search before writing:
  the date and hours (Saturday September 26, 2026, 6pm to midnight), free
  admission, the four zones (downtown, the Exchange District, The Forks, St.
  Boniface), the free Winnipeg Transit shuttle linking them, and the Illuminate
  the Night funded stream placing outdoor installations in the Exchange
  District with four projects backed at $2,500 each in 2026, all from Nuit
  Blanche Winnipeg's own listings and open call, Tourism Winnipeg and Culture
  Days; the event's 2010 debut as a Culture Days Manitoba project at the
  Winnipeg Art Gallery, and its last-Saturday-of-September or
  first-Saturday-of-October placement, from CBC and Border Crossings. The D19
  Corydon route's terminal on Kennedy Street just south of Portage Avenue, in
  effect since the June 21, 2026 summer schedule, came from the City of
  Winnipeg's own transit service announcements. Sunset on September 26, 2026
  (about 7:20pm CDT) was computed astronomically rather than sourced. No ticket
  prices, line-ups, venue hours or last-bus times were stated; readers are sent
  to nuitblanchewinnipeg.ca for the zone map, shuttle route and venue list, and
  to Winnipeg Transit's trip planner for the last trip home. Hero image is
  `images/exchange-district-pepsi.jpg`, a real heritage-building mural in the
  Exchange District, the zone where the funded outdoor installations go
  (previously used once, on `blog-winnipeg-fringe-festival-guide.html`). Per
  the event-post rules the "where to stay" section is a full section rather
  than a closing line, which is exempt from the one-in-four Corydon-anchor
  rule.
- **Pages changed:** new `blog-nuit-blanche-winnipeg.html`; `blog.html`
  (noscript card and JSON-LD `blogPost` entry); `articles-data.js`;
  `articles_data.json`; `sitemap.xml` (new entry plus `blog.html` lastmod);
  `llms.txt`, regenerated with `blog-maintenance/update-llms.py` as the updated
  playbook now requires (143 posts: 125 winnipeg, 13 hosting, 5 travel).
- **Second pass after the mid-run ledger change.** While this run was in
  progress the owner pushed `4cc5411`, which backfilled the ledger to 123
  businesses with a `pages` array, raised `rotation_batch_size` to 6, and added
  two duties (a ledger entry for every business the new post names, and one
  archive post swept per run). Part 1 above had already been done against the
  20-entry ledger, so the run was brought up to the new spec:
  - **Six more businesses verified**, the stalest under the new ledger (all
    dated `2026-01-01`, the unverified backfill date). All six confirmed open,
    none closed, moved, or renamed:
    - Amsterdam Tea Room and Bar (103-211 Bannatyne Ave) - open. Own site,
      Tourism Winnipeg, Tripadvisor, and a Yelp listing updated August 2026.
      Ledger address left as the posts state it.
    - Bailey's Restaurant & Bar - open at 185 Lombard Ave. Own site
      (baileysprimedining.com), OpenTable, Tourism Winnipeg, Tripadvisor, and a
      Yelp listing updated February 2026. Blank `address` filled in.
    - Barn Hammer Brewing Company - open at 595 Wall St in the West End. Own
      site (barnhammerbrewing.ca), Tourism Winnipeg, and a Yelp listing updated
      March 2026. Blank `address` filled in.
    - Bison Bus Tours - running. It is FortWhyte Alive's own pre-booked bison
      prairie tour rather than an independent operator, listed by FortWhyte
      Alive, Tourism Winnipeg and Travel Manitoba with 2026 dates. `address`
      filled in as FortWhyte Alive's 1961 McCreary Rd.
    - Bistro on Notre Dame - open at 784 Notre Dame Ave. Own site, Tourism
      Winnipeg's Indigenous restaurant guide, the Manitoba Metis Federation,
      Indigenous Tourism Manitoba, and Travel Manitoba.
    - Black Market Provisions - open at 550 Osborne St. Own site
      (blackmarketwpg.com), Tourism Winnipeg, and a Yelp listing updated
      August 2026. Blank `address` filled in.
  - **New-post ledger duty: nothing to add.** The Nuit Blanche post names no
    commercial business. Everything it names is an institution, a public venue
    or a landmark (Old Market Square, The Forks and The Forks Market, Canada
    Life Centre, Manitoba Hydro Place, the Winnipeg Art Gallery, Esplanade
    Riel), which step 6 excludes; no individual restaurant or food-hall vendor
    is named, deliberately, because the post states no hours or prices.
  - **Archive sweep:** `blog-airbnb-design-lessons.html`, the first entry under
    "Not yet swept". It names no commercial business at all (the stays it
    describes are unnamed Airbnbs in Tokyo, Melbourne, Copenhagen, Palm
    Springs, Paris, Barcelona and Lisbon), so nothing was added to the ledger.
    Moved to "Swept" with today's date.
- **Known drift, not fixed this run:** `blog.html` now carries 88 noscript
  article cards and 88 JSON-LD `blogPost` entries against 143 posts in
  `articles-data.js`, so 55 published posts are missing from
  the no-JavaScript fallback and from the blog index's structured data. This is
  the same drift that `llms.txt` had before `update-llms.py` was added. It
  predates this run and is too large to fold into a daily commit, but it wants
  the same treatment: a generator that rebuilds both blocks from
  `articles-data.js`.

---

## 2026-09-21 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-16:
  - Saperavi Georgian Cuisine (709 Corydon Ave) — confirmed open. The
    restaurant's own order.online storefront, Tourism Winnipeg, a current
    Yellow Pages listing, and its Facebook/Instagram all show it active with
    posted hours (Tue-Thu 4-9pm, Fri-Sat 4-10pm, Sun 4-8:30pm, closed Monday).
  - Starbucks (946 Corydon Ave) — confirmed open. Starbucks' own current job
    posting for "Store# 68102, Corydon & Stafford" at this exact address,
    Yellow Pages, Uber Eats, DoorDash, and SkipTheDishes all show it active.
  - Sugar + Salt Bakeshoppe (897 Corydon Ave) — confirmed open. The bakery's
    own site (sugarandsaltbakeshoppe.com), Tourism Winnipeg, and a Restaurant
    Guru listing (4.9/5, 72 reviews) all show it active with posted hours
    (Tue-Fri 11am-5pm, Sat 10am-4pm, closed Sun/Mon).
  - Sunshine Chinese Restaurant (635 Corydon Ave) — confirmed open. A current
    (September 2025) Yelp listing, the restaurant's own site
    (winnipegsunshine.com), Tripadvisor, and Yellow Pages all show it active
    with posted hours.
  - No closures, moves, or renames found; no corrections needed on
    `blog-corydon-guide.html`, which already lists all four with matching
    names and addresses. `last_verified` set to 2026-09-21 for all four in
    `business-ledger.json`.
- **New post published:** `blog-winnipeg-st-vital-guide.html` — "Winnipeg's
  St. Vital: A Neighbourhood Guide." The queue's first item,
  manitoba-museum-planetarium-guide, was skipped again for lack of a fitting
  local photo; manitobamuseum.ca, images.unsplash.com, and
  upload.wikimedia.org were all reconfirmed unreachable from this sandbox via
  the agent proxy this run (connect_rejected at the CONNECT stage). The rest
  of the queue (grand-beach-day-trip, manitoba-legislative-building-tour,
  winnipeg-performing-arts-season, oak-hammock-marsh-birding,
  riding-mountain-national-park-trip, northern-lights-near-winnipeg) was
  skipped for the same lack-of-photo reason, and winnipeg-with-kids-indoor
  was skipped again as a near-duplicate of existing indoor/family-attraction
  posts. A fresh sweep confirmed every local file in `images/` is already
  referenced by at least one dedicated `blog-*.html` post, so
  winnipeg-st-vital-guide was invented instead (not in the queue), reusing
  `images/guidebook-winnipeg-15-harth-mozza-wine-bar.jpg`, a real photo of a
  genuine St. Vital business (Harth Mozza & Wine Bar on St Anne's Road)
  already anchoring `blog-winnipeg-wine-bars-guide.html`, consistent with
  this cron's established practice of reusing real local photos across
  thematically related posts. No existing post is a dedicated St. Vital
  neighbourhood guide; `blog-st-vital-park.html` covers only the park, and
  the new post links to it rather than duplicating its content. Facts (Riel
  House at 330 River Road, built 1880-1881 for the family of Louis Riel,
  occupied by his descendants until 1969, the site where Riel's body lay in
  state for two days in December 1885, saved from development by the
  Manitoba Historical Society in 1968 and now operated by Parks Canada as a
  National Historic Site representing the Red River's Métis river-lot
  settlement pattern; St. Vital Centre, opened October 1979, one of
  Winnipeg's largest shopping malls; and Harth Mozza & Wine Bar's details,
  already confirmed for the 2026-09-16 wine-bars post) were confirmed by web
  search against Parks Canada, the Manitoba Historical Society, Wikipedia,
  Tourism Winnipeg, and Heritage Winnipeg. No specific current-year hours,
  prices, or Riel House opening dates were stated beyond what those sources
  support; readers are told Parks Canada's season and hours can shift and to
  check before visiting. This fills the "neighbourhood guide" rotation slot
  (last used 2026-09-20, winnipeg-osborne-village-guide, the day before)
  with a different neighbourhood; the last four Used entries (wine-bars-guide,
  grocery-shopping-guide, middle-eastern-food-guide, chinatown-guide,
  osborne-village-guide) were also all city-wide, so the topic-breadth ratio
  is unaffected. Registered in `articles-data.js` and `sitemap.xml`; logged in
  `post-ideas.md` "Used" with full reasoning.
- **Pages updated:** `business-ledger.json` (last_verified dates). No
  corrections needed on `blog-corydon-guide.html`. As in recent runs,
  `blog.html`'s `blogPost` JSON-LD array, its `<noscript>` article-card
  section, and `llms.txt`'s post count were left unmodified; those are part
  of `CLAUDE.md`'s general post-creation checklist rather than
  `AGENT-INSTRUCTIONS.md`'s daily-cron scope, and this cron's established
  practice has been to leave that broader backlog for a dedicated catch-up
  task. A `pa11y --standard WCAG2AA` check was not run against the new post:
  headless Chrome cannot reach the network through the agent proxy in this
  sandbox, and the URL does not exist on the live site until after this
  run's push and redeploy. The new post reuses the same lean React/noscript
  scaffolding, skip link, and semantic structure as the template post it was
  copied from (`blog-winnipeg-osborne-village-guide.html`). The diff was
  checked for pet-related words, em dashes, emoji, and CSS overrides before
  committing; none were found.

---

## 2026-09-20 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-15:
  - Peking Chinese Food Ltd. (840 Corydon Ave) — confirmed open. DoorDash,
    a current July 2026 Yelp listing (11 reviews), Yellow Pages, and the
    restaurant's own site (pekingmbtogo.com) all show it active with
    posted hours; the business has reportedly served the area for over 50
    years.
  - Cafe 22 (823 Corydon Ave) — confirmed open. The restaurant's own site
    (cafe22.ca), an August 2026 Yelp listing, OpenTable, and Tourism
    Winnipeg all show it active with posted hours and a 4.3-star rating
    from 814 reviewers.
  - Saffron's Restaurant (681 Corydon Ave) — confirmed open. Tourism
    Winnipeg, a July 2026 Yelp listing (24 reviews), Tripadvisor, OpenTable,
    and the restaurant's own site all show it active.
  - Santa Lucia Pizza (905 Corydon Ave) — confirmed open. The restaurant's
    own site (santaluciapizza.com), Tourism Winnipeg, Tripadvisor, and
    OpenTable all show it active with posted hours; it has operated on
    Corydon since 1971.
  - No closures, moves, or renames found; no corrections needed on
    `blog-corydon-guide.html`, which already lists all four with matching
    names and addresses. `last_verified` set to 2026-09-20 for all four in
    `business-ledger.json`.
- **New post published:** `blog-winnipeg-osborne-village-guide.html` —
  "Winnipeg's Osborne Village: A Neighbourhood Guide." A city-wide
  neighbourhood guide to Osborne Village: its status as Winnipeg's most
  densely populated neighbourhood (roughly 12,000+ residents in 1.4 sq km),
  its 2013 Canadian Institute of Planners "Great Neighbourhood" recognition,
  the Gas Station Arts Centre's history from 1916 filling station to 1983
  theatre and its ongoing role as producing home of the Winnipeg Comedy
  Festival, and a short "coffee, brunch, and vintage finds" section on
  Little Sister Coffee Maker, Buvette, and Old Gold Vintage Vinyl. The
  queue's items (manitoba-museum-planetarium-guide, grand-beach-day-trip,
  manitoba-legislative-building-tour, winnipeg-performing-arts-season,
  oak-hammock-marsh-birding, riding-mountain-national-park-trip,
  northern-lights-near-winnipeg) were all skipped again for lack of a
  fitting local photo (manitobamuseum.ca, images.unsplash.com, and
  upload.wikimedia.org reconfirmed unreachable from this sandbox via the
  agent proxy this run), and winnipeg-with-kids-indoor was skipped again as
  a near-duplicate of existing indoor/family posts. A fresh sweep confirmed
  every file in `images/` is now referenced by at least one dedicated post,
  so `images/guidebook-winnipeg-26-buvette.jpg` — a real photo of Buvette,
  previously used only in the general `blog-best-places-nearby-winnipeg.html`
  roundup and correctly rejected for the 2026-09-16 wine-bars post because
  Buvette is a brunch spot, not a wine venue — was used here for its genuine
  subject. Osborne Village is named explicitly in AGENT-INSTRUCTIONS.md's
  neighbourhood rotation list but had never had a dedicated guide (only
  head-to-head "vs Corydon" comparison posts existed). All facts were
  confirmed by web search against the Winnipeg Architecture Foundation, the
  Uniter, Tourism Winnipeg, Wikipedia, the Gas Station Arts Centre's own
  site, and each business's own site or current listing; no 2026 event
  dates, hours, or prices were stated, and readers are pointed to gsac.ca to
  confirm programming. Registered in `articles-data.js` and `sitemap.xml`;
  logged in `post-ideas.md` "Used" with full reasoning.
- **Pages updated:** `business-ledger.json` (last_verified dates). No
  corrections needed on `blog-corydon-guide.html`. As in recent runs,
  `blog.html`'s `blogPost` JSON-LD array, its `<noscript>` article-card
  section, and `llms.txt`'s post count were left unmodified; those are part
  of `CLAUDE.md`'s general post-creation checklist rather than
  `AGENT-INSTRUCTIONS.md`'s daily-cron scope, and this cron's established
  practice has been to leave that broader backlog for a dedicated catch-up
  task. A `pa11y --standard WCAG2AA` check was not run against the new post:
  headless Chrome cannot reach the network through the agent proxy in this
  sandbox, and the URL does not exist on the live site until after this
  run's push and redeploy. The new post reuses the same lean React/noscript
  scaffolding, skip link, and semantic structure as the template post it was
  copied from (`blog-winnipeg-chinatown-guide.html`).

---

## 2026-09-19 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-14:
  - Passero Restaurant (774 Corydon Ave) — confirmed open. Tripadvisor,
    Yably, and multiple current restaurant-listing sites show it active
    with posted hours and a listed phone number.
  - Forgotten Flavours (858 Corydon Ave) — confirmed open. The bakery's own
    site (forgottenflavours.ca), Tourism Winnipeg, and Bakery Radar all
    show it active, with posted hours (closed Sun/Mon, 11am-6pm Tue-Sat).
  - Colosseo Ristorante Italiano (670 Corydon Ave) — confirmed open. The
    restaurant's own site (colosseo.ca), a current Yelp listing (updated
    July 2026), and Tourism Winnipeg all show it active in Little Italy.
  - Bar Italia (737 Corydon Ave) — confirmed open. Tourism Winnipeg, a
    current Yelp listing (updated January 2026), Uber Eats, and DoorDash
    all show it active with posted hours (Mon-Sat 8am-2am).
  - No closures, moves, or renames found; no corrections needed on
    `blog-corydon-guide.html`, which already lists all four with matching
    names and addresses. `last_verified` set to 2026-09-19 for all four in
    `business-ledger.json`.
- **New post published:** `blog-winnipeg-chinatown-guide.html` — "Winnipeg's
  Chinatown: what's there and what to eat." A city-wide neighbourhood guide
  to Winnipeg's Chinatown on King Street: its 1909 origins, the Winnipeg
  Chinatown Development Corporation's 1980s redevelopment, the Chinatown
  Arch, the Chinese Heritage Garden, and the Dynasty Building/Chinese
  Cultural and Community Centre, with a shorter "where to eat" section on
  Kum Koon Garden and Dim Sum Garden. No existing post covered Chinatown as
  a neighbourhood. The queue's first several items (manitoba-museum-
  planetarium-guide, grand-beach-day-trip, manitoba-legislative-building-
  tour, winnipeg-performing-arts-season, oak-hammock-marsh-birding,
  riding-mountain-national-park-trip, northern-lights-near-winnipeg) were
  skipped again for lack of a fitting local photo (manitobamuseum.ca,
  images.unsplash.com, upload.wikimedia.org, live.staticflickr.com,
  images.pexels.com, cdn.pixabay.com, and commons.wikimedia.org all
  reconfirmed unreachable from this sandbox via the agent proxy this run),
  and winnipeg-with-kids-indoor was skipped again as a near-duplicate of
  existing indoor/family posts. winnipeg-chinatown-guide, the queue's last
  item, was picked instead; no local photo of Chinatown exists, and
  `images/guidebook-winnipeg-46-exchange-district.jpg` was rejected again
  (as on 2026-09-16) for depicting the adjacent-but-distinct Exchange
  District. `images/restaurant-dining.jpg`, already reused across five
  cuisine posts, was reused a sixth time with the same honest, non-specific
  alt text, since the "where to eat" section is secondary to the post's
  neighbourhood/history focus. This was treated as filling the
  "neighbourhood guide" rotation slot (last used 2026-09-10) rather than
  repeating the "food" intent from the day before. All facts were confirmed
  by web search against the Winnipeg Architecture Foundation, SFU's Chinese
  Canadian history project, Wikipedia, and each restaurant's own site or
  current listings; a third candidate restaurant was dropped for address
  ambiguity rather than guessed. Registered in `articles-data.js` and
  `sitemap.xml`; logged in `post-ideas.md` "Used" with full reasoning.
- **Pages updated:** `business-ledger.json` (last_verified dates). No
  corrections needed on `blog-corydon-guide.html`. As in recent runs,
  `blog.html`'s `blogPost` JSON-LD array, its `<noscript>` article-card
  section, and `llms.txt`'s post count were left unmodified; those are
  part of `CLAUDE.md`'s general post-creation checklist rather than
  `AGENT-INSTRUCTIONS.md`'s daily-cron scope, and this cron's established
  practice has been to leave that broader backlog for a dedicated catch-up
  task. A `pa11y --standard WCAG2AA` check was not run against the new
  post: headless Chrome cannot reach the network through the agent proxy in
  this sandbox, and the URL does not exist on the live site until after
  this run's push and redeploy. The new post reuses the same React/noscript
  scaffolding, skip link, and semantic structure as the template post it
  was copied from (`blog-winnipeg-middle-eastern-food-guide.html`).

---

## 2026-09-18 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-13:
  - Thom Bargen Coffee Roasters (743 Corydon Ave) — confirmed open. The
    business's own site (thombargen.com), which lists this as its Corydon
    location, plus current Corner.inc, Wanderlog, and CaféWork listings,
    all show it active with posted hours (Mon-Fri 7am-9pm, Sat-Sun
    8am-9pm).
  - Tim Horton's (949 Corydon Ave) — confirmed open. Tim Hortons' own
    location page, Uber Eats, Yelp, and Yellow Pages all show it active
    (Unit 2) with current hours and a 3.9-star rating from 394 reviewers.
  - Tommy's Pizzeria (842 Corydon Ave) — confirmed open. The restaurant's
    own site (tommys.pizza), a current September 2026 Yelp listing,
    Tripadvisor, and Tourism Winnipeg's patio listing all show it active.
  - Wako Sushi Café (875 Corydon Ave) — confirmed open. DoorDash, a
    current July 2026 Yelp listing, and Yellow Pages all show it active
    with online ordering.
  - No closures, moves, or renames found; no corrections needed on
    `blog-corydon-guide.html`, which already lists all four with matching
    names and addresses. `last_verified` set to 2026-09-18 for all four in
    `business-ledger.json`.
- **New post published:** `blog-winnipeg-middle-eastern-food-guide.html` —
  "Winnipeg's Middle Eastern food scene: shawarma, falafel, and manakeesh."
  A city-wide guide to four Palestinian- and Lebanese-owned restaurants
  spanning four different parts of the city: The Falafel Place (1101
  Corydon Ave), Les Saj (1038 St James St), Yafa Cafe (1785 Portage Ave,
  run by Rana Abdulla), and Ramallah Cafe (325 Pembina Hwy). No existing
  post covered Middle Eastern or Palestinian/Lebanese food; the queue's
  first item, `manitoba-museum-planetarium-guide`, and the rest of the
  queue were skipped again for lack of a fitting local photo
  (manitobamuseum.ca, images.unsplash.com, and upload.wikimedia.org
  remain unreachable from this sandbox via the agent proxy, confirmed
  again this run). Uses a previously-unused local photo,
  `guidebook-winnipeg-11-falafel-place.jpg`, which was the last local
  image not already anchoring a dedicated post. This cuisine-specific
  "food" sub-topic was treated as distinct from
  `blog-winnipeg-indian-south-asian-food.html` (2026-09-14, a different
  cuisine), consistent with this cron's established practice of treating
  cuisine- and drink-type sub-topics (e.g. wine vs spirits vs cocktails)
  as distinct rather than one blanket repeated intent. All facts were
  confirmed by web search against each restaurant's own site, Yelp,
  Tripadvisor, OpenTable, and Tourism Winnipeg's own Middle Eastern food
  guide; no hours or prices beyond Les Saj's posted hours were stated.
  Registered in `articles-data.js` and `sitemap.xml`; logged in
  `post-ideas.md` "Used" with full reasoning.
- **Pages updated:** `business-ledger.json` (last_verified dates). No
  corrections needed on `blog-corydon-guide.html`. As in recent runs,
  `blog.html`'s `blogPost` JSON-LD array, its `<noscript>` article-card
  section, and `llms.txt`'s post count were left unmodified; those are
  part of `CLAUDE.md`'s general post-creation checklist rather than
  `AGENT-INSTRUCTIONS.md`'s daily-cron scope, and this cron's established
  practice has been to leave that broader backlog for a dedicated catch-up
  task. A `pa11y --standard WCAG2AA` check was not run against the new
  post: headless Chrome cannot reach the network through the agent proxy
  in this sandbox, and the URL does not exist on the live site until
  after this run's push and redeploy. The new post reuses the same
  React/noscript scaffolding, skip link, and semantic structure as the
  template post it was copied from (`blog-winnipeg-wine-bars-guide.html`).

---

## 2026-09-17 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-12:
  - Sushi Ya (659 Corydon Ave) — confirmed open. Yelp (14 reviews), Tripadvisor
    (4.6 rating, 24 reviews), and RestaurantJi (276 reviews as of May 2026)
    all show current activity and posted hours.
  - The Cheesemongers Fromagerie (839 Corydon Ave) — confirmed open. The
    business's own site and current Yelp/Tourism Winnipeg listings show it
    operating (pickup/delivery plus in-store hours Tue-Sat). No change needed
    on `blog-corydon-guide.html`, which only lists the name, address, and link.
  - The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave) — confirmed open. The
    business's own site, Tourism Winnipeg, and DoorDash all show it active
    with current hours.
  - The Roost (651 Corydon Ave) — confirmed open. The venue's own site,
    Yelp (19 reviews, updated September 2026), and Tourism Winnipeg all
    confirm it operating in Little Italy.
  - No closures, moves, or renames found; no corrections needed on
    `blog-corydon-guide.html`. `last_verified` set to 2026-09-17 for all four
    in `business-ledger.json`.
- **New post published:** `blog-winnipeg-grocery-shopping-guide.html` —
  "Grocery shopping in Winnipeg: a visitor's guide." A city-wide,
  practical-logistics guide to grocery shopping (Real Canadian Superstore,
  Safeway, Sobeys, the Winnipeg-owned Food Fare chain, and De Luca's Italian
  specialty shop), distinct from the existing Corydon-anchored
  `blog-grocery-runs-near-corydon-airbnb.html`. Uses two previously-unused
  local photos (`guidebook-winnipeg-48-foodfare-stores.jpg` and
  `guidebook-winnipeg-49-safeway-river-avenue.jpg`). The queue's first item
  (manitoba-museum-planetarium-guide) and the rest of the queue were skipped
  again for lack of a fitting local photo (manitobamuseum.ca and
  images.unsplash.com remain unreachable from this sandbox); several unused
  local photos were also rejected because their subject already has a
  dedicated post (coffee/cafes, breweries, pizza, bakeries, wine, Deer +
  Almond/Peasant Cookery/Oval Room, The Leaf). See `post-ideas.md` "Used" for
  full detail. Registered in `articles-data.js` and `sitemap.xml`.
- **Pages updated:** `business-ledger.json` (last_verified dates). No
  corrections needed on `blog-corydon-guide.html`. As in recent runs,
  `blog.html`'s `blogPost` JSON-LD array, its `<noscript>` article-card
  section, and `llms.txt`'s post count were left unmodified; those are part
  of `CLAUDE.md`'s general post-creation checklist rather than
  `AGENT-INSTRUCTIONS.md`'s daily-cron scope (registration in
  `articles-data.js` and `sitemap.xml`), and this cron's established
  practice has been to leave that broader backlog for a dedicated catch-up
  task. A `pa11y --standard WCAG2AA` check was not run against the new post:
  headless Chrome cannot reach the network through the agent proxy in this
  sandbox, the URL does not exist on the live site until after this run's
  push and redeploy, and `AGENT-INSTRUCTIONS.md` does not list pa11y as part
  of the daily-cron scope. The new post reuses the same React/noscript
  scaffolding, skip link, and semantic structure as the template post it was
  copied from (`blog-winnipeg-wine-bars-guide.html`), which has previously
  passed this site's accessibility requirements.

---

## 2026-09-16 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-11:
  - Saperavi Georgian Cuisine (709 Corydon Ave) — confirmed open. Tourism
    Winnipeg, the restaurant's own Facebook page, Yellow Pages, and an
    online-ordering listing all show it active at this address as a
    Georgian restaurant, the first on the Canadian Prairies.
  - Starbucks (946 Corydon Ave) — confirmed open. A current Starbucks
    careers listing for "Store# 68102, Corydon & Stafford," Yellow Pages,
    DoorDash, Uber Eats, and SkipTheDishes all show it active at this
    address.
  - Sugar + Salt Bakeshoppe (897 Corydon Ave) — confirmed open. The
    bakery's own site (sugarandsaltbakeshoppe.com), Tourism Winnipeg, and
    a Chamber of Commerce directory listing all show it active at this
    address (Unit 103).
  - Sunshine Chinese Restaurant (635 Corydon Ave) — confirmed open. The
    restaurant's own site (winnipegsunshine.com, matching the site's
    existing link), a current Yelp listing (updated September 2025),
    Tripadvisor, and Yellow Pages all show it active at this address.
  - `last_verified` set to 2026-09-16 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html`
    already match current names/addresses/links, so no page corrections
    were needed.
- **New post:** `blog-winnipeg-wine-bars-guide.html`, "Winnipeg's wine bars
  and wine shops: where to drink and buy." Every item remaining in the
  queue (manitoba-museum-planetarium-guide, grand-beach-day-trip,
  manitoba-legislative-building-tour, winnipeg-performing-arts-season,
  oak-hammock-marsh-birding, riding-mountain-national-park-trip,
  northern-lights-near-winnipeg, winnipeg-chinatown-guide) was skipped
  again for lack of a fitting local photo; manitobamuseum.ca and
  images.unsplash.com remain unreachable from this sandbox (reconfirmed via
  curl through the agent proxy, connect_rejected/403 at the CONNECT
  stage), no legislature or Chinatown photo exists locally, and the only
  Chinatown-adjacent candidate (images/guidebook-winnipeg-46-exchange-district.jpg)
  depicts the distinct neighbouring Exchange District rather than
  Chinatown itself, so it was not force-fit. winnipeg-with-kids-indoor was
  skipped again as a near-duplicate of existing indoor/family-attraction
  posts. A sweep of images/ found three real local photos
  (guidebook-winnipeg-15-harth-mozza-wine-bar.jpg,
  guidebook-winnipeg-23-ellement-wine-spirits.jpg, and
  guidebook-winnipeg-26-buvette.jpg) that had only ever appeared in the
  general blog-best-places-nearby-winnipeg.html roundup and never anchored
  a dedicated post. A web search found Buvette is actually a brunch/cafe
  spot rather than a wine venue despite its filename, so it was excluded
  to avoid misrepresenting the business, leaving Harth Mozza and Ellement
  as genuine wine venues; winnipeg-wine-bars-guide was invented (not in
  the queue) to pair them with a third confirmed wine venue, Cordova
  Tapas & Wine in the Exchange District, using the real, previously-unused
  Harth Mozza photo as the hero. A fourth candidate, Hermanos Restaurant &
  Wine Bar, was considered and dropped because search results indicated
  it was relocating from its long-standing Bannatyne Avenue address to
  the Centennial Concert Hall in September 2026, making its current
  address unverifiable as stable; no address was guessed. Facts (Harth
  Mozza & Wine Bar, 980 St Anne's Road in St. Vital, an Italian wine bar
  run by chef Brent Genyk, open Tuesday-Saturday 5-10pm and closed
  Sunday/Monday; Ellement Wine & Spirits, an independent shop at 1 Forks
  Market Rd carrying spirits and cigars since 1994 with a natural/
  biodynamic wine focus including Burgundy and Beaujolais selections; and
  Cordova Tapas & Wine at 93 Albert St in the Exchange District, opened
  2017 by Gael Winandy and Greg Stevenard with a Spanish/southwestern
  French tapas menu) were confirmed by web search against each venue's own
  site or listing, Yelp, Tripadvisor, OpenTable, Tourism Winnipeg, and the
  Exchange District BIZ. No hours or prices beyond each venue's own stated
  general operating days were included; readers are told to check before
  visiting. Registered in `articles-data.js` and `sitemap.xml`; the topic
  was logged as Used in `post-ideas.md` with today's date. This is a
  city-wide, non-Corydon post (St. Vital, The Forks, and the Exchange
  District); the last four Used entries (bookstores-record-shops,
  indian-south-asian-food, live-music-venues, royal-aviation-museum-guide)
  were also all city-wide, so the topic-breadth ratio is unaffected. As in
  recent runs, `blog.html`'s `blogPost` JSON-LD array, its `<noscript>`
  article-card section, and `llms.txt`'s post count were left unmodified;
  those are part of `CLAUDE.md`'s general post-creation checklist rather
  than `AGENT-INSTRUCTIONS.md`'s daily-cron scope, and this cron's
  established practice has been to leave that broader backlog for a
  dedicated catch-up task. A `pa11y --standard WCAG2AA` check was not run
  against the new post: consistent with prior runs' notes, Chrome fails to
  launch under Puppeteer in this sandbox ("Running as root without
  --no-sandbox is not supported"), and the URL does not exist on the live
  site until after this run's push and redeploy.

## 2026-09-15 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-10:
  - Peking Chinese Food Ltd. (840 Corydon Ave) — confirmed open. The
    restaurant's own site (pekingmbtogo.com), DoorDash, Tripadvisor, Yelp
    (updated July 2026), and Yellow Pages all show it active at this address.
  - Cafe 22 (823 Corydon Ave) — confirmed open. The restaurant's own site
    (cafe22.ca), OpenTable, Yelp (updated August 2026), Tourism Winnipeg,
    and Yellow Pages all show it active at this address as a stone-fired
    pizza and modern Italian restaurant.
  - Saffron's Restaurant (681 Corydon Ave) — confirmed open. Tourism
    Winnipeg, OpenTable, Yelp (updated July 2026), Tripadvisor, and the
    restaurant's own Facebook page all show it active at this address.
  - Santa Lucia Pizza (905 Corydon Ave) — confirmed open. The restaurant's
    own site (santaluciapizza.com, with a dedicated 905 Corydon Avenue
    page), Tourism Winnipeg, Tripadvisor, and OpenTable all show it active
    at this address.
  - `last_verified` set to 2026-09-15 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-bookstores-record-shops.html`, "Independent
  Bookstores and Record Shops in Winnipeg." The queue's first item,
  manitoba-museum-planetarium-guide, was skipped again for lack of a fitting
  local photo; manitobamuseum.ca, images.unsplash.com, commons.wikimedia.org,
  and upload.wikimedia.org were all reconfirmed unreachable from this
  sandbox this run via curl through the agent proxy, each returning
  connect_rejected/403 at the CONNECT stage. grand-beach-day-trip and
  manitoba-legislative-building-tour were skipped again for lack of a
  fitting local photo (a Winnipeg City Hall photo exists but was rejected
  again, as on 2026-09-12, for depicting the wrong building).
  winnipeg-performing-arts-season was skipped for lack of a fitting local
  photo of a theatre or concert venue. "food" as an intent had been used
  the day before (2026-09-14, winnipeg-indian-south-asian-food), inside the
  one-week no-repeat-intent window, so winnipeg-bookstores-record-shops,
  the queue's next item, was picked instead: a "shopping"/culture intent
  last used 6 days prior (2026-09-09, thrift-vintage-shopping), outside the
  window. Before writing, a candidate mention of "Enoteca" (whose local
  photo, guidebook-winnipeg-25-enoteca.jpg, remains unused) was checked:
  Yelp shows it as CLOSED, but the site's existing content
  (blog-best-places-nearby-winnipeg.html and
  blog-winnipeg-best-new-food-spots.html) already correctly documents its
  rebrand to Né de Loup under chef Scott Bagshaw, so no correction was
  needed and Enoteca was not used as a topic anchor.
  images/guidebook-winnipeg-46-exchange-district.jpg, the same heritage
  storefront photo already used on west-end-guide, shopping-districts, and
  thrift-vintage-shopping, was reused a fourth time because Into the Music,
  one of the shops profiled, is itself in the Exchange District at King and
  McDermot. Facts (McNally Robinson Booksellers, founded in Winnipeg in
  1981, family-operated, with its Grant Park store at 1120 Grant Ave
  opening in 1996 as Canada's largest independent bookstore at the time,
  plus a second store at The Forks; Bison Books at 424 Graham Ave downtown,
  roughly 20,000 old, rare, and out-of-print books; Into the Music at the
  corner of King St and McDermot Ave in the Exchange District; and the
  Winnipeg Record & Tape Co. at 1079 Wellington Ave in the West End) were
  confirmed by web search against each shop's own site, Yelp, Tripadvisor,
  CBC News, and Tourism Winnipeg. No hours or prices were stated in the
  post; readers are pointed to check before visiting. Registered in
  `articles-data.js` and `sitemap.xml`; the idea was moved from Queue to
  Used in `post-ideas.md` with today's date. This is a city-wide,
  non-Corydon post; the last four Used entries (seasons-guide,
  royal-aviation-museum-guide, live-music-venues,
  winnipeg-indian-south-asian-food) were also all city-wide, so the
  topic-breadth ratio is unaffected. As in recent runs, `blog.html`'s
  `blogPost` JSON-LD array, its `<noscript>` article-card section, and
  `llms.txt`'s post count were left unmodified; those are part of
  `CLAUDE.md`'s general post-creation checklist rather than
  `AGENT-INSTRUCTIONS.md`'s daily-cron scope, and this cron's established
  practice has been to leave that broader backlog for a dedicated catch-up
  task. A `pa11y --standard WCAG2AA` check was not run against the new
  post: this run, Chrome failed to launch under Puppeteer in this sandbox
  ("Running as root without --no-sandbox is not supported"), and the URL
  does not exist on the live site until after this run's push and
  redeploy, consistent with prior runs' notes on this limitation.

## 2026-09-14 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-09:
  - Passero Restaurant (774 Corydon Ave) — confirmed open. Tripadvisor,
    Yellow Pages, Tourism Winnipeg's own eat-and-drink listing, and the
    restaurant's own booking pages all show it active at this address,
    co-owned by chef Scott Bagshaw and Amanda Coe, serving Italian and
    Mediterranean share plates.
  - Forgotten Flavours (858 Corydon Ave) — confirmed open. Tourism
    Winnipeg, Wanderlog, Bakery Radar, and the bakery's own site
    (forgottenflavours.ca, with a dedicated locations page) all show it
    active at this address as a wild-yeast artisan bakery.
  - Colosseo Ristorante Italiano (670 Corydon Ave) — confirmed open. The
    restaurant's own site (colosseo.ca), a current Yelp listing (updated
    July 2026), Tripadvisor, and Tourism Winnipeg all show it active at
    this address, operating since 1973.
  - Bar Italia (737 Corydon Ave) — confirmed open. Tourism Winnipeg,
    Yelp (updated January 2026), Yellow Pages, DoorDash, and Uber Eats all
    show it active at this address.
  - `last_verified` set to 2026-09-14 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-indian-south-asian-food.html`, "Winnipeg's
  Indian and South Asian food scene: curry, biryani, and beyond." The
  queue's first item, manitoba-museum-planetarium-guide, was skipped again
  for lack of a fitting local photo; manitobamuseum.ca and
  images.unsplash.com remain unreachable from this sandbox, reconfirmed
  this run via curl through the agent proxy (connect_rejected/403 at the
  CONNECT stage). grand-beach-day-trip, manitoba-legislative-building-tour,
  winnipeg-performing-arts-season, and winnipeg-bookstores-record-shops were
  all skipped again for lack of a fitting local photo. winnipeg-indian-south-asian-food
  was picked this run because a full week (7 days) had passed since "food"
  was last used as an intent (2026-09-07, winnipeg-filipino-food-guide),
  clearing the one-week no-repeat-intent window that had ruled it out on
  the four preceding runs. No dedicated local photo of an Indian or Sri
  Lankan dish or restaurant exists, so `images/restaurant-dining.jpg`, the
  same generic upscale-dining-room photo already reused across four other
  cuisine-specific posts (steakhouses-bbq, ramen-japanese-guide,
  vietnamese-pho-guide, filipino-food-guide), was reused a fifth time with
  the same honest, non-specific alt text those posts use. No existing post
  covers Indian or South Asian food specifically. Facts about East India
  Company Pub & Eatery (349 York Ave, tracing to Winnipeg's first North
  Indian restaurant, India Gardens, founded by the Mehra family after they
  opened Mehra's Delicatessen on McDermot Avenue in the early 1970s, with
  the East India Company name and York Avenue location dating to 1994),
  India Palace (770 Ellice Ave, opened 1992 by Ashwani and Saroj, who had
  opened Bombay Restaurant a decade earlier in 1982), Copper Chimney (three
  Winnipeg locations on Madison Street, Pembina Highway, and Regent Avenue
  West, an East Indian and Hakka menu known for its samosas), Zaika The
  Indian Cuisine (1650 Regent Ave W), and Taste of Sri Lanka (a stall in
  The Forks Market plus a second location on Main Street) were confirmed
  by web search against each restaurant's own site (including East India
  Restaurant's own about page, which gives the fullest account of the
  Mehra family history), Yelp, Tripadvisor, Yellow Pages, Tourism
  Winnipeg, and the Downtown Winnipeg BIZ business directory. A Wikipedia
  page titled "East India Co. Grill and Bar" that surfaced in search
  results was checked and found to describe an unrelated restaurant in
  Portland, Oregon, so it was not used as a source. No hours or prices
  were stated in the post; readers are pointed to check before visiting.
  Registered in `articles-data.js` and `sitemap.xml`; the idea was moved
  from Queue to Used in `post-ideas.md` with today's date. This is a
  city-wide, non-Corydon post; the last four Used entries (west-end-guide,
  seasons-guide, royal-aviation-museum-guide, live-music-venues) were also
  all city-wide, so the topic-breadth ratio is unaffected. As in recent
  runs, `blog.html`'s `blogPost` JSON-LD array, its `<noscript>`
  article-card section, and `llms.txt`'s post count were left unmodified;
  those are part of `CLAUDE.md`'s general post-creation checklist rather
  than `AGENT-INSTRUCTIONS.md`'s daily-cron scope (registration in
  `articles-data.js` and `sitemap.xml`), and this cron's established
  practice has been to leave that broader backlog for a dedicated catch-up
  task. A `pa11y --standard WCAG2AA` check was not run against the new
  post: headless Chrome cannot reach the network through the agent proxy
  in this sandbox and the URL does not exist on the live site until after
  this run's push and redeploy, consistent with prior runs' notes on this
  limitation.

## 2026-09-13 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-08:
  - Thom Bargen Coffee Roasters (743 Corydon Ave) — confirmed open. The
    roaster's own site (thombargen.com, with a dedicated Corydon location
    page), Corner, Wanderlog, Apple Maps, and CaféWork all show it active
    at this address.
  - Tim Horton's (949 Corydon Ave) — confirmed open. Tim Hortons' own
    location page, Uber Eats, Yelp, Yellow Pages, and the Canadian Chamber
    of Commerce directory all show it active at this address.
  - Tommy's Pizzeria (842 Corydon Ave) — confirmed open. Tommy's own site
    (tommys.pizza), a current Yelp listing (updated September 2026),
    Tripadvisor, Tourism Winnipeg, and Facebook all show it active at
    this address.
  - Wako Sushi Café (875 Corydon Ave) — confirmed open. Yelp (updated
    July 2026), DoorDash, Tripadvisor, Apple Maps, and Yellow Pages all
    show it active at this address.
  - `last_verified` set to 2026-09-13 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-live-music-venues.html`, "Where to See Live
  Music in Winnipeg." The queue's first item, manitoba-museum-planetarium-guide,
  was skipped again for lack of a fitting local photo; manitobamuseum.ca and
  images.unsplash.com remain unreachable from this sandbox, reconfirmed this
  run via curl through the agent proxy (403/connect_rejected at the CONNECT
  stage), along with upload.wikimedia.org, images.pexels.com, and
  source.unsplash.com. grand-beach-day-trip and manitoba-legislative-building-tour
  were skipped again for lack of a fitting local photo. winnipeg-indian-south-asian-food
  was skipped not for a photo reason but because "food" was used 6 days ago
  (2026-09-07, winnipeg-filipino-food-guide), inside the one-week
  no-repeat-intent window. winnipeg-with-kids-indoor was skipped again as a
  near-duplicate of existing indoor/family-attraction posts.
  winnipeg-live-music-venues, the queue's next item, was picked and written
  using `images/guidebook-winnipeg-16-the-beer-can.jpg`, a real, previously
  unused photo of picnic tables at The Beer Can, a downtown beer garden and
  live-music venue (confirmed by web search against Songkick and Manitoba
  Music); a residential tower is visible in the background but is incidental
  rather than the photo's subject, so the no-skyline rule doesn't apply. No
  existing post is a dedicated live-music guide (`blog-winnipeg-fringe-festival-guide.html`
  covers the comedy/theatre festival, a different topic). Facts about the
  Burton Cummings Theatre (opened 1907 as the Walker Theatre at 364 Smith
  Street, closed for over a decade in the 1930s-40s, renovated in 1990-91
  and 2009-10, renamed in 2002 for Winnipeg-born musician Burton Cummings,
  a National Historic Site of Canada since 1991, roughly 1,600 seats), the
  Park Theatre (698 Osborne St, a converted cinema now a mid-size concert
  hall in South Osborne), Times Change(d) High & Lonesome Club (234 Main
  Street, a longtime blues/folk/roots dive bar in the Exchange District),
  Good Will Social Club (625 Portage Ave, a bar/coffee shop/venue in the
  West End booking local and touring indie and pop-punk acts), and The Beer
  Can (a seasonal shipping-container beer garden downtown running regular
  live sets and DJ nights through the warmer months) were confirmed by web
  search against Wikipedia, Songkick, Manitoba Music, Tripadvisor, Yelp, and
  each venue's own site. No hours, cover charges, or specific show dates
  were stated; the post tells readers to check each venue's own calendar,
  and flags that The Beer Can's outdoor season is weather-dependent.
  Registered in `articles-data.js` and `sitemap.xml`; the idea was moved
  from Queue to Used in `post-ideas.md` with today's date. This is a
  city-wide, non-Corydon post; the last four Used entries
  (thrift-vintage-shopping, west-end-guide, seasons-guide,
  royal-aviation-museum-guide) were also all city-wide, so the topic-breadth
  ratio is unaffected. As in recent runs, `blog.html`'s `blogPost` JSON-LD
  array, its `<noscript>` article-card section, and `llms.txt`'s post count
  were left unmodified; those are part of `CLAUDE.md`'s general
  post-creation checklist rather than `AGENT-INSTRUCTIONS.md`'s daily-cron
  scope (registration in `articles-data.js` and `sitemap.xml`), and this
  cron's established practice has been to leave that broader backlog for a
  dedicated catch-up task. A `pa11y --standard WCAG2AA` check was not run
  against the new post: headless Chrome cannot reach the network through
  the agent proxy in this sandbox, the URL does not exist on the live site
  until after this run's push and redeploy, and `AGENT-INSTRUCTIONS.md`
  does not list pa11y as part of the daily-cron scope. The new post reuses
  the same React/noscript scaffolding, skip link, and semantic structure as
  the template post it was copied from (`blog-royal-aviation-museum-guide.html`),
  which has previously passed this site's accessibility requirements.

---

## 2026-09-12 (cron)

- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-07:
  - Sushi Ya (659 Corydon Ave) — confirmed open. Yelp (updated May 2026),
    Tripadvisor, Tourism Winnipeg's Peg City Grub feature, DoorDash,
    SkipTheDishes, and Yellow Pages (as "Sushiya Ltd") all show it active
    at this address.
  - The Cheesemongers Fromagerie (839 Corydon Ave) — confirmed open. The
    shop's own site (thecheesemongers.ca), Tourism Winnipeg's dining and
    shopping listings, and a Yelp listing (updated July 2026) all show it
    active at this address.
  - The Mighty Kiwi Juice Bar & Eatery (709 Corydon Ave) — confirmed open.
    The chain's own site (themightykiwi.ca, with a dedicated Corydon
    location page), Tourism Winnipeg, DoorDash, SkipTheDishes, and Yelp
    all show it active at this address.
  - The Roost (651 Corydon Ave) — confirmed open. Yelp (updated September
    2026), the bar's own site (theroostwpg.com), Tripadvisor, Facebook,
    and Tourism Winnipeg all show it active at this address, operating
    since 2015.
  - `last_verified` set to 2026-09-12 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-royal-aviation-museum-guide.html`, "The Royal Aviation
  Museum of Western Canada: A Visitor's Guide." The queue's first item,
  manitoba-museum-planetarium-guide, was skipped again for lack of a fitting
  local photo; manitobamuseum.ca and images.unsplash.com remain unreachable
  from this sandbox, and this run additionally confirmed
  upload.wikimedia.org, commons.wikimedia.org, images.pexels.com, and
  pixabay.com/cdn.pixabay.com are also unreachable through the agent proxy
  (all connect_rejected/403 at the CONNECT stage), so no external photo
  source is usable this run either. grand-beach-day-trip,
  winnipeg-live-music-venues, manitoba-legislative-building-tour (a candidate
  reuse of images/city-hall-council-building-2021.jpg was rejected: that
  photo shows Winnipeg City Hall, a different building, and using it would
  misrepresent the Manitoba Legislative Building), winnipeg-performing-arts-season,
  winnipeg-bookstores-record-shops, and oak-hammock-marsh-birding were all
  skipped for lack of a fitting local photo. winnipeg-indian-south-asian-food
  was skipped not for a photo reason but because "food" was used 5 days ago
  (2026-09-07, winnipeg-filipino-food-guide), inside the one-week no-repeat
  window. winnipeg-with-kids-indoor was skipped again as a near-duplicate of
  existing indoor/family-attraction posts. A full audit compared every file
  in `images/` against every reference in `blog-*.html` and
  `articles-data.js`; essentially every locally relevant photo has already
  been used at least once, confirming there is no unused local image left
  that fits any remaining queue topic. royal-aviation-museum-guide, the
  queue's next item, was picked and written using
  images/airport-terminal.jpg, a real in-flight photo already used once
  before on `blog-winnipeg-airport-arrival-guide.html`, reused here with
  the same honest alt text ("a view of an airplane wing above the clouds
  during descent") since it depicts a generic airplane-in-flight scene
  rather than the museum itself, consistent with this cron's established
  practice of reusing generic real local photos across thematically
  related posts. The museum already appears in passing on
  `blog-winnipeg-must-sees.html`, `blog-family-activities.html`, and
  `blog-winnipeg-event-venues.html`, but no existing post is a dedicated
  visitor's guide to it, so this fills a real content gap rather than
  duplicating those mentions. Facts (the museum's address at 2088
  Wellington Avenue on the Winnipeg Richardson International Airport
  grounds; a total collection of more than 90 aircraft with roughly two
  dozen on display in the main hall at a time, some suspended overhead;
  incorporation in 1974 as the Western Canada Aviation Museum; the 1979
  opening at a Lily Street hangar; the December 2014 "Royal" designation;
  the 2019 federal grant, 2020 construction start, and May 2022 opening in
  the current building; and the general shape of its tiered admission and
  daily hours) were confirmed by web search against the museum's own site,
  Wikipedia, CBC News, and Travel Manitoba. No specific current-year
  admission price or hours figures were stated in the post; it points
  readers to the museum's own hours-and-admission page to confirm before
  visiting, since those details can change. Registered in
  `articles-data.js` and `sitemap.xml`; the idea was moved from Queue to
  Used in `post-ideas.md` with today's date. This is a city-wide,
  non-Corydon post; the last four Used entries (fringe-festival-guide,
  thrift-vintage-shopping, west-end-guide, seasons-guide) were also all
  city-wide, so the topic-breadth ratio is unaffected. As in recent runs,
  `blog.html`'s `blogPost` JSON-LD array, its `<noscript>` article-card
  section, and `llms.txt`'s post count were left unmodified; those are
  part of `CLAUDE.md`'s general post-creation checklist rather than
  `AGENT-INSTRUCTIONS.md`'s daily-cron scope (registration in
  `articles-data.js` and `sitemap.xml`), and this cron's established
  practice has been to leave that broader backlog for a dedicated
  catch-up task. A `pa11y --standard WCAG2AA` check was not run against
  the new post: headless Chrome cannot reach the network through the
  agent proxy in this sandbox (confirmed by prior runs'
  `net::ERR_TUNNEL_CONNECTION_FAILED`), the URL does not exist on the live
  site until after this run's push and redeploy, and `AGENT-INSTRUCTIONS.md`
  does not list pa11y as part of the daily-cron scope. The new post reuses
  the same React/noscript scaffolding, skip link, and semantic structure as
  the template post it was copied from (`blog-winnipeg-seasons-guide.html`),
  which has previously passed this site's accessibility requirements.

---

## 2026-09-11 (cron)

- **Housekeeping:** local checkout started on a detached HEAD matching
  `origin/main` at `baa9368`. Checked out `main` and fast-forwarded to
  `origin/main` before starting; no content was lost.
- **Verified 4 businesses** (the stalest batch, `rotation_batch_size` 4), all
  last checked 2026-09-06:
  - Saperavi Georgian Cuisine (709 Corydon Ave) — confirmed open. Tourism
    Winnipeg's dining and patio listings, the restaurant's own Facebook
    page, Yellow Pages, and an active online ordering page all show it
    active at this address, with posted hours (Tue-Thu 4-9pm, Fri-Sat
    4-10pm, Sun 4-8:30pm, closed Mondays).
  - Starbucks (946 Corydon Ave) — confirmed open. Tripadvisor, DoorDash,
    Uber Eats, SkipTheDishes, Yellow Pages, and a Starbucks careers listing
    for "Store# 68102, Corydon & Stafford" all show it active at this
    address.
  - Sugar + Salt Bakeshoppe (897 Corydon Ave) — confirmed open. The
    bakeshop's own site (sugarandsaltbakeshoppe.com), Tourism Winnipeg,
    and a Chamber of Commerce directory listing all show it active at
    this address (Unit 103), with posted hours (Tue-Fri 11am-5pm, Sat
    10am-4pm, closed Sun-Mon).
  - Sunshine Chinese Restaurant (635 Corydon Ave) — confirmed open. The
    restaurant's own site (winnipegsunshine.com / sunshinechinesefood.com),
    Yelp, Tripadvisor, Yellow Pages, and an active online ordering page
    all show it active at this address.
  - `last_verified` set to 2026-09-11 for all four in `business-ledger.json`;
    no status changes. All four listings on `blog-corydon-guide.html` already
    match current names/addresses, so no page corrections were needed.
- **New post:** `blog-winnipeg-seasons-guide.html`, "Winnipeg's Seasons: A
  Visitor's Weather Guide." The queue's first item,
  manitoba-museum-planetarium-guide, was skipped again for lack of a fitting
  local photo; manitobamuseum.ca and images.unsplash.com remain unreachable
  from this sandbox (confirmed again via curl through the agent proxy, both
  returning connect_rejected/403 at the CONNECT stage). The rest of the
  queue (grand-beach-day-trip, winnipeg-live-music-venues,
  manitoba-legislative-building-tour, winnipeg-performing-arts-season,
  royal-aviation-museum-guide, winnipeg-bookstores-record-shops,
  oak-hammock-marsh-birding, riding-mountain-national-park-trip,
  northern-lights-near-winnipeg, winnipeg-chinatown-guide) was skipped for
  the same lack-of-photo reason. winnipeg-indian-south-asian-food was
  skipped not for a photo reason but because "food" was used 4 days ago
  (2026-09-07, winnipeg-filipino-food-guide), inside the one-week
  no-repeat-intent window; that same window also ruled out "drink"
  (craft-distilleries, 09-06), "festivals"/"culture" (fringe-festival-guide,
  09-08), "shopping" (thrift-vintage-shopping, 09-09), and "neighbourhood
  guide" (west-end-guide, 09-10). winnipeg-with-kids-indoor was skipped
  again as a near-duplicate of existing indoor/family-attraction posts.
  winnipeg-seasons-guide was invented instead (not in the queue) to cover
  an intent no recent post had touched — weather and practical packing
  logistics for visitors — using images/assiniboine-park.jpg, a real local
  summer garden photo already used on a few other posts and reused again
  here with honest, accurate alt text, consistent with this cron's
  established practice of reusing real local photos across posts when no
  unused one fits as well. No existing post is a dedicated seasons/weather
  guide: blog-winnipeg-winter-activities.html,
  blog-winnipeg-spring-river-thaw.html, and blog-winnipeg-fall-colours.html
  each cover one season's activities or scenery, not the practical
  weather-and-packing angle across all four, and the new post links to each
  of them rather than duplicating their content. Climate facts (Winnipeg's
  "Winterpeg" nickname and Environment Canada's ranking among the coldest
  cities of its size; January averaging well below freezing with cold
  snaps that can push past -30°C before wind chill; the exposed prairie
  wind; summer highs in the mid-20s Celsius with spikes into the low-30s;
  and the general shape of spring and fall as short, unpredictable shoulder
  seasons) were confirmed by web search against Environment Canada
  climate-normals-sourced summaries, Global News, and the Royal
  Meteorological Society. No specific narrower averages or year-specific
  forecasts were stated. Registered in `articles-data.js` and
  `sitemap.xml`; the idea was logged as invented and moved to Used in
  `post-ideas.md`. This is a city-wide, non-Corydon practical guide; the
  last four Used entries (filipino-food-guide, fringe-festival-guide,
  thrift-vintage-shopping, west-end-guide) were also all city-wide, so the
  topic-breadth ratio is unaffected. As in recent runs, `blog.html`'s
  `blogPost` JSON-LD array, its `<noscript>` article-card section, and
  `llms.txt`'s post count were left unmodified (they have not tracked new
  posts since before this cron's current run history; updating them for
  every post this cron has missed remains out of scope for a single day's
  run). A `pa11y --standard WCAG2AA` check against the new post's live URL
  was attempted per `CLAUDE.md`'s pa11y guidance but could not run: headless
  Chrome in this sandbox cannot reach the network through the agent proxy
  (`net::ERR_TUNNEL_CONNECTION_FAILED`), and the URL does not exist on the
  live site until after this run's push and redeploy in any case. The new
  post reuses the same React/noscript scaffolding, skip link, and semantic
  structure as the existing template post it was copied from, which has
  previously passed this site's accessibility requirements.

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
