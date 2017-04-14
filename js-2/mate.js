var st = document.getElementById("subtr");//减号按钮元素节点
var ad = document.getElementById("add");//加号按钮元素节点
var number = num.value;
function assign(){
    var TotalN = Number(number);//将参数转换为数字
    var arr=[];//总数组
    var arrA=[];//杀手数组
    var arrB=[];//水民数组
    switch (num.value){
       case "6":
       case "7":
       case "8":
       x = 1;
       break; 
       case "9":
       case "10":
       case "11":
       x = 2;
       break;

       case "12":
       case "13":
       case "14":
       x = 3;
       break;

       case "15":
       case "16":
       case "17":
       case "18":
       x = 5;
       break;

    //    default:
    //    break;
}
y = number - x;
var rol1 = document.getElementById("role");
rol1.innerHTML = x;
var rol2 =document.getElementById("role2");
rol2.innerHTML = y;
alert("杀手数量为:"+ x +","+"水民数量为:"+ y);
//填充数组
for(var i = 1; i<=TotalN;i++){
    arr.push(i);
}
alert("总人数顺序："+ arr);

  //洗牌算法，打乱总人数数组顺序
  Array.prototype.shuffle = function() {
    var input = this;
    for (var i = input.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));//获取小于this.length的随机整数
      var itemAtIdex = input[randomIndex];
      input[randomIndex] = input[i];
      input[i] = itemAtIdex;//input[randomIndex]和input[i]交换值
    }
    // return input;
  }

  arr.shuffle();                                                             
  alert("洗牌后总人数顺序"+arr);
  //输出杀手数组，水民数组
  for (i=0;i < x; i++) {
    arrA.push(arr[i]);
  }
 alert("杀手的数组包含"+arrA);

  for (i=x;i < TotalN;i++) {
    arrB.push(arr[i]);
  }
  alert("水民的数组包含"+arrB);

  //把杀手数组、水民数组按从小到大降序排列
  arrA.sort(function(a,b){return a-b;});
  arrB.sort(function(a,b){return a-b;});
  alert("杀手数组为："+arrA);
  alert("水民数组为："+arrB);
//避免数据堆积
document.getElementById("A").innerHTML = "";
document.getElementById("B").innerHTML = "";
//创建节点使其在html中显示
for (i=0;i<x;i++){
    var para = document.createElement("span");//创建span元素节点
    var node = document.createTextNode(arrA[i]+"号");//创建文本节点+号
    para.appendChild(node);//将文本节点植入span元素
    document.getElementById("A").appendChild(para);//将span节点植入ID为a的div节点内
}
for (i=0;i<y;i++){
    var para = document.createElement("span");   //创建span元素节点

    var node = document.createTextNode(arrB[i]+"号");//创建文本节点+号
    para.appendChild(node);//将文本节点植入span元素
    document.getElementById("B").appendChild(para);//将span节点植入ID为a的div节点内
}
}
//减法函数
function subtract() {
  if(number>6 && number<=18) {
    number--;
  }
  else {
    number = 6;
    alert("最少6人！");
  }
  document.getElementById("num").value = number;
}
//加法函数
function add() {
  if(number>=6 && number<18) {
    number++;
  }
  else {
    number = 18;
    alert("最多18人！");
  }
  document.getElementById("num").value = number;
}

function change(){
    number = document.getElementById("num").valu;
    if(number<6||number>18){
    }
    else{
        alert("人数超出范围，请重新输入0~18范围内的数字");
        number = 6;
    }
}
function click() {
  // 定义加减的点击事件
  ad.onclick=add;
  st.onclick=subtract;
  // 定义input的输入事件，value值改变
  num.oninput=change;
  // 检测事件
  btn.onclick = assign;
}
click();