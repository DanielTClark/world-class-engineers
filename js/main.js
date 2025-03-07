/**
 * World Class Engineers - Main JavaScript
 * Updated for Tailwind CSS implementation
 */

document.addEventListener('DOMContentLoaded', function() {

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Toggle the mobile nav visibility
            if (mainNav.classList.contains('hidden')) {
                mainNav.classList.remove('hidden');
                mainNav.classList.add('block', 'fixed', 'inset-0', 'bg-white', 'z-50', 'pt-20', 'px-4');
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
                // Prevent body scrolling
                document.body.style.overflow = 'hidden';
            } else {
                mainNav.classList.add('hidden');
                mainNav.classList.remove('block', 'fixed', 'inset-0', 'bg-white', 'z-50', 'pt-20', 'px-4');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                // Allow body scrolling
                document.body.style.overflow = '';
            }
        });
    }

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                
                // Toggle the answer visibility
                if (answer.classList.contains('hidden')) {
                    // Close all other answers first
                    document.querySelectorAll('.faq-answer').forEach(item => {
                        item.classList.add('hidden');
                    });
                    document.querySelectorAll('.faq-question i').forEach(icon => {
                        icon.classList.remove('transform', 'rotate-45');
                    });
                    
                    // Open this answer
                    answer.classList.remove('hidden');
                    this.querySelector('i').classList.add('transform', 'rotate-45');
                } else {
                    // Close this answer
                    answer.classList.add('hidden');
                    this.querySelector('i').classList.remove('transform', 'rotate-45');
                }
            });
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('border-red-500');
                    
                    // Add error message if not already present
                    const errorDiv = field.parentNode.querySelector('.error-message');
                    if (!errorDiv) {
                        const error = document.createElement('div');
                        error.className = 'error-message text-red-500 text-sm mt-1';
                        error.innerHTML = 'This field is required';
                        field.parentNode.appendChild(error);
                    }
                } else {
                    field.classList.remove('border-red-500');
                    
                    // Remove error message if present
                    const errorDiv = field.parentNode.querySelector('.error-message');
                    if (errorDiv) {
                        errorDiv.remove();
                    }
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    valid = false;
                    emailField.classList.add('border-red-500');
                    
                    // Add error message if not already present
                    const errorDiv = emailField.parentNode.querySelector('.error-message');
                    if (!errorDiv) {
                        const error = document.createElement('div');
                        error.className = 'error-message text-red-500 text-sm mt-1';
                        error.innerHTML = 'Please enter a valid email address';
                        emailField.parentNode.appendChild(error);
                    }
                }
            }
            
            if (valid) {
                // In a real implementation, this would submit the form via AJAX
                // For now, show a success message
                const formContainer = contactForm.parentNode;
                formContainer.innerHTML = `
                    <div class="text-center py-12">
                        <div class="inline-block p-4 bg-green-100 text-green-600 rounded-full mb-6">
                            <i class="fas fa-check text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Message Sent!</h3>
                        <p class="text-lg text-gray-600 mb-6">Thank you for contacting World Class Engineers. We'll be in touch with you shortly.</p>
                        <a href="index.html" class="inline-block bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary-dark transition-all">Return to Homepage</a>
                    </div>
                `;
            }
        });
        
        // Clear error states on input
        contactForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('border-red-500');
                
                // Remove error message if present
                const errorDiv = this.parentNode.querySelector('.error-message');
                if (errorDiv) {
                    errorDiv.remove();
                }
            });
        });
    }

    // Scroll animations for elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        // Check all animated elements and add class if in viewport
        function checkAnimatedElements() {
            animatedElements.forEach(element => {
                if (isInViewport(element)) {
                    element.classList.remove('opacity-0', 'translate-y-5');
                    element.classList.add('opacity-100', 'translate-y-0');
                }
            });
        }
        
        // Run on load
        checkAnimatedElements();
        
        // Run on scroll
        window.addEventListener('scroll', checkAnimatedElements);
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    if (anchorLinks.length > 0) {
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80; // Account for fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // If mobile menu is open, close it
                    if (mainNav && !mainNav.classList.contains('hidden') && window.innerWidth < 768) {
                        menuToggle.click();
                    }
                }
            });
        });
    }

}); 