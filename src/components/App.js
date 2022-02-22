// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//

import pokemon from '../data/pokemon/pokemon.js';


let data = pokemon;
console.log(pokemon)
//Generate Board 
const generateBoard = () =>{
  const items= document.createElement('section');
  items.contains = []
  let cards = []
     for(let j = 0; j < 2; j ++ ){
      for(let i = 0; i < 9; i ++){
      
        cards.push(`
          <div id='containerCard' class='container-card'>
            <div class= 'back'>
              <img src="${data.items[i].image}" alt="pokemon-${i}"/>
            </div>
            <div class='front'>
              <img src="./images/frontcard.png" alt="front"/>
            </div>
            
          </div>
        `)
          // if (i % 2 == 1) {
            //   items.splice( 0, 1)
      //console.log(data.items[i].image);
      //console.log(data.items[i].id);

    }
    data.items.sort(() =>Math.random()-0.5)
    items.innerHTML = cards.join("")
  }
 
  return items
}
  generateBoard();
  export {generateBoard}


  

  //   function selectCard(i) {
  //     let card = document.getElementById("card" + i)
  //     if (card.style.transform != "rotateY(180deg)") {
  //         card.style.transform = "rotateY(180deg)"
  //         selections.push(i)
  //     }
  //     if (selections.length == 2) {
  //         deselect(selections)
  //         selections = []
  //     }
  // }

  // function deselect(selections) {
  //     setTimeout(() => {
  //         let back1 = document.getElementById("back" + selections[0])
  //         let back2 = document.getElementById("back" + selections[1])
  //         if (back1.innerHTML != back2.innerHTML) {
  //             let card1 = document.getElementById("back" + selections[0])
  //             let card2 = document.getElementById("back" + selections[1])
  //             card1.style.transform = "rotateY(0deg)"
  //             card2.style.transform = "rotateY(0deg)"
  //         }else{
  //             back1.style.background = "turn"
  //             back2.style.background = "turn"
  //           }
  //         }, 1000);
  //       }