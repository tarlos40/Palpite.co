const icon_leftBar = document.querySelectorAll('.icon')

// LEFTBAR - CLICK //
icon_leftBar[2].onclick = function() {
    modal_nav.classList.remove('active');
}

//? LEFTBAR - HOVER // 
icon_leftBar[2].addEventListener('mouseover', function() {
    icon_leftBar[2].classList.add('fa-solid');
    icon_leftBar[2].classList.remove('fa-regular');
});

icon_leftBar[2].addEventListener('mouseout', function() {
    icon_leftBar[2].classList.add('fa-regular');
    icon_leftBar[2].classList.remove('fa-solid');
});