/***********************
 *@name JS
 *@author Jo.gel
 *@date 2017/9/8
 ***********************/
/******************************
 * 获取圆心宽高
 * ******************************/
var wCanvas = document.getElementById("brand").width;
var hCanvas = document.getElementById("brand").height;

var circle =document.getElementById("brand");//圆心
var gradient = document.getElementById("gradient")//渐变
var c =circle.getContext('2d');
var g =gradient.getContext('2d')

//1 创建渐变
var grdLine =g.createLinearGradient(0,0,200,0);//线条渐变
var grdRadial=g.createRadialGradient(75,50,5,90,60,100);//径向渐变
grdRadial.addColorStop(0,"#0456a2");
grdRadial.addColorStop(1,"#fff")

c.fillStyle=grdRadial;//渲染的颜色
g.fillStyle="#FF8800";//渲染的颜色

/******************************
* 获取window 基本宽高
* */
var w,h;
if(window.innerWidth){
  w=window.innerWidth;
}else {
  w=document.body.clientWidth
}

if(window.innerHeight){
  h=window.innerHeight;
}else {
  h=document.body.clientHeight
}



/******************************
* 绘制圆形
* arc(x,y,r,start,stop)
* ******************************/
c.beginPath();
c.arc(wCanvas*.5,hCanvas*.5,100,0,Math.PI*2,true);
c.closePath();
c.fill();
/*
* 绘制渐变
* **/



//2 填充渐变
g.fillStyle=grdRadial;
g.fillRect(10,10,150,80)