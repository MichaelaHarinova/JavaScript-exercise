/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("pass-one").addEventListener("input", (event) => {


        let count = 0;

        for (let i = 0; i < event.target.value.length; i++) {
            let char = event.target.value.charAt(i);
            if (isNaN(parseInt(char))) {
            } else {
                count++;
            }
        }
        if (event.target.value.length >= 8 && count >= 2) {
            document.getElementById("validity").innerText = "Ok";
        } else {
            document.getElementById("validity").innerText = "Not Ok";
        }
    });

})();
