let scene;
let ball;
let car;
let rocket;
let dude;
let sun;

function ball_loop(){
  ball.a += ball.da;
  ball.setAttribute("rotation",{x:ball.a, y:0, z:0});
  window.requestAnimationFrame(ball_loop);
}

function car_loop(){
  car.a += car.da;
  car.setAttribute("position",{x:car.a, y:0, z:0});
  window.requestAnimationFrame(car_loop);
}

function rocket_loop(){
  rocket.a += rocket.da;
  rocket.setAttribute("position",{x:0, y:rocket.a, z:0});
  window.requestAnimationFrame(rocket_loop);
}

function dude_loop(){
  dude.a += dude.da;
  dude.setAttribute("scale",{x:dude.a, y:dude.a, z:dude.a});
  window.requestAnimationFrame(dude_loop);
}

function sun_loop(){
  sun.a += sun.da;
  sun.setAttribute("opacity",sun.a);
  window.requestAnimationFrame(sun_loop);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  ball = document.querySelector("#pokemonball");
  ball.a = 0;
  ball.da = 1;
  ball_loop();


  car = document.querySelector("#car");
  car.a = 0;
  car.da = -0.1;
  car_loop();

  rocket = document.querySelector("#rocket");
  rocket.a = 0;
  rocket.da = 0.1;
  rocket_loop();


  dude = document.querySelector("#dude");
  dude.a = 0;
  dude.da = 0.001;
  dude_loop();

  sun = document.querySelector("#sun");
  sun.a = 0;
  sun.da = 0.005;
  sun_loop();
})
