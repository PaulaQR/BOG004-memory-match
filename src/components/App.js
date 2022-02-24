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
          <div id='containerCard' class='container-card' name='${data.items[i].id}'>
            <div class= 'back'>
              <img src="${data.items[i].image}" alt='pokemon-${i}'/>
            </div>
            <div class='front'>
              <svg width="173" height="126" viewBox="0 0 173 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="124.625" height="171.935" rx="18.9262" transform="matrix(-0.000796218 -1 1 -0.000810979 0.0992279 125.689)" fill="#143A3F"/>
                <ellipse cx="85.9227" cy="62.9777" rx="39.4141" ry="39.7778" fill="white"/>
              </svg>
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
