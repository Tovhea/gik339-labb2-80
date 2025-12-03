const checkboxElement = document.getElementById("divStyle");

const textfieldElement = document.getElementsByClassName("textfield");

const buttonElement = document.querySelector(".button"); 

const divElement = document.querySelector("#div"); 



function handleWorth (e){
console.log(e.target)
if (e.target.name === 'content' )
    console.log(e.target);
    divElement.innerHTML = e.target.value
}

textfieldElement[0].onclick = handleWorth; /* ÄNDRA, ÄR INTE LÖST BRA*/
/*textfieldElement.oninput = function() {console.log('Något skrivdes!');};
textfieldElement.addEventListener()

function handleWorth (e){
console.log(e.target)
if (e.target.name === 'content' )
    print(e.target);
    divElement.innerHTML = e.target
}

handleWorth ('Hej hej');


let divAttribute = document.querySelector('#div');



let button = document.querySelector(".button");
button.onclick = function() {console.log('Knappen klickades!');};
button.addEventListener("click", () => {console.log('Tack för att du klickade knappen');});


 checkboxElement.addEventListener() => {
if checkboxElement = checked 

}*/