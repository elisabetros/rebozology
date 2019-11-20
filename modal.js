///// HOW TO USE A REBOZO MODAL

const modalContainer = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const massagesBtns = document.querySelectorAll(".massage");

massagesBtns.forEach(massageBtn=>{
    massageBtn.addEventListener("click", function(){
        openModal(event);
    });
})
 closeBtn.addEventListener("click", closeModal);

 function openModal(e){
    //  console.log(e.target.parentElement.id)
     fillModalWithContent(e.target.parentElement.id);
     modalContainer.style.display="block";

    //  modalContainers
 }

 function closeModal(){
     console.log("close");
     modalContainer.style.display="none";
 }


 function fillModalWithContent(id){
    console.log(id)
 }