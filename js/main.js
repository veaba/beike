"use strict";
/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/6/10
 ***********************/
/*构造 11
- 根据方向来旋转

*/
var canvas = document.querySelector('#canvas');
var width = Number(canvas.width || 0);
var height = Number(canvas.height || 0);
var color = "red";
console.info(width, height);
var ctx = canvas.getContext('2d');
console.info(ctx);
ctx.beginPath();
ctx.moveTo((width) / 2, height / 2);
ctx.lineTo(100, 120);
var a = 1;
var timer = setInterval(function () {
    a++;
    ctx.stroke();
    ctx.moveTo(width / 2, height / 2);
    ctx.lineTo(_fn.random(50), _fn.random(60));
    ctx.stroke();
    console.log(timer);
    if (a > 10) {
        clearInterval(timer);
    }
}, 1000);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(width / 2, height / 2);
ctx.lineTo(200, 300);
ctx.stroke();
var _fn = {
    random: function (num) {
        return Math.floor(Math.random() * num);
    },
    /**
     * @desc
     * x
     * y
     * z 长度
     * r旋转角度，顺时针方向
     *
     */
    direction: function (x, y, z, r) {
        console.log(x);
    }
};
