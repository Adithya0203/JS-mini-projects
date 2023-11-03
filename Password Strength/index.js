var pwd = document.getElementById("password");
var message = document.querySelector("p");
var strength = document.getElementById("strength");

pwd.addEventListener("input",()=>{
    if (pwd.value.length > 0){
        message.style.display = "block";
    }
    else{
        message.style.display = "none";
    }
    if (pwd.value.length < 4){
        strength.innerText = "weak";
        pwd.style.borderColor = "red";
    }
    else if (pwd.value.length >= 4 & pwd.value.length < 8){
        strength.innerText = "medium";
        pwd.style.borderColor = "yellow";
    }
    else if (pwd.value.length >= 8){
        strength.innerText = "strong";
        pwd.style.borderColor = "green";
    }
})