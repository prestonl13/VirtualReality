class Blockgrass{
    constructor(x,y,z){
        this.x = x;
        this.y = -15;
        this.z = z;

        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src", "#block_grass");
        this.obj.setAttribute("position", { x, y, z });
        this.obj.setAttribute("scale", "10 10 10");
        this.obj.setAttribute("animation-mixer", "");

        scene.append(this.obj);

    }
}