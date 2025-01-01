function menuClicked() {
   if (menu_options.style.display == 'flex') {
      menu_options.style.display = 'none'
   }

   else {
      menu_options.style.display = 'flex'
   }
}

function backTop() {
   document.documentElement.scrollTop = 0;
}

let header = document.querySelector('header')
let btn = document.getElementById('back_top_btn')

let dist = header.getBoundingClientRect().bottom
console.log(dist)

window.addEventListener("scroll", () => {
   console.log("Executando durante o scroll...");

   let dist = header.getBoundingClientRect().bottom
   
   if (dist < 0) {
      btn.style.display = "flex"
   }

   else {
      btn.style.display = "none"
   }
});
