let label = document.getElementById("label");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let let button3 = document.getElementById("change-text3");

button1.addEventListener("click", ()=>{
    label.innerHTML = "苹果";
    });

button2.addEventListener("click", ()=>{
    label.innerHTML = "香蕉";
    });
button3.addEventListener("click", ()=>{
    label.innerHTML = "橘子";
    });