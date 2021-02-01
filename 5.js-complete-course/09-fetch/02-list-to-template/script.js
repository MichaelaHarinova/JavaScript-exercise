/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", () => {
    const heroTemplate = document.getElementById("tpl-hero").content;

    fetchingData().then(res => { //console.log(res)
            res.heroes.forEach(hero => {
                    let heroHTML = heroTemplate.cloneNode(true);

                    heroHTML.querySelector(".name").innerText = hero.name;
                    heroHTML.querySelector(".alter-ego").innerText = hero.alterEgo;
                    let ul = document.createElement("ul");
                    ul.style.listStyleType = "none";
                    hero.abilities.forEach(ability => {
                        let li = document.createElement("li");
                        li.innerText = ability;
                        ul.appendChild(li);
                        console.log()
                    });

                    heroHTML.querySelector(".powers").appendChild(ul);
                    document.getElementById("target").appendChild(heroHTML);
                }
            )
        }
        , rej => console.error(rej))

})

async function fetchingData() {

    const response = await fetch("http://localhost:63342/5.js-complete-course/_shared/api.json");
    return await response.json();
}
