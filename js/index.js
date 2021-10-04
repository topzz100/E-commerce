const navBar = document.querySelector('.menu-bar');
const close = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');


navBar.addEventListener('click', () => {
  navMenu.classList.add('show');
  body.classList.add('show');

});
close.addEventListener('click', () => {
  navMenu.classList.remove('show');
  body.classList.remove('show');
});