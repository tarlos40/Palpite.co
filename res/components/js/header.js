// VARIABLES //
const modal = document.querySelector('.modal');
const menu = document.querySelector('#menuID');
const profile = document.querySelector('#profileID')
const x_mark = document.querySelector('#x-markID');
const logo = document.querySelector('#logoID');
const logo_span = document.querySelector('#logoSpanID');

// HEADER - CLICK //
menu.onclick = function() {
    modal.classList.add('active');
}

// HEADER - HOVER //
profile.addEventListener('mouseover', function() {
    profile.classList.add('fa-solid');
    profile.classList.remove('fa-regular');
});

profile.addEventListener('mouseout', function() {
    profile.classList.add('fa-regular');
    profile.classList.remove('fa-solid');
});

logo.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = logo;
    const x = (offsetX / offsetWidth) * 255;
    const y = (offsetY / offsetHeight) * 255;
  
    logo.style.background = `radial-gradient(circle at ${x}% ${y}%, #0073e6, transparent)`;
    const color = `rgb(${x}, ${y}, 0)`;
    logo.style.color = color;
    logo_span.style.color = color;
});
  
logo.addEventListener('mouseleave', () => {
    logo.style.background = 'none';
    logo.style.color = '#d9e4ff';
    logo_span.style.color = '#0073e6';
});

// LEFTBAR - CLICK //
x_mark.onclick = function() {
    modal.classList.remove('active');
}

// LEFTBAR - HOVER // 
x_mark.addEventListener('mouseover', function() {
    x_mark.classList.add('fa-solid');
    x_mark.classList.remove('fa-regular');
});

x_mark.addEventListener('mouseout', function() {
    x_mark.classList.add('fa-regular');
    x_mark.classList.remove('fa-solid');
});