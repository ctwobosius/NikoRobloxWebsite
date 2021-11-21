let scroll= document.getElementById("scroll-path");

window.onscroll=function(){
    scroll.style.height= window.pageYOffset+ "px";
}