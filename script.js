// const { array } = require("assert-plus");

// const { forEach } = require("lodash");

const navbar = document.querySelector('.desktop-nav');
const harmburger = document.getElementById('menu-open');
const closeBar = document.getElementById('menu-close')
const navPort = document.getElementById('nav-port');
const navAbout = document.getElementById('nav-about');
const navContact = document.getElementById('nav-contact');
const fixed = document.querySelector('.global');
const portfolioSection = document.querySelector('.card-containers')
let modalSection = document.querySelector('.modal-section')


// const modal = document.querySelector('btn')

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



let CardArray = [{
    title: 'Multi-Post Stories Gain+Glory',
    languageTags: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    modalCardImage: './images/detail-snapshot.png'
  },

  {
    title: 'Multi-Post Stories Gain+Glory',
    languageTags: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',  
    modalCardImage: './images/modal-desk-pic.png'
  },

  {
    title: 'Multi-Post Stories Gain+Glory',
    languageTags: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    modalCardImage: './images/detail-snapshot.png'
  },

  {
    title: 'Multi-Post Stories Gain+Glory',
    languageTags: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    modalCardImage: './images/modal-desk-pic.png'
  },

  {
    title: 'Multi-Post Stories Gain+Glory',
    languageTags: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    modalCardImage: './images/detail-snapshot.png'
  },

  {
    title: 'Multi-Post Stories Gain+Glory',
    languageTags: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    modalCardImage: './images/modal-desk-pic.png'
  }
]
// Crearing divs and classses
const cardCreation = (arr, i) => {

  let cardContainer = document.createElement('div')
  cardContainer.className = 'card-container'
  let card = document.createElement('div')
  card.className = 'card'
  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  let btn = document.createElement('div')
  btn.className = 'btn'
  btn.id = `${i}`
  let btnLink = document.createElement('a')
  let cardTitle = document.createElement('h2')
  let tags = document.createElement('div')
  tags.className = 'tags'
  

  //  Adding Html
  cardTitle.innerHTML = arr[i].title
  btnLink.innerHTML = 'See Project'

  //  Appending divs to the parent element
  portfolioSection.appendChild(cardContainer)
  cardContainer.appendChild(card)
  card.appendChild(cardContent)
  cardContent.append(cardTitle, tags, btn)
  btn.appendChild(btnLink)
  let tagsCount = [0, 1, 2, 3]
  tagsCount.forEach(x => {
    tags.append(document.createElement('span'))
    let span = tags.children[x]
    span.innerHTML = arr[i].languageTags[x]

  })
}

// Array for selcting each card

const cardCount = Array.from(Array(CardArray.length).keys());
cardCount.forEach(x => cardCreation(CardArray, x))

// modal

const deleteModal = () =>{
  while(modalSection.firstChild){
    modalSection.removeChild(modalSection.firstChild)
  }
}

const createModal = (arr, i) => {
  let modalSection = document.querySelector('.modal-section')
  let modal = document.createElement('div')
  modal.className = 'modal'
  let modalImage = document.createElement('div')
  modalImage.className = 'modal-image'
  let modalContent = document.createElement('div')
  modalContent.className = 'modal-content'
  let modalBtn = document.createElement('div')
  modalBtn.className = 'modal-btn'
  let modalImg = document.createElement('img')
  modalImg.src = arr[i].modalCardImage
  let modalClose = document.createElement('span')
  modalClose.className = 'modal-close'
  let modalHead = document.createElement('h1')
  let modalTags = document.createElement('div')
  modalTags.className = 'tags'
  let modalDescription = document.createElement('p')
  // let modalFlex = document.createElement('div')
  // modalFlex.className = 'modal-flex'
  let btn1 = document.createElement('a')
  btn1.className = 'live'
  let btn2 = document.createElement('a')
  btn2.className = 'source'
  btn1Image = document.createElement('img')
  btn1Image.src = './images/see-live-icon.svg'
  btn2Image = document.createElement('img')
  btn2Image.src = './images/IconGitHub.png'




  modalClose.innerHTML = '&times'
  modalHead.innerHTML = arr[i].title
  let spanTag = Array.from(Array(arr[i].languageTags.length).keys())
  spanTag.forEach(x => {
    modalTags.appendChild(document.createElement('span'))
    const line = modalTags.children[x]
    line.innerHTML = arr[i].languageTags[x]
  })


  modalDescription.innerHTML = arr[i].description
  btn1.innerHTML = 'See Live'
  btn2.innerHTML = 'See Source'

  modalSection.appendChild(modal)
  modal.append(modalImage, modalContent, modalDescription, modalBtn)
  modalImage.append(modalImg, modalClose)
  modalContent.append(modalHead, modalTags)
  // modalFlex.append()
  modalBtn.append(btn1, btn2 )
  btn1.appendChild(btn1Image)
  btn2.appendChild(btn2Image)

  modalClose.addEventListener('click', () => {
    modalSection.classList.toggle('active')
    deleteModal()
    fixed.classList.remove('fixed')
  })
  
}

const cardButton = Array.from(document.querySelectorAll('.card-container .btn'))
cardButton.forEach(i => i.addEventListener('click', () => {
  modalSection.classList.toggle('active')
  createModal(CardArray, i.id)
  fixed.classList.add('fixed')
}))


const form = document.getElementById('form')
const email = document.getElementById('email')
const emailError = document.querySelector('.emailError')
const formInput = Array.from(document.querySelectorAll('.input'))

form.addEventListener('submit', e => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault()
    emailError.innerHTML = 'email should be lower case'
    emailError.classList.add('display')
    email.classList.add('invalid')
  } else {
    emailError.innerHTML = ''
    emailError.classList.remove('display')
    email.classList.remove('invalid')
  }
})

formInput.forEach(input => input.addEventListener('click', () => {
  emailError.innerHTML = ''
  emailError.classList.remove('display')
  email.classList.remove('invalid')
}))