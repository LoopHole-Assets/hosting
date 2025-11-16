document.addEventListener('DOMContentLoaded', function () {
    // ========== Theme Toggle Functionality ==========
    const themeToggleButton = document.querySelector('.theme-toggle-btn');
    const bodyElement = document.body;

    // Function to apply theme
    function applyTheme(theme) {
        bodyElement.className = theme + '-mode';
        localStorage.setItem('site-theme', theme);
    }

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('site-theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            const currentTheme = localStorage.getItem('site-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    // ========== Mobile Navigation Toggle ==========
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('nav.mobile-nav');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }

    // ========== Set current year in footer ==========
    const yearSpan = document.querySelector('[data-year]');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ========== Contact Form Handler ==========
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Display success message
            formStatus.innerHTML = '<span style="color: var(--primary-blue);">✓ Thank you for your message! We will get back to you shortly.</span>';
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }
});
