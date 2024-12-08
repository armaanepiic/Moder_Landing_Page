const navTriggerBtn = document.getElementById("nav_trigger_btn");
const navMenu = document.getElementById("nav_manu");
navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
});