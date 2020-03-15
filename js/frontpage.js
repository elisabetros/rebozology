

"use strict";
window.addEventListener("load", init)


////////    SLIDESHOW

 const slideshowLi = document.querySelectorAll(".slideshow li");
 const slideshowWrapper = document.querySelector(".slideshow");
 const thumbnailsLi = document.querySelectorAll(".thumbnails li");
 const thumbnailsWrapper = document.querySelector(".thumbnails");
 const slideshowText =document.querySelectorAll(".slideshowText li");
 const slideshowTextWrapper = document.querySelector(".slideshowText");
 let n=0;

function removeMainclass(){
  document.querySelector(".mainImg").classList.remove("mainImg");
  document.querySelector(".mainText").classList.remove("mainText");
  thumbnailsWrapper.querySelector(".active").classList.remove("active");
}

function addMainClass(slideClass){
  slideshowWrapper.querySelector("."+slideClass).classList.add("mainImg");
  thumbnailsWrapper.querySelector("."+slideClass).classList.add("active");
  slideshowTextWrapper.querySelector("."+slideClass).classList.add("mainText");
}



function changeLi(){
  n++
  if (n>=slideshowLi.length){
     n=0;
  }
   // console.log(i)
  removeMainclass();
  addMainClass(slideshowLi[n].className);
}


function changeActiveThumbnail(thumbnailClass){
  // console.log(event.target.parentElement)
  clearInterval(startInterval);
  removeMainclass();  
  addMainClass(thumbnailClass);
  // n=i;
  startInterval=setInterval(changeLi, 20000);
}

//  SCROLLING ANIMATIONS

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
const benefits = document.querySelector("#benefitsRebozo");
const benefitsHeight = benefits.clientHeight;



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
  if (inView(howToSection, pregnancyHowToHeight)) {
      // console.log("animate!")
      iconWrapper.querySelector("#icons").classList.add("shrinkAndMove");
      // changeLinks();
      checkIfHighlightIcon();
      moveSvgBox();
  }
   else{
    // console.log("don"t animate");
    iconWrapper.querySelector("#icons").classList.remove("shrinkAndMove");
    removeHighlightStyling();
    // changeLinksBack();
    removeSvgBox();
  }
  if(inView(benefits, benefitsHeight )){
    // console.log("remove Icons")
    iconWrapper.querySelector("#icons").classList.remove("shrinkAndMove");
    removeHighlightStyling();
    // changeLinksBack();
  }
  if(inView(otherHowTo, otherHowToHeight)){
    removeSvgBox();
  }
}

function checkIfHighlightIcon(){
  //Highlite relevant icon
  if (inView(pregnancyHowTo,pregnancyHowToHeight)){
    // console.log("higlite pregnancy icon")
    removeHighlightStyling();
    iconWrapper.querySelector(".icon-Pregnancy").classList.add("highlightedIcon");

  }
  if (inView(birthHowTo, birthHowToHeight)){
    // console.log("higlite birth icon")
    removeHighlightStyling();
    iconWrapper.querySelector(".icon-Birth").classList.add("highlightedIcon");
    
  }
  if (inView(postpartumHowTo,postpartumHowToHeight)){
    // console.log("higlite postpartum icon")
    removeHighlightStyling();
    iconWrapper.querySelector(".icon-Postpartum").classList.add("highlightedIcon");
    
  }
  if (inView(carrierHowTo,carrierHowToHeight)){
    // console.log("higlite carrier icon")
    removeHighlightStyling();
    iconWrapper.querySelector(".icon-Carrier").classList.add("highlightedIcon");
    
  }
  if (inView(scarfHowTo,scarfHowToHeight)){
    removeHighlightStyling();
    // console.log("higlite scarf icon")
    iconWrapper.querySelector(".icon-Shawl").classList.add("highlightedIcon");
    
  }
  if (inView(otherHowTo,otherHowToHeight)){
    // console.log("higlite other icon")
    removeHighlightStyling()
    iconWrapper.querySelector(".icon-Other").classList.add("highlightedIcon");

  }
}

function removeHighlightStyling(){
  let icons = iconWrapper.querySelectorAll(".icon")
  for(let i = 0; i<icons.length;i++){
    icons[i].classList.remove("highlightedIcon");
  }
  iconWrapper.querySelectorAll(".icon").forEach(function(icon){
  })
}


/////   HOW TO USE A REBOZO SLIDESHOWS


const howToImagesParents = document.querySelectorAll(".imgFrame");
let nextBtns = document.querySelectorAll(".howToNext")
let prevBtns = document.querySelectorAll(".howToPrevius")

function makeArray(imgArray){
  console.log(imgArray)
  var temp_array = [];
  let length = imgArray.length;

for (var i = 0; i < length; i++) {
    temp_array.push(imgArray[i]);

}
return temp_array
}


function moveSlide(direction) {
  let imgParent = event.target.parentElement;
  let imgArray = imgParent.querySelectorAll('img')
  // let allImgs = Array.from(imgParent.querySelectorAll('img'))
  let allImgs = makeArray(imgArray);
  // console.log(allImgs)
  let indexOfActive = allImgs.indexOf(imgParent.querySelector('.visible'))
  let showImg = allImgs[indexOfActive+direction]
  clearClass(imgParent)
  if(showImg === undefined){
    if(direction ===-1){
      showImg = allImgs[allImgs.length -1]
    }else{
      showImg = allImgs[0]
    }
  }
  showImg.classList.add('visible')
}    


function initHowtoSlideshow(parent){
  let x = 0;
  if(parent.childElementCount>1){
    // console.log(parent.childElementCount)
    setInterval(function(){
      x++
      // console.log(n)
      if(x+2>=parent.childElementCount){
        x=0;
      }
      clearClass(parent);
      parent.querySelectorAll("img")[x].classList.add("visible");
      
    },6000)
  }
}



function clearClass(parent){
  let img = parent.querySelectorAll("img");
  for(let i = 0; i< img.length; i++){
    img[i].classList.remove("visible");

  }
}




//// PIE CHART

const pieChartElms = document.querySelectorAll(".circle h4");
const pieSvgs = document.querySelectorAll(".pie");
function changePiePart(piePartClass){
  // console.log(piePartClass)
  removeClickedStyle();
  document.querySelector(".pie." + piePartClass).classList.add("clicked")
  document.querySelector("h4." + piePartClass).classList.add("clicked")
  addHideClass()
  document.querySelector(".text-"+piePartClass).classList.remove("hide");
  
}

function removeClickedStyle(){
  for(let i = 0; i<pieSvgs.length; i++){
    pieSvgs[i].classList.remove("clicked");
  }
  for(let i = 0; i<pieChartElms.length; i++){
    pieChartElms[i].classList.remove("clicked");
  }
}
function addHideClass(){
  let divs = document.querySelectorAll(".whyUsText>div");
  for(let i = 0; i< divs.length; i++){
    divs[i].classList.add("hide");

  }
}



////////    SVG HIDE BOX ANIMATION

let hideDiv = document.querySelector("#hideSvgDiv");

function removeSvgBox(){
  hideDiv.style.display = "none";
}
function moveSvgBox(){
  hideDiv.style.display = "block";
}





let startInterval= setInterval(changeLi, 20000);

function init(){
  // console.log("init")
  //click eventlisteners
  for(let i= 0; i< nextBtns.length; i++){
    nextBtns[i].addEventListener("click", function(){
      moveSlide(1)
    })
  }
  for(let i= 0; i< prevBtns.length; i++){
    prevBtns[i].addEventListener("click", function(){
      moveSlide(-1)
    })
  }
      //pie chart
  for(let i = 0; i<pieChartElms.length;i++){
    pieChartElms[i].addEventListener("click", function(){
      let piePartClass= event.target.className;
      changePiePart(piePartClass)
    });
  }
      // hero slideshow thumbnails
  for(let i = 0; i<thumbnailsLi.length; i++){
    thumbnailsLi[i].addEventListener("click", function(){
      let targetClassName =event.target.parentElement.className
      if(targetClassName.indexOf("active") !== -1){
        return;
      //  targetClassName = targetClassName.slice(0,targetClassName.search(" "))
      }
    changeActiveThumbnail(targetClassName)
    })
  }
  // slideshows
  
  howToImagesParents.forEach(function(parent){
    // console.log("start")
    initHowtoSlideshow(parent)
   })

  //scroll eventlisteners
  document.addEventListener("scroll", moveIcons);
}