import  {generateBoard} from './components/App.js';
document.getElementById('screen-two').appendChild(generateBoard())

//PLAY BUTTON
document.getElementById('screen-two').style.display = 'none';
document.getElementById('screen-three').style.display = 'none';
const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
  document.getElementById('screen-two').style.display = 'block';
  document.getElementById('screen-three').style.display = 'none';
  document.getElementById('screen-one').style.display = 'none';
})

//FLIP EFFECT
//Usamos selector para todas las tarjetas que tienen la clase "container-card"
//usamos un loop foreach, recordando que son varios 'container-card'
document.querySelectorAll('.container-card').forEach(item => { 
  //para cada item(carta), al hacer click sucede un evento
  item.addEventListener('click', (e) => {
    //al hacer click la carta tiene una clase de 'toggle card': efecto para voltear
    item.classList.toggle('toggleCard');

    //al mismo tiempo hace la funcion checkCards
    checkCards(e);
  })
})

//CHECK CARDS
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add('flipped');
  // ya logramos identificar la carta al click y "cambiar" su clase//
  // sigue la lógica para ver si son iguales

  //primero usamos selector para todas las tarjetas que tienen la clase "flipped"
  const flippedCards = document.querySelectorAll('.flipped');
  if(flippedCards.length === 2){
    if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
      console.log('match');
      flippedCards.forEach(item => {
        item.classList.remove('flipped');
        item.style.pointerEvents = 'none';
      })
    }else {
      console.log('wrong');
      flippedCards.forEach(item => {
        item.classList.remove('flipped');
        setTimeout(() => 
        item.classList.remove('toggleCard'),1500);
      })
    }
  }
}


