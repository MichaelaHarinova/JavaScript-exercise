/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function showAge() {
    //dob-date
    dobDate = document.getElementById("dob-day").value;
    dobMonth = document.getElementById("dob-month").value;
    dobYear = document.getElementById("dob-year").value;

    //today-date
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    let todayDate = today.getDate();

    //Difference
    let ageYear = todayYear - dobYear;

    //Condition
    let age;
    if (todayMonth < dobMonth) {
        age = ageYear - 1;
    } else if (todayMonth > dobMonth) {
        age = ageYear;
    } else {
        if (todayDate < dobMonth) {
            age = ageYear - 1;
        } else {
            age = ageYear;
        }
    }

    alert("Your age is " + age);
}

document.getElementById("run").addEventListener("click", showAge);

showAge()

