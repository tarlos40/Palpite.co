//! FOOTER - VARIABLES //
const footer_item = document.querySelectorAll(".footer-item");
const footer = document.querySelector('.footer');
const pages = document.querySelectorAll('.container');
const icon_footer = document.querySelectorAll('.icon');
const text_footer = document.querySelectorAll('.text');

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

//? FOOTER - HOVER //
footer_item[0].addEventListener('mouseover', function() {
    icon_footer[3].style.color = '#0073e6';
    text_footer[0].style.color = '#0073e6';
});

footer_item[0].addEventListener('mouseout', function() {
    icon_footer[3].style.color = '#d9e4ff';
    text_footer[0].style.color = '#d9e4ff';
});

footer_item[1].addEventListener('mouseover', function() {
    icon_footer[4].style.color = '#0073e6';
    text_footer[1].style.color = '#0073e6';
});

footer_item[1].addEventListener('mouseout', function() {
    icon_footer[4].style.color = '#d9e4ff';
    text_footer[1].style.color = '#d9e4ff';
});

footer_item[2].addEventListener('mouseover', function() {
    icon_footer[5].style.color = '#0073e6';
    text_footer[2].style.color = '#0073e6';
});

footer_item[2].addEventListener('mouseout', function() {
    icon_footer[5].style.color = '#d9e4ff';
    text_footer[2].style.color = '#d9e4ff';
});

footer_item[3].addEventListener('mouseover', function() {
    icon_footer[6].style.color = '#0073e6';
    text_footer[3].style.color = '#0073e6';
});

footer_item[3].addEventListener('mouseout', function() {
    icon_footer[6].style.color = '#d9e4ff';
    text_footer[3].style.color = '#d9e4ff';
});
