const navTriggerBtn = document.getElementById("nav_trigger_btn");
const navMenu = document.getElementById("nav_manu");
navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    960: { slidesPerView : 3},
  },
});