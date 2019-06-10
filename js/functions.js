"use strict";
var _fn = {
    random: function (num) {
        return Math.floor(Math.random() * num);
    },
    /**
     * @desc
     * x X轴坐标
     * y Y轴坐标
     * z 线的长度
     * r 旋转角度，顺时针方向
     *
     */
    direction: function (x, y, z, r, ctx) {
        //TODO度数
        //起始点
        ctx.beginPath();
        ctx.moveTo(x, y);
        var x1 = x + Math.sin(r) * z; //得到0-90°旋转的X轴坐标
        var y1 = y - Math.cos(r) * z;
        ctx.lineTo(x1, y1);
        ctx.stroke();
    }
};
