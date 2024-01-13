const botao = document.querySelector(".btn-top");

window.addEventListener("scroll", function(){
    if (window.scrollY == 0){
        botao.classList.remove("visible");
    }else{
        botao.classList.add("visible");
    }
});