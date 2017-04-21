var oStatus=JSON.parse(sessionStorage.getItem("die"));
console.log(oStatus);
for(var i=0; i<oStatus.length;i++ ){
	vote=document .createElement("div");
	vote.className="vote";
	vote.innerHTML="<a>"+"<p class='status'>"+oStatus[i].identity+"</p>"+"<div id='number'>"+oStatus[i].num+"号"+" </div>"+ "</a>";
    content.appendChild(vote);
}
var allName = document.getElementsByClassName("status");
for(var i=0;i<oStatus.length;i++){
    if(oStatus[i].status=="killed"||oStatus[i].status=="voted"){
        allName[i].style.background = "#d4c7b0";
    }
}
// oStatus[i].onclick = ost();
// function ost(){
//     if(oStatus[i].identity=="killed"){
//             alert("大哥，放过我吧，我都已经死了");
//         }
//         if(oStatus[i].identity=="vote"){
//             alert("大哥，死者为大，别动手好么？");
//         }
//     }
var killPeople;
for (var i = 0; i < allName.length; i++) {
    allName[i].index = i;
    allName[i].onclick = function () {
        //如果该玩家被点击，则触发此函数
        if (oStatus[this.index].status == "killed" || oStatus[this.index].status == 'voted') {
            alert('大哥，放过我吧，我都已经死了💞💙💛💚');
        } 
        else {
            if (killPeople != undefined) {
                allName[killPeople].style.background = "#f5c97b";
                oStatus[killPeople].status = "alive";
            }
            allName[this.index].style.background = 'red';
            killPeople = this.index;
            oStatus[this.index].status = 'voted';
            console.log(oStatus);
        }
    }
}
var castDie=document.getElementById("castDie");
castDie.onclick=function(){
    if(killPeople==undefined){
        alert("请选择一个玩家");
    }
    else{
            statusAll = JSON.stringify(oStatus);
            sessionStorage.oStatus = statusAll;
            console.log(statusAll);
            window.location.href = "log.html";
    }
}