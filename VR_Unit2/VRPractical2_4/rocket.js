class Rocket{
  constructor(x,y,z, speed){
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = speed;

    this.obj = document.createElement("a-entity");
  
    let top = document.createElement("a-cone");
    top.setAttribute("radius-top","0");
    top.setAttribute("radius-bottom","0.5");
    top.setAttribute("color","red");
    top.setAttribute("position","0 0 -2");
    top.setAttribute("height","1");
    this.obj.append( top );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 -1.5 -2");
    body.setAttribute("color","gray");
    body.setAttribute("height","2");
    body.setAttribute("radius","0.5");
    this.obj.append( body );

    let fire = document.createElement("a-cone");
    fire.setAttribute("radius-top","0");
    fire.setAttribute("radius-bottom","0.25");
    fire.setAttribute("position","0 -3.5 -2");
    fire.setAttribute("color","orange");
    fire.setAttribute("height","2");
    fire.setAttribute("rotation", "-180 0 0");
    this.obj.append( fire );
  
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append( this.obj )
  }

  launch(){
    this.y += this.speed;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  }


}