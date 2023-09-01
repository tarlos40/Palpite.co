//! VARIABLES //
const modal = document.querySelector('.modal');
const icon = document.querySelectorAll('.icon');
const logo = document.querySelectorAll('.logo');

// HEADER - CLICK //
icon[0].onclick = function() {
    modal.classList.add('active');
}

//? HEADER - HOVER //
icon[1].addEventListener('mouseover', function() {
    icon[1].classList.add('fa-solid');
    icon[1].classList.remove('fa-regular');
});

icon[1].addEventListener('mouseout', function() {
    icon[1].classList.add('fa-regular');
    icon[1].classList.remove('fa-solid');
});

logo[1].addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = logo[1];
    const x = (offsetX / offsetWidth) * 255;
    const y = (offsetY / offsetHeight) * 255;
  
    logo[1].style.color = `radial-gradient(circle at ${x}% ${y}%, #0073e6, transparent)`;
    const color = `rgb(${x}, ${y}, 0)`;
    logo[1].style.color = color;
    logo[2].style.color = color;
});
  
logo[1].addEventListener('mouseleave', () => {
    logo[1].style.background = 'none';
    logo[1].style.color = '#F9F9F9';
    logo[2].style.color = '#0073e6';
});

// LEFTBAR - CLICK //
icon[2].onclick = function() {
    modal.classList.remove('active');
}

//? LEFTBAR - HOVER // 
icon[2].addEventListener('mouseover', function() {
    icon[2].classList.add('fa-solid');
    icon[2].classList.remove('fa-regular');
});

icon[2].addEventListener('mouseout', function() {
    icon[2].classList.add('fa-regular');
    icon[2].classList.remove('fa-solid');
});