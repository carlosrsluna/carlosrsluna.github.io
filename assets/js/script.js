const modalBack = document.querySelector('#modal-back');
const htmlTag = document.querySelector('html');
let modal 

modalBack.style = 'display: none !important;'

function activeModal(modalId){
   modal = document.getElementById(modalId)

   if (window.innerWidth < 800){
      modalBack.style = 'display: block;'
   }
   else {
      modalBack.style = 'display: flex;'
   }
   modal.style = 'display: block;' 
   htmlTag.style = "overflow-y: hidden;"
}

function closeModal(){
   console.log(modalBack.style.display)

   let computedStyle = window.getComputedStyle(modalBack).getPropertyValue('display')
   if (computedStyle == "block" || modalBack.style.display == 'block' || modalBack.style.display == 'none'){
      modalBack.style = 'display: none !important;'
   }else{
      modalBack.style = 'display: none;'
   }

   modal.style = 'display: none;'
   htmlTag.style = "overflow-y: auto;"
}

// -------------------

const header2 = document.querySelector('.header-2')
const section1 = document.querySelector('.s1')

const img = document.querySelector('body > section.s1 > div > div.content-img > img')

window.addEventListener('scroll', () => {
   let section1Dist = section1.getBoundingClientRect().bottom

   if (section1Dist <= 0) {
      // header2.style.display = 'block'
      header2.style.transform = 'translateX(-100vw)'
      img.style = 'filter: blur(8px)'
      img.style = "animation: none"
   }
   else {
      header2.style.transform = 'translateX(100vw)'
      img.style = 'animation: unfocus 1s linear 1s; animation-fill-mode: forwards;'
   }
})

const asideMenu = document.querySelector('.menu-bar')
const invisibleBTN = document.querySelector('.invisible-btn')

function openMenu() {
   asideMenu.style.right = '0px'
   invisibleBTN.style.display = 'block'
}
function closeMenu() {
   asideMenu.style.right = '-100%'
   invisibleBTN.style.display = 'none'
}

let menuBarLinks = document.querySelectorAll('nav.menu-bar ul li a')

for (let c = 0; c < menuBarLinks.length; c++) {
   menuBarLinks[c].addEventListener('click', () => {
      closeMenu()
   })
}

// ---------------------------------------------------------

const h2Text = 'Olá, seja bem vindo(a)!'
const h1Text = 'Eu sou '
const spanText = 'Carlos Luna'
const pText = 'Este é meu repositório, aqui lhe apresento os meus conhecimentos e projetos com os quais me aventuro desde os 14 anos!'

const h2 = document.querySelector('div.s1-content div.content-text h2')
const h1 = document.querySelector('div.s1-content div.content-text h1')
const p = document.querySelector('div.s1-content div.content-text p')
const initLink = document.querySelector('div.s1-content div.content-text a')

function write(tagReference, text, time, index = 0) {
   return new Promise(resolve => {
      if (index < text.length) {
         tagReference.innerHTML += text.charAt(index); // Adiciona o caractere
         setTimeout(() => resolve(write(tagReference, text, time, index + 1)), time); // Chama o próximo caractere
      } else {
         resolve(); // Conclui a Promise
      }
   });
}

async function executar() {
   await write(h2, h2Text, 70);
   await write(h1, h1Text, 70);
   h1.innerHTML += "<span></span>"
   const span = document.querySelector('div.s1-content div.content-text h1 span')
   await write(span, spanText, 70);
   await write(p, pText, 35);
   initLink.style = 'opacity: 1'
}

executar();

// ----------------------------

const fromLeftRepeat = {
   duration: 1000,
   distance: "30%",
   origin: 'left',
   reset: true,
   viewFactor: 1,
}

const fromRight = {
   duration: 1000,
   distance: "30%",
   origin: 'right',
   viewFactor: 0.3,
}

const fromBottom = {
   duration: 1500,
   distance: "30%",
   origin: "bottom", 
   viewFactor: 0.8,
}

ScrollReveal().reveal('.t1', fromLeftRepeat);
ScrollReveal().reveal('.t2', fromLeftRepeat);
ScrollReveal().reveal('.t3', fromLeftRepeat);

ScrollReveal().reveal('.text', fromRight);

ScrollReveal().reveal('.k-centralizer > section > img', fromBottom)

ScrollReveal().reveal('.card', fromRight)