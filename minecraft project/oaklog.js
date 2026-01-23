class OakLog{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 0.5;
    this.dy = 0.5;
    this.dz = 0.5;
    this.breakable = true;
    this.camera = document.querySelector("#cameraRig");
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("static-body", "shape: box; friction: 1.0; restitution: 0;");
    //this.obj.setAttribute("static-body", " ");
    this.obj.setAttribute("position",{x:x,y:y,z:z});    
    this.obj.setAttribute("cursor-listener", "");

    let box = document.createElement("a-box");
    box.setAttribute("id","Block");
    box.setAttribute("width","1");
    box.setAttribute("height","1");
    box.setAttribute("depth","1");
    this.obj.append(box);


    let top = document.createElement("a-plane");
    top.setAttribute("width","1.001");
    top.setAttribute("height","1.001");
    top.setAttribute("src", "oak log/oak top.jpg")
    top.setAttribute("side","double");
    top.setAttribute("rotation","-90 0 0");
    top.setAttribute("position","0 0.505 0");
    this.obj.append(top);

    // Right face (+X)
    let right = document.createElement("a-plane");
    right.setAttribute("width","1.001");
    right.setAttribute("height","1.001");
    right.setAttribute("side","double");
    right.setAttribute("src", "oak log/oak side.png");
    right.setAttribute("rotation","0 90 0");
    right.setAttribute("position","0.505 0 0");
    this.obj.append(right);

    // Left face (-X)
    let left = document.createElement("a-plane");
    left.setAttribute("width","1.001");
    left.setAttribute("height","1.001");
    left.setAttribute("side","double");
    left.setAttribute("src", "oak log/oak side.png");
    left.setAttribute("rotation","0 -90 0");
    left.setAttribute("position","-0.505 0 0");
    this.obj.append(left);

    // Front face (+Z)
    let front = document.createElement("a-plane");
    front.setAttribute("width","1.001");
    front.setAttribute("height","1.001");
    front.setAttribute("side","double");
    front.setAttribute("src", "oak log/oak side.png");
    front.setAttribute("rotation","0 0 0");
    front.setAttribute("position","0 0 0.505");
    this.obj.append(front);

    // Back face (-Z)
    let back = document.createElement("a-plane");
    back.setAttribute("width","1.001");
    back.setAttribute("height","1.001");
    back.setAttribute("src", "oak log/oak side.png");
    back.setAttribute("side","double");
    back.setAttribute("rotation","0 180 0");
    back.setAttribute("position","0 0 -0.505");
    this.obj.append(back);

    // Bottom face
    let bottom = document.createElement("a-plane");
    bottom.setAttribute("width","1.001");
    bottom.setAttribute("height","1.001");
    bottom.setAttribute("side","double");
    bottom.setAttribute("src", "oak log/oak top.jpg");
    bottom.setAttribute("rotation","90 0 0");
    bottom.setAttribute("position","0 -0.505 0");
    this.obj.append(bottom);

    let frame = document.createElement("a-box");
    frame.setAttribute("width","1.01");
    frame.setAttribute("height","1.01");
    frame.setAttribute("depth","1.01");
    frame.setAttribute("position","0 0 0");
    frame.setAttribute("wireframe","true");
    frame.setAttribute("opacity","0");
    this.obj.append(frame);

    let topBreak = document.createElement("a-image");
    topBreak.setAttribute("width","1.03");
    topBreak.setAttribute("height","1.03");
    topBreak.setAttribute("src", "breaking textures/destroy_stage_1.png");
    topBreak.setAttribute("side","double");
    topBreak.setAttribute("opacity","0");
    topBreak.setAttribute("rotation","-90 0 0");
    topBreak.setAttribute("position","0 0.505 0");
    this.obj.append(topBreak);

    // Right face (+X)
    let rightBreak = document.createElement("a-image");
    rightBreak.setAttribute("width","1.03");
    rightBreak.setAttribute("height","1.03");
    rightBreak.setAttribute("side","double");
    rightBreak.setAttribute("opacity","0");
    rightBreak.setAttribute("src", "breaking textures/destroy_stage_1.png");
    rightBreak.setAttribute("rotation","0 90 0");
    rightBreak.setAttribute("position","0.505 0 0");
    this.obj.append(rightBreak);

    // Left face (-X)
    let leftBreak = document.createElement("a-image");
    leftBreak.setAttribute("width","1.03");
    leftBreak.setAttribute("height","1.03");
    leftBreak.setAttribute("side","double");
    leftBreak.setAttribute("opacity","0");
    leftBreak.setAttribute("src", "breaking textures/destroy_stage_1.png");
    leftBreak.setAttribute("rotation","0 -90 0");
    leftBreak.setAttribute("position","-0.505 0 0");
    this.obj.append(leftBreak);

    // Front face (+Z)
    let frontBreak = document.createElement("a-image");
    frontBreak.setAttribute("width","1.03");
    frontBreak.setAttribute("height","1.03");
    frontBreak.setAttribute("side","double");
    frontBreak.setAttribute("opacity","0");
    frontBreak.setAttribute("src", "breaking textures/destroy_stage_1.png");
    frontBreak.setAttribute("rotation","0 0 0");
    frontBreak.setAttribute("position","0 0 0.505");
    this.obj.append(frontBreak);

    // Back face (-Z)
    let backBreak = document.createElement("a-image");
    backBreak.setAttribute("width","1.03");
    backBreak.setAttribute("height","1.03");
    backBreak.setAttribute("side","double");
    backBreak.setAttribute("opacity","0");
    backBreak.setAttribute("src", "breaking textures/destroy_stage_1.png");
    backBreak.setAttribute("rotation","0 180 0");
    backBreak.setAttribute("position","0 0 -0.505");
    this.obj.append(backBreak);

    // Bottom face
    let bottomBreak = document.createElement("a-image");
    bottomBreak.setAttribute("width","1.03");
    bottomBreak.setAttribute("height","1.03");
    bottomBreak.setAttribute("opacity","0");
    bottomBreak.setAttribute("side","double");
    bottomBreak.setAttribute("src", "breaking textures/destroy_stage_1.png");
    bottomBreak.setAttribute("rotation","90 0 0");
    bottomBreak.setAttribute("position","0 -0.505 0");
    this.obj.append(bottomBreak);


                                                                                 //outline stuff
    this.frameEl = frame;
    this.obj.addEventListener('mouseenter', () => {
       window.currentBlock = this; // this is our global pointer to the current block user is hovering
      this.frameEl.setAttribute('opacity', '1');
    });
    this.obj.addEventListener('mouseleave', () => {
      if (window.currentBlock === this) { 
        window.currentBlock = null;
      }
      this.frameEl.setAttribute('opacity', '0');
    });


                                                                                // placing blocks

  //this.obj.addEventListener("mousedown", () => {
    //if (window.selectedBlock !== "oakLog") return;

    //if (window.inventory.oakLog > 0) {
    //new OakLog(this.x, this.y + 1, this.z);
    //window.inventory.oakLog--;
 // }
  //});

  


                                                                               //break blocks

    this.blockEl = this.obj;
    this.breaktop = topBreak;
    this.breakbottom = bottomBreak;
    this.breakright = rightBreak;
    this.breakleft = leftBreak;
    this.breakfront = frontBreak;
    this.breakback = backBreak;
    this.hitCount = 0;

    scene.append(this.obj);
  }
  outline(){
    if (this.frameEl) this.frameEl.setAttribute("opacity", "1");
  }
  breakBlock() {
    if (!this.breakable) return;
     this.hitCount++;
     console.log("Hit:", this.hitCount);
     //deleteable? line 200
     this.obj.removeAttribute("static-body");
      if (this.hitCount == 1) {
        this.breaktop.setAttribute("opacity", "1");
        this.breakbottom.setAttribute("opacity", "1");
        this.breakright.setAttribute("opacity", "1");
        this.breakleft.setAttribute("opacity", "1");
        this.breakfront.setAttribute("opacity", "1");
        this.breakback.setAttribute("opacity", "1");
      }
      if (this.hitCount == 2) {
        this.breaktop.setAttribute("src", "breaking textures/destroy_stage_3.png");
        this.breakbottom.setAttribute("src", "breaking textures/destroy_stage_3.png");
        this.breakright.setAttribute("src", "breaking textures/destroy_stage_3.png");
        this.breakleft.setAttribute("src", "breaking textures/destroy_stage_3.png");
        this.breakfront.setAttribute("src", "breaking textures/destroy_stage_3.png");
        this.breakback.setAttribute("src", "breaking textures/destroy_stage_3.png");
      }
      if (this.hitCount == 3) {
        this.breaktop.setAttribute("src", "breaking textures/destroy_stage_5.png");
        this.breakbottom.setAttribute("src", "breaking textures/destroy_stage_5.png");
        this.breakright.setAttribute("src", "breaking textures/destroy_stage_5.png");
        this.breakleft.setAttribute("src", "breaking textures/destroy_stage_5.png");
        this.breakfront.setAttribute("src", "breaking textures/destroy_stage_5.png");
        this.breakback.setAttribute("src", "breaking textures/destroy_stage_5.png");
      }
      if (this.hitCount >= 4){ 
        console.log("Block broken at:", this.x, this.y, this.z); 
        scene.removeChild(this.obj);

        let newBlock = new OakLog(this.x, this.y + 0.5, this.z);
        newBlock.obj.setAttribute("scale", "0.3 0.3 0.3");
        newBlock.obj.setAttribute("dynamic-body", "shape: box; friction: 0.8; restitution: 0.3; mass: 5;");
        newBlock.obj.setAttribute("velocity", "0 0 0");
        newBlock.obj.removeAttribute("static-body");
        newBlock.breakable = false;
        
        window.droppedBlocks = window.droppedBlocks || [];
        window.droppedBlocks.push({
        obj: newBlock.obj,
        type: "oakLog"
      });

      } 
  }
    
    collectingBlock(){ 
      console.log("Block collected at:", this.x, this.y, this.z);
      this. x += this.dx;
      this. y += this.dy;
      this. z += this.dz;
      this.dy -= 0.01; // gravity effect
      this.blockEl.setAttribute("rotation", {x: this.x, y: this.y, z: this.z});
      if (this.y < 0) {
        this.y = 0;
      }
      if (this.y >1.5){
        this.y =- this.dy
      }
    }

    distance(obj1,obj2){
      let x1 = obj1.object3D.position.x;
      let y1 = obj1.object3D.position.y;
      let z1 = obj1.object3D.position.z;
      let x2 = obj2.object3D.position.x;
      let y2 = obj2.object3D.position.y;
      let z2 = obj2.object3D.position.z;

      let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
      return d;
    }
}