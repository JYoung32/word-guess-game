//make an array that holds pokemon names and make a random generator function to choose from array 
//make the user able to pick a letter with the keyup function
//name comes up as _ _ _ _ and fills in as correct letter is guessed
//wrong letter guess, get put into word bank and number of guesses decreases
//adjust scoreboard for wins and losses

var pokedex = ["pikachu", "bulbasaur", "charmander", "squirtle"]
var pokemon = "";
var chosenPokemon = [];
var wins = 0;
var losses = 0;
var blanks = 0;
var correctBlanks = [];
var wrongGuess = [];
var numberGuess = 10;
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function gameStart(){
pokemon = pokedex[Math.floor(Math.random() * pokedex.length)];
chosenPokemon = pokemon.split("");
blanks = chosenPokemon.length;
for (i = 0; i < blanks; i++){
    correctBlanks.push("_");
}
document.getElementById("pokemon").innerHTML = " " + correctBlanks.join(" ");
//checking values
console.log(pokemon);
console.log(chosenPokemon);
console.log(blanks);
console.log(correctBlanks);
}

//make if/else function  to see if selected letter matches and push if true
function checkLetters(letter){
    var letterInWord = false;
    for (var i = 0; i < blanks; i++){
        if (pokemon[i] == letter){
            letterInWord = true;
        }
    }
    if (letterInWord){
        for (var i = 0; i < blanks; i++){
            if (pokemon[i] == letter){
                correctBlanks[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        numberGuess--;
    }
    console.log(correctBlanks);
}
gameStart();