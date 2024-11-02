// Function to accept all cookies
function acceptAllCookies() {
    localStorage.setItem('cookiesAccepted', 'all');
    hideConsentBanner();
    initializePhotoSlides(); // Initialize photo slides after accepting cookies
}

// Function to reject all cookies
function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'none');
    hideConsentBanner();
    disablePhotoSlides(); // Disable photo slides if cookies are rejected
}

// Function to accept only important cookies
function acceptImportantCookies() {
    localStorage.setItem('cookiesAccepted', 'important');
    hideConsentBanner();
    initializePhotoSlides(); // Initialize photo slides for important cookies
}

// Function to hide the consent banner
function hideConsentBanner() {
    const consentBanner = document.getElementById('consent-banner');
    consentBanner.style.transition = 'opacity 0.5s ease'; // Smooth transition
    consentBanner.style.opacity = '0';
    setTimeout(() => {
        consentBanner.style.display = 'none';
    }, 500); // Wait for transition to complete before hiding
}

// Check for previous cookie consent on page load
window.onload = function() {
    const consent = localStorage.getItem('cookiesAccepted');
    if (consent) {
        hideConsentBanner();
        if (consent === 'all' || consent === 'important') {
            initializePhotoSlides(); // Initialize if consent is given
        } else {
            disablePhotoSlides(); // Disable if cookies are rejected
        }
    } else {
        // Show the consent banner if no previous consent found
        document.getElementById('consent-banner').style.display = 'block';
    }

    // Smoothly show the contact form pop-up on landing
    setTimeout(showContactForm, 1000); // Delay before showing the form
};

// Function to initialize photo slides when cookies are accepted
function initializePhotoSlides() {
    // Logic to initialize photo slides
    console.log('Photo slides initialized.');
}

// Function to disable photo slides when cookies are rejected
function disablePhotoSlides() {
    // Logic to disable photo slides
    console.log('Photo slides disabled.');
}

// Function to show the contact form pop-up
function showContactForm() {
    const contactForm = document.getElementById('contactModal'); // Updated to match your HTML
    contactForm.style.display = 'block';
    contactForm.style.opacity = '0';
    contactForm.style.transition = 'opacity 0.5s ease'; // Smooth transition
    setTimeout(() => {
        contactForm.style.opacity = '1'; // Fade in effect
    }, 10); // Small delay for transition effect
}

// Function to close the contact form pop-up
function closeContactModal() {
    const contactForm = document.getElementById('contactModal'); // Updated to match your HTML
    contactForm.style.transition = 'opacity 0.5s ease'; // Smooth transition
    contactForm.style.opacity = '0';
    setTimeout(() => {
        contactForm.style.display = 'none'; // Hide after transition
    }, 500); // Wait for transition to complete before hiding
}

// Function to show the privacy policy
function showPrivacyPolicy() {
    const privacyPolicy = document.getElementById('privacy-policy');
    privacyPolicy.style.display = 'block';
    privacyPolicy.style.opacity = '0';
    privacyPolicy.style.transition = 'opacity 0.5s ease'; // Smooth transition
    setTimeout(() => {
        privacyPolicy.style.opacity = '1'; // Fade in effect
    }, 10); // Small delay for transition effect
}

// Function to close the privacy policy
function closePrivacyPolicy() {
    const privacyPolicy = document.getElementById('privacy-policy');
    privacyPolicy.style.transition = 'opacity 0.5s ease'; // Smooth transition
    privacyPolicy.style.opacity = '0';
    setTimeout(() => {
        privacyPolicy.style.display = 'none'; // Hide after transition
    }, 500); // Wait for transition to complete before hiding
        }
