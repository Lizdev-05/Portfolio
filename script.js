const navbar = document.querySelector('.desktop-nav');
const harmburger = document.getElementById('menu-open');
const closeBar = document.getElementById('menu-close')
const navPort = document.getElementById('nav-port');
const navAbout = document.getElementById('nav-about');
const navContact = document.getElementById('nav-contact');
const fixed = document.querySelector('.global');

harmburger.addEventListener('click', () => navbar.classList.toggle('active'));
closeBar.addEventListener('click', () => navbar.classList.toggle('active'));

navPort.addEventListener('click', () => {
  navbar.classList.toggle('active');
  fixed.classList.toggle('fixed-active');
});
navAbout.addEventListener('click', () => {
  navbar.classList.toggle('active');
  fixed.classList.toggle('fixed-active');
});

navAbout.addEventListener('click', () => {
    navbar.classList.toggle('active');
    fixed.classList.toggle('fixed-active');
  });  