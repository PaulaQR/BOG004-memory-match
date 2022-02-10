import App from './components/App.js';
  const section = document.querySelector('section');  
 
 const play = document.getElementById('play-button');

 play.location("click", () => {
  
  
document.getElementById("container").style.display = "none";
document.getElementById("screen-two").style.display = "block";
document.getElementById("screen-three").style.display = "block";


 })  

 
 document.getElementById('root').appendChild(App());