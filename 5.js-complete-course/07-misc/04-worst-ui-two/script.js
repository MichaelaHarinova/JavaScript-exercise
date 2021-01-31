/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    document.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
        let currentButtonText = button.innerText
        let minValue = button.getAttribute("data-min")
        let maxValue = button.getAttribute("data-max")
        //   console.log(currentButtonText, maxValue, minValue)

        if (parseInt(currentButtonText) >= parseInt(minValue) && parseInt(currentButtonText) < parseInt(maxValue)) {
            button.innerText = (parseInt(currentButtonText) + 1).toString().padStart(2, '0');
        } else {
            button.innerText = minValue;
        }
        document.getElementById("target").innerText ="+";
        document.querySelectorAll("button").forEach(button =>
            document.getElementById("target").innerText =
                document.getElementById("target").innerText + button.innerText

        );

    }));


})();
