class Cloud{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let puff1 = document.createElement("a-sphere");
        puff1.setAttribute("color", "white");
        puff1.setAttribute("radius", 1.6);
        puff1.setAttribute("position", { x: 0, y: 0.3, z: 0 });
        puff1.setAttribute("opacity", .5);
        this.obj.append(puff1);

        let puff2 = document.createElement("a-sphere");
        puff2.setAttribute("color", "white");
        puff2.setAttribute("radius", 1.3);
        puff2.setAttribute("position", { x: 1.2, y: 0.4, z: -0.3 });
        puff2.setAttribute("opacity", .5);
        this.obj.append(puff2);

        let puff3 = document.createElement("a-sphere");
        puff3.setAttribute("color", "white");
        puff3.setAttribute("radius", 1.1);
        puff3.setAttribute("opacity", .5);
        puff3.setAttribute("position", { x: -1.1, y: 0.2, z: 0.2 });
        this.obj.append(puff3);

        this.obj.setAttribute("position", { x: x, y: y, z: z });
        scene.append(this.obj);
    }

}


