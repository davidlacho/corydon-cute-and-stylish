# Ledger backfill sweep

The business ledger was backfilled on 2026-09-21 by pattern-matching the
archive, which catches linked, bolded and address-tagged names but misses
businesses mentioned in plain prose. Each daily run reads ONE post from "Not yet
swept", adds any commercial businesses it names to
`blog-maintenance/business-ledger.json` (see Part 1, step 6 of
`AGENT-INSTRUCTIONS.md`), appends the filename to `pages` for businesses already
listed, and moves the filename to "Swept" with the date. Posts with no ledger
entries at all come first; the 30 posts the pattern pass already touched come
last because they are partly covered.

## Not yet swept (top-down)

- blog-airbnb-design-lessons.html
- blog-airbnb-performance-statistics.html
- blog-assiniboine-park-zoo-leaf-guide.html
- blog-assiniboine-park.html
- blog-bali-nyaman.html
- blog-beat-the-heat-near-corydon-airbnb.html
- blog-budapest-caving.html
- blog-budget-day-corydon-airbnb.html
- blog-christmas-winnipeg.html
- blog-classic107-spring-break-winnipeg.html
- blog-coffee-near-corydon-airbnb.html
- blog-corydon-confusion-corner-walking-guide.html
- blog-corydon-cute-stylish-winnipeg-airbnb.html
- blog-corydon-to-forks-bike-walk-guide.html
- blog-cozy-winter-warm-up-spots-near-corydon-airbnb.html
- blog-crescentwood-history.html
- blog-crescentwood-liveable.html
- blog-date-night-on-corydon-avenue.html
- blog-day-trips-near-winnipeg-from-corydon.html
- blog-el-taylor-crescentwood.html
- blog-espresso-machine-simplicity.html
- blog-exchange-district-self-guided-tour.html
- blog-exchange-district.html
- blog-family-activities.html
- blog-festival-du-voyageur.html
- blog-filipino-billiards-winnipeg.html
- blog-forgotten-flavours-wild-yeast-bakery-near-corydon-airbnb.html
- blog-fortwhyte-alive-visitor-guide.html
- blog-fresh-decor-updates.html
- blog-grocery-runs-near-corydon-airbnb.html
- blog-gunns-bakery.html
- blog-hosting-best-practices.html
- blog-human-rights-museum.html
- blog-late-night-bites-near-corydon.html
- blog-lisbon-2015.html
- blog-little-free-libraries.html
- blog-little-italy-half-day-walking-loop.html
- blog-marseille-trip-gone-wrong.html
- blog-mattress-pillow-protectors.html
- blog-nestaweya-river-trail.html
- blog-osborne-village-corydon-evening-guide.html
- blog-peanut-park.html
- blog-post-review-philosophy.html
- blog-puerto-vallarta-stay.html
- blog-qaumajuq-wag-guide.html
- blog-rainbow-stage.html
- blog-rainy-afternoon-on-corydon.html
- blog-rainy-day-winnipeg-itinerary.html
- blog-renting-a-bike-near-corydon-airbnb.html
- blog-river-walks.html
- blog-royal-aviation-museum-guide.html
- blog-ruskin-row-residents.html
- blog-smart-tv-every-bedroom.html
- blog-spa-shower-upgrade.html
- blog-st-boniface-walking-guide.html
- blog-st-vital-park.html
- blog-sunday-on-corydon-avenue.html
- blog-the-forks-cmhr-day-plan.html
- blog-the-forks.html
- blog-things-to-do.html
- blog-transportation.html
- blog-travel-perspectives-hosting.html
- blog-unique-airbnb-features.html
- blog-vegetarian-vegan-eats-corydon.html
- blog-wellington-crescent-walk-near-corydon-airbnb.html
- blog-wine-beer-spirits-near-corydon-airbnb.html
- blog-winnipeg-48-hour-itinerary.html
- blog-winnipeg-accessible-attractions.html
- blog-winnipeg-airport-arrival-guide.html
- blog-winnipeg-art-gallery.html
- blog-winnipeg-best-new-food-spots.html
- blog-winnipeg-blue-bombers.html
- blog-winnipeg-bookstores-record-shops.html
- blog-winnipeg-chinatown-guide.html
- blog-winnipeg-craft-distilleries.html
- blog-winnipeg-cycling-routes.html
- blog-winnipeg-fall-colours.html
- blog-winnipeg-filipino-food-guide.html
- blog-winnipeg-folk-festival.html
- blog-winnipeg-food-trucks.html
- blog-winnipeg-free-things-to-do.html
- blog-winnipeg-fringe-festival-guide.html
- blog-winnipeg-general-strike.html
- blog-winnipeg-goldeyes.html
- blog-winnipeg-grocery-shopping-guide.html
- blog-winnipeg-guest-guide.html
- blog-winnipeg-indian-south-asian-food.html
- blog-winnipeg-jets.html
- blog-winnipeg-live-music-venues.html
- blog-winnipeg-middle-eastern-food-guide.html
- blog-winnipeg-murals.html
- blog-winnipeg-must-sees.html
- blog-winnipeg-north-end-history-food.html
- blog-winnipeg-perogies-ukrainian-food.html
- blog-winnipeg-pride.html
- blog-winnipeg-seasons-guide.html
- blog-winnipeg-shopping-districts.html
- blog-winnipeg-short-term-rental-compliance.html
- blog-winnipeg-snow-clearing-map.html
- blog-winnipeg-spring-river-thaw.html
- blog-winnipeg-st-vital-guide.html
- blog-winnipeg-steakhouses-bbq.html
- blog-winnipeg-three-city-halls.html
- blog-winnipeg-thrift-vintage-shopping.html
- blog-winnipeg-transit-basics-getting-downtown-from-corydon.html
- blog-winnipeg-transit-history.html
- blog-winnipeg-west-end-guide.html
- blog-winnipeg-wine-bars-guide.html
- blog-winnipeg-winter-activities.html
- blog-winter-driving-winnipeg.html
- blog-wolseley-neighbourhood-guide.html
- blog-work-remotely-near-corydon-airbnb.html
- blog-24-hour-winnipeg-budget.html
- blog-best-breakfast-brunch-near-corydon-airbnb.html
- blog-best-corydon-patios.html
- blog-best-places-nearby-winnipeg.html
- blog-corydon-guide.html
- blog-family-friendly-stops-near-corydon.html
- blog-farmers-market-near-corydon-airbnb.html
- blog-group-dining.html
- blog-grove-pub-near-corydon-airbnb.html
- blog-hargrave-st-market.html
- blog-indigenous-winnipeg.html
- blog-osborne-village-vs-corydon-evening-compared.html
- blog-restaurants.html
- blog-spacedoxa.html
- blog-sweet-tooth-crawl-corydon-desserts.html
- blog-thermea-spa-day-near-corydon-airbnb.html
- blog-winnipeg-bakeries-artisan-bread.html
- blog-winnipeg-breweries.html
- blog-winnipeg-brunch-breakfast.html
- blog-winnipeg-cocktail-bars-lounges.html
- blog-winnipeg-coffee.html
- blog-winnipeg-event-venues.html
- blog-winnipeg-farmers-markets-guide.html
- blog-winnipeg-ice-cream-gelato.html
- blog-winnipeg-osborne-village-guide.html
- blog-winnipeg-pizza-guide.html
- blog-winnipeg-ramen-japanese-guide.html
- blog-winnipeg-tours.html
- blog-winnipeg-vegan-restaurants.html
- blog-winnipeg-vietnamese-pho-guide.html

## Swept (append: date - filename)

