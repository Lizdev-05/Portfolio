const navbar = document.querySelector('.desktop-nav');
const harmburger = document.getElementById('menu-open');
const closeBar = document.getElementById('menu-close');
const navPort =  document.getElementById('nav-port');
const navAbout =  document.getElementById('nav-about');
const navContact =  document.getElementById('nav-contact');

harmburger.addEventListener('click', () => navbar.classList.toggle('active'));
closeBar.addEventListener('click', () => navbar.classList.toggle('active'));
navPort.addEventListener('click', () => navbar.classList.toggle('active'));
navAbout.addEventListener('click', () => navbar.classList.toggle('active'));
navContact.addEventListener('click', () => navbar.classList.toggle('active'));