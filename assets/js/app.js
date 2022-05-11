let navigationHeader = document.querySelector('.header-navigation');
let burgerBtn = document.querySelector('.hamburger-btn');
let navbarMobile = document.querySelector('.navbar-mobile');
let headerHero = document.querySelector('.header-hero');

(() => {
    // Scroll Event Listener
    window.addEventListener('scroll', () => {
            // Get the current scroll position
            const currentScrollPos = window.scrollY;
            // Get the height of the navigation Header
            const headerHeight = navigationHeader.offsetHeight;

            // If the current scroll position is greater than the height of the navigation header
            if (currentScrollPos > headerHeight) {
                // Add the class 'sticky' to the navigation header
                navigationHeader.classList.add('sticky');
                headerHero.classList.add('active');
            } else {
                // Remove the class 'sticky' from the navigation header
                navigationHeader.classList.remove('sticky');
                headerHero.classList.remove('active');
            }
        }
    );

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('btn-active');
        navbarMobile.classList.toggle('active');
        navigationHeader.classList.toggle('active');
    }
    );
})();