//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import pokemon from '../data/pokemon/pokemon.js';
  let data = pokemon;

  const App = () => {
    const el = document.createElement('div');
  
    el.className = 'App';
    el.textContent = 'Hola mundo!';
  
    return el;
  
  };
l  
  //una funciôn para generar un aleatorio
  // Colocar elementos en distintas posiciones de un array

   const aleatorizar = () => {
    const informacionTarjeta = data;
    informacionTarjeta.sort(() => Math.random() - 0.5);
    
  };
  aleatorizar();
  




export default App;
