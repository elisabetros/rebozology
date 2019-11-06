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
  console.log(slideClass)
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
  let startInterval= setInterval(changeLi, 5000);

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
      startInterval=setInterval(changeLi, 5000);
    })
  })


// startInterval;