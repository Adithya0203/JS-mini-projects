var toggle = document.getElementById("toggleicon");
var password = document.getElementById("password");

toggle.onclick = function()
{
    if(password.type === "password"){
        password.type = "text";
        toggle.src = "eye-open.png";
    }
    else{
        password.type="password";
        toggle.src = "eye-close.png";
    }
}