'Use Strict'
const mobileMenu = document.querySelector(".menu")
const crossIcon  = document.querySelector(".arrow")
const hamburgerMenu = document.querySelector(".hamburger")
hamburgerMenu.addEventListener("click", (e)=>{
  mobileMenu.classList.add("right-[20px]")
  hamburgerMenu.classList.add("hidden")
 
})
crossIcon.addEventListener("click", (e)=>{
    mobileMenu.classList.remove("right-[20px]")
    hamburgerMenu.classList.remove("hidden")
    console.log("arrow pressed")
})

const heading = document.querySelector(".h-heading")
heading.addEventListener("click", ()=>{
  heading.classList.toggle("active")
})