
let title = document.querySelector("#title"); 
let hard = document.querySelector("#hard");
let easy = document.querySelector("#easy");
let result = document.querySelector("#outputText");
let colorReset = document.querySelector("#newColors");
let colorSquaresEasy= document.querySelector("#container1").querySelectorAll(".square");
let colorSquaresHard = document.querySelectorAll(".square");

//random color generator function which generates each square block color
//and the color to guess
function randomColorGenerator(x){
	let xR = Math.round(255*Math.random());
	let xG = Math.round(255*Math.random());
	let xB = Math.round(255*Math.random());
	let rgbColor = "rgb("+xR+","+xG+","+xB+")";
	x.style.background = rgbColor;
}

//
window.onload=function(){
  hard.click();
}

//Function to set the game difficulty
function gameDifficulty(diffLevel1, diffLevel2){
	diffLevel1.classList.add("default");
	diffLevel2.classList.remove("default");
}

//Game set to easy
//===================================================
easy.addEventListener("click", function(){
gameDifficulty(easy,hard);

for (let i = 0; i < colorSquaresHard.length; i++){
	colorSquaresHard[i].style.background = "rgb(35,35,35)";
	colorSquaresHard[i].textContent = "";
	colorSquaresHard[i]["style"].border = "none";
	colorSquaresHard[i].style.opacity = "1.0";
}
	result.textContent = "";
	title.style.background = "rgb(25,100,200)";

for (let i = 0; i < colorSquaresEasy.length; i++){
	randomColorGenerator(colorSquaresEasy[i]);
}
//define the initial rgb to guess
let rgbToGuessEasy = document.querySelector("#guessColor");
let randColorEasy = colorSquaresEasy[Math.round(2*Math.random())]["style"].background;
rgbToGuessEasy.textContent = randColorEasy;

//Defines event when user guesses color square and clicks their guess
for (let j = 0; j < colorSquaresEasy.length; j++){	
	colorSquaresEasy[j].addEventListener("click", function(){

		if (colorSquaresEasy[j]["style"].background !== rgbToGuessEasy.textContent) {
		colorSquaresEasy[j].style.opacity = "0.5";
		colorSquaresEasy[j].textContent = colorSquaresEasy[j]["style"].background;
		result.textContent = "NO! GUESS AGAIN";
	}
		else if (colorSquaresEasy[j]["style"].background == rgbToGuessEasy.textContent) {
		colorSquaresEasy[j]["style"].border = "5px solid white";
		colorSquaresEasy[j].textContent = "CORRECT";
		result.textContent = "CORRECT! YOU WIN";
		title.style.background = rgbToGuessEasy.textContent;
	}
});
}
});

//game set to hard
//========================================================
hard.addEventListener("click", function(){
gameDifficulty(hard,easy);

for (let i = 0; i < colorSquaresHard.length; i++){
	colorSquaresHard[i].textContent = "";
	colorSquaresHard[i]["style"].border = "none";
	colorSquaresHard[i].style.opacity = "1.0";
}
	result.textContent = "";
	title.style.background = "rgb(25,100,200)";

for (let i = 0; i < colorSquaresHard.length; i++){
	randomColorGenerator(colorSquaresHard[i]);
}

//define the initial rgb to guess
let rgbToGuess = document.querySelector("#guessColor");
let randColor = colorSquaresHard[Math.round(5*Math.random())]["style"].background;
rgbToGuess.textContent = randColor;

//Defines event when user guesses color square and clicks their guess
for (let j = 0; j < colorSquaresHard.length; j++){	
	colorSquaresHard[j].addEventListener("click", function(){

		if (colorSquaresHard[j]["style"].background !== rgbToGuess.textContent) {
		colorSquaresHard[j].style.opacity = "0.5";
		colorSquaresHard[j].textContent = colorSquaresHard[j]["style"].background;
		result.textContent = "NO! GUESS AGAIN";
	}
		else if (colorSquaresHard[j]["style"].background == rgbToGuess.textContent) {
		colorSquaresHard[j]["style"].border = "5px solid white";
		colorSquaresHard[j].textContent = "CORRECT";
		result.textContent = "CORRECT! YOU WIN";
		title.style.background = rgbToGuess.textContent;
	}
});
}
});

colorReset.addEventListener("click", function(){
	//reset the color boxes and redefine rgb to guess
	if (hard.classList.value == "default"){
	for (let i = 0; i < colorSquaresHard.length; i++){
		randomColorGenerator(colorSquaresHard[i]);
		colorSquaresHard[i].textContent = "";
		colorSquaresHard[i]["style"].border = "none";
		colorSquaresHard[i].style.opacity = "1.0";
		rgbToGuess = document.querySelector("#guessColor");
		randColor = colorSquaresHard[Math.round(5*Math.random())]["style"].background;
		rgbToGuess.textContent = randColor;
	}
	}
	else {
	for (let i = 0; i < colorSquaresEasy.length; i++){
		randomColorGenerator(colorSquaresEasy[i]);
		colorSquaresEasy[i].textContent = "";
		colorSquaresEasy[i]["style"].border = "none";
		colorSquaresEasy[i].style.opacity = "1.0";
		rgbToGuessEasy = document.querySelector("#guessColor");
		randColorEasy = colorSquaresEasy[Math.round(2*Math.random())]["style"].background;
		rgbToGuessEasy.textContent = randColorEasy;
	}
	}
		result.textContent = "";
		title.style.background = "rgb(25,100,200)";
});

