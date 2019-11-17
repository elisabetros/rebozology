/////     MENU

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




////////    SLIDESHOW

 const slideshowLi = document.querySelectorAll(".slideshow li");
 const slideshowWrapper = document.querySelector(".slideshow");
 const thumbnailsLi = document.querySelectorAll(".thumbnails li");
 const thumbnailsWrapper = document.querySelector(".thumbnails")
 const slideshowText =document.querySelectorAll(".slideshowText li");
 const slideshowTextWrapper = document.querySelector(".slideshowText");
 let i=0;


function removeMainclass(){
      slideshowLi.forEach(slide=>{
    slide.classList.remove('mainImg');
  })
  slideshowText.forEach(textWrapper=>{
    textWrapper.classList.remove('mainText');
  })
  thumbnailsLi.forEach(thumbnail=>{
    thumbnail.classList.remove('active');
  })
}
function addMainClass(slideClass){
  console.log(slideClass);
  slideshowWrapper.querySelector("."+slideClass).classList.add("mainImg");
  thumbnailsWrapper.querySelector("."+slideClass).classList.add("active");
  slideshowTextWrapper.querySelector("."+slideClass).classList.add("mainText");
  }

  let startInterval= setInterval(changeLi, 7900);

  function changeLi(){
    i++
   if (i>=slideshowLi.length){
     i=0;
   }
   // console.log(i)
   removeMainclass();
   addMainClass(slideshowLi[i].className);
   }


  thumbnailsLi.forEach(thumbnail=>{
    thumbnail.addEventListener("click", function(){
      console.log(event.target.parentElement)
      clearInterval(startInterval);
      removeMainclass();  
      addMainClass(event.target.parentElement.className);
      i=0;
      startInterval=setInterval(changeLi, 8000);
    })
  })


// startInterval;


//icon scroll animation

const iconWrapper = document.querySelector("#iconsWrapper");
const howToSection = document.querySelector("#howTo");
const howToSectionHeight = howToSection.clientHeight;
let iconsHeight = iconWrapper.clientHeight;
const pregnancyHowTo = document.querySelector(".duringPregnancy");
const birthHowTo = document.querySelector(".duringBirth");
const postpartumHowTo = document.querySelector(".postpartum");
const carrierHowTo = document.querySelector(".babyCarrier");
const scarfHowTo = document.querySelector(".shawl");
const otherHowTo = document.querySelector(".other");
const pregnancyHowToHeight = pregnancyHowTo.clientHeight;
const birthHowToHeight = birthHowTo.clientHeight;
const postpartumHowToHeight = postpartumHowTo.clientHeight;
const carrierHowToHeight =carrierHowTo.clientHeight;
const scarfHowToHeight =scarfHowTo.clientHeight;
const otherHowToHeight =otherHowTo.clientHeight;
const testimonialSection = document.querySelector("#testimonials");
const testimonialsHeight = testimonialSection.clientHeight;
// iconsHeight+2000;

document.addEventListener('scroll', moveIcons);

// check if element is in view
function inView(section, sectionsHeight) {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = section.getBoundingClientRect().top + scrollY + sectionsHeight;
  // console.log(iconPosition);
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
    return false;
}

function moveIcons() {
  if (inView(howToSection, iconsHeight)) {
      // console.log("animate!")
      iconWrapper.querySelector("#icons").classList.add('shrinkAndMove');
      checkIfHighlightIcon()
  }
   else{
    // console.log("don't animate");
    iconWrapper.querySelector("#icons").classList.remove('shrinkAndMove');
    removeHighlightStyling()
  }
  if(inView(testimonialSection, testimonialsHeight)){
    // console.log("remove Icons")
    iconWrapper.querySelector("#icons").classList.remove('shrinkAndMove');
    removeHighlightStyling()
  }
}
function checkIfHighlightIcon(){

  //Highlite relevant icon
  if (inView(pregnancyHowTo,pregnancyHowToHeight)){
    // console.log("higlite pregnancy icon")
    removeHighlightStyling()
    iconWrapper.querySelector(".iconPregnancy").classList.add("highlightedIcon");

  }
  if (inView(birthHowTo, birthHowToHeight)){
    // console.log("higlite birth icon")
    removeHighlightStyling()
    iconWrapper.querySelector(".iconBirth").classList.add("highlightedIcon");
    
  }
  if (inView(postpartumHowTo,postpartumHowToHeight)){
    // console.log("higlite postpartum icon")
    removeHighlightStyling()
    iconWrapper.querySelector(".iconPostpartum").classList.add("highlightedIcon");
    
  }
  if (inView(carrierHowTo,carrierHowToHeight)){
    // console.log("higlite carrier icon")
    removeHighlightStyling()
    iconWrapper.querySelector(".iconCarrier").classList.add("highlightedIcon");
    
  }
  if (inView(scarfHowTo,scarfHowToHeight)){
    removeHighlightStyling()
    // console.log("higlite scarf icon")
    iconWrapper.querySelector(".iconShawl").classList.add("highlightedIcon");
    
  }
  if (inView(otherHowTo,otherHowToHeight)){
    // console.log("higlite other icon")
    removeHighlightStyling()
    iconWrapper.querySelector(".iconOther").classList.add("highlightedIcon");

  }
}

function removeHighlightStyling(){
  iconWrapper.querySelectorAll(".icon").forEach(icon=>{
    icon.classList.remove("highlightedIcon")
  })
}