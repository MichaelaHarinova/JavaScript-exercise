/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//randomizer with data-max and data-min values
// The maximum is inclusive and the minimum is inclusive
function random (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

(function () {


    document.querySelectorAll("button").forEach(button => button.addEventListener("click", event => {
        //get the button ID and remove the "fix-" part -> to match it with ID of input
        let adjustedButtonID = event.target.getAttribute("id").replace("fix-", "");
        //getting values (max,min) from the elements
        let minValue =  document.getElementById(adjustedButtonID).getAttribute("data-min");
        let maxValue =  document.getElementById(adjustedButtonID).getAttribute("data-max");

        //display value of the random number in the input field with a leading 0
        document.getElementById(adjustedButtonID).value = random(minValue,maxValue).toString().padStart(2, '0');





      document.getElementById("target").innerText = "+";
        document.querySelectorAll("input").forEach(input=>
            document.getElementById("target").innerText =
                document.getElementById("target").innerText + input.value.toString());

    }));

})();



