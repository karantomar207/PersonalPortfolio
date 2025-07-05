// Portfolio Website JavaScript

// Initialize EmailJS
(function () {
    const emailjsPublicKey = 'OP9wGlDrFL0WDotzw';
    emailjs.init(emailjsPublicKey);
})();
// DOM Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');
const portfolioFilters = document.querySelectorAll('.portfolio-filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-bar');

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    const icon = themeToggle.querySelector('i');
    if (savedTheme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollToTopBtn.classList.remove('show');
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.pointerEvents = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Portfolio Filter
portfolioFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remove active class from all filters
        portfolioFilters.forEach(f => f.classList.remove('active'));
        // Add active class to clicked filter
        filter.classList.add('active');
        
        const filterValue = filter.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.classList.remove('hidden');
                item.style.display = 'block';
            } else {
                item.classList.add('hidden');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Portfolio Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'block') {
                closeModal(modal.id);
            }
        });
    }
});

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
        error.classList.add('hidden');
    });
    
    // Name validation
    if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    // mobile validation
    const phoneRegex = /^[6-9][0-9]{9}$/; // Validates 10-digit Indian mobile numbers starting with 6–9
    if (!phoneRegex.test(phone)) {
        showError('phone-error', 'Please enter a valid 10-digit mobile number');
        isValid = false;
    } 
    
    // Message validation
    if (message.length < 10) {
        showError('message-error', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

// Contact Form Submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitText = submitBtn.querySelector('.submit-text');
    const loadingText = submitBtn.querySelector('.loading-text');
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.classList.add('hidden');
    loadingText.classList.remove('hidden');
    
    try {
        // EmailJS service configuration
        const serviceID = 'service_1gipcup'; // Replace with your EmailJS service ID
        const templateID = 'template_x6triv6'; // Replace with your EmailJS template ID
        
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            phone: document.getElementById('phone').value,
            to_name: 'Karan Singh Tomar',
            title : "Message from " + document.getElementById('name').value+ " via Contact Form"

        };
        console.log("templateParams", templateParams)
        // Send email using EmailJS
        await emailjs.send(serviceID, templateID, templateParams);
        
        // Show success message
        document.getElementById('form-success').classList.remove('hidden');
        document.getElementById('form-error').classList.add('hidden');
        
        // Reset form
        contactForm.reset();        
        
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Show error message
        document.getElementById('form-error').classList.remove('hidden');
        document.getElementById('form-success').classList.add('hidden');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        loadingText.classList.add('hidden');
    }
});

// Real-time form validation
document.getElementById('name').addEventListener('input', function() {
    const name = this.value.trim();
    const errorElement = document.getElementById('name-error');
    
    if (name.length > 0 && name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters long');
    } else {
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById('email-error');
    
    if (email.length > 0 && !emailRegex.test(email)) {
        showError('email-error', 'Please enter a valid email address');
    } else {
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
    }
});

document.getElementById('phone').addEventListener('input', function () {
    const phone = this.value.trim();
    const phoneRegex = /^[0-9]{10}$/; // Basic 10-digit validation (India-style)
    const errorElement = document.getElementById('phone-error');

    if (phone.length > 0 && !phoneRegex.test(phone)) {
        showError('phone-error', 'Please enter a valid 10-digit phone number');
    } else {
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
    }
});

document.getElementById('message').addEventListener('input', function() {
    const message = this.value.trim();
    const errorElement = document.getElementById('message-error');
    
    if (message.length > 0 && message.length < 10) {
        showError('message-error', 'Message must be at least 10 characters long');
    } else {
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
    }
});

// Animate skill bars when they come into view
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        
        if (isInViewport && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const width = bar.style.width;
            bar.style.setProperty('--width', width);
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        }
    });
};

// Intersection Observer for skill bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.style.width;
            skillBar.style.setProperty('--width', width);
            skillBar.style.width = '0';
            
            setTimeout(() => {
                skillBar.style.width = width;
            }, 200);
            
            skillObserver.unobserve(skillBar);
        }
    });
});

// Observe skill bars
skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Typewriter Effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect when page loads
window.addEventListener('load', () => {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typeWriter(typewriterElement, text, 100);
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Lazy Loading for Images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Performance Optimization
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations and effects
    animateSkillBars();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Console Welcome Message
console.log(`
🚀 Welcome to Karan Singh Tomar's Portfolio!
🔧 Built with HTML5, Tailwind CSS, and Vanilla JavaScript
⚡ Optimized for performance and accessibility
📱 Fully responsive design
🎨 Dark/Light theme support
📧 Contact form powered by EmailJS

Feel free to explore the code and get in touch!
`);

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // You can implement error reporting here
});

// // Service Worker Registration (if needed)
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('ServiceWorker registered successfully');
//             })
//             .catch(error => {
//                 console.log('ServiceWorker registration failed');
//             });
//     });
// }

// // Analytics Integration (Google Analytics example)
// // Replace with your tracking ID
// function gtag() {
//     dataLayer.push(arguments);
// }

// // Track page views
// function trackPageView(page) {
//     if (typeof gtag !== 'undefined') {
//         gtag('config', 'GA_TRACKING_ID', {
//             page_path: page
//         });
//     }
// }

// // Track events
// function trackEvent(action, category, label, value) {
//     if (typeof gtag !== 'undefined') {
//         gtag('event', action, {
//             event_category: category,
//             event_label: label,
//             value: value
//         });
//     }
// }

// // Track contact form submissions
// contactForm.addEventListener('submit', () => {
//     trackEvent('form_submit', 'contact', 'contact_form');
// });

// // Track portfolio item clicks
// document.querySelectorAll('.portfolio-item').forEach(item => {
//     item.addEventListener('click', () => {
//         const projectName = item.querySelector('h3').textContent;
//         trackEvent('portfolio_click', 'portfolio', projectName);
//     });
// });
