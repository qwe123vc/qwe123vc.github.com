
window.onscroll =function(){
	//  前兼容火狐            	后兼容谷歌
	var topScroll = window.pageYOffset || document.body.scrollTop;  //获取固定所需的距离
	var navdiv = document.getElementById("navTop");
	var yincang = document.getElementById("yinCangNav");
	var lengthen = document.getElementById("Lengthening");
	if ( topScroll > 36){
		navdiv.style.position = "fixed";
		navdiv.style.top = "0";
		navdiv.style.zIndex = "6";
		navdiv.style.width = "100%";
		// navdiv.style.backgroundColor = "rgba(255,255,255,1)";
		
		lengthen.style.right = "88px";
		// lengthen.style.paddingLeft = "100px"

		yincang.style.display = "none";
	}else{
		yincang.style.display = "block";
		lengthen.style.right = "0";
		navdiv.style.position = "static";   // 不滚动时 要恢复原来值 没有设置则为static 
	}
}
