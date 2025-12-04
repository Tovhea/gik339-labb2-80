/*uppgift 4*/

const checkboxElement = document.getElementById("divstyle"); /*hämtar checkboxen genom getElementById, fördel: den är snabbare eftersom den bara letar efter exakt id. nackdelarna: mindre flexibel, kan inte ta klassnamn eller andra selectors. */

const buttonElement = document.querySelector(".button"); /*hämtar knappen, fördel: flexibel eftersom den kan använda både id och klass, nackdel: man kan hämta saker som man egentligen inte hade planerat att spara i variabeln*/

const divElement = document.querySelector("#div"); /*hämtar diven*/

const textfieldElement = document.getElementsByClassName("textfield"); /*hämtar textfälten fördel:enkelt att använda och inbyggda i många moderna browsers, nackdel: de läggs i en lista som kan vara lite svår att veta exakt det elementets position som finns där. */


/*uppgift 5*/
textfieldElement[1].addEventListener("input", function(e){ /*tar andra i listan av textfälten som är sparade i variabeln, lägger till eventlyssnare och hämtar input från textfältet*/ 
    console.log(e.target); /*skriver ut i konsollen vilket html element som det är hämtat från */
    console.log(e.target.value);
    const nameAttribute = e.target.name; /*skapar variabeln nameAttribute och tilldelar den värdet av namnet på html elementet där händelsen inträffade */
    if (nameAttribute === "content"){ /*om namnet är "content"*/
        divElement.innerHTML = e.target.value; /*skrivs det som är inskrivet i textrutan ut i diven*/
    }
})

/*uppgift 6*/

textfieldElement[0].addEventListener("input", function(e){ /* hämtar första textfältet, lägger till eventlyssnare och dess input som i tidigare funktion*/
    const nameAttribute = e.target.name; /*skapar en variabel och tilldelar värdet för namnet av html elementet */
});

checkboxElement.addEventListener("change", function(e){ /*hämtar checkboxen och skapar funktion som aktiveras när man klickar på/när det blir en ändring i checkboxen*/ 
    const divColor = textfieldElement[0].value; /*skapar en variabel som lagrar den färg som anvndaren har skrivit in i fältet*/ 
    divElement.style.backgroundColor = divColor; /*ändrar färg beroende på användarens input på divelementet*/ 
})

buttonElement.addEventListener("click", function(){ /*När knappen klickas på*/
divElement.remove();/*tas div elementet bort*/
})