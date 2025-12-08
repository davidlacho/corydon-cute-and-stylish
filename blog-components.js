/**
 * Shared React components for blog pages
 * Load this script after React and ReactDOM are loaded
 */

// Navigation Component
// Optional props: scrolled (boolean) - adds 'scrolled' className to nav element
function Navigation(props) {
    const { useState, useEffect } = React;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const currentPath = window.location.pathname;
    const scrolledState = props?.scrolled !== undefined ? props.scrolled : scrolled;

    useEffect(() => {
        // Close menu on window resize if it's open and window is large
        const handleResize = () => {
            if (window.innerWidth > 768 && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileMenuOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [mobileMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileMenuOpen]);

    // Handle scroll state if not provided as prop (for index.html)
    useEffect(() => {
        if (props?.scrolled === undefined) {
            const handleScroll = () => {
                setScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [props?.scrolled]);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    const isActive = (path) => {
        if (currentPath === '/blog.html' || currentPath.startsWith('/blog-')) {
            return path === '/blog.html';
        }
        return path === currentPath || (currentPath === '/' && path === '/');
    };

    return React.createElement('nav', { 
        role: 'navigation', 
        'aria-label': 'Main navigation',
        className: scrolledState ? 'scrolled' : ''
    },
        React.createElement('div', { className: 'nav-container' },
            React.createElement('a', {
                href: 'https://staywinnipeg.ca/',
                className: 'logo',
                role: 'banner'
            },
                React.createElement('span', { className: 'logo-title' }, 'Corydon Cute & Stylish'),
                React.createElement('span', { className: 'logo-subtitle' }, 'Boutique Airbnb in Winnipeg')
            ),
            React.createElement('button', {
                className: 'mobile-menu-toggle',
                'aria-label': 'Toggle menu',
                'aria-expanded': mobileMenuOpen,
                'aria-controls': 'main-navigation',
                onClick: toggleMenu
            },
                React.createElement('span', { id: 'menu-icon' }, mobileMenuOpen ? '✕' : '☰')
            ),
            React.createElement('div', {
                className: `nav-overlay ${mobileMenuOpen ? 'active' : ''}`,
                'aria-hidden': 'true',
                onClick: closeMenu
            }),
            React.createElement('ul', {
                className: `nav-links ${mobileMenuOpen ? 'active' : ''}`,
                id: 'main-navigation',
                role: 'menubar'
            },
                React.createElement('li', { role: 'none' },
                    React.createElement('a', {
                        href: 'https://staywinnipeg.ca/',
                        role: 'menuitem',
                        className: isActive('/') ? 'active' : '',
                        onClick: closeMenu
                    }, 'Home')
                ),
                React.createElement('li', { role: 'none' },
                    React.createElement('a', {
                        href: 'https://staywinnipeg.ca/#features',
                        role: 'menuitem',
                        onClick: closeMenu
                    }, 'Features')
                ),
                React.createElement('li', { role: 'none' },
                    React.createElement('a', {
                        href: 'https://staywinnipeg.ca/#reviews',
                        role: 'menuitem',
                        onClick: closeMenu
                    }, 'Reviews')
                ),
                React.createElement('li', { role: 'none' },
                    React.createElement('a', {
                        href: 'https://staywinnipeg.ca/#amenities',
                        role: 'menuitem',
                        onClick: closeMenu
                    }, 'Amenities')
                ),
                React.createElement('li', { role: 'none' },
                    React.createElement('a', {
                        href: 'https://staywinnipeg.ca/#nearby',
                        role: 'menuitem',
                        onClick: closeMenu
                    }, 'Nearby')
                ),
                React.createElement('li', { role: 'none' },
                    React.createElement('a', {
                        href: 'https://staywinnipeg.ca/blog.html',
                        role: 'menuitem',
                        className: isActive('/blog.html') ? 'active' : '',
                        onClick: closeMenu
                    }, 'Blog')
                ),
                React.createElement('li', { role: 'none' },
                    React.createElement('a', {
                        href: 'https://www.airbnb.ca/rooms/716340250371431352',
                        className: 'nav-cta',
                        role: 'menuitem',
                        'aria-label': 'Book your stay on Airbnb',
                        onClick: closeMenu
                    }, 'Book Now')
                )
            )
        )
    );
}

// Footer Component
function Footer() {
    return React.createElement('footer', { role: 'contentinfo' },
        React.createElement('div', { className: 'footer-content' },
            React.createElement('div', { className: 'footer-links' },
                React.createElement('a', { href: 'https://staywinnipeg.ca/' }, 'Home'),
                React.createElement('a', { href: 'https://staywinnipeg.ca/#features' }, 'Features'),
                React.createElement('a', { href: 'https://staywinnipeg.ca/#reviews' }, 'Reviews'),
                React.createElement('a', { href: 'https://staywinnipeg.ca/#amenities' }, 'Amenities'),
                React.createElement('a', { href: 'https://staywinnipeg.ca/#nearby' }, 'Nearby'),
                React.createElement('a', { href: 'https://staywinnipeg.ca/blog.html' }, 'Blog'),
                React.createElement('a', { href: 'https://www.airbnb.ca/rooms/716340250371431352' }, 'Book Now')
            ),
            React.createElement('p', null, '\u00A9 2025 Corydon Cute & Stylish. All rights reserved.'),
            React.createElement('p', { className: 'footer-text' },
                React.createElement('a', { href: 'https://www.airbnb.ca/h/corydon-cute-and-stylish' },
                    'airbnb.ca/h/corydon-cute-and-stylish'
                )
            ),
            React.createElement('p', { className: 'footer-registration' },
                'Registration details: STRA-2025-2600298'
            ),
            React.createElement('p', { className: 'footer-acknowledgement' },
                'We acknowledge that we are on Treaty 1 territory, the traditional lands of the Anishinaabe, Cree, Oji-Cree, Dakota, and Dene peoples, and the homeland of the Métis Nation.'
            )
        )
    );
}

// Floating Book Button Component
function FloatingBookButton() {
    return React.createElement('a', {
        href: 'https://www.airbnb.ca/rooms/716340250371431352',
        className: 'floating-book-button',
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': 'Book your stay on Airbnb - opens in new tab'
    }, 'Book Now');
}

