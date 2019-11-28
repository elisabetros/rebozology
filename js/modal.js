let massagesData = {
   theToffee: {
       title:"the Toffee",
       type:"Massage",
        whatText:"text about The Toffee",
        image:"the_toffee.png",
        when:["pregnancy", "carrier"],
        tips:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   
    },
    theOther:{
        title:"the Other",
        type:"Massage",
        image:"the_toffee.png",
        whatText:"text about The Other",
        when:["birth", "pregnancy"],
        tips:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
}

   
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
 }

 function closeModal(){
     console.log("close");
     modalContainer.style.display="none";
 }


 function fillModalWithContent(id){
    // console.log(id)
    let title = modalContainer.querySelector(".title");
    let type = modalContainer.querySelector(".type");
    let massageImage = modalContainer.querySelector(".massagesImg");
    let whatText = modalContainer.querySelector(".what");
    let whenWrapper = modalContainer.querySelector(".whenIcons")
    let tips = modalContainer.querySelector(".tips");



//delete previous icons
modalContainer.querySelectorAll(".iconImg").forEach(img=>{
    img.remove();
})
Object.keys(massagesData).forEach((key)=>{
        console.log(key,id);
        if(id==key){
            console.log(massagesData[key].text);
            title.innerText = massagesData[key].title;
            whatText.innerText = massagesData[key].whatText;
            tips.innerText = massagesData[key].tips;
            massageImage.setAttribute("src", "images/"+ massagesData[key].image);
            
            //create Icons
            
            massagesData[key].when.forEach(whenIcon=>{

                let iconImg = document.createElement("img");
                iconImg.className="iconImg";
                iconImg.setAttribute("src", "images/icons/"+ whenIcon + ".svg");
                whenWrapper.appendChild(iconImg);
            })
            
        }
    })
}

 


