/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", squash)
function squash(){

    let fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];



        let result = [];
        for(let i = 0; i < fruits.length; i++){
            if(result.indexOf(fruits[i]) === -1){ //indexOf looks for the value that is specified in the parameter (fruits(i) => first fruit in the array, second, third...). Then return the position of that value in that array.
                                                  //In this case in the result array. If it is there, it will return the position , if it is not there it will always return the -1.
                result.push(fruits[i]);
            }
        }
        console.log(result) ;
    }



