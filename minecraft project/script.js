let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
let t = 10000;
window.collectedCount = 0;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("#cameraRig");
  collectedTxt = document.querySelector("#CollectedText");



  //health


  heart1 = document.querySelector("fullheart1");
  heart2 = document.querySelector("fullheart2");
  heart3 = document.querySelector("fullheart3");
  heart4 = document.querySelector("fullheart4");
  heart5 = document.querySelector("fullheart5");
  heart6 = document.querySelector("fullheart6");
  heart7 = document.querySelector("fullheart7");
  heart8 = document.querySelector("fullheart8");
  heart9 = document.querySelector("fullheart9");
  heart10 = document.querySelector("fullheart10");

  blackheart1 = document.querySelector("blackheart1");
  blackheart2 = document.querySelector("blackheart2");
  blackheart3 = document.querySelector("blackheart3");
  blackheart4 = document.querySelector("blackheart4");
  blackheart5 = document.querySelector("blackheart5");
  blackheart6 = document.querySelector("blackheart6");
  blackheart7 = document.querySelector("blackheart7");
  blackheart8 = document.querySelector("blackheart8");
  blackheart9 = document.querySelector("blackheart9");
  blackheart10 = document.querySelector("blackheart10");


  //hunger

  hunger1 = document.querySelector("fullhunger1");
  hunger2 = document.querySelector("fullhunger2");
  hunger3 = document.querySelector("fullhunger3");
  hunger4 = document.querySelector("fullhunger4");
  hunger5 = document.querySelector("fullhunger5");
  hunger6 = document.querySelector("fullhunger6");
  hunger7 = document.querySelector("fullhunger7");
  hunger8 = document.querySelector("fullhunger8");
  hunger9 = document.querySelector("fullhunger9");
  hunger10 = document.querySelector("fullhunger10");

  nohunger1 = document.querySelector("nohunger1");
  nohunger2 = document.querySelector("nohunger2");
  nohunger3 =  document.querySelector("nohunger3");
  nohunger4 = document.querySelector("nohunger4");
  nohunger5 = document.querySelector("nohunger5");
  nohunger6 = document.querySelector("nohunger6");
  nohunger7 = document.querySelector("nohunger7");
  nohunger8 = document.querySelector("nohunger8");
  nohunger9 = document.querySelector("nohunger9");
  nohunger10 = document.querySelector("nohunger10");





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
  loop();
});

function countdown(){
   t--; 
   timeText.setAttribute("value", `Time: ${t}`);
   if(t < 9995){
    nohunger1.setAttribute("visible", true);
    hunger1.setAttribute("visible", false);
   }
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