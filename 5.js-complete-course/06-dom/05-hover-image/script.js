/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


let hoverSource = document.querySelector("img").getAttribute("data-hover");
let originalSource = document.querySelector("img").getAttribute("src");

document.querySelector("img").addEventListener("mouseover", event => event.target.setAttribute('src', hoverSource));
document.querySelector("img").addEventListener("mouseout", event => event.target.setAttribute('src', originalSource));




