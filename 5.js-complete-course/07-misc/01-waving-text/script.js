/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let x = document.getElementById("target").innerText;
    document.getElementById("target").innerText = "";
    let fontsizes = [5, 13, 20, 32, 40, 32, 20, 13];
    let fontSizeIndex = 0;

    for (let i = 0; i < x.length; i++) {

        if (fontSizeIndex > fontsizes.length - 1) {
            fontSizeIndex = 0;
        }

        let char = x.charAt(i);
        let span = document.createElement("span");
        span.innerText = char;
        document.getElementById("target").appendChild(span);
        span.setAttribute("style", "font-size: " + fontsizes[fontSizeIndex] + "px");
        fontSizeIndex++;
    }

})();
