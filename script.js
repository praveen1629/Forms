var form =document.getElementById("form");
var FullName =document.getElementById("FullName");
var userName =document.getElementById("userName");
var email=document.getElementById("Email");
var number =document.getElementById("Mobilenumber")
var password= document.getElementById("Password");
var confirmPassword= document.getElementById("ConfirmPassword");

function showErrorMessage(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const errorElem=formControl.querySelector("small");
    errorElem.innerText=message;
}

function showSuccessMessage(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
    const errorElem=formControl.querySelector("small");
    errorElem.innerText="";

}


function checkRequiredField(inputs){
    for(var i=0;i<inputs.length;i++){
        var input=inputs[i];
        if(input.value===""){
            const message=input.id+" is required";
            showErrorMessage(input,message);
        }
        else{
            showSuccessMessage(input);
        }

    }
}



form.addEventListener('submit',function(event){
    event.preventDefault();
    checkRequiredField([userName,email,currentPassword,newPassword]);

})