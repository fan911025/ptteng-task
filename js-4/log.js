var statusAll = sessionStorage.oStatus;
var oStatus = JSON.parse(statusAll);
console.log(oStatus);
var content=document.getElementById("content");
var vote;
var btn = document.getElementById("decision");
var killPeopl;//死亡名单
for(var i = 0;i<oStatus.length;i++){
    if(oStatus[i].status == "killed"){
    vote=document .createElement("div");
	vote.className="vote";
	vote.innerHTML="<a>"+oStatus[i].num+"号被杀手杀死了，其真实身份是"+oStatus[i].identity+"</a>";
    content.appendChild(vote); 
    killPeople=oStatus[i];
    console.log(killPeople);   
}
    if(oStatus[i].status == "voted"){
        vote1=document.createElement("div");
	    vote1.className="vote1";
        vote1.innerHTML="<a>"+oStatus[i].num+"号被投票投死了，其真实身份是"+oStatus[i].identity+"</a>";
        content.appendChild(vote1);
        killPeople=oStatus[i];
        console.log(killPeople); 
    }
}
var gotoVote=document.getElementById("gotoVote");
// for(var i =0;i<oStatus.length;i++){
//     if(gotoVote.innerHTML=="去投票"){
//        gotoVote.innerHTML=="去杀人" 
//     }
//     if(gotoVote.innerHTML=="去杀人"){
//        gotoVote.innerHTML=="去投票" 
//     }
// }

gotoVote.onclick=function (){
    if(gotoVote.innerHTML=="去投票"){
    sessionStorage.setItem("die",JSON.stringify(oStatus));
    location.href = "vote.html";
}
    if(gotoVote.innerHTML=="去杀人"){
    sessionStorage.setItem("die",JSON.stringify(oStatus));
    location.href = "js-4-3.html";
    }
}