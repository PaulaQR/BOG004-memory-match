//
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
          <div class='container-card'(${i})'>
          <div class="card" id="card${i}">
          <div class="back" id="back${i}">
          <img src="${data.items[i].image}" alt="pokemon"/>
          </div>
          </div>
          <div class="face">
                </div>
              </div>
            </div>
        `)
          // if (i % 2 == 1) {
            //   items.splice( 0, 1)
      console.log(data.items[i].image)
    }
    data.items.sort(() =>Math.random()-0.5)
    items.innerHTML = cards.join(" ")
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
      
        



// function mezclar (array) {
//   //Recorre el array de atras hacia adelante 
//   for (let i = array.length - 1; i> 0; i--) {
//   //Elije un indice aleatorio antes del elemento actual 
//   let j = Math.floor(Math.random() * (i+1));
//     //Intercambia [a,b] por [b,a]
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return mezclar
// }




// function (data) {
//   let data = pokemon;
//   let indexActual = data.length, valorTemporal, indexAleatorio;
//   while (0 !== indexActual) {
//     indexAleatorio = Math.floor(Math.random() * indexActual);
//      indexActual -= 1;
//      valorTemporal = data[indexActual];
//      data[indexActual] = data[indexAleatorio];
//      data[indexAleatorio] = valorTemporal;

//    } 
//    return data; 
//  }


//  aleatorizar(data);


 

/*
  const App = () => {
      const informacionTarjeta = aleatorizar();
      //Generar HTML
      informacionTarjeta.forEach(() =>{
    const tarjeta = document.createElement('section');
    const cara = document.createElement('image');
    const sello = document.createElement('section');
    //acceder a la lista de clases de un elemento 
    tarjeta.classList = "tarjeta";
    cara.classList = "cara";
    sello.classList = "sello";
  //adjuntar cartas en las secciones 
  
  });
  };
  */

  //una funciôn para generar un aleatorio
  // Colocar elementos en distintas posiciones de un array
/*
  const aleatorizar = () => {
    const tarjetaData = data;
    tarjetaData.Math.floor(Math.random() * 0.5);
    console.log(tarjetaData);
  };

  aleatorizar();
  
  */







