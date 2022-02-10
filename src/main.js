import App from "./components/App";

 
 const play = document.getElementById('play-button');

 play.addEventListener("click", () => {

  
document.getElementById("container").style.display = "none";
document.getElementById("screen-two").style.display = "block";
document.getElementById("screen-three").style.display = "block";


 }  


 
 document.getElementById('root').appendChild(App());