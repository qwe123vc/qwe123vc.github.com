
function toggle(){
	// 界面按钮
	var blur = document.getElementById('blur'); 
	blur.classList.toggle('active');
	// 内部按钮
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
}
