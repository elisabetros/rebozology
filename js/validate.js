"use strict";

const btnShare = document.querySelector(".btnShare");
if(btnShare){
    const frmShare = document.querySelector("#frmShare")
    btnShare.addEventListener("click", showForm);
}

function showForm(){
    // console.log("click")
    frmShare.classList.add("show");
    btnShare.classList.add("hide");

}
// let form = document.querySelector('form');
let inputString = document.querySelector("input");
let textarea = document.querySelector("textarea");
let emailInput = document.querySelector("input[data-type=email]");
const submitBtn = document.querySelector("input[type=submit]");
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailInput.addEventListener("input", function(){
  let form = emailInput.parentElement.parentElement;
  if(re.test(String(emailInput.value).toLowerCase())){
    emailInput.classList.remove("error")
    // emailInput.classList.add("valid")
  }else{
    emailInput.classList.add("error")
    // emailInput.classList.remove("valid")
    } 
})
// console.log(allInputs)
inputString.addEventListener("input", function(){
    checkInput(inputString);
})
textarea.addEventListener("input", function(){
  if(textarea.value.trim().indexOf(' ') != -1){
    // console.log("there is space")
    checkInput(textarea);
  }
})

function checkInput(input){
    // console.log(i)
    // console.log(allInputs[i])
    let sValue = input.value;
    // console.log(sValue)
    let iMin = input.getAttribute("data-min");
    // console.log(iMin)
    let iMax = input.getAttribute("data-max");
    if( sValue.length < iMin || sValue.length > iMax ){ 
      input.classList.add("error");
      // input.classList.remove("valid");
    }else{
      input.classList.remove("error");
      // input.classList.add("valid");
    }
    if(document.querySelectorAll(".error").length===0  && document.querySelector("form").checkValidity()){
      // console.log("valid")
       submitBtn.disabled=false;
      }else{
        submitBtn.disabled=true;
    }
  
}
// allInputs.forEach((input) => {
//   input.addEventListener("input", function(){
//     let sValue = input.value
//     let iMin = input.getAttribute('data-min') 
//     let iMax = input.getAttribute('data-max')
//     if( sValue.length < iMin || sValue.length > iMax ){ 
//       input.classList.add('error')
//       input.classList.remove('valid')
//     }else{
//       input.classList.remove("error");
//       input.classList.add("valid")
//     }
//     if( document.querySelectorAll('.error').length===0 && document.querySelectorAll(".valid").length===3 ){
//       // console.log("valid")
//       // console.log(document.querySelectorAll("input.valid").length)
//        submitBtn.disabled=false;
//       }else{
//         submitBtn.disabled=true;
//     }
//   })
// });