/***********************
 * @name JS
 * @author Jo.gel
 * @date 2018/1/5
 ***********************/
function draw() {
	
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	// ctx.clearRect(0,0,500,500); // clear canvas
	ctx.fillRect(200, 200, 100, 100); //画一个矩形
	
	ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16)
	ctx.save();
	ctx.translate(150,150);
	ctx.restore();
	ctx.fillRect(300, 300, 50, 50); //画一个矩形
	console.info('#'+Math.floor(Math.random()*16777215).toString(16));
	var init = setInterval(function () {
		draw()
		clearInterval(init)
	},1000)
}

draw()