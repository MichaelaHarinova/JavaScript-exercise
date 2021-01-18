/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// to get the value of an input: document.getElementById("element-id").value

//  document.getElementById("addition").addEventListener("click", function() {
// perform an addition

function addition() {
    let x = document.getElementById("op-one").value;
    let y = document.getElementById("op-two").value;
    let result = parseInt(x) + parseInt(y);

    alert(result);
}

document.getElementById("addition").addEventListener("click", addition);


//   document.getElementById("substraction").addEventListener("click", function() {
// perform an substraction

function substraction() {
    let x = document.getElementById("op-one").value;
    let y = document.getElementById("op-two").value;
    let result = x - y;

    alert(result);
}

document.getElementById("substraction").addEventListener("click", substraction);

;

//  document.getElementById("multiplication").addEventListener("click", function() {
// perform an multiplication
function multiplication() {
    let x = document.getElementById("op-one").value;
    let y = document.getElementById("op-two").value;
    let result = x * y;

    alert(result);
}

document.getElementById("multiplication").addEventListener("click", multiplication);


//  document.getElementById("division").addEventListener("click", function() {
// perform an division

function division() {
    let x = document.getElementById("op-one").value;
    let y = document.getElementById("op-two").value;
    let result = x / y;

    alert(result);
}

document.getElementById("division").addEventListener("click", division);

