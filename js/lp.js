
"use strict";

const howToImagesParents = document.querySelectorAll(".imgFrame");
let nextBtns = document.querySelectorAll(".howToNext")
let prevBtns = document.querySelectorAll(".howToPrevius")

window.addEventListener("load", init)

function init(){
    for(let i= 0; i< nextBtns.length; i++){
      nextBtns[i].addEventListener("click", showNext)
    }
    for(let i= 0; i< prevBtns.length; i++){
      prevBtns[i].addEventListener("click", showPrevius)
    }
}

function showNext(){
  let imgParent =event.target.previousElementSibling;
  let activeImg =imgParent.querySelector(".visible");
  let nextImg = activeImg.nextElementSibling;
  clearClass(imgParent)
  if(nextImg == null){
    nextImg = imgParent.querySelectorAll("img")[0];
    }
    nextImg.classList.add("visible");
}

function showPrevius(){
  let imgParent =event.target.previousElementSibling.previousElementSibling;
  let activeImg =imgParent.querySelector(".visible");
  let prevImg = activeImg.previousElementSibling;

  clearClass(imgParent)
  if(prevImg == null){
    prevImg = imgParent.querySelectorAll("img")[imgParent.querySelectorAll("img").length-1];
    }
    prevImg.classList.add("visible");
}

function clearClass(parent){
    let img = parent.querySelectorAll("img");
    for(let i = 0; i< img.length; i++){
      img[i].classList.remove("visible");
    }
  }

