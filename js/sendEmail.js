"use strict";

const sendUrl = "api/api-send-email.php";

const btnShare = document.querySelector(".btnShare");

    const frmShare = document.querySelector("#frmShare")
    btnShare.addEventListener("click", showForm);


function showForm(){
    // console.log("click")
    frmShare.classList.add("show");
    btnShare.classList.add("hide");

}






function sendEmail(emailType){
    let name = document.querySelector("[name=txtName]").value
    let email =  document.querySelector("[name=txtEmail]").value
    let text =  document.querySelector("[name=txtText]").value
    console.log(name,email,text)
    event.preventDefault();
    console.log("send!");
    let formData = new FormData();
    formData.append("txtName", name)
    formData.append("txtEmail", email)
    formData.append("txtText", text)
    formData.append("form", emailType)
    // console.log(formData)

    fetch(sendUrl, {
        method: "POST",
        body: formData
        })
            .then(function(res){return res.json()})
            .then(function(response){
                if (response===1) {
                    console.log("yes");
                    location.href="thank-you-contact.html";
                     }else{
                      console.log(response.message)
                     let errorMsg =  document.createElement("h4");
                     errorMsg.className = "errorMsg"
                     errorMsg.innerHTML=response.message;
                        document.querySelector("form").append(errorMsg);
                    }
            })

}

