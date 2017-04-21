// var statusAll = sessionStorage.oStatus;
// var oStatus = JSON.parse(statusAll);
// console.log(oStatus);
// var content=document.getElementById("content");
// var vote;
// var btn = document.getElementById("decision");
// var killPeopl;//死亡名单
// for(var i = 0;i<oStatus.length;i++){
//     if(oStatus[i].status == "killed"){
//     btn.innerHTML="全民投票";
//     vote=document .createElement("div");
// 	vote.className="vote";
// 	vote.innerHTML="<a>"+oStatus[i].num+"号被投票投死了，其真实身份是"+oStatus[i].identity+"</a>";
//     content.appendChild(vote); 
//     killPeople=oStatus[i];
//     console.log(killPeople);   
// }
//     if(oStatus[i].status == "voted"){
//         btn.innerHTML="全民投票";
//         vote.innerHTMLE="oStatus[i].num"+"号被投票投死了，其真实身份是"+"oStatus[i].identuty";
//         content.appendChild(vote);
//     }
// }
decision.onclick=function (){
    // sessionStorage.setItem("die",JSON.stringify(oStatus));
    location.href = "js-4-3.html";
}
