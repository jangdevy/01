var button = document.querySelector(".btn-show");

var link1 = document.querySelector(".remove1");
var link2 = document.querySelector(".remove2");
var link3 = document.querySelector(".remove3");
var link4 = document.querySelector(".remove4");


button.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
});

link1.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
});
link2.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
});
link3.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
});
link4.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
});