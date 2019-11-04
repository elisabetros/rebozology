let menuOpen = false;
const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");
const bars = menuIcon.querySelectorAll("rect");
let menuLinks = document.querySelectorAll(".menu>nav>a");
const header = document.querySelector("header");
menuIcon.addEventListener("click", () => {
  // console.log("menu clicked")
  toggleMenu();
});
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    toggleMenu;
  });
});
// Link clicked menu closed

let toggleMenu = () => {
  // console.log("oopen");
  menuOpen = !menuOpen;
  bars[0].classList.toggle("rotateDown");
  bars[1].classList.toggle("fadeOut");
  bars[2].classList.toggle("rotateUp");
  menu.classList.toggle("hiddenMenu");
};

//MENU ends

// Slideshow

// Show each image on click
  /*
  give each image the same class, but one the active/main


  change images after 2 seconds
  */
 let slideshowImg = document.querySelectorAll("#hero img");
slideshowImg.forEach(image=>{
  image.addEventListener('click', function(){
    console.log(event);
    removeMainClass();
    addMainClass(event.target);
  })
})
  function addMainClass(image){
    image.classList.add("mainImg");
    image.classList.remove("secondaryImg");
  }

  function removeMainClass(){
    slideshowImg.forEach(image=>{
      image.classList.remove("mainImg");
      image.classList.add("secondaryImg");
    })
  }