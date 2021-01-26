/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let table = document.createElement("table");

    document.getElementById("target").appendChild(table);
    //i =row
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        //j= column
        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");

            td.innerText = ((i + 1) * (j + 1)).toString();
            tr.appendChild(td);
        }
    }

})();
