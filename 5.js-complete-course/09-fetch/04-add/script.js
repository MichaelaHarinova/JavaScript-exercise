/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", () => {
    document.querySelectorAll("input").forEach(inputElement => {
        if (inputElement.value.length === 0) {
            inputElement.style.borderColor = "red";
        } else {
            inputElement.style.borderColor = "unset";
        }
    })
    let name = document.getElementById("hero-name").value;
    let ego = document.getElementById("hero-alter-ego").value;
    let powers = document.getElementById("hero-powers").value;

    fetchingData().then(res => {
        res.heroes.push({id: 6, name: name, alterEgo: ego, abilities: powers.split(",")});
        console.log(res);

    })
})

async function fetchingData() {

    const response = await fetch("http://localhost:63342/5.js-complete-course/_shared/api.json");
    return await response.json();
}
