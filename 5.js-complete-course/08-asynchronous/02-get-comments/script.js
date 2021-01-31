/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    console.log("start");//FOR ME TO CHECK IF IT EVEN STARTS
    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPosts((error, articles) => {  //function which is called with a "callback function" with 2 parameters to callback
            articles.forEach(article =>             //going trough each article, one by one. forEach need a callback function with  parameter to call back each article in array. For each value it calls callback function using the article as the parameter
                window.lib.getComments(article.id, (error, comments) => { //calling function to get comments. Needs 2 parameters. 1st= article ID, 2nd is another callback function with 2 parameters
                    article.comments = [];//create comments property for the original "article" (empty array)
                    comments.forEach(comment => article.comments.push(comment))//each comment is pushed in the comments array of the specific article, when finish it jumps back in 2nd line (next forEach article) and process it again over and over
                })
            );
            console.table(articles);
        })
    });
})();
