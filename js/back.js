"use strict";

let backBtn = document.querySelector(".backBtn");
backBtn.addEventListener("click", goBack);

function goBack(){
  window.history.back();
}