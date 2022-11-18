const navbar = document.querySelector('.desktop-nav');
const harmburger = document.getElementById('menu-open');
const closeBar = document.getElementById('menu-close');
const navPort = document.getElementById('nav-port');
const navAbout = document.getElementById('nav-about');
const navContact = document.getElementById('nav-contact');
const fixed = document.querySelector('.global');
const portfolioSection = document.querySelector('.card-containers');
const modalSection = document.querySelector('.modal-section');

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

navContact.addEventListener('click', () => {
  navbar.classList.toggle('active');
  fixed.classList.toggle('fixed-active');
});

const CardArray = [{
    title: 'The Awesome Real Estate',
    languageTags: ['React Js', 'Javascript', 'Css', 'Linters', 'GitFlow'],
    description: 'The Awesome estate web application displays a list of apartments that were provided by local data. The users can check out the featured and recent apartments. Also, the user can click the house to get the details of the selected house.',
    modalCardImage: 'images/estate.webp',
    live: 'https://lizdev-awesome-estate.netlify.app/',
    source: 'https://github.com/Lizdev-05/awesome-estate.git',
  },
  
  {
    title: ' S&L Sensation',
    languageTags: ['API', 'Css', 'Javascript', 'Html'],
    description: 'The Meal DB web application displays a list of meals that were provided by an external API. The users can like a meal, leave some comments or make a reservation, in these cases an involvement API was used.',
    modalCardImage: './images/meal.webp',
    live: 'https://lizdev-05.github.io/capstone-project/',
    source: 'https://github.com/Lizdev-05/capstone-project.git',
  },
  
  {
    title: 'Realtime Stock Metric',
    languageTags: ['React Js', 'Redux', 'Css', 'Javascript', 'API'],
    description: 'Stock metrics is a web(mobile-focused) app for checking the companies listed on the stock exchange and see their live metrics. Its data is consumed from the Financial modelling API',
    modalCardImage: './images/stock.webp',
    live: 'https://lizdev-stock-metric.netlify.app/',
    source: 'https://github.com/Lizdev-05/stock-market.git',
  },
  {
  title: 'The Recipe Web App',
  languageTags: ['React', 'Javascript', 'Css', 'Linters'],
  description: 'This is a Ruby on Rails app that allows user to create, delete, and read recipes created by them or the community, allowing the users to decide whether they should be public or not. Also, it allows users to create food records and generate a shopping list based on the missing food for their recipes.',
  modalCardImage: './images/recipe1.webp',
  live: 'https://tranquil-crag-64773.herokuapp.com/',
  source: 'https://github.com/Lizdev-05/Recipe-app',
},

{
  title: 'The Awesome Book Library',
  languageTags: ['Javascript', 'Css', 'Linters', 'Html'],
  description: 'This project is focused on building is a simple website that displays a list of books that users have added.It allows you to add and remove books from that list also. The goal of this project is to build a simple multipage page responsive book website.',
  modalCardImage: './images/awesomebook.webp',
  live: 'https://lizdev-05.github.io/Awesome-Books/',
  source: 'https://github.com/Lizdev-05/Awesome-Books.git',
},

{
  title: ' The Prudent Mobile App',
  languageTags: ['Gitflow', 'Css', 'Ruby on Rails', 'Ruby'],
  description: 'Prudent app is a Ruby on Rails mobile web application that allows users to keep track of their expenses and categories. have a list of transactions associated with a category, so that the user can see how much money they spent and on what.',
  modalCardImage: './images/prudent.webp',
  live: 'https://prudent-app.onrender.com/',
  source: 'https://github.com/Lizdev-05/Budget-app',
},
];
// Creating divs and classses for card
const cardCreation = (arr, i) => {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';
  const card = document.createElement('div');
  card.className = 'card';
  const cardImg = document.createElement('img')
  cardImg.setAttribute('src', arr[i].modalCardImage)
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  const btn = document.createElement('div');
  btn.className = 'btn';
  btn.id = `${i}`;
  const btnLink = document.createElement('a');
  const cardTitle = document.createElement('h2');
  const tags = document.createElement('div');
  tags.className = 'tags';

  //  Adding Html
  cardTitle.innerHTML = arr[i].title;
  btnLink.innerHTML = 'See Project';

  //  Appending divs to the parent element
  portfolioSection.appendChild(cardContainer);
  cardContainer.appendChild(card);
  cardContent.append(cardTitle, tags, btn);
  card.append(cardImg, cardContent);
  btn.appendChild(btnLink);
  const tagsCount = [0, 1, 2, 3];
  tagsCount.forEach((x) => {
    tags.append(document.createElement('span'));
    const span = tags.children[x];
    span.innerHTML = arr[i].languageTags[x];
  });
};

// Array for selcting each card

const cardCount = Array.from(Array(CardArray.length).keys());
cardCount.forEach((x) => cardCreation(CardArray, x));

// modal

const deleteModal = () => {
  while (modalSection.firstChild) {
    modalSection.removeChild(modalSection.firstChild);
  }
};

const createModal = (arr, i) => {
  const modalSection = document.querySelector('.modal-section');
  const modal = document.createElement('div');
  modal.className = 'modal';
  const modalImage = document.createElement('div');
  modalImage.className = 'modal-image';
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  const modalBtn = document.createElement('div');
  modalBtn.className = 'modal-btn';
  const modalImg = document.createElement('img');
  modalImg.src = arr[i].modalCardImage;
  const modalClose = document.createElement('span');
  modalClose.className = 'modal-close';
  const modalHead = document.createElement('h1');
  const modalTags = document.createElement('div');
  modalTags.className = 'tags';
  const modalDescription = document.createElement('p');
  const btn1 = document.createElement('a');
  btn1.className = 'live';
  btn1.href = arr[i].live;
  const btn2 = document.createElement('a');
  btn2.className = 'source';
  btn2.href = arr[i].source;
  const btn1Image = document.createElement('img');
  btn1Image.src = './images/see-live-icon.svg';
  const btn2Image = document.createElement('img');
  btn2Image.src = './images/IconGitHub.png';
  modalClose.innerHTML = '&times';
  modalHead.innerHTML = arr[i].title;
  const spanTag = Array.from(Array(arr[i].languageTags.length).keys());
  spanTag.forEach((x) => {
    modalTags.appendChild(document.createElement('span'));
    const line = modalTags.children[x];
    line.innerHTML = arr[i].languageTags[x];
  });

  modalDescription.innerHTML = arr[i].description;
  btn1.innerHTML = 'See Live';
  btn2.innerHTML = 'See Source';

  modalSection.appendChild(modal);
  modal.append(modalImage, modalContent, modalDescription, modalBtn);
  modalImage.append(modalImg, modalClose);
  modalContent.append(modalHead, modalTags);
  // modalFlex.append()
  modalBtn.append(btn1, btn2);
  btn1.appendChild(btn1Image);
  btn2.appendChild(btn2Image);

  modalClose.addEventListener('click', () => {
    modalSection.classList.toggle('active');
    deleteModal();
    fixed.classList.remove('fixed');
  });
};

const cardButton = Array.from(document.querySelectorAll('.card-container .btn'));
cardButton.forEach((i) => i.addEventListener('click', () => {
  modalSection.classList.toggle('active');
  createModal(CardArray, i.id);
  fixed.classList.add('fixed');
}));

const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.querySelector('.emailError');
const formInput = Array.from(document.querySelectorAll('.input'));

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    emailError.innerHTML = 'email should be lower case';
    emailError.classList.add('display');
    email.classList.add('invalid');
  } else {
    emailError.innerHTML = '';
    emailError.classList.remove('display');
    email.classList.remove('invalid');
  }
});

formInput.forEach((input) => input.addEventListener('click', () => {
  emailError.innerHTML = '';
  emailError.classList.remove('display');
  email.classList.remove('invalid');
}));

// Form input to localStorage

// function getInTouch(e)
form.addEventListener('submit', () => {
  const formInput = {
    name: document.getElementById('name').value,
    firstName: document.getElementById('first-Name').value,
    lastName: document.getElementById('last-Name').value,
    email: document.getElementById('email').value,
    textmessage: document.getElementById('message').value,
  };
  localStorage.setItem('formInput', JSON.stringify(formInput));
});

function inputDisplay() {
  if (localStorage.getItem('formInput')) {
    const {
      name,
      firstName,
      lastName,
      email,
      textmessage,
    } = JSON.parse(localStorage.getItem('formInput'));
    const outputName = document.getElementById('name');
    const outputFirstName = document.getElementById('first-Name');
    const outputLastName = document.getElementById('last-Name');
    const outputEmail = document.getElementById('email');
    const outPutTextmessage = document.getElementById('message');
    outputName.value = name;
    outputFirstName.value = firstName;
    outputLastName.value = lastName;
    outputEmail.value = email;
    outPutTextmessage.value = textmessage;
  }
}

inputDisplay();
