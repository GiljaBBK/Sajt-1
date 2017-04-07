var nav = document.querySelector("nav");
var offset = nav.offsetTop;

window.addEventListener('scroll',function(){
    var fromTop = window.scrollY;
    if(fromTop >= offset){
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
});