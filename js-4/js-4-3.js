var arr = JSON.parse(sessionStorage.getItem("rol1"));
console.log(arr);
// function ced{
//     var para = document.createElement("div");//创建span元素节点
//     var node = document.createTextNode("词组：制杖,别看我");//创建文本节点+号
//     para.appendChild(node);//将文本节点植入spab元素
//     document.getElementById("content").appendChild(para);
// }
var content=document.getElementById("content");
var oStatus = [];//存放单个玩家的生存状态的数组
var i;
var sta = document.getElementsByClassName("status");
var killPeople;//死亡玩家号码
var statusAll = '';
for( i=0; i<arr.length; i++ ){
	vote=document .createElement("div");
	vote.className="vote";
	vote.innerHTML="<a>"+"<p class='status'>"+arr[i]+"</p>"+"<div id='number'>"+(i+1)+"号"+" </div>"+ "</a>";

    oStatus[i] = {};//数组中的每个元素都是一个对象，包括身份、号码、状态
    oStatus[i].num = i+1;
    oStatus[i].identity = arr[i];
    oStatus[i].status = "alive"
    oStatus[i].day = 1;
    console.log(oStatus);
    content.appendChild(vote);
}
// for (var i = 0; i < oStatus.length; i++) {
//     //标记死亡玩家
//     if (oStatus[i].status == "killed" || oStatus[i].status == 'voted') {
//         sta[i].style.background = "#9b9b9b";
//     }
// }
for (i = 0; i < arr.length; i++) {
    sta[i].index = i;
    sta[i].onclick = function st() {
        //如果某玩家卡牌被点击，则记录并改变这个玩家的状态
        if (arr[this.index] == '杀手') {
            alert('老铁，别动手，自己人');
        } 
        else {
            if (killPeople != undefined) {
                console.log(sta[killPeople]);
                //检查有没有被选中的人，如果有则将其状态颜色还原
                sta[killPeople].style.background = "#f5c97b";
                oStatus[killPeople].status = "alive";
            }
            sta[this.index].style.background = "red";
            // killPeople = this.index;
            // oStatus[this.index].status = "killed";
            // console.log(oStatus);
            // sessionStorage.setItem("statusAll",JSON.stringify(oStatus));
            // console.log(statusAll);
            killPeople = this.index;
            oStatus[this.index].status = "killed";
            console.log(oStatus);
            statusAll = JSON.stringify(oStatus);
            sessionStorage.oStatus = statusAll;
            console.log(statusAll);
        }
    }
}
//判断是否有选身份
var kill = document .getElementById("kill");

 kill.onclick = function kill() {
        if (killPeople == undefined) {
            alert("请选择一个玩家");
        } else {
            alert(oStatus);
            window.location.href = "log.html";
        }
    }
                                                          
// sta[0].onclick = function sta() {
//     if(status.style.background==="red"){
//         alert                ("大哥，人都死过了，你想鞭尸吗？");
//     }
//     else{
        
//       sta.style.background="red";
    
// }
