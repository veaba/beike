/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/6/10
 ***********************/

const canvas= document.querySelector('#canvas')
const width =canvas.width
const height =canvas.height
const color = "red"
console.info(width,height);


const ctx=canvas.getContext('2d')

console.info(ctx);

ctx.beginPath();
ctx.moveTo(width/2, height/2);
ctx.lineTo(100, 120)

let a =1
let timer =setInterval(()=> {
	a++
	ctx.stroke();
	ctx.moveTo(width/2, height/2);
	ctx.lineTo(_fn.random(50),_fn.random(60));
	ctx.stroke();
	console.log(timer)
	if(a>10){
		clearInterval(timer)
	}
},1000)


ctx.stroke();


ctx.beginPath();
ctx.moveTo(width/2, height/2);
ctx.lineTo(200, 300);
ctx.stroke();

const _fn={
	random:(num)=>{
		return Math.floor(Math.random()*num)
	}
}