/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    (function() {
        console.log();
        let h = new Date().getHours();
        let m = new Date().getMinutes();

        let text;
        if(h===17) {
           if(m>=30){
               text = "Good evening!";
           }
        }
        else if (h>17){
            text = "Good evening!";
        }
        else{
            text = "Hello!";
        }
        document.getElementById("target").innerHTML = text;
    })();


