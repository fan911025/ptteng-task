/**
 * Created by wanwn on 2017/2/24.
 */
// $('#sing').click(
//     // 播放音频
//     function () {
//         var audio = document.getElementById('music');
//         if (audio.paused) {
//             audio.play();
//         } else {
//             audio.pause();
//         }
//     }
// );
//打印玩家身份牌
// var allPlayer = sessionStorage.all;
// var all = JSON.parse(allPlayer);
// var play = '';//存放玩家身份牌信息
//存放单个玩家的生存状态的数组
// var statusAll = '';//存放所有玩家的生存状态的字符串
// for (var i = 0; i < all.length; i++) {
//     play += '<div class="main-content-part"><div class="main-content-part-role-name">'
//         + all[i] + '</div><div class="main-content-part-role-num">' + (i + 1) + '号'
//         + '</div>' + '</div> ';
//     oStatus[i] = {};//数组中的每个元素都是一个对象，包括身份、号码、状态
//     oStatus[i].num = i + 1;
//     oStatus[i].identity = all[i];
//     oStatus[i].status = "alive";
//     oStatus[i].day = 1;
//     console.log(oStatus);
//     $('#main-content').html(play);
// }
var oStatus = [];
var arr = JSON.parse(sessionStorage.getItem("rol1"));
console.log(arr);
var i;
for( i=0; i<arr.length; i++ ){
	vote=document .createElement("div");
	vote.className="vote";
	vote.innerHTML="<a>"+"<p class='status'>"+arr[i]+"</p>"+"<div id='number'>"+(i+1)+"号"+" </div>"+ "</a>";
	content.appendChild(vote);
}


var sta = document.getElementsByClassName("status");
var killPeople;//死亡玩家号码
for (var i = 0; i < all.length; i++) {
    //标记死亡玩家
    if (oStatus[i].status == "killed" || oStatus[i].status == 'voted') {
        sta[i].style.background = "#9b9b9b";
    }
}
for (i = 0; i < sta.length; i++) {
    sta[i].index = i;
    sta[i].onclick = function () {
        //如果某玩家卡牌被点击，则记录并改变这个玩家的状态
        if (arr[this.index] == '杀手') {
            alert('老铁，别动手，自己人');
        } else {
            if (killPeople != undefined) {
                //先检查有没有被选中的人，如果有则将其状态颜色还原
                sta[killPeople].style.background = "#f5c97b";
                // oStatus[killPeople].status = "alive";
            }
            sta[this.index].style.background = "red";
            killPeople = this.index;
            // oStatus[this.index].status = "killed";
            // console.log(oStatus);
            statusAll = JSON.stringify(oStatus);
            sessionStorage.oStatus = statusAll;
            console.log(statusAll);
        }
    }
}
//判断是否有选身份
var kill = document .getElementById("kill");
kill.click(
    function () {
        if (killPeople == undefined) {
            alert("请选择一个玩家");
        } else {
            window.location.href = "daytime.html";
        }
    }
);

