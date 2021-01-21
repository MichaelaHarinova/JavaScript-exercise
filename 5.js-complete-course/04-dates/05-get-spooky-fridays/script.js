/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*(function () {
    document.getElementById("run").addEventListener("click", function () {
        for (let i = 0; i < 12; i++) {
        let d = new Date(parseInt(document.getElementById("year").value),i,13);

            if (d.getDay() === 5) {
                console.log(i);
            switch (i) {
                case 0:
                    alert("January");
                    break;
                case 1:
                    alert("February");
                    break;
                case 2:
                    alert("March");
                    break;
                case 3:
                    alert("April");
                    break;
                case 4:
                    alert("May");
                    break;
                case 5:
                    alert("June");
                    break;
                case 6:
                    alert("July");
                    break;
                case 7:
                    alert("August");
                    break;
                case 8:
                    alert("September");
                    break;
                case 9:
                    alert("October");
                    break;
                case 10:
                    alert("November");
                    break;
                case 11:
                    alert("December");
            }

        }

    }
})()});*/

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