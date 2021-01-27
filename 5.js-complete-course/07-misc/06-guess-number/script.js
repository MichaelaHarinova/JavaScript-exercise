/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function loadNumber() {
    myNumber = (Math.floor(Math.random() * 100) + 1);
}

let myNumber = 0;
loadNumber();
console.log(myNumber);
let guess = parseInt(prompt("Guess a number!"));
console.log(guess);

while(guess !== myNumber) {
    if (guess < myNumber) {
        alert("higher!");

    } else if (guess > myNumber) {
        alert("lower!");
    }
    guess = parseInt(prompt("Guess a number!"));
} alert("That is it!");
//console.log("hi")





