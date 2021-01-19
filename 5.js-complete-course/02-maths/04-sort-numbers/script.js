/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//function sort() {


//  num.sort();
//  document.getElementById("numbers").innerHTML = num;

function ascendingSort() {
    let num = document.getElementById("numbers").value;
    let stringA = num.split(', ');
    console.log(stringA);

    let int = [];
    for (let i = 0; i < stringA.length; i++) {
        int[i] = parseInt(stringA[i]);
    }
    console.log(int);

    int.sort(function (a, b) {
        return (a - b)
    });
    alert(int);

}

document.getElementById("run").addEventListener("click", ascendingSort);





