var gallery = document.querySelector(".gallery");
var backBtn = document.getElementById("backBtn");
var nextBtn = document.getElementById("nextBtn");

gallery.addEventListener("wheel",(e) =>{
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
    gallery.style.scrollBehavior = "auto";
})

nextBtn.addEventListener("click",(e) =>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += 900;
})

backBtn.addEventListener("click",(e) =>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= 900;
})