
window.onload = function(){
	var olink = document.getElementById("mobileLogin");
	var count = 0;
	
	olink.onclick =function (){
		count=count+1;
		if(count%2==0){
			document.getElementById("changContent1").setAttribute("placeholder","输入手机号码");
			document.getElementById("changContent2").setAttribute("placeholder","验证码")
			document.getElementById("mobileLogin").innerHTML = "使用密码登录";
			document.getElementById("yanzhengma").innerHTML = "发送验证码";
			document.getElementById("yanzhengma").style.color = "#22282d";
			document.getElementById("yanzhengma").style.top = "-60px";
			document.getElementById("yanzhengma").style.right = "-175px";
			document.getElementById("changContent1").value = "";
			document.getElementById("changContent2").value = "";
		}else{
			document.getElementById("changContent1").setAttribute("placeholder","邮箱地址或手机号码");
			document.getElementById("changContent2").setAttribute("placeholder","密码")
			document.getElementById("mobileLogin").innerHTML = "使用手机验证码登录";
			document.getElementById("yanzhengma").innerHTML = "忘记密码?";
			document.getElementById("yanzhengma").style.color = "#9c827d";
			document.getElementById("yanzhengma").style.top = "-5px";
			document.getElementById("yanzhengma").style.right = "-155px";
			document.getElementById("changContent1").value = "";
			document.getElementById("changContent2").value = "";
		}
	}
}