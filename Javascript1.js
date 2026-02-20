document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const headerNav = document.querySelector('.header-nav');

  menuToggle.addEventListener('click', () => {
    e.stopPropagation();
    headerNav.classList.toggle('active');
 });
});





