/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", faktorial);

function faktorial() {
    let number = document.getElementById("number").value;
    let result = 1;

    while (number > 0) {
        result *= number;
        number = number - 1;
    }
    alert(result)

}







