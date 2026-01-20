let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
let t = 10000;
window.collectedCount = 0;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("#cameraRig");
  collectedTxt = document.querySelector("#CollectedText");
  let playerCamera = document.querySelector("#camera");
  // array to track dropped (collectible) block entities
  window.droppedBlocks = window.droppedBlocks || [];
  // 25x25
  timeText = document.querySelector("#timeText");
  hotBarImg = document.querySelector("#emptyHotbar");
  window.grassBlockImg = document.querySelector("#grassblock");
  window.grassBlockImg.setAttribute("visible", "false");

  //platform
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

  //trees
  let tree = new Tree(3, 1.5, -4);

// collecting

setInterval(() => {
  if (!window.droppedBlocks) return;
  let newList = [];
  for (let i = 0; i < window.droppedBlocks.length; i++) {
    let b = window.droppedBlocks[i];
    if (!b.obj) { 
    } else {
      let d = distance(playerCamera, b.obj);

      if (d < 1.5) {
        scene.removeChild(b.obj);
        window.collectedCount++; 
        console.log("Collected:", window.collectedCount);
        window.grassBlockImg.setAttribute("visible", "true");
      } else {
        newList.push(b);
      }
      if(window.collectedCount < 0){
        window.grassBlockImg.setAttribute("visible", "false");
      }
    }
  }

  window.droppedBlocks = newList;
}, 200);


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
      camera.setAttribute("animation", {property: "position",to: "0 4 0",dur: 300,dir: "alternate",loop: 1,easing: "easeInOutQuad"
      });
    }, 0);
    setTimeout(() => {
      isJumping = false;
    }, 550);
  }
});

  setInterval(countdown, 1000);
  // start the on-screen update loop
  loop();
});

function countdown(){
   t--; 
   timeText.setAttribute("value", `Time: ${t}`);
}

function loop(){
  collectedTxt.setAttribute("value", `Collected Blocks: ${window.collectedCount}`)

   window.requestAnimationFrame(loop);
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