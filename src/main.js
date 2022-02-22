
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
document.querySelectorAll('.container-card').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('toggleCard');
  })
})




