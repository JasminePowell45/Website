<script>
  //DROPDOWN ARROWS (MOBILE & TABLET)
  document.querySelectorAll('.dropdowm-toggle').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parentItem = this.closest('.has-dropdowm');
    // close other dropdowns
      document.querySelectorAll('.has-dropdown.open').forEach(item => {
        if (item !== parentItem) {
          item.classList.remove('open');
        }
      });

      parentItem.classList.toggle('open');
    });
});

//MOBILE MENU TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
  menuToggle.addEventListner('click', function () {
    navList.classList.toggle('nav-open');
  });
}

// CLOSE MENU WHEN CLICKING OUTSIDE
document.addEventListener('click', function () {
  document.querySelectorAll('.has-dropdown.open').forEach(item => {
    item.classList.remove('open');
  });

  if (navList) {
    navList.classList.remove('nav-open');
  }
});

// PREVENT CLOSING WHEN CLICKING INSIDE NAV
document.querySelector('nav').addEventListner('click', function (e) {
  e.stopPropagation();
});
</script>
