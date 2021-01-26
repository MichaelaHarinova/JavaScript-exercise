/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", () => {
    let firstInput = document.getElementById("pass-one").value;
    let secondInput = document.getElementById("pass-two").value;

    if (firstInput !== secondInput) {
   document.querySelectorAll("input").forEach(input=>input.style.borderColor = "red");
    }
});