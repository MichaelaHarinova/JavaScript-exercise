/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

//if the local storage exists, take the value and initialize the counter with it
    if (localStorage.getItem("counter") !== null) {
        document.getElementById("target").innerText = localStorage.getItem("counter");
    }

//create increment on click and display it
    document.getElementById("increment").addEventListener("click", event => {
        document.getElementById("target").innerText =
            (parseInt(document.getElementById("target").innerText) + 1).toString();
//store the incremented counter in the local storage
        localStorage.setItem("counter", document.getElementById("target").innerText);
    });

})();
