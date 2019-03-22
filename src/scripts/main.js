const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

var navVisible = false;

const toggleNavMenu = () => {
    navVisible = !navVisible
    if (!navVisible) {
        navMenu.classList.add('visible');
    } else {
        navMenu.classList.remove('visible');
    }
}