const inputElements = document.getElementsByTagName('input');
const myForm = document.getElementById('myform');
const passwordmsg = document.getElementById("passwordmsg");


console.log(inputElements);

myForm.addEventListener("submit", validateForm);


for(const input of inputElements) {
    input.addEventListener("input", (event) => {
        if(event.target.validity.valid){
            event.target.classList.add("inputIsValid");
            console.log("valid input");
        }
        else {
            event.target.classList.add("inputIsInvalid");
            console.log("invalid input");
        }
    })
}

//Presently this only validates the password matching but eventually we may want to check if a username/email already exists!
function validateForm(event){
    event.preventDefault();
    const pw1 = document.getElementById("password1");
    const pw2 = document.getElementById("password2");
    try{
        if(pw1.value === pw2.value) {
            console.log("passwords match");
            console.log("submitting form");
            passwordmsg.textContent="passwords match!"
            passwordmsg.style.color="green";
        }
        else {
            alert("passwords must match");
            passwordmsg.textContent="passwords do not match!"
            passwordmsg.style.color="red";   
            return false;
            //throw new Error("passwords do not match");
        }
    }
    catch(error){
        console.log(error);     
    }
    
    console.log(pw1.value);
}
