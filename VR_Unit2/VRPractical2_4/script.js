let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

function rocket_loop(){
  rocket.a += rocket.da;
  rocket.setAttribute("position",{x:0, y:rocket.a, z:0});
  window.requestAnimationFrame(rocket_loop);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  rocket = document.querySelector("#rocket");
  rocket.a = 0;
  rocket.da = 0.1;
  rocket_loop();


})

function loop(){

  
  window.requestAnimationFrame( loop );
}
