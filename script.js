function createRandomNum () {
	var num = Math.floor(Math.random() * 6);
	return num;
}

function showDice () {
	var imgArray = ["img1", "img2", "img3", "img4", "img5", "img6"];
	var randomNum = createRandomNum();
	var num1 = imgArray[randomNum];
	if(num1==="img6") {
		document.getElementsByClassName(num1)[0].style.display = "block";
	}
	else {
		document.getElementsByClassName("img6")[0].style.display = "none";
		document.getElementsByClassName(num1)[0].style.display = "block";
	}
	return randomNum + 1;
}

function showDice2 () {
	var imgArray2 = ["img1", "img2", "img3", "img4", "img5", "img6"];
	var randomNum2 = createRandomNum();
	var num2 = imgArray2[randomNum2];
	if(num2==="img6") {
		document.getElementsByClassName(num2)[1].style.display = "block";
	}
	else {
		document.getElementsByClassName("img6")[1].style.display = "none";
		document.getElementsByClassName(num2)[1].style.display = "block";
	}
	return randomNum2 + 1;
}

function winner(){
	var dice1 = showDice();
	var dice2 = showDice2();
	if(dice1>dice2){
	document.querySelector("h1").textContent = "🚩Player 1 wins!";
	}else if(dice1<dice2){
	document.querySelector("h1").textContent = "Player 2 wins!🚩";
	}else{
		document.querySelector("h1").textContent = "🚩DRAW!!!🚩";
	}

}


winner();








// function showDice () {
// 	var num1 = randomNum();
// 	if(num1==="img6") {
// 		document.getElementsByClassName(num1)[1].style.display = "inline-block";
// 	}
// 	else {
// 		document.getElementsByClassName("img6")[1].style.display = "none";
// 		document.getElementsByClassName(num1)[1].style.display = "inline-block";

// 	}
	
	
// }



// function showDice2 () {
// 	var num1 = randomNum();
// 	if(num1==="img6") {
// 		document.getElementsByClassName(num1)[2].style.display = "inline-block";
// 	}
// 	else {
// 		document.getElementsByClassName("img6")[2].style.display = "none";
// 		document.getElementsByClassName(num1)[2].style.display = "inline-block";
	
// 	}
// }
// showDice1();
// showDice2();
