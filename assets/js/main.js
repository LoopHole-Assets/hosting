document.addEventListener('DOMContentLoaded', function () {
    var themeToggle = document.getElementById('theme-toggle');
    var root = document.documentElement;
    var current = localStorage.getItem('site-theme') || 'light';
    if (current === 'light') {
        document.body.classList.add('light-mode');
    }

    function updateThemeIcon() {
        var icon = document.getElementById('theme-toggle-icon');
        if (!icon) return;
        if (document.body.classList.contains('light-mode')) {
            icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle>'; // sun-ish
        } else {
            icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'; // moon-ish
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            var mode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('site-theme', mode);
            updateThemeIcon();
        });
    }
    updateThemeIcon();
    var navToggle = document.querySelector('.nav-toggle');
    var siteNav = document.querySelector('.site-nav');
    if (navToggle && siteNav) {
        navToggle.addEventListener('click', function () {
            var expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            siteNav.classList.toggle('is-open');
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            var targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') {
                return;
            }
            var target = document.querySelector(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                if (siteNav) {
                    siteNav.classList.remove('is-open');
                }
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
    var yearSpan = document.querySelector('footer [data-year]');
    if (yearSpan) {
        yearSpan.textContent = String(new Date().getFullYear());
    }
    var counters = document.querySelectorAll('[data-target]');
    if (counters.length) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var element = entry.target;
                    var targetValue = parseInt(element.getAttribute('data-target') || '0', 10);
                    var durationFrames = 120;
                    var currentValue = 0;
                    var increment = Math.max(1, Math.ceil(targetValue / durationFrames));
                    var step = function () {
                        currentValue += increment;
                        if (currentValue > targetValue) {
                            currentValue = targetValue;
                        }
                        element.textContent = String(currentValue);
                        if (currentValue < targetValue) {
                            requestAnimationFrame(step);
                        }
                    };
                    requestAnimationFrame(step);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.4 });
        counters.forEach(function (counter) {
            counter.textContent = '0';
            observer.observe(counter);
        });
    }
    var serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length) {
        serviceCards.forEach(function (card) {
            card.addEventListener('click', function () {
                serviceCards.forEach(function (item) {
                    item.classList.remove('is-active');
                });
                card.classList.add('is-active');
            });
            card.addEventListener('mouseenter', function () {
                card.classList.add('is-hovered');
            });
            card.addEventListener('mouseleave', function () {
                card.classList.remove('is-hovered');
            });
        });
    }
    var messageField = document.querySelector('[data-limit]');
    var charCounter = document.querySelector('.char-count');
    if (messageField && charCounter) {
        var limit = parseInt(messageField.getAttribute('data-limit') || '0', 10);
        var updateCount = function () {
            var length = messageField.value.length;
            charCounter.textContent = length + '/' + limit;
            if (length > limit) {
                charCounter.classList.add('is-warning');
            } else {
                charCounter.classList.remove('is-warning');
            }
        };
        messageField.addEventListener('input', updateCount);
        updateCount();
    }
    var contactForm = document.querySelector('#contact-form');
    var formMessage = document.querySelector('.form-message');
    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = new FormData(contactForm);
            var hasBlank = Array.from(formData.values()).some(function (value) {
                return String(value).trim().length === 0;
            });
            if (hasBlank) {
                formMessage.textContent = 'Please fill in all fields before sending.';
                formMessage.classList.add('is-active');
                formMessage.classList.add('is-error');
                return;
            }
            formMessage.textContent = 'Thanks for reaching out. Our team will respond within one business day.';
            formMessage.classList.add('is-active');
            formMessage.classList.remove('is-error');
            contactForm.reset();
            if (messageField && charCounter) {
                charCounter.textContent = '0/' + messageField.getAttribute('data-limit');
                charCounter.classList.remove('is-warning');
            }
        });
    }
    var timeline = document.querySelector('.timeline');
    if (timeline) {
        var steps = timeline.querySelectorAll('.timeline-step');
        steps.forEach(function (step, index) {
            step.addEventListener('click', function () {
                steps.forEach(function (item) {
                    item.classList.remove('is-active');
                });
                step.classList.add('is-active');
                timeline.style.setProperty('--active-step', String(index));
            });
        });
        if (steps.length) {
            steps[0].classList.add('is-active');
        }
    }
});
