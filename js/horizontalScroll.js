// 水平滚动条
	var timer = 0;  // 计时器ID
	var speed = 30;  // 轮播 速度  越大越慢
	
	window.onload = function(){
		start();
		document.getElementById("box1").onmouseout = start ;   //鼠标离开就 调用start函数
		document.getElementById("box1").onmouseover = stop ;   //鼠标悬停就 调用stop函数
	} 
	function start(){
		timer = setInterval("scroll()",speed);   // 以speed(15) 的速度播放
	}
	function stop(){
		clearInterval(timer);  //停止(清空)计时器  停止滚动
	}
	function scroll(){   // 控制滚动
										// .ffsetWide 盒子宽度
		if(document.getElementById("copy").offsetWidth - document.getElementById("box1").scrollLeft <= 0 ){
			document.getElementById("box1").scrollLeft = 0;
		}else{
			// document.getSelection
			document.getElementById("box1").scrollLeft ++;   // scrollLeft 滚动距离
			//对象左边界和窗口中可见内容的最左端之间的距离
		}
	}





















