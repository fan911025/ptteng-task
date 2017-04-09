// 获取div
var col = document.getElementsByTagName("div");
function set() {
    // 设置三个随机数字
    figureA = parseInt(Math.random() * 9);
    figureB = parseInt(Math.random() * 9);
    figureC = parseInt(Math.random() * 9);
    //使生成的数字在console中直观的看到
    console.log(figureA);
    console.log(figureB);
    console.log(figureC);
    //解决生成相同随机数字问题
    if (figureA == figureB || figureA == figureC || figureB == figureC) {
        //为真重新随机数字      
        set();
    }
    //为假时直接输出给随机数字设置随机颜色
    else {
        col[figureA].style.backgroundColor = colors();
        col[figureB].style.backgroundColor = colors();
        col[figureC].style.backgroundColor = colors();
    }
    function colors() {
        // 十六进制随机颜色
        //  return '#'+Math.floor(Math.random()*0xffffff).toString(16);
        // }
        // 设置随机颜色
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ',' + g + ',' + b + ")";
    }   
    // 禁止变成相同色//
    if (col[figureA] == col[figureB] || col[figureA] == col[figureC] || col[figureB] == col[figureC]) {
        //为真重新随机颜色
        colors();
    }
}
// do {
//     var figure = parseInt(Math.random() * 9)
//     var figure_a = parseInt(Math.random() * 9)
//     var figure_b = parseInt(Math.random() * 9)
// } while (figure === figure_a || figure === figure_b || figure_a === figure_b)

var int;
function start() {
    int = window.setInterval(function () {
        end();
        set();
    }, 1000);
    star.disabled = true;
}
function end() {
    for (var i = 0; i < col.length; i++) {
        col[i].style.backgroundColor = "orange";
    }
}
var star = document.getElementById("star");
function over() {
    star.disabled = false;
}