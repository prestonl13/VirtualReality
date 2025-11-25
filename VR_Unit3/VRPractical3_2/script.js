let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rocket;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")

  rocket = new Rocket(1, 3, 1);
      
  loop();
})

function loop(){
  rocket.launch();

  window.requestAnimationFrame(loop);
}