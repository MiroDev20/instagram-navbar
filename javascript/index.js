const menuButton = document.querySelector('[data-navbar-toggle]');
const navbar = document.querySelector('.navbar');

function menuToggle() {
    const isInactive = menuButton.dataset.menuStatus === 'inactive';

    menuButton.dataset.menuStatus = isInactive
        ? 'active'
        : 'inactive';

    navbar.classList.toggle('navbar--expanded', isInactive);
}

menuButton.addEventListener('click', menuToggle);

const desktopMediaQuery = window.matchMedia('(min-width: 1264px)');

desktopMediaQuery.addEventListener('change', () => {
    menuButton.dataset.menuStatus = 'inactive';
    navbar.classList.remove('navbar--expanded');
});
