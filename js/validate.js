// let form = document.querySelector('form');
let allInputs = document.querySelectorAll('input');
let textarea = document.querySelectorAll('textarea');
let emailInput = document.querySelector('input[data-type=email]');
const submitBtn= document.querySelector("input[type=submit]")
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// textarea.addEventListener('input', function(){
//     console.log("input");
// } )
// allInputs.forEach(input => {
//     input.addEventListener('input', function(){
//         let form = input.parentElement.parentElement;
      
//         console.log(form.checkValidity());
//          if(re.test(String(emailInput.value).toLowerCase())){
//              emailInput.classList.remove('inputError')
//             form.querySelector('.button').disabled=false;
//         }else{
//             emailInput.classList.add('inputError')
//             form.querySelector('.button').disabled = true;
//         } 
//         if()
//         {
//             form.querySelector('.button').disabled=false;
//             input.classList.add("error")
//         }else{
//             form.querySelector('.button').disabled = true;
//             input.classList.remove("error")
//         }
  
//     })
// });
submitBtn.addEventListener("click", function(){
    event.preventDefault();
    fnbIsFormValid(document.querySelector("#frmContact"))
} );


function fnbIsFormValid(oForm){
    fvDo( oForm.querySelectorAll('input[data-type]'), function(oElement){
      oElement.classList.remove('error')
    })
    fvDo( oForm.querySelectorAll('input[data-type]'), function(oElement){
      var sValue = oElement.value
      var sDataType = oElement.getAttribute('data-type') // $(oInput).attr('data-type')
      var iMin = oElement.getAttribute('data-min') //$(oInput).attr('data-min')
      var iMax = oElement.getAttribute('data-max') // $(oInput).attr('data-max')  
      switch(sDataType){
        case 'string':
          if( sValue.length < iMin || sValue.length > iMax ){ 
            oElement.classList.add('error')
          }
        break
        case 'integer':
          if( !parseInt(sValue) || parseInt(sValue) < parseInt(iMin) || parseInt(sValue) > parseInt(iMax) ){ 
            oElement.classList.add('error')
          }
        break
        case 'email':
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if( re.test(String(sValue).toLowerCase()) == false ){ 
            oElement.classList.add('error')
          }     
        break      
        default:        
      }
    })  
  
    if( oForm.querySelectorAll('input.error').length ){ return false }
    return true;
  }



function fnbIsFormValid(oForm){
    fvDo( oForm.querySelectorAll('input[data-type]'), function(oElement){
      oElement.classList.remove('error')
    })
    
    fvDo( oForm.querySelectorAll('[data-type]'), function(oElement){
      var sValue = oElement.value
      var sDataType = oElement.getAttribute('data-type') // $(oInput).attr('data-type')
      var iMin = oElement.getAttribute('data-min') //$(oInput).attr('data-min')
      var iMax = oElement.getAttribute('data-max') // $(oInput).attr('data-max')  
      switch(sDataType){
        case 'string':
          if( sValue.length < iMin || sValue.length > iMax ){ 
            oElement.classList.add('error')
          }
        break
        case 'integer':
          if( !parseInt(sValue) || parseInt(sValue) < parseInt(iMin) || parseInt(sValue) > parseInt(iMax) ){ 
            oElement.classList.add('error')
          }
        break
        case 'email':
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if( re.test(String(sValue).toLowerCase()) == false ){ 
            oElement.classList.add('error')
          }     
        break      
        default:        
      }
    })  
  
    if( oForm.querySelectorAll('input.error').length ){ return false }
    return true;
  }





  function fvDo( aElements, fvCallback ){
      console.log(aElements)
    for(var i = 0; i < aElements.length; i++){
      fvCallback( aElements[i] )
    }
  }