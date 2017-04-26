var oStatus = JSON.parse(sessionStorage.getItem("die"));
console.log(oStatus);
var bott = document.getElementById("main-botton");
var killPeopl;//死亡名单
var diepeople = 0;//死亡人数
var survivePeople = 0;//生存人数
var waterPeople = 0;//水民数
var slayerPeople = 0;//杀手数
var i;
var n;
var k;
var v;
var m = 0;
//判断每天是哪两个角色死亡，并在HTML内显示
for (n = 0; n < oStatus.length; n++) {
     //设置变量n
    if (n < oStatus.length / 2) { 
        //因为是两人为一天，所以总人数的数量除以2就是总共的天数，并且最后一天是不能计算的，所以设置小于总天数。
        for (i = 0; i < oStatus.length; i++) {
            if (oStatus[i].day == n) {
            //根据n变量，判断是某一天内都是有谁？
                if (oStatus[i].status == "voted") {
                    v = oStatus[i].num;
                    m++;
                    console.log(v);
                }
                else if (oStatus[i].status == "killed") {
                    k = oStatus[i].num;
                    console.log(k);
                    m++;
                }

                if (m == 2) {
            //因为执行完上方判断是否为水民就立刻下面的代码，并且执行完之后，会再次执行上方的水民、杀手身份的判断，执行了两次第一天。。。
            //这里的判断m==2，是为了在上方两个判断都执行完之后再执行下面的代码。
                    day = document.createElement("div");
                    day.className = "day";
                    day.innerHTML = "<div class='main-bottom-day'>" +
                        "<h3>" + "第" + n + "天" + "</h3>" +
                        "<span>" + "0小时30分钟" + " </span>" +
                        "<p>" + "晚上：" + k + "号被杀手杀死，" + k + "号是" + oStatus[i].identity + "</p>" +
                        "<p>" + "白天：" + v + "号被全民投死，" + v + "号是" + oStatus[i].identity + "</p>" +
                        "</div>";
                    mainBottom.appendChild(day);
                    m = 0;
                    //m变量值归零
                }

            }

        }
    }
}

//判断杀手水民的数量并进行HTML内的展示。
for (var n = 0; n < oStatus.length; n++) {
    if (oStatus[n].status == 'alive') {
        survivePeople++;
        if (oStatus[n].identity == "杀手") {
            slayerPeople++;
        }
        if (oStatus[n].identity == "水民") {
            waterPeople++;
        }
        $('#main-middle-num').html('杀&nbsp;&nbsp;&nbsp;手' + slayerPeople + '人&nbsp;&nbsp; &nbsp;' +
            '警&nbsp;&nbsp;&nbsp;察0人&nbsp;&nbsp;&nbsp;' +
            '水&nbsp;&nbsp;&nbsp;民' + waterPeople + '人');
    }
    else {
        diepeople++;
    }
}
for (var j =0;j<oStatus.length;j++){
        if(waterPeople<=slayerPeople){
         $('.main-top').html('<div class="main-top-img"><br><br>杀手胜利</div>'+
         '<p><strong>太棒了！你知道么？在杀人游戏中只有20%的杀手取得游戏最终的胜利哦！</strong></p>');
        }
        if(slayerPeople==0){
            $('.main-top').html('<div class="main-top-img"><br><br>水民胜利</div>'+
         '<p><strong>太棒了！你知道么？在杀人游戏中只有20%的水民取得游戏最终的胜利哦！</strong></p>');
        }
}