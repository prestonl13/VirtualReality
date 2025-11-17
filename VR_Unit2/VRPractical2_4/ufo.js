class Ufo{
  constructor(x,y,z, speed){
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = speed;

    this.obj = document.createElement("a-entity");
  
    let sphere = document.createElement("a-sphere");
    sphere.setAttribute("radius","3.5");
    sphere.setAttribute("src","https://images.vexels.com/media/users/3/301759/isolated/preview/4e027a949fab59725ff11730dde5dfce-space-alien-kawaii-cartoon-character.png");
    sphere.setAttribute("position","0 1.4 0");
    sphere.setAttribute("scale","1 0.7 1");
    this.obj.append( sphere );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 0 0");
    body.setAttribute("color","gray");
    body.setAttribute("height","1.5");
    body.setAttribute("radius","5");
    this.obj.append( body );
  
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append( this.obj )
  }

  invade(){
    if (this.y < 0){
      this.y = 0;
    }
    else{
      this.y += this.speed;
    }
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    
  }


}