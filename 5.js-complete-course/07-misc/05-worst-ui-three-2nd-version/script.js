/* becode/javascript
 *
 * /07-misc/05-worst-ui-three-2nd-version/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




//randomizer with data-max and data-min values
// The maximum is inclusive and the minimum is inclusive
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}
//set the intervals from array
let intervals = [];
document.querySelectorAll("input").forEach((input, index) => {
    intervals.push(
        setInterval(() => changeNumber(index), 50)
    );
});

function changeNumber(index) {
 //getting values (max,min) from the elements
    let minValue = document.querySelectorAll("input")[index].getAttribute("data-min");
    let maxValue = document.querySelectorAll("input")[index].getAttribute("data-max");
//display value of the random number in the input field with a leading 0
    document.querySelectorAll("input")[index].value = random(minValue, maxValue).toString().padStart(2, '0');
}

//start showing random numbers in each text field
document.querySelectorAll("button").forEach((button, index) => button.addEventListener("click", event => {


    //stops on click and gets a number
clearInterval(intervals[index]);
//get the button ID and remove the "fix-" part -> to match it with ID of input
//let adjustedButtonID = event.target.getAttribute("id").replace("fix-", "");


//to display the combination of generated numbers in target
document.getElementById("target").innerText = "+";
document.querySelectorAll("input").forEach(input =>
    document.getElementById("target").innerText =
        document.getElementById("target").innerText + input.value.toString());

}));





