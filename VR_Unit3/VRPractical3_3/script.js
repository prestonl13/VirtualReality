let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 1000, enemy_killed = 0, score, time, t = 60;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  time = document.getElementById("time");


   for(let i = 0; i < 75; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 1 , z);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(10,14);
    let z = rnd(-20,20);
    let cloud = new Cloud(x, y , z);
  }

  for(let i = 0; i < 50; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let house = new House(x, 0, z);
  }

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })
  
  setTimeout(loop,100);
  setTimeout(countdown, 100);
})

function loop(){
  if(bullet){
    bullet.fire();
  }
 
  window.requestAnimationFrame(loop);
}

//function countdown(){

  //setTimeout(countdown,1000);
//}

function countdown(){
  time.setAttribute("value",`Time: ${t}`);
  t--;
  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}