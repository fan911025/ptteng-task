//获取sessionStorage的数据
var arr = JSON.parse(sessionStorage.getItem("rol1"));
console.log(arr);
// var arrA = JSON.parse(sessionStorage.getItem("rol2"));
// console.log(arrA);
// var arrB = JSON.parse(sessionStorage.getItem("rol3"));
// console.log(arrB);
//声明全局变量
var lo = document.getElementById("look");
var sta = document.getElementById("status");
var btn = document.getElementById("set");
var part = document.getElementById("part");
var phrase = document.getElementById("phrase");
var num = document.getElementById("num");
var z = 0;
var f = 1;
var s = 2;
var i;
var j;
var k;
var i = 0; i < arr.length;
set.onclick = function filipCards() {
    if(btn.innerHTML=="法官日志"){
            sessionStorage.setItem("rol1",JSON.stringify(arr));
            alert(arr);
            location.href = "../js-4/js-4.html";
    }
    else if (btn.innerHTML == "查看" + f + "号身份") {
        if (i++ , i == arr.length) {
            if (arr[i] == "水民") {
                part.style.display = "block";
                phrase.style.display = "block";
                part.innerHTML = "角色：水民";
                phrase.innerHTML = "词组：瞅你咋地？";
                btn.innerHTML = "法官日志";
            }
            else {
                part.style.display = "block";
                phrase.style.display = "block";
                part.innerHTML = "角色：杀手";
                phrase.innerHTML = "词组：你瞅啥？";
                btn.innerHTML = "法官日志";
            }
        }
        else {
            btn.innerHTML = "隐藏并传递" + s + "号身份";
            lo.style.display = "none";
            sta.style.display = "block";
            filipCards1();
        }
    }
    else {
        f++;
        s++;
        btn.innerHTML = "查看" + f + "号身份";
        lo.style.display = "none";
        sta.style.display = "block";
        part.style.display = "none";
        phrase.style.display = "none";
        num.innerHTML = f;
    }
}
function filipCards1() {
    if (arr[i] == "杀手") {
        part.style.display = "block";
        phrase.style.display = "block";
        part.innerHTML = "角色：杀手";
        phrase.innerHTML = "词组：你瞅啥？";
    }
    else if (arr[i] == "水民") {
        part.style.display = "block";
        phrase.style.display = "block";
        part.innerHTML = "角色：水民";
        phrase.innerHTML = "词组：瞅你咋地？";
    }
}
// function click() {
// set.onclick=filipCards;
// }
// click();
// function filipCards(){
// for (var i=0;i>arr.length;i++) {
//     for(var k=0;k>arrA.length;k++){
//         if(arr[i] == arrA[k]){
//             alert(arrA[k]);
//     }
// }
// // for(var j=0;j>arrB.length;j++){
// // if(arr[i] == arrB[j]){ 
// //     alert(arrB[j]);
// // }
// // }
//     }
// }
// if(btn.innerHTML=="法官查看"){
//     alert("好");
// }
// else if(z === arr.length){
//     lo.style.display="none";
//     sta.style.display="block";
//     var para = document.createElement("span");//创建span元素节点
//     var node = document.createTextNode("角色：水民");//创建文本节点+号
//     para.appendChild(node);//将文本节点植入spab元素
//     document.getElementById("part").appendChild(para);
    // var para = document.createElement("span");//创建span元素节点
    // var node = document.createTextNode("词组：制杖,别看我");//创建文本节点+号
    // para.appendChild(node);//将文本节点植入spab元素
    // document.getElementById("phrase").appendChild(para);

// }
// else if(z++,z=== arr.length){

// }
// set.onclick = function filipCards() {
//     for (var i = 0; i < arr.length; i++) {
//         for (var k = 0; k < arrA.length; k++) {
//             if (arr[i] == arrA[k]) {
//     lo.style.display="none";
//     sta.style.display="block";
//     part.innerHTML="角色：杀手";
//     phrase.innerHTML="词组：看你妹啊";
//             }
//     else {
//         for (var j = 0; j < arrB.length; j++) {
//             if (arr[i] == arrB[j]) {
//     lo.style.display="none";
//     sta.style.display="block";
//     part.innerHTML="角色：水民";
//     phrase.innerHTML="词组：靠";
//             }
//         }
    //     for (var j = 0; j < arrB.length; j++) {
    //         if (arr[i] == arrB[j]) {
    // lo.style.display="none";
    // sta.style.display="block";
    // part.innerHTML="角色：水民";
    // phrase.innerHTML="词组：靠";

//             }
//         }
//     }
// }
//     }
// }
