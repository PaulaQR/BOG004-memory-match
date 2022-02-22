import  { generateBoard } from './components/App.js';

//PLAY BUTTON
document.getElementById("screen-two").style.display = "none"
document.getElementById('screen-three').style.display = "none";
const ruta = (document.getElementById("screen-two"))
const playButton = document.getElementById('playButton');
playButton.addEventListener("click", () =>{
    document.querySelector("div").style.display = "none";
    ruta.style.display = "block";
});

// CLick 
var filppedCard = false;
var firstCard, secondCard;
const cards = document.querySelectorAll(".card");
function filpCard() {
    this.classList.add("flip");
    if (!filppedCard) {
        filppedCard = true;
        firstCard = this;
    } else {
        filppedCard = false;
        secondCard = this;
        
        if (firstCard.dataset.pokemon === secondCard.dataset.pokemon){
            firstCard.removeEventListener('click' , filpCard);
            secondCard.removeEventListener('click' , filpCard);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500 );
            
            console.log({ firstCard, secondCard });
            console.log(firstCard.dataset.pokemon);
            console.log(secondCard.dataset.pokemon);
        }
        
    }
}
cards.forEach((card) =>
    card.addEventListener("click", filpCard)
);

document.getElementById('screen-two').appendChild(generateBoard());