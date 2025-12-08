class mySnowman {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dz = 0.1;
        this.rotate = false;


        this.obj = car.cloneNode(true);


        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });


        this.obj.addEventListener("click", () => {
            this.rotate = true;
            console.log("Clicked");
        });

     
        scene.append(this.obj);
    }

    spin() {
        if (this.rotate) {
            this.z += this.dz;
            this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
        }
    }
}