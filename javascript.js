const options = ["rocks", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = options[Math.floor(Math.random() * options.length)];
	return choice;
}

function getHumanChoice() {}

function playRound(humanScore, computerScore) {
	if (humanScore == computerScore) {
		return "Tie";
	} else if ((humanScore == "rock" && computerScore == "scissor") || (humanScore == "scrissor" && computerScore == "paper") || (humanScore == "scissor" && computerScore == "rock")) {
		return "Player";
	} else {
		return "Computer";
	}
}

getComputerChoice();
