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
     * ctx canvas 上下文
     */
    direction: function (x, y, z, r, ctx) {
        // let ctx:any=ctx
        // TODO 度数
        //起始点
        ctx.beginPath();
        ctx.moveTo(x, y);
        var x1 = 0;
        var y1 = 0;
        //正数时候
        if (r >= 0) {
            if (r <= 90) {
                x1 = x + Math.sin(r) * z; //得到0-90°旋转的X轴坐标
                y1 = y - Math.tan(r) * z;
            }
            else if (r <= 180) {
                x1 = x + Math.cos(r - 90) * z;
                y1 = y + Math.sin(180 - r) * z;
            }
            else if (r <= 270) {
                //todo
            }
            else {
            }
        }
        else {
            //TODO 如果为负数的时候
        }
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = "red";
        ctx.stroke();
        console.log(x, y);
        console.log(x1, y1);
    }
};
