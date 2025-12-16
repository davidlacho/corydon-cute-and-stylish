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
            if (window.innerWidth > 960 && mobileMenuOpen) {
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

    // Focus trap for mobile menu
    useEffect(() => {
        if (!mobileMenuOpen) return;

        const menu = document.getElementById('main-navigation');
        const menuItems = menu ? menu.querySelectorAll('a[role="menuitem"]') : [];
        const firstItem = menuItems[0];
        const lastItem = menuItems[menuItems.length - 1];
        const toggleButton = document.querySelector('.mobile-menu-toggle');

        const handleTabKey = (e) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstItem || document.activeElement === toggleButton) {
                    e.preventDefault();
                    if (document.activeElement === firstItem) {
                        toggleButton?.focus();
                    }
                }
            } else {
                // Tab
                if (document.activeElement === lastItem) {
                    e.preventDefault();
                    toggleButton?.focus();
                }
            }
        };

        // Focus first menu item when menu opens
        if (firstItem) {
            setTimeout(() => firstItem.focus(), 100);
        }

        document.addEventListener('keydown', handleTabKey);
        return () => {
            document.removeEventListener('keydown', handleTabKey);
            // Return focus to toggle button when menu closes
            if (toggleButton) {
                toggleButton.focus();
            }
        };
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
        if (currentPath === '/tours-experiences.html') {
            return path === '/tours-experiences.html';
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
                React.createElement('span', { className: 'logo-title' }, 'Stay Winnipeg'),
                React.createElement('span', { className: 'logo-subtitle' }, 'Boutique Accommodation, Tours, and Experiences')
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
                        href: 'https://staywinnipeg.ca/tours-experiences.html',
                        role: 'menuitem',
                        className: isActive('/tours-experiences.html') ? 'active' : '',
                        onClick: closeMenu
                    }, 'Discounted Tours and Experiences')
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
                        role: 'menuitem',
                        className: 'nav-cta',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        'aria-label': 'Book your stay on Airbnb - opens in new tab',
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
                React.createElement('a', { href: 'https://staywinnipeg.ca/tours-experiences.html' }, 'Discounted Tours and Experiences'),
                React.createElement('a', { href: 'https://staywinnipeg.ca/blog.html' }, 'Blog')
            ),
            React.createElement('p', null, '\u00A9 2025 Stay Winnipeg. All rights reserved.'),
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

