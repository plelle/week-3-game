var wins = 0;
	var wordOptions = ["cat", "dog", "elephant", "monkey", "rabbit", "gorilla", "tiger", "lion"];
	var imgOptions = ['assets/images/cat.jpeg', 'assets/images/dog.jpeg', 'assets/images/elephant.jpeg', 'assets/images/monkey.jpeg', 'assets/images/rabbit.jpeg', 'assets/images/gorilla.jpeg', 'assets/images/tiger.jpeg', 'assets/images/lion.jpeg'];
	var randomNumber = Math.floor(Math.random() * wordOptions.length);
	var randomWord = wordOptions[randomNumber];
	var numGuess = 12;
	var lettersGuesses = [];
	var incorrectLetters = [];
	var currentWord = [];
	

	for (var i = 0; i < randomWord.length; i++) {
		if (randomWord === " ") {
			currentWord.push("&nbsp");
		}
		else {
			currentWord.push("_");
		}

currentWordHTML = currentWord.join(" ");
document.querySelector("#currentWord").innerHTML = currentWordHTML;
document.querySelector("#numGuess").innerHTML = numGuess;

document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (randomWord.indexOf(userGuess) >= 0){
		console.log("Correct");

		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] === userGuess) {
				currentWord[i] = userGuess;
			}
		}

		console.log(currentWord);

		currentWordHTML = currentWord.join(" ");
		document.querySelector("#currentWord").innerHTML = currentWordHTML;
	}
	else if (incorrectLetters.indexOf(userGuess) < 0) {
		console.log("Wrong");

		numGuess--;
		document.querySelector("#numGuess").innerHTML = numGuess;

		incorrectLetters.push(userGuess);
		incorrectLettersHTML = incorrectLetters.join(", ");
		document.querySelector("#lettersGuesses").innerHTML = incorrectLettersHTML;

		console.log(incorrectLetters);

	}
	if (currentWord.indexOf("_") < 0) {
		console.log("You Win!");
		document.querySelector("#gameHeader").innerHTML = randomWord;
		document.querySelector("#gameImage").src = imgOptions[randomNumber];
		wins++;
		randomNumber = Math.floor(Math.random() * wordOptions.length);
		randomWord = wordOptions[randomNumber];
		numGuess = 12;
		incorrectLetters = [];
		currentWord = [];

		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] === " ") {
				currentWord.push("&nbsp");
			}
			else {
				currentWord.push("_");
			}
		}

		console.log(randomWord);
		console.log(currentWord);

		document.querySelector("#numWins").innerHTML = wins;

		currentWordHTML = currentWord.join(" ");
		document.querySelector("#currentWord").innerHTML = currentWordHTML;
		document.querySelector("#numGuess").innerHTML = numGuess;
		document.querySelector("#lettersGuesses").innerHTML = incorrectLetters;
	}
	else if (numGuess === 0) {
		console.log("You Lose! HaHa!");
		document.querySelector("#gameHeader").innerHTML = "";
		document.querySelector("#gameImage").src = "assets/images/you-lose.png";

		randomNumber = Math.floor(Math.random() * wordOptions.length);
		randomWord = wordOptions[randomNumber];
		numGuess = 12;
		incorrectLetters = [];
		currentWord = [];

		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] === " ") {
				currentWord.push("&nbsp");
			}
			else {
				currentWord.push("_");
			}
		}

		console.log(randomWord);
		console.log(currentWord);

		currentWordHTML = currentWord.join(" ");
		document.querySelector("#currentWord").innerHTML = currentWordHTML;
		document.querySelector("#numGuess").innerHTML = numGuess;
		document.querySelector("#lettersGuesses").innerHTML = incorrectLetters;
	}
}
}