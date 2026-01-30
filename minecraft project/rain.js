class Rain{
    constructor(x,y,z){
        this.x = x;
        this.y = -100;
        this.z = z;

        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src", "#rain");
        this.obj.setAttribute("position", { x, y, z });
        this.obj.setAttribute("scale", "1 1 1");
        this.obj.setAttribute("animation-mixer", "");

        scene.append(this.obj);

    }
}