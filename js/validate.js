// let form = document.querySelector('form');
let allInputs = document.querySelectorAll('[data-type=string]');
// console.log(allInputs)
let emailInput = document.querySelector('input[data-type=email]');
const submitBtn = document.querySelector('input[type=submit]');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailInput.addEventListener("input", function(){
  let form = emailInput.parentElement.parentElement;
  if(re.test(String(emailInput.value).toLowerCase())){
    emailInput.classList.remove('error')
    emailInput.classList.add('valid')
  }else{
    emailInput.classList.add('error')
    emailInput.classList.remove('valid')
    } 
})

allInputs.forEach(input => {
  input.addEventListener('input', function(){
    let sValue = input.value
    let iMin = input.getAttribute('data-min') 
    let iMax = input.getAttribute('data-max')
    if( sValue.length < iMin || sValue.length > iMax ){ 
      input.classList.add('error')
      input.classList.remove('valid')
    }else{
      input.classList.remove("error");
      input.classList.add("valid")
    }
    if( document.querySelectorAll('.error').length===0 && document.querySelectorAll(".valid").length===3 ){
      console.log("valid")
      console.log(document.querySelectorAll("input.valid").length)
       submitBtn.disabled=false;
      }else{
        submitBtn.disabled=true;
    }
  })
});