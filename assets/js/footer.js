//! FOOTER - VARIABLES //
const footer_item = document.querySelectorAll(".footer-item");
const footer = document.querySelector('.footer');
const pages = document.querySelectorAll('.container');

// FOOTER - CLICK //
footer_item[0].onclick = function() {
    footer_item[1].classList.remove('active');
    footer_item[2].classList.remove('active');
    footer_item[3].classList.remove('active');
    footer_item[0].classList.add('active');
    pages[3].classList.remove('active');
    pages[2].classList.remove('active');
    pages[1].classList.remove('active');
    pages[0].classList.add('active');
}

footer_item[1].onclick = function() {
    footer_item[0].classList.remove('active');
    footer_item[2].classList.remove('active');
    footer_item[3].classList.remove('active');
    footer_item[1].classList.add('active');
    pages[3].classList.remove('active');
    pages[2].classList.remove('active');
    pages[0].classList.remove('active');
    pages[1].classList.add('active');
}

footer_item[2].onclick = function() {
    footer_item[0].classList.remove('active');
    footer_item[1].classList.remove('active');
    footer_item[3].classList.remove('active');
    footer_item[2].classList.add('active');
    pages[3].classList.remove('active');
    pages[1].classList.remove('active');
    pages[0].classList.remove('active');
    pages[2].classList.add('active');
}
footer_item[3].onclick = function() {
    footer_item[0].classList.remove('active');
    footer_item[1].classList.remove('active');
    footer_item[2].classList.remove('active');
    footer_item[3].classList.add('active');
    pages[2].classList.remove('active');
    pages[1].classList.remove('active');
    pages[0].classList.remove('active');
    pages[3].classList.add('active');
}

