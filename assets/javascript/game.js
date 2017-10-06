var userName = prompt("Please enter your name?");
alert("Welcome! "+userName+". Let's play the guessing game.");


	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var userWon = 0;
	var userLost = 0;
	var userTries = 11;

	var uWins = document.getElementById("wins");
	var uLosses = document.getElementById("losses");
	var uTries = document.getElementById("tries");
	uWins.innerHTML = "You won: "+userWon+ " time/s";
	uLosses.innerHTML = "You  Lost: "+userLost + " time/s";
	uTries.innerHTML = "Your tries left: "+userTries+ " time/s";


	var random = Math.floor(Math.random() * 26);

	var computerChoice = alphabet[random];
	console.log(computerChoice);
	// 

	// var x = event.which || event.keyCode;
	// var userChoice = String.fromCharCode(x);
	
	document.onkeyup = function(event) {
     var userChoice = event.key;
	

	if ((userTries > 0)&&(computerChoice === userChoice)) {
		userWon++;
		uWins.innerHTML = "You won: "+userWon+ " time/s";
		document.getElementById("newDiv").innerHTML= "YOU WON!. Lets give it another shot.";
    	// body.css("background-color: green;");
    	alert("Computer choose -"+computerChoice+". Good Job."); 
    	reset()

	}

	else if ((userTries >= 0) && (computerChoice !== userChoice)) {
		userTries--;
		document.getElementById("newDiv").innerHTML= "No match. Try again harder.";
    	uTries.innerHTML = "Your tries left: "+userTries+ " time/s";
  //   	if (userTries = 0)
	 // 	{
		// userLost++;
		// userTries = 11;
		// document.getElementById("newDiv").innerHTML= "You have lost. Let's do it again.";
  //   	uLosses.innerHTML = "You  Lost: "+userLost + " time/s";
		// return();
		// }
		 if (userTries == 0){
				userLost++;
				document.getElementById("newDiv").innerHTML= "You have lost. Let's do it again.";
		    	uLosses.innerHTML = "You  Lost: "+ userLost + " time/s";
		    	reset()
			}

	}

}

function reset(){
	random = Math.floor(Math.random() * 26);
    computerChoice = alphabet[random];
    userTries = 11;
    uTries.innerHTML = "Your tries left: "+userTries+ " time/s";
    console.log(computerChoice);
}
