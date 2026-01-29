class Steak {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src", "#steak");
        this.obj.setAttribute("position", { x, y, z });
        this.obj.setAttribute("scale", "0.1 0.1 0.1");


        scene.append(this.obj);


        this.obj.setAttribute("dynamic-body","shape: box; mass: 5; friction: 0.8; restitution: 0.3;");
    }
}
