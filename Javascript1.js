document.addEventListener('DOMContentLoaded', () => {
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.header-nav .nav-list');

menuToggle.addEventListener('click', () => {
navList.classList.toggle('active');
});
});





