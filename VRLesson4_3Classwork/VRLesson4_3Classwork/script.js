let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  //Challenge 2: Create 200 Balls at random locations and watch them fall or push them off the end
  for(let i = 0; i < 201; i++){
    let x = rnd(-25,25);
    let y = rnd(3,5);
    let z = rnd(-25,25);
    let ball = new Ball(x, y , z);
  }

  for(let i = 0; i < 25; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0.5 , z);
  }
})