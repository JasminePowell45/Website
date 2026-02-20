document.addEventListener('DOMContentLoaded', () => {
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header-nav .nav-list');

menuToggle.addEventListener('click', () => {
nav.classList.toggle('active');
});

  menuToggle.addEventListener('click', () => {
    console.log('CLICKED!');
});
});





