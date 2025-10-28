class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let top = document.createElement("a-cone");
    top.setAttribute("color","red");
    top.setAttribute("position","0 0 -2");
    top.setAttribute("height","1");
    this.obj.append( top );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 -1.5 -2");
    body.setAttribute("color","gray");
    body.setAttribute("radius","0.5");
    this.obj.append( body );

    let fire = document.createElement("a-cone");
    fire.setAttribute("position","0 -3.5 -2");
    fire.setAttribute("color","orange");
    fire.setAttribute("height","2");
    fire.setAttribute("-180 0 0");
    this.obj.append( fire );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}