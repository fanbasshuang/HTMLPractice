//要素取得
let text = document.getElementById("text-1");
//中身的确认
console.log(text);
//要素的内容取得
console.log(text.innerHTML);
//要素的内容变更
text.innerHTML = "你好";
////要素的内容取得 lunch1
let lunch1 = document.getElementById("lunch-1");
//要素的中身确认
console.log(lunch1);
//要素的文章部分取得
console.log(lunch1.innerHTML);
//今天lunch的面包内容取得
lunch1.innerHTML = "今天lunch的面包内容";

//class指定取得
let ex = document.getElementsByClassName("ex1");
console.log(ex);
console.log(ex[0].innerHTML);

//class名字指定取得
let ex2 = document.getElementsByTagName("div");
console.log(ex2);

//要素取得
let link = document.getElementById("link-1");

//要素内容取得
console.log(link.innerHTML);

//url的内容取得
console.log(link.href);

//url的变更
link.href = "https://eng-entrance.com/what-is-dom";
//targert brank
link.target = "_blank";