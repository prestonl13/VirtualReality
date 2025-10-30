class Ufo{
  constructor(x,y,z, speed){
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = speed;

    this.obj = document.createElement("a-entity");
  
    let sphere = document.createElement("a-sphere");
    sphere.setAttribute("radius","3.5");
    sphere.setAttribute("color","blue");
    sphere.setAttribute("position","0 1.4 0");
    sphere.setAttribute("scale","1 0.7 1");
    this.obj.append( sphere );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 0 0");
    body.setAttribute("color","gray");
    body.setAttribute("height","1");
    body.setAttribute("radius","5");
    this.obj.append( body );
  
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append( this.obj )
  }

  invade(){
    this.y += this.speed;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  }


}