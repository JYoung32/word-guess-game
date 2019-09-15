//make an array that holds pokemon names and make a random generator function to choose from array 
//make the user able to pick a letter with the keyup function
//name comes up as _ _ _ _ and fills in as correct letter is guessed
//wrong letter guess, get put into word bank and number of guesses decreases
//adjust scoreboard for wins and losses

var pokedex = ["pikachu", "bulbasaur", "charmander", "squirtle"]
var wins = 0;
var losses = 0;
var numberGuess = 10;
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//generate random choice from array
var pokemon = pokedex[Math.floor(Math.random()*pokedex.length)];
//split the choice into individual letters, store length and generate loop to push an underscore up

document.getElementById("pokemon").innerHTML = pokemon;

//make function  to see if selected letter matches and push if true