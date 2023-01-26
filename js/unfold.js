window.onload=function(){
	var open=document.getElementById("akai");
	var close=document.getElementById("uanbi");
	var zhankaishouqi=document.getElementsByClassName("zhankaishouqi");
	
	open.onclick=function(){
		zhankaishouqi[0].style.height="300px";
		open.style.display="none";
		close.style.display="block";
	};
	close.onclick=function(){
		zhankaishouqi[0].style.height="65px";
		open.style.display="block";
		close.style.display="none";
	};
	
}