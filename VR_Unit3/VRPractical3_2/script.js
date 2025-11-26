let scene, snowman;
let snowman, snowman2, snowman3;

window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");
  snowmanTemplate = document.querySelector("#snowmanTemplate");

  snowman = new mySnowman(10, 1, -5); 
  snowman2 = new mySnowman(-16, 1, -2); 
  snowman3 = new mySnowman(7, 1 ,-20); 

  snowman.isMoving = false;
  snowman.speed = 0.05;

  snowman.addEventListener("click", () => {
    snowman.isMoving = true;
  });


  loop();
});

function loop() {

  snowman.spin();

  if (snowman && snowman.isMoving) {
    let pos = snowman.getAttribute("position");
    pos.x -= snowman.speed; 
    snowman.setAttribute("position", pos);
  }


  window.requestAnimationFrame(loop);
}