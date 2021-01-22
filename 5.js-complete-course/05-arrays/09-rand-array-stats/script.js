/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function () {
    function randomGenerator(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomNumbers= [];
    for(let i=1; i<=10; i++){
        randomNumbers.push(randomGenerator(1,100));

        document.getElementById("n-"+ i).innerText = randomNumbers[i-1];
    }

    document.getElementById("min").innerText = randomNumbers.sort((a,b)=> a-b)[0];
    document.getElementById("max").innerText = randomNumbers.sort((a,b)=> b-a)[0];
    document.getElementById("sum").innerText = randomNumbers.reduce((a,b)=> a+b);
    document.getElementById("average").innerText = randomNumbers.reduce((a,b)=> a+b)/randomNumbers.length;
});
