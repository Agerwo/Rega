const STARTING_POKER_CHIPS = 100; // points 
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let PlayerThreeName = "Jen";

console.log(`Welcome to Texas Hold'em. The champion ship title will be awarded to one of these three players: ${playerOneName}, ${playerThreePoints}, and ${PlayerThreeName}. Each player has ${STARTING_POKER_CHIPS} in their pot. We have an exciting game ahead of us. May the best player win!`)

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -= 25;
playerThreePoints +=75;

gameHasEnded = ((playerOnePoints + playerTwoPoints) === 0) || // three has one
((playerTwoPoints + playerThreePoints) === 0) ||  // one has won
((playerOnePoints + playerThreePoints) === 0);  // two has won 

console.log("Game has ended: ", gameHasEnded);
