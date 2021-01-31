/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    console.log("start");

    document.getElementById("run").addEventListener("click", () => {

     window.lib.getPosts().then(e =>console.log(e)); //window.lib.getPosts returns resolved (or rejected) promise
    });                                              //.then(e =>console.log(e) happens after receiving the resolved (1st parameter)promise->1 parameter appears
                                                    //.then(e =>console.log(e),x =>console.log(x) happens after receiving the rejected (=2nd parameter) promise ->2 parameter appears
})();
