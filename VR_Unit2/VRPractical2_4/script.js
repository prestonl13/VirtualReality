let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let x = rnd(-50,50);
    let y = rnd(-10,-1);
    let z = rnd(-50,50);
    let speed = rnd(1,5) / 100;
    let rocket = new Rocket(x, y , z, speed);
    rockets.push(rocket)
  }

  for(let i = 0; i < 10; i++){
    let x = rnd(-50,50);
    let y = rnd(30,40);
    let z = rnd(-50,50);
    let speed = rnd(-1,-5) / 100;
    let ufo = new Ufo(x, y , z, speed);
    ufos.push(ufo)
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch()
  }

  for(let ufo of ufos){
    ufo.invade()
  }
  
  window.requestAnimationFrame( loop );
}
