const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

const validateForm = () => {
    //using constraint API
    isValid = form.checkValidity();
    
    //style main message for an error
    if(!isValid){
        message.textContent = "Please fill out all the field!";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }

    //CHcek Password match
    if(password1El.value === password2El.value){
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
        passwordMatch = true;
    }else{
        message.textContent = "Make sure passwords match!";
        message.style.color = "red";
        messageContainer.borderColor = "red";
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        passwordMatch = false;
        return;
    }

    //If form is valid and passwords match
    if(isValid && passwordMatch){
        message.textContent = "Successfully Register!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
    
}

const storeFormData = () => {
    const user = {
        user: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }

    console.log(user);
}

const processFormData = (e) => {
    e.preventDefault();

    //validate form
    validateForm();

    //Submit Data If Valid
    if(isValid && passwordMatch){
        storeFormData();
    }
}


//Event Listener

form.addEventListener("submit", processFormData);