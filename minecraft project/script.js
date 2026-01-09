let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
let t = 10000;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("#cameraRig");
  // 25x25
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

  //breaking blocks 
  window.addEventListener("keydown", (e) => { 
    if (e.key === "x" && window.currentBlock) { 
      window.currentBlock.breakBlock(); 
    } 
  });


  //jumping

  let isJumping = false;

window.addEventListener("keydown", (e) => {
  if (e.key === " " && !isJumping) {
    isJumping = true;
    camera.removeAttribute("animation");

    setTimeout(() => {
      camera.setAttribute("animation", {property: "position",to: "0 3 0",dur: 300,dir: "alternate",loop: 1,easing: "easeInOutQuad"
      });
    }, 0);
    setTimeout(() => {
      isJumping = false;
    }, 550);
  }
});



  
  setInterval(countdown, 1000);



});

function countdown(){
   t--; 
   timeText.setAttribute("value", `Time: ${t}`);
}