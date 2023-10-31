//ol id使用取得
let list = document.querySelectorAll("list");

//新要素做成
let newLink = document.createElement("a");
//内容插入
newLink.innerHTML = "developer.mozilla.org";
//最后插入
list.append(newLink);

//新<li>
let item = document.createElement("li");
list.append(item);
item.append(newLink);

//要素取得
let remove = document.getElementById("link-2");
//要素消除
//removeLink.parentNote.remove();
removeLink.parentNode.remove();

let btnEvent = document.qetElementById("button1");

btnEvent.onelick = function(){
    console.log("click1按一下");
}
btnEvent.onelick = function(){
    console.log("click2按一下");
}

btnEvent.addEventListener = ("click",()=>{
    console.log("click1按一下");
});

btnEvent.addEventListener = ("click",()=>{
    console.log("click2按一下");
});

function hello
