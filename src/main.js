import  { generateBoard } from './components/App.js';
const playButton = document.getElementById('playButton')
playButton.addEventListener('click', playGame);

function playGame() {
  let screen1 = document.getElementById('screen-one');
  let screen2 = document.getElementById('screen-two');
  let screen3 = document.getElementById('screen-three');
  
  if(screen1.style.display == 'block'){
    screen1.style.display = 'none';
    screen2.style.display = 'block'
  }
 
}

// document.getElementById('screen-two').appendChild(generateBoard())