var myImage = document.querySelector("img");

myImage.onclick = function(){
	var mySrc = myImage.getAttribute("src");
	if(mySrc === "images/t01497383325fc41f94.webp.jpg"){
		myImage.setAttribute("src","images/firefox2.png");
	}else{
		myImage.setAttribute("src","images/t01497383325fc41f94.webp.jpg");
	}
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h2");

function steUserName(){
	var myName = prompt("Please enter your name.");
	localStorage.setItem("name",myName);
	myHeading.textContent = "XiaDongXu is cool," + myName;
	
	if(!localStorage.getItem("name")){
		setUserName();
	}else{
		var storedName = localStorage.getItem("name");
		myHeading.textContent = "XiaDongXu is cool" + storedName;
	}
}

myButton.onclick = function(){
	setUserName();
}