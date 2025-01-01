const navBar = document.querySelector('#navbar')

function openNavbar() {
   navBar.style = 'right: 0px;' 
}

function closeNavBar(){
   navBar.style = 'right: -100%;'
}

const home = document.querySelector('#home')
const header = document.querySelector('#header')
window.addEventListener('scroll', () => {
   let topDist = home.getBoundingClientRect().top

   if (topDist < 0){
      header.style = 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;'
   }else {
      header.style = 'box-shadow: 0px; '
   }
})


const fromLeft = {
   origin: "left",
   distance: '30%',
   duration: 700,
   opacity: 0,
   viewFactor: 0.3,
}
const fromRight = {
   origin: "right",
   distance: '30%',
   duration: 700,
   opacity: 0,
   viewFactor: 0.3,
}
const fromBottom = {
   origin: "bottom",
   distance: '30%',
   duration: 1000,
   opacity: 0,
   viewFactor: 0.3,
}

ScrollReveal().reveal('#home-content', fromLeft)
ScrollReveal().reveal('#about-us-1 > div:nth-child(1)', fromLeft)
ScrollReveal().reveal('.card:nth-child(1)', fromLeft)
ScrollReveal().reveal('.card:nth-child(3)', fromLeft)

ScrollReveal().reveal('#about-us-1 > div:nth-child(2)', fromRight)
ScrollReveal().reveal('.card:nth-child(2)', fromRight)
ScrollReveal().reveal('.card:nth-child(4)', fromRight)

ScrollReveal().reveal('.achievement', fromBottom)