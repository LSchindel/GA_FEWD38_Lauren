
var userChoice = "paper";
var computerChoice = "rock";

function playHand() {
//user selects choice 
}

var userWins= ["rockscissors", "paperrock", "scissorspaper"]

var choices = ["rock", "paper", "scissors"];

//computerChoice = choices[Math.random()+choices.length];

function evaluate() {
	var msg = "Computer Wins!";

if(userChoice===computerChoice) {
	msg = "Tie!";
} else {

	var outComes = userChoice + computerChoice;
	$.each(userWins, function(index,value) {
		if(outComes==value){
			msg = "You Win!"
		  }
		});
	}
	return msg;
}

var outcomeMsg = evaluate();
alert(outcomeMsg);

document.getElementById("rock").reset();
document.getElementById("paper").reset();
document.getElementById("scissors").reset();


/*bones missing:
user input - need onclick method that passes on value
random generated by computer
reset button*/
