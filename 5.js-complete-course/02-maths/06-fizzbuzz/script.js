/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let empty = "";
        if (i % 3 === 0) empty += "fizz";
        if (i % 5 === 0) empty += "buzz";

        console.log(i+" "+ empty || i);
    }
}
fizzbuzz()





