class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("static-body", "");
    this.obj.setAttribute("position",{x:x,y:y,z:z});    
    this.obj.setAttribute("cursor-listener", "");

    let box = document.createElement("a-box");
    box.setAttribute("id","Block");
    box.setAttribute("width","1");
    box.setAttribute("height","1");
    box.setAttribute("depth","1");
    this.obj.append(box);


    let top = document.createElement("a-plane");
    top.setAttribute("width","1.02");
    top.setAttribute("height","1.02");
    top.setAttribute("src", "grassblock/top.png")
    top.setAttribute("side","double");
    top.setAttribute("rotation","-90 0 0");
    top.setAttribute("position","0 0.51 0");
    this.obj.append(top);

    // Right face (+X)
    let right = document.createElement("a-plane");
    right.setAttribute("width","1.02");
    right.setAttribute("height","1.02");
    right.setAttribute("side","double");
    right.setAttribute("src", "grassblock/side.jpg");
    right.setAttribute("rotation","0 90 0");
    right.setAttribute("position","0.51 0 0");
    this.obj.append(right);

    // Left face (-X)
    let left = document.createElement("a-plane");
    left.setAttribute("width","1.02");
    left.setAttribute("height","1.02");
    left.setAttribute("side","double");
    left.setAttribute("src", "grassblock/side.jpg");
    left.setAttribute("rotation","0 -90 0");
    left.setAttribute("position","-0.51 0 0");
    this.obj.append(left);

    // Front face (+Z)
    let front = document.createElement("a-plane");
    front.setAttribute("width","1.02");
    front.setAttribute("height","1.02");
    front.setAttribute("side","double");
    front.setAttribute("src", "grassblock/side.jpg");
    front.setAttribute("rotation","0 0 0");
    front.setAttribute("position","0 0 0.51");
    this.obj.append(front);

    // Back face (-Z)
    let back = document.createElement("a-plane");
    back.setAttribute("width","1.02");
    back.setAttribute("height","1.02");
    back.setAttribute("src", "grassblock/side.jpg");
    back.setAttribute("side","double");
    back.setAttribute("rotation","0 180 0");
    back.setAttribute("position","0 0 -0.51");
    this.obj.append(back);

    // Bottom face
    let bottom = document.createElement("a-plane");
    bottom.setAttribute("width","1.02");
    bottom.setAttribute("height","1.02");
    bottom.setAttribute("side","double");
    bottom.setAttribute("src", "grassblock/bottom.webp");
    bottom.setAttribute("rotation","90 0 0");
    bottom.setAttribute("position","0 -0.51 0");
    this.obj.append(bottom);

    let frame = document.createElement("a-box");
    frame.setAttribute("width","1.02");
    frame.setAttribute("height","1.02");
    frame.setAttribute("depth","1.02");
    frame.setAttribute("position","0 0 0");
    frame.setAttribute("wireframe","true");
    frame.setAttribute("opacity","0");
    this.obj.append(frame);

    //let breaking1 = document.createElement("a-plane");
    //breaking1.setAttribute("width","1.04");
    //breaking1.setAttribute("height","1.04");
    //breaking1.setAttribute("src", "breaking textures/destroy_stage_0.png");
    //breaking1.setAttribute("side","double");
    //breaking1.setAttribute("rotation","-90 0 0");
    //breaking1.setAttribute("position","0 0.51 0");
    //this.obj.append(breaking1); 


    //outline stuff
    this.frameEl = frame;
    this.obj.addEventListener('mouseenter', () => {
      this.frameEl.setAttribute('opacity', '1');
    });
    this.obj.addEventListener('mouseleave', () => {
      this.frameEl.setAttribute('opacity', '0');
    });

    // placing blocks
    //this.obj.addEventListener('mousedown', () => {
      //console.log('Block clicked at', this.x, this.y, this.z);
      //new Block(this.x, this.y + 1, this.z);
    //});

    //break blocks
    this.blockEl = this.obj;
    this.destroy1 = breaking1;
    this.destroy2 = breaking2;
    this.destroy3 = breaking3;
    let hitCount = 0;
    this.obj.addEventListener('mousedown', () => {
      console.log('Block hit at', this.x, this.y, this.z);
      hitCount++;
      if (hitCount == 1) {
        this.destroy1.setAttribute('opacity', '1');
      }
      if (hitCount == 2) {
        this.destroy1.setAttribute('opacity', '0');
        this.destroy2.setAttribute('opacity', '1');
      }
      if (hitCount == 3) {
        this.destroy2.setAttribute('opacity', '0');
        this.destroy3.setAttribute('opacity', '1');
      }
      if (hitCount == 4) {
        console.log('Block broken at', this.x, this.y, this.z);
        scene.removeChild(this.blockEl);
      }
    });

    scene.append(this.obj);
  }
  outline(){
    if (this.frameEl) this.frameEl.setAttribute("opacity", "1");
  }

  
}