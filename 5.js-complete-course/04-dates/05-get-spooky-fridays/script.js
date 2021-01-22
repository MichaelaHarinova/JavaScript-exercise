/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", function () {
    let year = document.getElementById("year").value;
    let d = new Date(year);


    for (let i = 1; i <= 366; i++) {
        if (d.getFullYear().toString() === year) {
            if (d.toDateString().substr(0, 3) === "Fri" && parseInt(d.toDateString().substr(8, 2)) === 13) {
                alert(d.toLocaleString('default', { month: 'long' }));
            }
        } else {
            break;
        }
        d.setDate(d.getDate() + 1);
    }
})