        const { useState, useEffect, useRef } = React;

        function NavigationFallback() {
            return null;
        }

        function FooterFallback() {
            return null;
        }

        function FloatingBookButtonFallback() {
            return null;
        }

        const NavigationComponent = typeof Navigation === 'function' ? Navigation : NavigationFallback;
        const FooterComponent = typeof Footer === 'function' ? Footer : FooterFallback;
        const FloatingBookButtonComponent = typeof FloatingBookButton === 'function' ? FloatingBookButton : FloatingBookButtonFallback;

        // Nearby Component with Map
        function Nearby() {
            const [activeFilter, setActiveFilter] = useState('all');
            const [mapLoaded, setMapLoaded] = useState(false);
            const [mapLoading, setMapLoading] = useState(false);
            const mapInstanceRef = useRef(null);
            
            // Lazy load Leaflet and initialize map
            useEffect(() => {
                if (mapLoaded || mapLoading) return;

                const mapContainer = document.getElementById('location-map');
                if (!mapContainer) return;

                const initializeMap = () => {
                    if (typeof L === 'undefined') {
                        console.error('Leaflet not loaded');
                        return;
                    }
                    
                    try {
                        // Coordinates for Enderton Park (Peanut Park), 11 Ruskin Row, Winnipeg
                        // Airbnb location
                        const airbnbLat = 49.87275;
                        const airbnbLng = -97.16177;

                        // Create map centered on the Airbnb location
                        const map = L.map('location-map').setView([airbnbLat, airbnbLng], 15);
                        mapInstanceRef.current = map;

                        // Add OpenStreetMap tiles
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                            maxZoom: 19
                        }).addTo(map);

                        // Custom icon for Airbnb location
                        const airbnbIcon = L.divIcon({
                            className: 'custom-airbnb-marker',
                            html: '<div class="airbnb-marker-pin"><span class="airbnb-marker-icon"></span></div>',
                            iconSize: [32, 32],
                            iconAnchor: [16, 32],
                            popupAnchor: [0, -32]
                        });

                        // Add marker for Airbnb location
                        const airbnbMarker = L.marker([airbnbLat, airbnbLng], { icon: airbnbIcon }).addTo(map);
                        airbnbMarker.bindPopup(`
                            <div class="map-popup">
                                <strong class="map-popup-title">Stay Winnipeg</strong><br>
                                <span class="map-popup-subtitle">Your Perfect Winnipeg Getaway</span>
                            </div>
                        `).openPopup();

                        // Add a circle to show the walking distance area
                        L.circle([airbnbLat, airbnbLng], {
                            color: '#0F766E',
                            fillColor: '#0F766E',
                            fillOpacity: 0.1,
                            radius: 500 // 500 meters radius for walking distance
                        }).addTo(map);

                        // Invalidate map size to ensure proper rendering after container is visible
                        const invalidateMapSize = () => {
                            if (mapInstanceRef.current) {
                                mapInstanceRef.current.invalidateSize();
                            }
                        };
                        
                        // Invalidate immediately and after a short delay to handle any layout shifts
                        setTimeout(invalidateMapSize, 100);
                        setTimeout(invalidateMapSize, 500);

                        setMapLoaded(true);
                        setMapLoading(false);
                    } catch (error) {
                        console.error('Error initializing map:', error);
                        setMapLoading(false);
                    }
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !mapLoaded && !mapLoading) {
                            setMapLoading(true);
                            
                            // Load Leaflet CSS if not already loaded
                            if (!document.querySelector('link[href*="leaflet"]')) {
                                const leafletCSS = document.createElement('link');
                                leafletCSS.rel = 'stylesheet';
                                leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                                leafletCSS.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
                                leafletCSS.crossOrigin = '';
                                leafletCSS.onload = () => {
                                    // CSS loaded, ready to initialize map
                                };
                                document.head.appendChild(leafletCSS);
                            }

                            // Load Leaflet JS
                            if (typeof L === 'undefined') {
                                const script = document.createElement('script');
                                script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
                                script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
                                script.crossOrigin = '';
                                script.onload = () => {
                                    // Wait a bit for Leaflet to fully initialize and CSS to load
                                    setTimeout(() => {
                                        initializeMap();
                                    }, 200);
                                };
                                script.onerror = () => {
                                    console.error('Failed to load Leaflet');
                                    setMapLoading(false);
                                };
                                document.body.appendChild(script);
                            } else {
                                initializeMap();
                            }
                            
                            observer.disconnect();
                        }
                    });
                }, { rootMargin: '50px' });

                observer.observe(mapContainer);

                return () => {
                    observer.disconnect();
                };
            }, [mapLoaded, mapLoading]);

            const allLocations = [
                // Walking Distance
                { name: "Enderton (Peanut) Park", time: "1 min", category: "parks", distance: "walking" },
                { name: "Wellington Crescent Riverwalk", time: "5 min", category: "parks", distance: "walking" },
                { name: "Corydon \"Little Italy\"", time: "4 min", category: "dining", distance: "walking" },
                { name: "Crescentwood Community Centre", time: "6 min", category: "community", distance: "walking" },
                { name: "Groceries", time: "4 min", category: "shopping", distance: "walking" },
                { name: "Corydon Avenue Restaurants", time: "3 min", category: "dining", distance: "walking" },
                { name: "Local Cafes & Coffee Shops", time: "3 min", category: "dining", distance: "walking" },
                { name: "Boutique Shops", time: "4 min", category: "shopping", distance: "walking" },
                { name: "Liquor Mart (Osborne Village)", time: "12 min", category: "shopping", distance: "walking" },
                { name: "Pharmacy", time: "5 min", category: "shopping", distance: "walking" },
                { name: "Banks & ATMs", time: "4 min", category: "shopping", distance: "walking" },
                { name: "Fitness Centers", time: "6 min", category: "community", distance: "walking" },
                { name: "Public Transit Stops", time: "2 min", category: "transportation", distance: "walking" },
                { name: "Osborne Village", time: "12 min", category: "shopping", distance: "walking" },
                
                // Short Drive
                { name: "Assiniboine Park & The Leaf & Zoo", time: "7 min", category: "parks", distance: "driving" },
                { name: "University of Winnipeg", time: "7 min", category: "education", distance: "driving" },
                { name: "Manitoba Legislative Building", time: "8 min", category: "culture", distance: "driving" },
                { name: "Winnipeg Art Gallery – Qaumajuq", time: "8 min", category: "culture", distance: "driving" },
                { name: "Polo Park Shopping Centre", time: "8 min", category: "shopping", distance: "driving" },
                { name: "The Forks Market", time: "9 min", category: "dining", distance: "driving" },
                { name: "Canadian Museum for Human Rights", time: "9 min", category: "culture", distance: "driving" },
                { name: "Canada Life Centre (Arena)", time: "10 min", category: "entertainment", distance: "driving" },
                { name: "Royal Manitoba Theatre Centre", time: "10 min", category: "entertainment", distance: "driving" },
                { name: "Winnipeg Union Station (VIA Rail)", time: "10 min", category: "transportation", distance: "driving" },
                { name: "Royal Aviation Museum", time: "11 min", category: "culture", distance: "driving" },
                { name: "Portage & Main (Downtown Core)", time: "11 min", category: "shopping", distance: "driving" },
                { name: "Airport (YWG)", time: "12 min", category: "transportation", distance: "driving" },
                { name: "IG Field / Blue Bombers Stadium", time: "17 min", category: "entertainment", distance: "driving" }
            ];

            const filters = [
                { id: 'all', label: 'All Locations' },
                { id: 'walking', label: 'Walking Distance' },
                { id: 'driving', label: 'Short Drive' },
                { id: 'parks', label: 'Parks & Nature' },
                { id: 'dining', label: 'Dining & Cafes' },
                { id: 'shopping', label: 'Shopping' },
                { id: 'culture', label: 'Culture & Museums' },
                { id: 'entertainment', label: 'Entertainment & Sports' },
                { id: 'transportation', label: 'Transportation' },
                { id: 'education', label: 'Education' }
            ];

            const getFilteredLocations = () => {
                if (activeFilter === 'all') return allLocations;
                if (activeFilter === 'walking') return allLocations.filter(loc => loc.distance === 'walking');
                if (activeFilter === 'driving') return allLocations.filter(loc => loc.distance === 'driving');
                return allLocations.filter(loc => loc.category === activeFilter);
            };

            return (
                <section id="nearby" className="nearby" aria-labelledby="nearby-heading">
                    <div className="container">
                        <h2 id="nearby-heading" className="section-title">Explore Winnipeg's Corydon Neighborhood - Vacation Rental Location</h2>
                        <p className="section-subtitle">Discover the best of Winnipeg - everything you need is just steps away</p>
                        
                        {/* Map Section */}
                        <div className="map-container map-container-spacing">
                            <div id="location-map" role="img" aria-label="Interactive map showing property location"></div>
                        </div>
                        
                        <div className="nearby-tabs">
                            {filters.map((filter) => (
                                <button 
                                    key={filter.id}
                                    className={`nearby-tab ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setActiveFilter(filter.id);
                                        }
                                    }}
                                    aria-label={`Filter by ${filter.label}`}
                                    aria-pressed={activeFilter === filter.id}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>

                        <div className="nearby-content">
                            <div className="nearby-list">
                                {getFilteredLocations().map((item, index) => (
                                    <div key={index} className="nearby-item fade-in-up">
                                            <span className="nearby-item-name">{item.name}</span>
                                        <span className="nearby-item-time">
                                            {item.time} {item.distance === 'walking' ? 'walk' : 'drive'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            );
        }

        // Utility function to shuffle array
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Preload images function (optimized with requestIdleCallback)
        // WebP variants live beside each JPG as <name>-800w.webp and <name>-1200w.webp
        const webpSrc = (jpg, w) => jpg.replace(/\.jpg$/, `-${w}w.webp`);
        const webpSrcSet = (jpg) => `${webpSrc(jpg, 800)} 800w, ${webpSrc(jpg, 1200)} 1200w`;
        // Must match the imagesizes on the <link rel="preload"> in index.html so the browser reuses that fetch
        const HERO_SIZES = '(max-width: 768px) 100vw, 648px';

        // Hero Slideshow Component (simplified for hero section)
        function HeroSlideshow() {
            const baseImages = [
                'images/2025-10-09-5-Ruskin-Row-00001.jpg',
                'images/2025-10-09-5-Ruskin-Row-00002.jpg',
                'images/2025-10-09-5-Ruskin-Row-00003.jpg',
                'images/2025-10-09-5-Ruskin-Row-00004.jpg',
                'images/2025-10-09-5-Ruskin-Row-00005.jpg',
                'images/2025-10-09-5-Ruskin-Row-00006.jpg',
                'images/2025-10-09-5-Ruskin-Row-00007.jpg',
                'images/2025-10-09-5-Ruskin-Row-00008.jpg',
                'images/2025-10-09-5-Ruskin-Row-00009.jpg',
                'images/2025-10-09-5-Ruskin-Row-00010.jpg',
                'images/2025-10-09-5-Ruskin-Row-00011.jpg',
                'images/2025-10-09-5-Ruskin-Row-00012.jpg',
                'images/2025-10-09-5-Ruskin-Row-00013.jpg',
                'images/2025-10-09-5-Ruskin-Row-00014.jpg',
                'images/2025-10-09-5-Ruskin-Row-00015.jpg',
                'images/2025-10-09-5-Ruskin-Row-00016.jpg',
                'images/2025-10-09-5-Ruskin-Row-00017.jpg',
                'images/2025-10-09-5-Ruskin-Row-00018.jpg',
                'images/2025-10-09-5-Ruskin-Row-00019.jpg',
                'images/2025-10-09-5-Ruskin-Row-00020.jpg',
                'images/2025-10-09-5-Ruskin-Row-00021.jpg',
                'images/2025-10-09-5-Ruskin-Row-00022.jpg',
                'images/2025-10-09-5-Ruskin-Row-00027.jpg',
                'images/2025-10-09-5-Ruskin-Row-00028.jpg',
                'images/2025-10-09-5-Ruskin-Row-00030.jpg'
            ];
            
            // Shuffle images on component mount
            // Keep the first (preloaded, og:image) photo in front so the preload in <head> serves the LCP; shuffle the rest
            const [images] = useState(() => {
                const shuffled = shuffleArray(baseImages.slice(1));
                return [baseImages[0], ...shuffled];
            });

            // Generate SEO-friendly alt text for images
            const getImageAltText = (index, total) => {
                const altTexts = [
                    "Mid-century modern living room in our Crescentwood Airbnb",
                    "Stylish kitchen with vintage touches at Winnipeg vacation rental",
                    "Cozy bedroom with retro design in Corydon neighborhood Airbnb",
                    "Modern bathroom in 3-bedroom Winnipeg Airbnb rental",
                    "Dining area with mid-century furniture in our Crescentwood Airbnb",
                    "Comfortable bedroom space in Winnipeg Airbnb accommodation",
                    "Living space with unique vintage decor in Corydon Airbnb",
                    "Fully equipped kitchen in Winnipeg vacation rental",
                    "Relaxing bedroom in mid-century modern Winnipeg Airbnb",
                    "Spacious living area in our Crescentwood Airbnb",
                    "Stylish interior design of Winnipeg Airbnb rental property",
                    "Cozy corner with vintage furniture in Corydon neighborhood",
                    "Modern amenities in Winnipeg vacation rental home",
                    "Beautiful interior of 3-bedroom Winnipeg Airbnb",
                    "Unique mid-century design elements in Corydon Airbnb",
                    "Comfortable guest room in Winnipeg rental property",
                    "Well-appointed space in our Crescentwood Airbnb",
                    "Charming details of mid-century modern Winnipeg rental",
                    "Inviting living space in Corydon neighborhood vacation rental",
                    "Stylish accommodation in Winnipeg Airbnb property",
                    "Elegant interior design of our Crescentwood home",
                    "Comfortable and stylish Winnipeg vacation rental",
                    "Mid-century modern charm in Corydon Airbnb Winnipeg",
                    "Beautifully decorated space in Winnipeg rental property"
                ];
                return altTexts[index % altTexts.length] || `Interior view of Stay Winnipeg mid-century modern Airbnb in Winnipeg's Corydon neighborhood - photo ${index + 1} of ${total}`;
            };

            const [currentIndex, setCurrentIndex] = useState(0);
            const [isTransitioning, setIsTransitioning] = useState(false);
            const [imagesLoaded, setImagesLoaded] = useState(false);
            const [loadedCount, setLoadedCount] = useState(0);
            const transitionTimeoutRef = useRef(null);
            const HERO_TRANSITION_MS = 300;

            const restartTransitionTimer = () => {
                setIsTransitioning(true);
                if (transitionTimeoutRef.current) {
                    clearTimeout(transitionTimeoutRef.current);
                }
                transitionTimeoutRef.current = setTimeout(() => {
                    setIsTransitioning(false);
                    transitionTimeoutRef.current = null;
                }, HERO_TRANSITION_MS);
            };

            // Load images on demand - only load first image + next/previous for smooth transitions
            useEffect(() => {
                setImagesLoaded(false);
                
                // Load first image immediately
                const loadImage = (src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.onload = () => resolve();
                        img.onerror = () => resolve(); // Resolve even on error
                        img.sizes = HERO_SIZES;
                        img.srcset = webpSrcSet(src);
                        img.src = webpSrc(src, 1200);
                    });
                };
                
                // Load first image and adjacent images for smooth transitions
                const imagesToLoad = [
                    images[0], // Current
                    images[1] || images[0], // Next
                    images[images.length - 1] || images[0] // Previous
                ];
                
                Promise.all(imagesToLoad.map(loadImage)).then(() => {
                    setImagesLoaded(true);
                });
                
                // Remaining images load on demand (see the adjacent-image preload effect below).
            }, [images]);

            // Preload adjacent images when index changes
            useEffect(() => {
                if (!imagesLoaded) return;
                const preloadImage = (src) => {
                    const img = new Image();
                    img.sizes = HERO_SIZES;
                    img.srcset = webpSrcSet(src);
                    img.src = webpSrc(src, 1200);
                };
                // Preload next and previous images
                const nextIndex = (currentIndex + 1) % images.length;
                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                preloadImage(images[nextIndex]);
                preloadImage(images[prevIndex]);
            }, [currentIndex, imagesLoaded, images]);

            const goToNext = () => {
                const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
                restartTransitionTimer();
            };

            // Auto-transition effect (paused on hover/focus for accessibility)
            useEffect(() => {
                if (!imagesLoaded) return;
                
                let interval;
                const slideshowWrapper = document.querySelector('.hero-slideshow-wrapper');
                
                const startInterval = () => {
                    interval = setInterval(() => {
                        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
                        restartTransitionTimer();
                    }, 5000);
                };

                const stopInterval = () => {
                    if (interval) {
                        clearInterval(interval);
                    }
                };

                startInterval();

                // Pause on hover/focus for better UX and accessibility
                if (slideshowWrapper) {
                    slideshowWrapper.addEventListener('mouseenter', stopInterval);
                    slideshowWrapper.addEventListener('mouseleave', startInterval);
                    slideshowWrapper.addEventListener('focusin', stopInterval);
                    slideshowWrapper.addEventListener('focusout', startInterval);
                }

                return () => {
                    stopInterval();
                    if (slideshowWrapper) {
                        slideshowWrapper.removeEventListener('mouseenter', stopInterval);
                        slideshowWrapper.removeEventListener('mouseleave', startInterval);
                        slideshowWrapper.removeEventListener('focusin', stopInterval);
                        slideshowWrapper.removeEventListener('focusout', startInterval);
                    }
                };
            }, [images.length, imagesLoaded]);

            const goToPrevious = () => {
                const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                setCurrentIndex(newIndex);
                restartTransitionTimer();
            };
            
            // Load images when they become visible
            useEffect(() => {
                if (!imagesLoaded) return;
                const imgElements = document.querySelectorAll('.hero-slideshow-image[data-src]');
                imgElements.forEach((img) => {
                    const index = parseInt(img.getAttribute('data-index') || '0');
                    const shouldLoad = index === currentIndex || 
                                     index === (currentIndex + 1) % images.length ||
                                     index === (currentIndex - 1 + images.length) % images.length;
                    if (shouldLoad && img.dataset.src && !img.src) {
                        if (img.dataset.srcset) img.srcset = img.dataset.srcset;
                        img.src = img.dataset.src;
                    }
                });
            }, [currentIndex, imagesLoaded, images.length]);

            // Keyboard navigation
            useEffect(() => {
                const handleKeyPress = (e) => {
                    if (!imagesLoaded) return;
                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        goToPrevious();
                    } else if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        goToNext();
                    }
                };

                window.addEventListener('keydown', handleKeyPress);
                return () => window.removeEventListener('keydown', handleKeyPress);
            }, [imagesLoaded, images.length, currentIndex]);

            useEffect(() => {
                return () => {
                    if (transitionTimeoutRef.current) {
                        clearTimeout(transitionTimeoutRef.current);
                    }
                };
            }, []);

            return (
                <div className="hero-slideshow" tabIndex={-1}>
                    <div 
                        className="hero-slideshow-wrapper" 
                        tabIndex={0} 
                        role="region" 
                        aria-label="Property photo slideshow" 
                        aria-live="polite"
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowLeft') {
                                e.preventDefault();
                                goToPrevious();
                            } else if (e.key === 'ArrowRight') {
                                e.preventDefault();
                                goToNext();
                            }
                        }}
                    >
                        <div className="hero-slideshow-image-container">
                            {!imagesLoaded && (
                                <div className="hero-slideshow-skeleton">
                                    <div className="skeleton-shimmer"></div>
                                </div>
                            )}
                            {imagesLoaded && images.map((src, index) => {
                                // Load first 3 images (current, next, prev) for smooth transitions
                                const shouldLoadInitially = index < 3;
                                return (
                                    <img
                                        key={index}
                                        src={shouldLoadInitially ? webpSrc(src, 1200) : undefined}
                                        srcSet={shouldLoadInitially ? webpSrcSet(src) : undefined}
                                        sizes={HERO_SIZES}
                                        data-src={!shouldLoadInitially ? webpSrc(src, 1200) : undefined}
                                        data-srcset={!shouldLoadInitially ? webpSrcSet(src) : undefined}
                                        data-index={index}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        fetchPriority={index === 0 ? 'high' : 'auto'}
                                        alt={getImageAltText(index, images.length)}
                                        width="1200"
                                        height="800"
                                        className={`hero-slideshow-image loaded ${index === currentIndex ? 'active' : 'inactive'} aspect-ratio-3-2`}
                                    />
                                );
                            })}
                        </div>
                        {imagesLoaded && (
                            <>
                        <button
                            className="hero-slideshow-prev"
                            onClick={goToPrevious}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    goToPrevious();
                                }
                            }}
                            aria-label="Previous image"
                            tabIndex={imagesLoaded ? 0 : -1}
                        >
                            ‹
                        </button>
                        <button
                            className="hero-slideshow-next"
                            onClick={goToNext}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    goToNext();
                                }
                            }}
                            aria-label="Next image"
                            tabIndex={imagesLoaded ? 0 : -1}
                        >
                            ›
                        </button>
                            </>
                        )}
                    </div>
                </div>
            );
        }

        function App() {
            // Navigation, Footer, and FloatingBookButton are now handled by shared components

            // Drop the page-loader overlay at the first commit; waiting for an idle callback held
            // the LCP back by seconds on throttled devices
            useEffect(() => {
                hideLoader();
            }, []);



            // Handle anchor links after React renders
            useEffect(() => {
                const handleAnchorScroll = (hash) => {
                    if (!hash) return;
                    
                    // Remove the # symbol
                    const id = hash.substring(1);
                    if (!id) return;
                    
                    // Wait for element to exist in DOM (React might still be rendering)
                    const scrollToElement = (attempts = 0) => {
                        const element = document.getElementById(id);
                        if (element) {
                            // Small delay to ensure React has finished rendering
                            setTimeout(() => {
                                element.scrollIntoView({ 
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }, 100);
                        } else if (attempts < 10) {
                            // Retry up to 10 times (1 second total wait)
                            setTimeout(() => scrollToElement(attempts + 1), 100);
                        }
                    };
                    
                    scrollToElement();
                };

                // Handle hash in URL on initial load
                if (window.location.hash) {
                    handleAnchorScroll(window.location.hash);
                }

                // Handle hash changes (when clicking anchor links)
                const handleHashChange = () => {
                    if (window.location.hash) {
                        handleAnchorScroll(window.location.hash);
                    }
                };
                window.addEventListener('hashchange', handleHashChange);

                // Handle clicks on anchor links within the same page
                const handleAnchorClick = (e) => {
                    const link = e.target.closest('a[href]');
                    if (!link) return;
                    
                    const href = link.getAttribute('href');
                    if (!href) return;
                    
                    // Check if it's a same-page anchor link
                    // Must have a hash and be either:
                    // 1. Relative anchor (#section)
                    // 2. Full URL to same origin with hash
                    // 3. Relative URL starting with / and containing hash
                    const hasHash = href.includes('#');
                    const isSamePageAnchor = hasHash && (
                        href.startsWith('#') || 
                        href.startsWith(window.location.origin + '/#') ||
                        href.startsWith(window.location.origin + '#') ||
                        (href.startsWith('/') && href.includes('#'))
                    );
                    
                    if (isSamePageAnchor) {
                        // Extract hash from URL
                        let hash = '';
                        if (href.startsWith('#')) {
                            hash = href;
                        } else {
                            const url = new URL(href, window.location.origin);
                            hash = url.hash;
                        }
                        
                        // Only handle if there's a valid hash
                        if (hash && hash !== '#') {
                            e.preventDefault();
                            window.location.hash = hash;
                            handleAnchorScroll(hash);
                            // Navigation component handles closing mobile menu via its own onClick handlers
                        }
                    }
                };

                document.addEventListener('click', handleAnchorClick);

                return () => {
                    window.removeEventListener('hashchange', handleHashChange);
                    document.removeEventListener('click', handleAnchorClick);
                };
            }, []); // No dependencies needed

            const features = [
                {
                    title: "Vibrant Corydon",
                    description: "Nestled in the heart of Winnipeg's most charming neighborhood, where local cafes, vintage shops, and cozy restaurants are just a stroll away."
                },
                {
                    title: "Mid-Century Magic",
                    description: "Every corner tells a story with carefully curated vintage finds, retro furniture, and playful design touches that spark joy and conversation."
                },
                {
                    title: "Cozy Comfort",
                    description: "Three beautifully appointed bedrooms with plush linens, two full baths, and space for up to 6 guests to relax and recharge."
                },
                {
                    title: "Guest favourite",
                    description: "Rated 4.88 out of 5, is a Superhost, and is a Guest favourite. Category ratings: Cleanliness 4.9, Accuracy 4.9, Check-in 5.0, Communication 5.0, Location 5.0, and Value 4.9."
                },
                {
                    title: "Top 10% of eligible listings",
                    description: "This home is in the top 10% of eligible listings based on ratings, reviews, and reliability."
                },
                {
                    title: "Fully Equipped Kitchen",
                    description: "Cook up a storm in a kitchen stocked with everything you need, from coffee makers to all the essentials for preparing meals at home."
                },
                {
                    title: "Perfect Location",
                    description: "Just steps from Peanut Park and walking distance to the best of Corydon Avenue, restaurants, shops, and local attractions await."
                },
                {
                    title: "Remote-Work Ready",
                    description: "High-speed WiFi and a dedicated workspace with an ergonomic chair, laptop stand, and monitor make it easy to stay productive between adventures."
                },
                {
                    title: "Easy Arrival & Parking",
                    description: "Enjoy self check-in and convenient driveway parking, so getting in and settled is simple no matter what time you arrive."
                }
            ];

            const formatReviewDate = (dateISO) => {
                if (!dateISO) return "Unknown date";
                const dateObj = new Date(`${dateISO}T12:00:00`);
                if (Number.isNaN(dateObj.getTime())) return dateISO;
                return dateObj.toLocaleDateString('en-CA', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
            };

            const getListingJsonLdData = () => {
                try {
                    const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
                    let listingData = null;

                    for (const scriptEl of jsonLdScripts) {
                        const raw = scriptEl.textContent;
                        if (!raw) continue;
                        const parsed = JSON.parse(raw);
                        if (
                            parsed &&
                            parsed.aggregateRating &&
                            Array.isArray(parsed.review)
                        ) {
                            listingData = parsed;
                            break;
                        }
                    }

                    if (!listingData) {
                        return { reviews: [], ratingValue: '4.88', reviewCount: '0' };
                    }

                    const mappedReviews = listingData.review.map((review, index) => {
                        const name = review?.author?.name || 'Guest';
                        const trimmedName = String(name).trim();
                        const avatar = trimmedName ? trimmedName.charAt(0).toUpperCase() : 'G';
                        const dateISO = review?.datePublished || '';
                        return {
                            id: index + 1,
                            name: trimmedName || 'Guest',
                            date: formatReviewDate(dateISO),
                            dateISO: dateISO,
                            rating: Number(review?.reviewRating?.ratingValue || 0),
                            text: review?.reviewBody || '',
                            avatar
                        };
                    });

                    return {
                        reviews: mappedReviews,
                        ratingValue: String(listingData.aggregateRating?.ratingValue || '4.88'),
                        reviewCount: String(listingData.aggregateRating?.reviewCount || mappedReviews.length)
                    };
                } catch (error) {
                    console.error('Unable to parse JSON-LD reviews:', error);
                    return { reviews: [], ratingValue: '4.88', reviewCount: '0' };
                }
            };

            const listingJsonLdData = getListingJsonLdData();
            const reviews = listingJsonLdData.reviews;
            const listingRatingValue = listingJsonLdData.ratingValue || '4.88';
            const listingReviewCount = listingJsonLdData.reviewCount || String(reviews.length);

            const REVIEW_SLIDER_LIMIT = 30;
            const sortedReviews = [...reviews].sort((a, b) => {
                const aIsFiveStar = a.rating >= 5;
                const bIsFiveStar = b.rating >= 5;
                if (aIsFiveStar !== bIsFiveStar) {
                    return aIsFiveStar ? -1 : 1;
                }
                return new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime();
            }).slice(0, REVIEW_SLIDER_LIMIT); // keep the DOM small; every review still ships in the JSON-LD

            const getCardsPerView = () => {
                if (window.innerWidth <= 768) return 1;
                if (window.innerWidth <= 1024) return 2;
                return 3;
            };
            const [reviewsPerView, setReviewsPerView] = useState(getCardsPerView);
            const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
            const reviewsSliderRef = useRef(null);
            const maxReviewIndex = Math.max(0, sortedReviews.length - reviewsPerView);

            useEffect(() => {
                const handleResize = () => {
                    setReviewsPerView(getCardsPerView());
                };
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }, []);

            useEffect(() => {
                if (currentReviewIndex > maxReviewIndex) {
                    setCurrentReviewIndex(maxReviewIndex);
                }
            }, [currentReviewIndex, maxReviewIndex]);

            const scrollReviewsTo = (nextIndex) => {
                const sliderEl = reviewsSliderRef.current;
                if (!sliderEl) return;
                const targetCard = sliderEl.children[nextIndex];
                if (!targetCard) return;
                sliderEl.scrollTo({
                    left: targetCard.offsetLeft,
                    behavior: 'smooth'
                });
                setCurrentReviewIndex(nextIndex);
            };

            const scrollReviewsPrevious = () => {
                const nextIndex = Math.max(0, currentReviewIndex - 1);
                scrollReviewsTo(nextIndex);
            };

            const scrollReviewsNext = () => {
                const nextIndex = Math.min(maxReviewIndex, currentReviewIndex + 1);
                scrollReviewsTo(nextIndex);
            };

            const amenityCategories = [
                {
                    title: "Essentials",
                    items: [
                        "WiFi",
                        "Dedicated workspace (Ergonomic chair, Laptop stand, Monitor)",
                        "Central air conditioning",
                        "Central heating",
                        "Hot water",
                        "Ceiling fan",
                        "Essentials (Towels, bed sheets, soap, toilet paper)"
                    ]
                },
                {
                    title: "Kitchen",
                    items: [
                        "Full kitchen",
                        "Refrigerator",
                        "Freezer",
                        "Dishwasher",
                        "Electric stove",
                        "Oven",
                        "Microwave",
                        "Drip coffee maker",
                        "Hot water kettle",
                        "Rice cooker",
                        "Toaster",
                        "Cooking basics (Pots, pans, oil, salt, pepper)",
                        "Dishes and silverware",
                        "Dining table",
                        "Wine glasses",
                        "Cleaning products"
                    ]
                },
                {
                    title: "Bedroom & Bathroom",
                    items: [
                        "Cotton bed linens",
                        "Extra pillows and blankets",
                        "Clothing storage (Closet)",
                        "Hangers",
                        "Room-darkening shades",
                        "Bathtub",
                        "Spa-like shower with massage jets",
                        "Bidet",
                        "Hair dryer",
                        "Shampoo",
                        "Conditioner",
                        "Body soap",
                        "Shower gel",
                        "Iron"
                    ]
                },
                {
                    title: "Entertainment",
                    items: ["HDTV", "Smart TV in every bedroom", "Bose Bluetooth sound system"]
                },
                {
                    title: "Property Features",
                    items: [
                        "Single level home",
                        "Private entrance",
                        "Private living room",
                        "Patio or balcony"
                    ]
                },
                {
                    title: "Parking",
                    items: ["Free parking on premises", "Free street parking"]
                },
                {
                    title: "Safety",
                    items: [
                        "Smoke alarm",
                        "Carbon monoxide alarm",
                        "Fire extinguisher",
                        "First aid kit"
                    ]
                },
                {
                    title: "Services",
                    items: [
                        "Self check-in",
                        "29 days max",
                        "Cleaning available during stay (Extra cost, 10am-3pm)"
                    ]
                }
            ];

            return (
                <>
                    <NavigationComponent />

                    <main id="main-content">
                    <section id="home" className="hero" aria-label="Hero section">
                        <div className="container">
                            <div className="hero-content">
                                <div className="hero-layout">
                                <div className="hero-text fade-in-up">
                                    <h1>
                                        Stay Winnipeg
                                        <span className="hero-subtitle">Boutique Accommodation, Tours, and Experiences</span>
                                    </h1>
                                    <a
                                        className="airbnb-summary-card"
                                        href="/reviews-now.html?source=guest-favorite-summary"
                                        aria-label="Open Airbnb reviews for this listing"
                                    >
                                        <div className="airbnb-summary-cell airbnb-summary-guest-favorite">
                                            <img
                                                className="airbnb-summary-laurel"
                                                src="/images/ic-system-gf-gold-left-laurel-32-3x.d074c7557225d2a0f3f1289a3dde7a7d.png"
                                                alt=""
                                                aria-hidden="true"
                                                loading="lazy"
                                            />
                                            <span className="airbnb-summary-title">Guest favourite</span>
                                            <img
                                                className="airbnb-summary-laurel"
                                                src="/images/ic-system-gf-gold-right-laurel-32-3x.f972b95c999d29e144d9ef970585906d.png"
                                                alt=""
                                                aria-hidden="true"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="airbnb-summary-cell airbnb-summary-description">
                                            One of the most loved homes on Airbnb, according to guests
                                        </div>
                                        <div className="airbnb-summary-cell airbnb-summary-rating">
                                            <span className="airbnb-summary-metric">{listingRatingValue}</span>
                                            <span className="airbnb-summary-label">Average rating</span>
                                        </div>
                                        <div className="airbnb-summary-cell airbnb-summary-count">
                                            <span className="airbnb-summary-metric">{listingReviewCount}</span>
                                            <span className="airbnb-summary-label">Reviews</span>
                                        </div>
                                    </a>
                                    <section id="reviews" className="reviews" aria-label="Guest reviews">
                                        <div className="reviews-slider-wrap">
                                            <button
                                                type="button"
                                                className="reviews-slider-control reviews-slider-control-prev"
                                                onClick={scrollReviewsPrevious}
                                                aria-label="Show previous reviews"
                                                disabled={currentReviewIndex === 0}
                                            >
                                                ‹
                                            </button>
                                            <div className="reviews-slider" ref={reviewsSliderRef} role="region" aria-label="Guest reviews slider">
                                            {sortedReviews.map((review) => (
                                                <a
                                                    key={review.id}
                                                    className="review-card review-slide review-card-link fade-in-up"
                                                    href={`/reviews-now.html?source=review-card-${review.id}`}
                                                    aria-label={`Read Airbnb reviews after viewing review from ${review.name}`}
                                                >
                                                    <div className="review-header">
                                                        <div className="review-avatar">{review.avatar}</div>
                                                        <div className="review-info">
                                                            <div className="review-name">{review.name}</div>
                                                            <div className="review-date">{review.date}</div>
                                                        </div>
                                                    </div>
                                                    <div className="review-rating">
                                                        {review.rating}.0 out of 5
                                                    </div>
                                                    <figure className="review-quote">
                                                        <blockquote className="review-text">
                                                            <p>{review.text}</p>
                                                        </blockquote>
                                                        <figcaption className="review-attribution">- {review.name}, {review.date}</figcaption>
                                                    </figure>
                                                </a>
                                            ))}
                                            </div>
                                            <button
                                                type="button"
                                                className="reviews-slider-control reviews-slider-control-next"
                                                onClick={scrollReviewsNext}
                                                aria-label="Show more reviews"
                                                disabled={currentReviewIndex >= maxReviewIndex}
                                            >
                                                ›
                                            </button>
                                        </div>
                                    </section>
                                </div>
                                <div className="hero-lower-layout">
                                <div className="hero-copy fade-in-up">
                                    <h2>Mid-Century Modern Winnipeg Airbnb</h2>
                                    <p>
                                        Discover Winnipeg's premier vacation rental! Step into a quirky mid-century modern haven in the heart of Winnipeg's vibrant 
                                        Corydon neighborhood. This thoughtfully curated 3-bedroom home blends retro charm 
                                        with modern comfort, featuring unique vintage touches and a cozy atmosphere that 
                                        makes you feel right at home. Perfectly located to explore all that Winnipeg has to offer - from world-class museums and galleries to Winnipeg's best restaurants, cafes, and cultural attractions. Just steps from local cafes, boutiques, and the 
                                        best that Winnipeg has to offer.
                                    </p>
                                    <div className="hero-superhost-badge hero-superhost-badge-centered">
                                        <img
                                            className="hero-superhost-logo"
                                            src="/images/superhost.webp"
                                            alt="Airbnb Superhost"
                                            width={240}
                                            height={100}
                                            loading="eager"
                                            decoding="async"
                                        />
                                    </div>
                                </div>
                                <div className="hero-media fade-in-up">
                                    <HeroSlideshow />
                                </div>
                                <div className="hero-cta-row fade-in-up">
                                    <div className="hero-actions">
                                        <a className="primary-cta primary-cta-large" href="/book-now.html?source=hero-cta" aria-label="Book on Airbnb">
                                            Book on Airbnb
                                        </a>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="features" className="features" aria-labelledby="features-heading">
                        <div className="container">
                            <h2 id="features-heading" className="section-title">What Makes This Winnipeg Airbnb Special</h2>
                            <p className="section-subtitle">A Winnipeg vacation rental that's equal parts cozy, quirky, and comfortable</p>
                            <div className="features-grid">
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-card fade-in-up">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="amenities" className="amenities" aria-labelledby="amenities-heading">
                        <div className="container">
                            <h2 id="amenities-heading" className="section-title">Winnipeg Airbnb Amenities & Features</h2>
                            <div className="amenities-grid">
                                {amenityCategories.map((category) => (
                                    <div key={category.title} className="amenity-category fade-in-up">
                                        <h3 className="amenity-category-title">{category.title}</h3>
                                        <ul className="amenity-list">
                                            {category.items.map((item) => (<li key={item} className="amenity-item">{item}</li>))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Nearby />

                    <section id="tours-experiences" className="features" aria-labelledby="tours-experiences-heading">
                        <div className="container">
                            <h2 id="tours-experiences-heading" className="section-title">Discounted Tours and Experiences</h2>
                            <p className="section-subtitle">Discover amazing Winnipeg tours and experiences at exclusive discounted prices</p>
                            <div className="margin-top-3">
                                <p>Make the most of your Winnipeg stay with our curated selection of discounted tours and experiences! Whether you're looking for guided city tours, cultural experiences, outdoor adventures, or unique activities, we've partnered with trusted providers to bring you exclusive deals on the best Winnipeg has to offer.</p>
                                <p>From exploring The Forks and the Exchange District to discovering local food tours and cultural attractions, there's something for everyone. Book your perfect Winnipeg experience and create unforgettable memories during your stay.</p>
                            </div>
                            <div className="margin-top-3 text-center">
                                <a 
                                    href="/tours-experiences.html" 
                                    className="primary-cta primary-cta-large"
                                    aria-label="Browse Tours & Experiences"
                                >
                                    Browse Tours & Experiences
                                </a>
                            </div>
                        </div>
                    </section>

                    <section id="book" className="features features-book-section">
                        <div className="container">
                            <h2 className="section-title">Book Your Winnipeg Vacation Rental</h2>
                            <p className="section-subtitle">Book your cozy mid-century escape in Winnipeg</p>
                            <div className="margin-top-3 text-center">
                                <a 
                                    href="/book-now.html?source=book-section-cta" 
                                    className="primary-cta primary-cta-large"
                                    aria-label="Book on Airbnb"
                                >
                                    Book on Airbnb
                                </a>
                            </div>
                        </div>
                    </section>
                    </main>

                    <FooterComponent />
                    
                    {/* Social Share Section (index.html specific) */}
                    <footer className="social-share-footer">
                        <div className="footer-content">
                            <div className="social-share" aria-label="Share on social media">
                        <a 
                            href="https://www.facebook.com/sharer/sharer.php?u=https://staywinnipeg.ca/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Share on Facebook"
                            title="Share on Facebook"
                        >
                            f
                        </a>
                        <a 
                            href="https://twitter.com/intent/tweet?url=https://staywinnipeg.ca/&text=Corydon%20Cute%20%26%20Stylish%20-%20Mid-Century%20Modern%20Winnipeg%20Airbnb" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Share on Twitter"
                            title="Share on Twitter"
                        >
                            t
                        </a>
                        <a 
                            href="https://www.linkedin.com/sharing/share-offsite/?url=https://staywinnipeg.ca/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Share on LinkedIn"
                            title="Share on LinkedIn"
                        >
                            in
                        </a>
                        <a 
                            href="https://pinterest.com/pin/create/button/?url=https://staywinnipeg.ca/&media=https://staywinnipeg.ca/images/2025-10-09-5-Ruskin-Row-00001.jpg&description=Corydon%20Cute%20%26%20Stylish%20-%20Mid-Century%20Modern%20Winnipeg%20Airbnb" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Share on Pinterest"
                            title="Share on Pinterest"
                        >
                            p
                        </a>
                        <a 
                            href="mailto:?subject=Check%20out%20this%20Winnipeg%20Airbnb&body=I%20found%20this%20great%20vacation%20rental%20in%20Winnipeg:%20https://staywinnipeg.ca/" 
                            aria-label="Share via Email"
                            title="Share via Email"
                        >
                            ✉
                        </a>
                        </div>
                        </div>
                    </footer>

                    <FloatingBookButtonComponent />
                </>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
        
        // Hide loader once React has rendered
        function hideLoader() {
            const loader = document.getElementById('page-loader');
            const skipLink = document.querySelector('.skip-link');
            if (loader && loader.style.display !== 'none') {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.2s ease-out';
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Show skip link after loader is hidden
                    if (skipLink) {
                        skipLink.classList.add('visible');
                    }
                }, 200);
            }
        }
        
        // Try to hide loader after React renders
        // Use requestIdleCallback for non-critical operations to reduce blocking
        const hideLoaderWhenIdle = () => {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                    requestAnimationFrame(() => {
                        hideLoader();
                    });
                }, { timeout: 1000 });
            } else {
                // Fallback for browsers without requestIdleCallback
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setTimeout(hideLoader, 200);
                    });
                });
            }
        };
        
        // Wait for React to be ready before hiding loader
        if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
            hideLoaderWhenIdle();
        } else {
            // Wait for React to load
            const checkReact = setInterval(() => {
                if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
                    clearInterval(checkReact);
                    hideLoaderWhenIdle();
                }
            }, 50);
            
            // Timeout after 5 seconds
            setTimeout(() => {
                clearInterval(checkReact);
                hideLoader();
            }, 5000);
        }
        
        // Fallback: hide after page load (non-blocking)
        window.addEventListener('load', () => {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(hideLoader, { timeout: 500 });
            } else {
                setTimeout(hideLoader, 300);
            }
        });
