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
const slideshowText=[
  {
    type: "slidePregnancy",
    header : "PREGNANCY: Do you want to feel more comfortable during your pregnancy and involve your partner through the process",
    text: "The rebozo massages are a natural pain relief method, safe and harmless, recommended by midwives and doulas.  Through the massages you will feel relaxation in your muscles and you involve your partner doing the massages for/with you."
  },
  {
    type: "slideBirth",
    header : "BIRTH: Do you want a natural pain relief and the involvement of your partner through this important moment?",
    text: "The rebozo massages are a natural pain relief, safe and harmless, recommended by midwives and doulas, that you can use in between contractions, your partner can do the massages for relaxation and if the baby needs some help to take the right position, the midwife or doula can do that for you.  "
  },
  {
    type: "slidePostpartum",
    header : "POST-PARTUM: Do you want to close the spiritual, emotional and physical opening that occurs to you with the arrival of a baby?",
    text: "Feel your body again after the birth of your baby with the help of the rebozo."
  },
 {
   type: "slideCarrier",
    header : "BABY CARRIER: Do you want to hold your baby close to you in an easy, cozy and safe way?",
    text: "The rebozo simulates the nest of your womb, so it can give the baby and you comfort, helps the baby to feel safe and stimulate your baby when not sleeping, you can wrap your baby in this wonderful,  one - easy to do - slip knot, nest"
  },
  {
    type:"slideShawl",
    header : "SHAWL OR SCARF: Do you want a life time investment?",
    text: "The rebozo is a sustainable product, carry the rebozo with you and use it as a scarf, shawl or blanket from motherhood to the end of your life."
  },
]
 const slideshowLi = document.querySelectorAll("#hero li");
 let slideshowHeader =document.querySelector(".slideshowText h3")
 let slideshowBodytext =document.querySelector(".slideshowText p")
 let i=0;


function removeMainclass(){
  
    slideshowLi.forEach(slide=>{
    slide.classList.remove('mainImg');
  })
}
function addMainClass(slideClass){
  document.querySelector("."+slideClass).classList.add("mainImg");
  // .classList.add("mainImg");
}
function changeText(slideClass){
  // console.log(slideClass)
  if (slideClass=="slidePregnancy"){
    slideshowHeader.textContent= slideshowText[0].header;
    slideshowBodytext.textContent= slideshowText[0].text;
  }
  if (slideClass== "slideBirth"){
    slideshowHeader.textContent= slideshowText[1].header;
    slideshowBodytext.textContent= slideshowText[1].text;
  }
  if (slideClass== "slidePostpartum"){
    slideshowHeader.textContent= slideshowText[2].header;
    slideshowBodytext.textContent= slideshowText[2].text;
  }
  if (slideClass== "slideCarrier"){
    slideshowHeader.textContent= slideshowText[3].header;
    slideshowBodytext.textContent= slideshowText[3].text;
  }
  if (slideClass== "slideShawl"){
    slideshowHeader.textContent= slideshowText[4].header;
    slideshowBodytext.textContent= slideshowText[4].text;
  }
}
  let startInterval= setInterval(changeLi, 7900);

  function changeLi(){
    i++
   if (i>=slideshowLi.length){
     i=0;
   }
   // console.log(i)
   removeMainclass();
   changeText(slideshowLi[i].className)
   addMainClass(slideshowLi[i].className);
   }


  slideshowLi.forEach(slide=>{
    slide.addEventListener("click", function(){
      // console.log(event.target.parentElement)
      clearInterval(startInterval);
      removeMainclass();  
      changeText(event.target.parentElement.className)
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
      console.log("animate!")
      iconWrapper.querySelector("#icons").classList.add('shrinkAndMove');
      checkIfHighlightIcon()
  }
  else{
    console.log("don't animate");
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