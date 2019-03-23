const navbar = document.getElementById('navbar');

var navVisible = false;

const toggleNavMenu = () => {
    navVisible = !navVisible
    if (!navVisible) {
        navbar.classList.add('expand');
    } else {
        navbar.classList.remove('expand');
    }
}