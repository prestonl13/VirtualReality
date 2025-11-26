let scene, snowman;
let snowman, snowman2, snowman3;

window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");
  snowmanTemplate = document.querySelector("#carTemplate");

  snowman = new mySnowman(10, 1, -5); 
  snowman2 = new mySnowman(-16, 1, -2); 
  snowman3 = new mySnowman(7, 1 ,-20); 


  loop();
});

function loop() {

  snowman.spin();
  snowman2.spin();
  snowman3.spin(); 



  window.requestAnimationFrame(loop);
}