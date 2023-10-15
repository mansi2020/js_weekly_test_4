let userName = document.getElementById("userName");
let password = document.getElementById("password");
let button = document.getElementsByTagName("button");
let errorMessage = document.querySelector("#userNameErrorMessages");
let errorMessagePassword = document.querySelector("#passwordErrorMessages");
// console.log(errorMessage.innerText);

//todo check special character in userfetch text
// ASCII value lies in the ranges [32, 47], [58, 64], [91, 96] or [123, 126].
function checkSpecialCharacter(userNameValue){
    let length = userNameValue.length;
    let flag = false;
    for(let i=0; i<length; i++){
        if((userNameValue[i] >= " " && userNameValue[i] <= "/") || (userNameValue[i] >= ":" && userNameValue[i] <= "@") || (userNameValue[i] >= "[" && userNameValue[i] <= "`") || (userNameValue[i] >= "{" && userNameValue[i] <= "~")){
            flag = true;
        }
    }
    return flag;
}

//todo check number in userfetch text
function checkNumber(userNameValue){
    let length = userNameValue.length;
    let flag = false;
    for(let i=0; i<length; i++){
        if(userNameValue[i] >= "0" && userNameValue[i] <= "9"){
            flag = true;
        }  
    }
    return flag;
}

//todo username and password validation
button[0].addEventListener("click", () => {

    //todo username validation code
    //flage for username validation & password validation
    let flagUser = false;
    let flagPassword = false;

    //convert input text for username string into array
    let userNameValue = userName.value.split("");

    //check special character is present or not
    let checkUserNameSpecialCharacter = checkSpecialCharacter(userNameValue);

    //check number is present or not
    let checkUserNameNum = checkNumber(userNameValue);

    //check = first character is uppercase or not
    function isUpperCase(str) {
        return str === str?.toUpperCase();;
    }

    //check username validation
    if (!isUpperCase(userNameValue[0]) ||  userNameValue.length < 8 ||checkUserNameSpecialCharacter === false || checkUserNameNum === false) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Username should be starting from an upper case letter, should contain at least 8 characters and one special one number!";
    }else{
        flagUser = true;
        errorMessage.style.display = "none";
    }  
    
    //todo check password validation
    
    //convert input text for username string into array
    let passwordValue = password.value.split("");

    //check special character is present or not
    let checkPasswordSpecialCharacter = checkSpecialCharacter(passwordValue);

    //check password validation
    let length = checkPasswordSpecialCharacter.length;
    if (checkPasswordSpecialCharacter === false || length < 8 || length > 20) {
        errorMessagePassword.style.display = "block";
        errorMessagePassword.innerHTML = "Password should also contain one special character and should be minimum 8 characters and maximum 20 characters";
    }else{
        flagPassword = true;
        errorMessagePassword.style.display = "none";
    } 

    if(flagUser == true && flagPassword == true){
        alert(`Username : ${userName.value}
         Password : ${password.value}`)
    }
})
