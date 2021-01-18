/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function myFunction() {

let age= prompt("How old are you?");
let gender= prompt("What gender are you?");
let town= prompt("What town are you from?");

    let con= confirm("You have entered " + age +" years old " + gender +" and "+ " you live in " +town);
    if (con !== true){
    return(myFunction());
    }
}
myFunction();
