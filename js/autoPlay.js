
	var eprev = document.querySelector(".prev");
	var enext = document.querySelector(".next");

	var esico = document.getElementById("icoList").getElementsByTagName('li');
	var eicoList = document.querySelector('#icoList');
	
	var left = 0;  //left 要初始化为0 否则跑不了
	var timer1;
	run();
	function run(){
		if(left <= -2600){   // 如果播放完 就初始化left=0 重新播放
			left = 0;    
		}
		var m = Math.floor( -left / 1300 );
		
		document.getElementById("Carousel").style.marginLeft = left + "px";
		left = left - 1;  // 每次偏移量为 -10px
		var n = (left % 1300 == 0) ? n = 5000 : n = 15;
		// timer1 = setTimeout(run,10);  //每10毫秒运行一次 
		timer1 = setTimeout(run,n);
		icoChange(m);
	}	
	// 图片定位 指定函数
	function imgChange(n){
		let lt = -(n * 1300);  // 往前走
		document.getElementById("Carousel").style.marginLeft = lt + 'px';
		left = lt;
	}
	
	eprev.onclick = function(){
		// alert("s");  //测试点击效果
		// 定位第一张图片
		// imgChange(0);   测试定位效果
		let prevGo = Math.floor(-left / 1300) - 1;
			
		if( prevGo == -1 ){  // prevGo == -1 第一张的上一张没有图 说明要定位到最后一张
			prevGo = 1;
		}
		// 定位当前图 的上一张图片
		imgChange(prevGo);
	}
	
	enext.onclick = function(){
		// alert("s");  //测试点击效果
		// 定位最后一张图片
		// imgChange(1);  测试定位效果
		
		let nextGo = Math.floor(-left / 1300) + 1;
			
		if( nextGo == 2 ){  // nextGo == 2 最后一张图 的下一张没有图 说明要定位到第一张
			nextGo = 0;
		}
		// 定位当前图 的下一张图
		imgChange(nextGo);
	}
	
	function icoChange(m){
		for(let index = 0 ; index < esico.length ; index++){
			esico[index].style.backgroundColor = '';
		}
		if(m < esico.length){
			esico[m].style.backgroundColor = '#FD4659';
		}
	}
	
	eicoList.onclick = function(){
		var tg = event.target;
		let ico = tg.innerHTML - 1;
		imgChange(ico);
		icoChange(ico);
	}