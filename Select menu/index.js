var select = document.getElementById("selectfield");
var text = document.getElementById("headtext");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrow = document.getElementById("arrow");

select.onclick = function(){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
}

for(set of options){
    set.onclick = function(){
        text.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    }
}