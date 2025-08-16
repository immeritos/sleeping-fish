// Load navigation template
function loadNavigation() {
    fetch('./templates/navigation.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navigation-container').innerHTML = html;
            // Re-initialize mobile menu functionality after loading
            initializeMobileMenu();
        })
        .catch(error => console.error('Error loading navigation:', error));
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Load templates when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
});