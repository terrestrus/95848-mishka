var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.add("main-nav-js");

navToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--opened')) {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  } else {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  }
})
