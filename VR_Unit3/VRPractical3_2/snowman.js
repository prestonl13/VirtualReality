class mySnowman {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = 0.1;
        this.rotate = false;


        this.obj = snowmanTemplate.cloneNode(true);


        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });


        this.obj.addEventListener("click", () => {
            this.rotate = true;
            console.log("Clicked");
        });

     
        scene.append(this.obj);
    }

    spin() {
        if (this.rotate) {
            this.x += this.dx;
            this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
        }
    }
}