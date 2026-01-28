class Cow {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        
        let cow = document.createElement("a-gltf-model");
        cow.setAttribute("static-body","");
        cow.setAttribute("src","#cow");
        cow.setAttribute("animation-mixer","");
        cow.setAttribute("position",{x:x,y:1,z:z});
        scene.append(cow);

    }
    
}