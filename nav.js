//! VARIABLES //
const modal_nav = document.querySelector('.modal');
const icon_nav = document.querySelectorAll('.icon');
const logo_nav = document.querySelectorAll('.logo');

// HEADER - CLICK //
icon_nav[0].onclick = function() {
    modal_nav.classList.add('active');
}

//? HEADER - HOVER //
icon_nav[1].addEventListener('mouseover', function() {
    icon_nav[1].classList.add('fa-solid');
    icon_nav[1].classList.remove('fa-regular');
});

icon[1].addEventListener('mouseout', function() {
    icon_nav[1].classList.add('fa-regular');
    icon[1].classList.remove('fa-solid');
});

logo_nav[1].addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = logo[1];
    const x = (offsetX / offsetWidth) * 255;
    const y = (offsetY / offsetHeight) * 255;
  
    logo_nav[1].style.color = `radial-gradient(circle at ${x}% ${y}%, #0073e6, transparent)`;
    const color = `rgb(${x}, ${y}, 0)`;
    logo_nav[1].style.color = color;
    logo_nav[2].style.color = color;
});
  
logo_nav[1].addEventListener('mouseleave', () => {
    logo_nav[1].style.background = 'none';
    logo_nav[1].style.color = '#F9F9F9';
    logo_nav[2].style.color = '#0073e6';
});