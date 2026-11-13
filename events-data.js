// Winnipeg events calendar data, read by events.html.
//
// Every entry is a dated event that has its own blog post on this site; `url`
// MUST be the path of an existing blog-*.html file, because clicking the event
// on the calendar opens that post. Keep the array sorted by `start`.
//
// Fields:
//   title   - short event name as it appears on the calendar
//   url     - "/blog-<slug>.html" (the post that covers the event)
//   start   - first day, YYYY-MM-DD (local Winnipeg date)
//   end     - last day, YYYY-MM-DD (same as start for a one-day event)
//   time    - optional display string ("5 p.m.", "7 p.m. puck drop"); omit when all day
//   venue   - optional venue or area ("The Forks", "Whittier Park, St. Boniface")
//   status  - "confirmed" when the organiser has published these dates,
//             "typical" when they are the usual window and the organiser has not
//             yet announced them (the calendar labels these as typical dates)
//
// Maintained by the daily blog-freshness run; see "Events calendar" in
// blog-maintenance/AGENT-INSTRUCTIONS.md. After editing, run
//   python3 blog-maintenance/update-events.py
// to validate the entries and regenerate the static list and JSON-LD in events.html.
const EVENTS_DATA = [
  {
    "title": "NHL Heritage Classic: Jets vs Canadiens",
    "url": "/blog-nhl-heritage-classic-winnipeg-2026.html",
    "start": "2026-10-25",
    "end": "2026-10-25",
    "time": "6 p.m. puck drop",
    "venue": "Princess Auto Stadium",
    "status": "confirmed"
  },
  {
    "title": "Manitoba Hydro Santa Parade",
    "url": "/blog-santa-claus-parade-winnipeg.html",
    "start": "2026-11-14",
    "end": "2026-11-14",
    "time": "5 p.m.",
    "venue": "Portage Avenue, downtown",
    "status": "confirmed"
  },
  {
    "title": "Third + Bird Christmas Market",
    "url": "/blog-winnipeg-holiday-markets.html",
    "start": "2026-11-20",
    "end": "2026-11-22",
    "status": "confirmed"
  },
  {
    "title": "Rise Above Handmade Holiday Market",
    "url": "/blog-winnipeg-holiday-markets.html",
    "start": "2026-11-23",
    "end": "2026-11-23",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Christmas Market",
    "url": "/blog-winnipeg-holiday-markets.html",
    "start": "2026-11-26",
    "end": "2026-11-29",
    "venue": "RBC Convention Centre",
    "status": "confirmed"
  },
  {
    "title": "Canad Inns Winter Wonderland drive-through lights",
    "url": "/blog-canad-inns-winter-wonderland.html",
    "start": "2026-11-27",
    "end": "2027-01-02",
    "time": "6 p.m. to 10 p.m. nightly, closed December 25",
    "venue": "Red River Exhibition Park",
    "status": "confirmed"
  },
  {
    "title": "WSO: Handel's Messiah",
    "url": "/blog-wso-christmas-concerts-winnipeg.html",
    "start": "2026-12-03",
    "end": "2026-12-03",
    "time": "7:30 p.m.",
    "venue": "Centennial Concert Hall, 555 Main St",
    "status": "confirmed"
  },
  {
    "title": "Amero Little Christmas",
    "url": "/blog-don-amero-little-christmas-winnipeg.html",
    "start": "2026-12-04",
    "end": "2026-12-04",
    "time": "7 p.m.",
    "venue": "Burton Cummings Theatre, 364 Smith St",
    "status": "confirmed"
  },
  {
    "title": "Sesame Street Live: Elmo's Got the Moves",
    "url": "/blog-elmo-got-the-moves-winnipeg.html",
    "start": "2026-12-05",
    "end": "2026-12-05",
    "time": "2 p.m. and 6 p.m.",
    "venue": "Burton Cummings Theatre, 364 Smith St",
    "status": "confirmed"
  },
  {
    "title": "WSO Christmas Pops",
    "url": "/blog-wso-christmas-concerts-winnipeg.html",
    "start": "2026-12-05",
    "end": "2026-12-06",
    "time": "7:30 p.m. Saturday, 2 p.m. Sunday",
    "venue": "Centennial Concert Hall, 555 Main St",
    "status": "confirmed"
  },
  {
    "title": "Jann Arden and Her Holiday Orchestra",
    "url": "/blog-jann-arden-holiday-orchestra-winnipeg.html",
    "start": "2026-12-08",
    "end": "2026-12-08",
    "time": "7:30 p.m.",
    "venue": "Centennial Concert Hall, 555 Main St",
    "status": "confirmed"
  },
  {
    "title": "JP Hoe Hoe Hoe Holiday Show",
    "url": "/blog-jp-hoe-holiday-show-winnipeg.html",
    "start": "2026-12-11",
    "end": "2026-12-12",
    "time": "8 p.m. both nights",
    "venue": "Burton Cummings Theatre, 364 Smith St",
    "status": "confirmed"
  },
  {
    "title": "WSO: How the Grinch Stole Christmas in Concert",
    "url": "/blog-wso-christmas-concerts-winnipeg.html",
    "start": "2026-12-12",
    "end": "2026-12-13",
    "time": "7:30 p.m. Saturday, 2 p.m. Sunday",
    "venue": "Centennial Concert Hall, 555 Main St",
    "status": "confirmed"
  },
  {
    "title": "Choir! Choir! Choir!: Un-Silent Night",
    "url": "/blog-choir-choir-choir-winnipeg.html",
    "start": "2026-12-15",
    "end": "2026-12-15",
    "time": "8 p.m.",
    "venue": "Burton Cummings Theatre, 364 Smith St",
    "status": "confirmed"
  },
  {
    "title": "Vinterfest craft market at IKEA Winnipeg",
    "url": "/blog-vinterfest-market-winnipeg.html",
    "start": "2026-12-18",
    "end": "2026-12-20",
    "time": "10 a.m., closing 8 p.m. Friday",
    "venue": "IKEA Winnipeg, 500 Sterling Lyon Parkway",
    "status": "confirmed"
  },
  {
    "title": "Royal Winnipeg Ballet: Nutcracker",
    "url": "/blog-rwb-nutcracker-winnipeg.html",
    "start": "2026-12-18",
    "end": "2026-12-27",
    "venue": "Centennial Concert Hall",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg school winter break",
    "url": "/blog-christmas-winnipeg.html",
    "start": "2026-12-18",
    "end": "2027-01-04",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Jets vs Dallas, back-to-back",
    "url": "/blog-winnipeg-jets.html",
    "start": "2026-12-19",
    "end": "2026-12-20",
    "venue": "Canada Life Centre",
    "status": "confirmed"
  },
  {
    "title": "Arctic Glacier Winter Park opens for the season",
    "url": "/blog-arctic-glacier-winter-park-forks.html",
    "start": "2026-12-19",
    "end": "2027-03-07",
    "venue": "The Forks",
    "status": "typical"
  },
  {
    "title": "New Year's Eve at The Forks",
    "url": "/blog-new-years-eve-the-forks.html",
    "start": "2026-12-31",
    "end": "2026-12-31",
    "venue": "The Forks",
    "status": "confirmed"
  },
  {
    "title": "Nestaweya River Trail skating season",
    "url": "/blog-nestaweya-river-trail.html",
    "start": "2027-01-09",
    "end": "2027-03-07",
    "venue": "Red and Assiniboine rivers at The Forks",
    "status": "typical"
  },
  {
    "title": "Snow maze at A Maze in Corn",
    "url": "/blog-snow-maze-st-adolphe.html",
    "start": "2027-01-15",
    "end": "2027-03-14",
    "venue": "St. Adolphe",
    "status": "typical"
  },
  {
    "title": "Warming Huts on the river trail",
    "url": "/blog-warming-huts-red-river-trail.html",
    "start": "2027-01-18",
    "end": "2027-02-28",
    "venue": "Nestaweya River Trail, The Forks",
    "status": "typical"
  },
  {
    "title": "Winnipeg New Music Festival",
    "url": "/blog-winnipeg-new-music-festival.html",
    "start": "2027-01-20",
    "end": "2027-01-28",
    "venue": "Centennial Concert Hall",
    "status": "typical"
  },
  {
    "title": "Festival du Voyageur",
    "url": "/blog-festival-du-voyageur.html",
    "start": "2027-02-12",
    "end": "2027-02-21",
    "venue": "Whittier Park, St. Boniface",
    "status": "confirmed"
  },
  {
    "title": "Broadway Sings with Rainbow Stage",
    "url": "/blog-rainbow-stage.html",
    "start": "2027-02-27",
    "end": "2027-02-27",
    "time": "2 p.m.",
    "venue": "Centennial Concert Hall, 555 Main St",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Jets six-game homestand",
    "url": "/blog-winnipeg-jets.html",
    "start": "2027-03-01",
    "end": "2027-03-13",
    "venue": "Canada Life Centre",
    "status": "confirmed"
  },
  {
    "title": "Freeze Frame kids' film festival",
    "url": "/blog-freeze-frame-film-festival.html",
    "start": "2027-03-07",
    "end": "2027-03-13",
    "venue": "Centre culturel franco-manitobain",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Jets vs Toronto",
    "url": "/blog-winnipeg-jets.html",
    "start": "2027-03-11",
    "end": "2027-03-11",
    "venue": "Canada Life Centre",
    "status": "confirmed"
  },
  {
    "title": "Manitoba spring break",
    "url": "/blog-winnipeg-spring-break-guide.html",
    "start": "2027-03-29",
    "end": "2027-04-02",
    "status": "confirmed"
  },
  {
    "title": "JUNO Week",
    "url": "/blog-juno-awards-winnipeg-2027.html",
    "start": "2027-04-01",
    "end": "2027-04-04",
    "venue": "Downtown and Exchange District venues",
    "status": "confirmed"
  },
  {
    "title": "JUNO Awards broadcast",
    "url": "/blog-juno-awards-winnipeg-2027.html",
    "start": "2027-04-02",
    "end": "2027-04-02",
    "venue": "Canada Life Centre",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Jets vs Edmonton",
    "url": "/blog-winnipeg-jets.html",
    "start": "2027-04-07",
    "end": "2027-04-07",
    "venue": "Canada Life Centre",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Comedy Festival",
    "url": "/blog-winnipeg-comedy-festival.html",
    "start": "2027-04-19",
    "end": "2027-04-25",
    "venue": "Gas Station Arts Centre and Burton Cummings Theatre",
    "status": "typical"
  },
  {
    "title": "Winnipeg Goldeyes home opener vs Sioux City",
    "url": "/blog-winnipeg-goldeyes.html",
    "start": "2027-05-14",
    "end": "2027-05-14",
    "time": "7 p.m.",
    "venue": "Blue Cross Park",
    "status": "confirmed"
  },
  {
    "title": "Pride Winnipeg festival (40th year)",
    "url": "/blog-winnipeg-pride.html",
    "start": "2027-05-25",
    "end": "2027-06-06",
    "venue": "Downtown and The Forks",
    "status": "typical"
  },
  {
    "title": "Table for 1200",
    "url": "/blog-table-for-1200-winnipeg.html",
    "start": "2027-05-29",
    "end": "2027-05-29",
    "venue": "Secret location, announced at noon",
    "status": "typical"
  },
  {
    "title": "Doors Open Winnipeg",
    "url": "/blog-doors-open-winnipeg.html",
    "start": "2027-05-29",
    "end": "2027-05-30",
    "venue": "Buildings across the city",
    "status": "confirmed"
  },
  {
    "title": "Kidsfest (Winnipeg International Children's Festival)",
    "url": "/blog-kidsfest-winnipeg.html",
    "start": "2027-06-10",
    "end": "2027-06-13",
    "venue": "The Forks",
    "status": "typical"
  },
  {
    "title": "MEME: Manitoba Electronic Music Exhibition",
    "url": "/blog-manitoba-electronic-music-exhibition.html",
    "start": "2027-06-11",
    "end": "2027-06-12",
    "venue": "Old Market Square, Exchange District",
    "status": "confirmed"
  },
  {
    "title": "Red River Ex",
    "url": "/blog-red-river-exhibition.html",
    "start": "2027-06-11",
    "end": "2027-06-20",
    "venue": "Red River Exhibition Park",
    "status": "typical"
  },
  {
    "title": "TD Winnipeg International Jazz Festival",
    "url": "/blog-winnipeg-jazz-festival.html",
    "start": "2027-06-15",
    "end": "2027-06-20",
    "venue": "Old Market Square and Exchange District venues",
    "status": "typical"
  },
  {
    "title": "Winnipeg Goldeyes Father's Day home game",
    "url": "/blog-winnipeg-goldeyes.html",
    "start": "2027-06-20",
    "end": "2027-06-20",
    "venue": "Blue Cross Park",
    "status": "confirmed"
  },
  {
    "title": "Canada Day at The Forks",
    "url": "/blog-canada-day-winnipeg.html",
    "start": "2027-07-01",
    "end": "2027-07-01",
    "venue": "The Forks",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Goldeyes Canada Day home game",
    "url": "/blog-winnipeg-goldeyes.html",
    "start": "2027-07-01",
    "end": "2027-07-01",
    "venue": "Blue Cross Park",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Folk Festival",
    "url": "/blog-winnipeg-folk-festival.html",
    "start": "2027-07-08",
    "end": "2027-07-11",
    "venue": "Birds Hill Provincial Park",
    "status": "confirmed"
  },
  {
    "title": "Winnipeg Fringe Theatre Festival",
    "url": "/blog-winnipeg-fringe-festival-guide.html",
    "start": "2027-07-14",
    "end": "2027-07-25",
    "venue": "Exchange District",
    "status": "confirmed"
  },
  {
    "title": "Great Outdoors Comedy Festival",
    "url": "/blog-great-outdoors-comedy-festival-winnipeg.html",
    "start": "2027-07-16",
    "end": "2027-07-18",
    "venue": "Lyric Theatre field, Assiniboine Park",
    "status": "confirmed"
  },
  {
    "title": "Icelandic Festival of Manitoba (Islendingadagurinn)",
    "url": "/blog-icelandic-festival-gimli.html",
    "start": "2027-07-30",
    "end": "2027-08-02",
    "venue": "Gimli",
    "status": "typical"
  },
  {
    "title": "Folklorama",
    "url": "/blog-folklorama-2027.html",
    "start": "2027-08-01",
    "end": "2027-08-14",
    "venue": "Pavilions across Winnipeg",
    "status": "confirmed"
  },
  {
    "title": "StrEAT Feast food truck festival",
    "url": "/blog-winnipeg-summer-food-festivals.html",
    "start": "2027-08-12",
    "end": "2027-08-15",
    "venue": "The Forks",
    "status": "typical"
  },
  {
    "title": "Tacos and Tequila Festival",
    "url": "/blog-winnipeg-summer-food-festivals.html",
    "start": "2027-08-21",
    "end": "2027-08-21",
    "venue": "Blue Cross Park",
    "status": "typical"
  },
  {
    "title": "Winnipeg Beer Festival",
    "url": "/blog-winnipeg-summer-food-festivals.html",
    "start": "2027-08-21",
    "end": "2027-08-21",
    "venue": "St. Boniface",
    "status": "typical"
  },
  {
    "title": "Winnipeg Goldeyes final homestand vs Lincoln",
    "url": "/blog-winnipeg-goldeyes.html",
    "start": "2027-08-31",
    "end": "2027-09-05",
    "venue": "Blue Cross Park",
    "status": "confirmed"
  },
  {
    "title": "The Weekender on Graham Avenue",
    "url": "/blog-manyfest-winnipeg-the-weekender.html",
    "start": "2027-09-10",
    "end": "2027-09-12",
    "venue": "Graham Avenue, downtown",
    "status": "typical"
  },
  {
    "title": "Reel Pride Film Festival",
    "url": "/blog-reel-pride-film-festival-winnipeg.html",
    "start": "2027-09-15",
    "end": "2027-09-19",
    "venue": "Gas Station Arts Centre and Canadian Museum for Human Rights",
    "status": "typical"
  },
  {
    "title": "Culture Days",
    "url": "/blog-culture-days-winnipeg.html",
    "start": "2027-09-17",
    "end": "2027-10-03",
    "venue": "Venues across Winnipeg and Manitoba",
    "status": "typical"
  },
  {
    "title": "Nuit Blanche Winnipeg",
    "url": "/blog-nuit-blanche-winnipeg.html",
    "start": "2027-09-25",
    "end": "2027-09-25",
    "venue": "Downtown, Exchange District, The Forks and St. Boniface",
    "status": "confirmed"
  },
  {
    "title": "Scattered Seeds Craft Market, first weekend",
    "url": "/blog-winnipeg-holiday-markets.html",
    "start": "2027-10-15",
    "end": "2027-10-17",
    "status": "typical"
  },
  {
    "title": "Scattered Seeds Craft Market, second weekend",
    "url": "/blog-winnipeg-holiday-markets.html",
    "start": "2027-10-22",
    "end": "2027-10-24",
    "status": "typical"
  },
  {
    "title": "Crafted Show and Sale",
    "url": "/blog-winnipeg-holiday-markets.html",
    "start": "2027-11-05",
    "end": "2027-11-07",
    "venue": "Winnipeg Art Gallery",
    "status": "typical"
  },
  {
    "title": "Manito Ahbee Festival",
    "url": "/blog-manito-ahbee-festival.html",
    "start": "2027-11-05",
    "end": "2027-11-07",
    "venue": "Canada Life Centre",
    "status": "typical"
  }
];
