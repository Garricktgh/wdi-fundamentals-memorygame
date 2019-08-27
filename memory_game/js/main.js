var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
// var cardOne = cards[0];
// var cardTwo = cards[2];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}
}
// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

function flipCard(cardID) {
	// console.log("User flipped " + cardsInPlay[0]);
	// console.log("User flipped " + cardsInPlay[1]);
	cardsInPlay.push(cardID);

	console.log("User flipped " + cardID);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

flipCard(cards[0]);
flipCard(cards[2]);

