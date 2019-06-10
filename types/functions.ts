const _fn={
	random:(num)=>{
		return Math.floor(Math.random()*num)
	},
	/**
	 * @desc  
	 * x X轴坐标
	 * y Y轴坐标
	 * z 线的长度
	 * r 旋转角度，顺时针方向
	 * 
	 */
	direction:(x:number,y:number,z:number,r:number,ctx:[object,Function,any])=>{
	
		//TODO度数
		//起始点
		ctx.beginPath()
		ctx.moveTo(x,y)
		const x1 = x+Math.sin(r)*z//得到0-90°旋转的X轴坐标
		const y1 = y-Math.cos(r)*z
		ctx.lineTo(x1,y1)
		ctx.stroke()
	}
}