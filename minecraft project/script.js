let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
let t = 10000;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  // Create a 25x25 platform of Blocks centered at the origin
  timeText = document.querySelector("#timeText");
  const platformSize = 25;
  const half = Math.floor(platformSize / 2);
  for (let i = -half; i <= half; i++) {
    for (let j = -half; j <= half; j++) {
      const x = i;
      const y = 0.5;
      const z = j;
      new Block(x, y, z);
    }
  }

  window.addEventListener("keypress", function(e){
    if (e.key == "e") {
      spawnBlock();
    }
  })

  function spawnBlock(){
    let cam = document.querySelector("#camera");
    let pos = cam.getAttribute("position");
    let spawnx = pos.x;
    let spawny = pos.y + 0.5;
    let spawnz = pos.z - 3;
    let block = new Block(spawnx, spawny , spawnz);
};

  // start ticking the countdown every second
  setInterval(countdown, 1000);



});

function countdown(){
   t--; 
   timeText.setAttribute("value", `Time: ${t}`);
}