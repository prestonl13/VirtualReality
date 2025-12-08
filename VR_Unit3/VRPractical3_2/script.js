let scene, snowmanTemplate;
let snowman, snowman2, snowman3;


window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");
  car = document.querySelector("#carTemplate");

  snowman = new mySnowman(10, 1, -5); 
  snowman2 = new mySnowman(-16, 1, -2); 
  snowman3 = new mySnowman(7, 1 ,-20); 

  car.isMoving = false;
  car.speed = 0.05;

  car.addEventListener("click", () => {
    car.isMoving = true;
  });


  loop();
});

function loop() {

  snowman.spin();
  snowman2.spin();
  snowman3.spin();

  if (car && car.isMoving) {
    let pos = car.getAttribute("position");
    pos.x -= car.speed; 
    car.setAttribute("position", pos);
  }


  window.requestAnimationFrame(loop);
}