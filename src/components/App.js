//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);


const App = () => {
  const el = document.createElement("div");

  el.className = "App";
  el.textContent = "Hola mundo!";

  return el;
};

//funcion para barajar un array dado

//funcion para imprimir un array
let printArray = (arr, n) => {
 let ans = "";
  for (let i = 0; i < n; i++) {
    ans += arr[i] + " ";
  }
  console.log(ans);
};

//una funciôn para generar un aleatorio
// Colocar elementos en distintas posiciones de un array
function randomize(arr, n) {
  //comenzar desde el ultimo elemento e intercambiar
  //uno a uno. No necesitamos correr para
  //el primer elemento por eso i > 0
  for (let i = n - 1; i > 0; i--) {
    // Elija un índice aleatorio de 0 a i inclusive
    let j = Math.floor(Math.random() * (i + 1));

    // Intercambiar arr[i] con el elemento
    // en índice aleatorio
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// // Código del controlador
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;
randomize(arr, n);
printArray(arr, n);

export default App;
