/**
 * Load navigation and footer components for static HTML pages
 * This script dynamically loads nav.html and footer.html into pages
 */
(function() {
    'use strict';

    // Load navigation
    function loadNav() {
        const navPlaceholder = document.getElementById('nav-placeholder');
        if (!navPlaceholder) return;

        fetch('/nav.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load navigation');
                }
                return response.text();
            })
            .then(html => {
                navPlaceholder.innerHTML = html;
                initMobileMenu();
            })
            .catch(error => {
                console.error('Error loading navigation:', error);
            });
    }

    // Load footer
    function loadFooter() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (!footerPlaceholder) return;

        fetch('/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load footer');
                }
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }

    // Initialize mobile menu functionality
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navOverlay = document.querySelector('.nav-overlay');
        const menuIcon = document.getElementById('menu-icon');

        if (!mobileMenuToggle || !navLinks || !navOverlay) return;

        let mobileMenuOpen = false;

        function toggleMobileMenu() {
            mobileMenuOpen = !mobileMenuOpen;
            navLinks.classList.toggle('active', mobileMenuOpen);
            navOverlay.classList.toggle('active', mobileMenuOpen);
            mobileMenuToggle.setAttribute('aria-expanded', mobileMenuOpen);
            if (menuIcon) {
                menuIcon.textContent = mobileMenuOpen ? '✕' : '☰';
            }

            // Prevent body scroll when menu is open
            if (mobileMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        // Close menu when clicking overlay
        navOverlay.addEventListener('click', () => {
            if (mobileMenuOpen) {
                toggleMobileMenu();
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                toggleMobileMenu();
            }
        });

        // Close menu on window resize if it's open and window is large
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mobileMenuOpen) {
                toggleMobileMenu();
            }
        });

        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Update active nav link based on current page
    function updateActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPath = new URL(link.href).pathname;
            
            // Set active for blog.html or any blog post
            if (currentPath === '/blog.html' || currentPath.startsWith('/blog-')) {
                if (linkPath === '/blog.html') {
                    link.classList.add('active');
                }
            } else if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
                link.classList.add('active');
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            loadNav();
            loadFooter();
        });
    } else {
        loadNav();
        loadFooter();
    }

    // Update active link after nav loads
    setTimeout(updateActiveNavLink, 100);
})();

