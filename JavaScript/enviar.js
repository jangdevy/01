btn1 = document.querySelector(".btn1");
btn2 = document.querySelector(".btn2");
btn3 = document.querySelector(".btn3");
btn4 = document.querySelector(".btn4");

btn1.addEventListener("click", function () {
    var text1 = "G";
    localStorage.setItem('G', text1);
    // alert(text1);
})

btn2.addEventListener("click", function () {
    var text2 = "MN";
    localStorage.setItem('MN', text2);
    // alert(text2);
})

btn3.addEventListener("click", function () {
    var text3 = "MI";
    localStorage.setItem('MI', text3);
    // alert(text3);
})

btn4.addEventListener("click", function () {
    var text4 = "Q";
    localStorage.setItem('Q', text4);
    // alert(text4);
})