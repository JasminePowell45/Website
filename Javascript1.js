document.addEventListener('DOMContentLoaded', () => {
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.header-nav');

if (menuToggle && headernav) {
    menuToggle.addEventListener('click', () => {
    headerNav.classList.toggle('active');
});
}
});





