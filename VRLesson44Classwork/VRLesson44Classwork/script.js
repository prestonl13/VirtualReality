let scene, boxes = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  dragonbreath = document.getElementbyId("dragonbreath");
  window.onclick = function(){
    dragonbreath.components.sound.playSound();
  }
  /* Challenge
     Create 10 random boxes through the world
  */
  
 
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  window.requestAnimationFrame( loop )
  
}