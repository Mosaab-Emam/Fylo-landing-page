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

// Fix subscribe section position
function centeriseSub() {
    const testimonials = document.getElementById('testimonials');
    const sub = document.getElementById('subscribe');
    const body = document.getElementsByTagName('body')[0];
    const footer = document.getElementsByTagName('footer')[0];
    const subHeight = sub.clientHeight;
    const subWidth = sub.clientWidth;
    const bodyWidth = body.clientWidth;
    
    // Centrise the subscribe section vertically
    sub.style.marginTop = (-subHeight / 2) + 'px';
    sub.style.left = ((bodyWidth / 2) - (subWidth / 2)) + 'px';

    // Set up appropriate paddings for testimonials section and footer
    testimonials.style.paddingBottom = (subHeight / 2) + 84 + 'px';
    footer.style.paddingTop = (subHeight / 2) + 84 + 'px';
}

centeriseSub();
window.addEventListener('resize', centeriseSub);
