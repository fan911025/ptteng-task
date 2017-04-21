var arr = JSON.parse(sessionStorage.getItem("rol1"));
console.log(arr);
// function ced{
//     var para = document.createElement("div");//创建span元素节点
//     var node = document.createTextNode("词组：制杖,别看我");//创建文本节点+号
//     para.appendChild(node);//将文本节点植入spab元素
//     document.getElementById("content").appendChild(para);
// }
var content=document.getElementById("content");
var box;
var i;
for( i=0; i<arr.length; i++ ){
	vote=document .createElement("div");
	vote.className="vote";
	vote.innerHTML="<a>"+"<p class='status'>"+arr[i]+"</p>"+"<div id='number'>"+(i+1)+"号"+" </div>"+ "</a>";
	content.appendChild(vote);
}