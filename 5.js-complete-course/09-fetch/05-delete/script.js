/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", () => {
    let heroID = parseInt(document.getElementById("hero-id").value);
    let heroToDeleteIndex;
    fetchingData().then(res => {
        heroToDeleteIndex = res.heroes.findIndex(hero => hero.id === heroID);
        res.heroes.splice(heroToDeleteIndex,1);
        console.log(res);
    });
})

async function fetchingData() {

    const response = await fetch("http://localhost:63342/5.js-complete-course/_shared/api.json");
    return await response.json();
}