class Cow {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.hitCount = 0;
        this.isDead = false;

        this.cow = document.createElement("a-gltf-model");
        this.cow.setAttribute("static-body", "");
        this.cow.setAttribute("src", "#cow");
        this.cow.setAttribute("animation-mixer", "");
        this.cow.setAttribute("position", { x: x, y: 1, z: z });

        scene.append(this.cow);

        this.addClickListener();
    }

    addClickListener() {
        this.cow.addEventListener("click", () => {
            if (this.isDead) return;

            this.hitCount++;

            this.cow.setAttribute("color", "red");

            //FOR CAMERA DIRECTION
            const camera = document.querySelector("#camera");
            const camObj = camera.object3D;
            const direction = new THREE.Vector3();
            camObj.getWorldDirection(direction);
            direction.multiplyScalar(-0.4);

     
            let pos = this.cow.getAttribute("position");

            let hitPos = {x: pos.x + direction.x,y: pos.y,z: pos.z + direction.z};

            this.cow.setAttribute("animation__hit", {property: "position",to: `${hitPos.x} ${hitPos.y} ${hitPos.z}`,dur: 150,easing: "easeOutQuad"});

            setTimeout(() => {
                this.cow.setAttribute("material", "color: white");
            }, 1000);

            if (this.hitCount >= 5) {
                this.die();
            }
        });
    }

    die() {
        this.isDead = true;
        this.cow.setAttribute("animation__fall", {property: "rotation",to: "90 0 0",dur: 800,easing: "easeOutQuad"});
        this.cow.setAttribute("animation__drop", {property: "position",to: `${this.x} 0 ${this.z}`,dur: 800,easing: "easeInQuad"});
    }
}
