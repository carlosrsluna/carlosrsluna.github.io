const navBar = document.querySelector('#navbar')
const invisibleBtn = document.querySelector('#invisible-btn')

function openNavBar(){
   navBar.style = 'right: 0px;'
   invisibleBtn.style = 'display: block;'
}

function closeNavBar(){
   navBar.style = 'rigth: -100%;'
   invisibleBtn.style = 'display: none;'
}

const mainSection = document.querySelector('main')
const header = document.querySelector('header')
let mainDist

window.addEventListener('scroll', () => {
   mainDist = mainSection.getBoundingClientRect().top

   console.log(mainDist)
   if (mainDist < 83) {
      header.style = 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;'
   }else {
      header.style = 'box-shadow: 0px'
   }
})

const fromLeft = {
   duration: 1000,
   distance: "30%",
   origin: 'left',
   viewFactor: .3,
}

const fromRight = {
   duration: 1000,
   distance: "30%",
   origin: 'right',
   viewFactor: 0.3,
}

ScrollReveal().reveal("#introduction", fromLeft)
ScrollReveal().reveal(".dish", fromLeft)
ScrollReveal().reveal("#testimonials > div > img", fromLeft)

ScrollReveal().reveal("#hero", fromRight)
ScrollReveal().reveal(".testimonial", fromRight)