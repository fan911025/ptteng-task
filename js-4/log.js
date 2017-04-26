var statusAll = sessionStorage.oStatus;
var oStatus = JSON.parse(statusAll);
console.log(oStatus);
var content=document.getElementById("content");
var vote;
var i=0;
var btn = document.getElementById("decision");
var gotoVote=document.getElementById("gotoVote");
var killPeopl;//死亡名单
var diepeople = 0;//死亡人数
var survivePeople = 0;//生存人数
var waterPeople = 0;//水民数
var slayerPeople = 0;//杀手数
for(var i = 0;i<oStatus.length;i++){
    if(oStatus[i].status == "killed"){
    vote=document .createElement("div");
	vote.className="vote";
	vote.innerHTML="<a>"+oStatus[i].num+"号被杀手杀死了，其真实身份是"+oStatus[i].identity+"</a>";
    content.appendChild(vote); 
    killPeople=oStatus[i];
    console.info(killPeople);   
}
    if(oStatus[i].status == "voted"){
        vote1=document.createElement("div");
	    vote1.className="vote1";
        vote1.innerHTML="<a>"+oStatus[i].num+"号被投票投死了，其真实身份是"+oStatus[i].identity+"</a>";
        content.appendChild(vote1);
        killPeople=oStatus[i];
        console.info(killPeople); 
    }
}
for(var n=0;n<oStatus.length;n++){
    if(oStatus[n].status == 'alive'){
        survivePeople++;
        if(oStatus[n].identity=="杀手"){
            slayerPeople++;
        }
        if(oStatus[n].identity=="水民"){
            waterPeople++;
        }
    }
    else{
        diepeople++;
        }
}
for (var j =0;j<oStatus.length;j++){
        if(waterPeople<=slayerPeople){
            gotoVote.innerHTML="杀手获胜,查看结果";
        }
        else if(slayerPeople==0){
            gotoVote.innerHTML="水民胜利,查看结果";
        }
        else if((diepeople+2)%2==0){
            gotoVote.innerHTML="第"+diepeople+"夜：天黑请闭眼";
        }
        else{
            gotoVote.innerHTML="去投票";
        }
}
console.log(diepeople);
console.info(survivePeople);
console.log(slayerPeople); 
console.info(waterPeople); 
gotoVote.onclick=function (){
    if(gotoVote.innerHTML=="第"+diepeople+"夜：天黑请闭眼"){
    sessionStorage.setItem("die",JSON.stringify(oStatus));
    location.href = "kill.html";   
}
    else if(gotoVote.innerHTML=="杀手获胜,查看结果"){
        sessionStorage.setItem("die",JSON.stringify(oStatus));
        location.href="killVictory.html";
    }
    else if(gotoVote.innerHTML=="水民胜利,查看结果"){
        sessionStorage.setItem("die",JSON.stringify(oStatus));
        location.href="killVictory.html";
    }
    else if(gotoVote.innerHTML=="去投票"){
    sessionStorage.setItem("die",JSON.stringify(oStatus));
    location.href = "vote.html";
    }
}