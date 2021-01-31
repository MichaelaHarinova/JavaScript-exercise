/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
    let squareNumbers= [];//an empty array to store the numbers I will get
        for (let i=1; i<=21; i++){ //loop loops trough each number (21x in total)
          if (Math.sqrt(i) %1 === 0){//Math.sqrt gets all numbers square roots. Get the whole numbers only by using (%1 =show rests x1 which need to have NO rest= 0).
             //that is why %1===0 = NO rests
              squareNumbers.push(i);
          }
        }
        alert(squareNumbers);


    });

})();
