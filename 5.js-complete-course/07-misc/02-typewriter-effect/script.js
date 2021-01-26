/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function typeWriter() {
    speed = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
     if ( i < text.length){
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed)
        }
}
let text= document.getElementById("target").innerHTML;
document.getElementById("target").innerHTML="";
let i=0;
let speed = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;
setTimeout(typeWriter, speed)