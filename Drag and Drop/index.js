var items = document.getElementsByClassName("list");
var leftBox= document.getElementById("left");
var rightBox = document.getElementById("right");

for (list of items){
    list.addEventListener("dragstart",function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })

        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })

        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            selected = null;
        })
    })
}