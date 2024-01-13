var item1 = document.querySelector(".item1");
var item2 = document.querySelector(".item2");
var item3 = document.querySelector(".item3");
var item4 = document.querySelector(".item4");

var voltar = document.querySelector(".btn-voltar");

voltar.addEventListener("click", function () {
    localStorage.clear();
})

if (localStorage.getItem("G") === null) {
    // alert("Erro");
    item1.style.display = "none";
}else{
    item1.style.display = "block";
}

if (localStorage.getItem("MN") === null) {
    // alert("Erro");
    item2.style.display = "none";
}else{
    item2.style.display = "block";
}

if (localStorage.getItem("MI") === null) {
    // alert("Erro");
    item3.style.display = "none";
}else{
    item3.style.display = "block";
}

if (localStorage.getItem("Q") === null) {
    // alert("Erro");
    item4.style.display = "none";
}else{
    item4.style.display = "block";
}