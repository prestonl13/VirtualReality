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
        this.cow.classList.remove("clickable");
        scene.append(this.cow);

        // HITBOX (invisible but clickable)
        this.hitbox = document.createElement("a-box");
        this.hitbox.setAttribute("position", { x: x, y: 1.6, z: z });
        this.hitbox.setAttribute("width", 1.5);
        this.hitbox.setAttribute("height", 2);
        this.hitbox.setAttribute("depth", 2);
        this.hitbox.setAttribute("opacity", 0);
        this.hitbox.setAttribute("transparent", true);
        this.hitbox.classList.add("clickable");
        scene.append(this.hitbox);

        this.addClickListener();
    }

    addClickListener() {
        this.hitbox.addEventListener("click", () => {
            console.log("COW CLICKED");

            if (this.isDead) return;

            this.hitCount++;
            this.cow.setAttribute("color", "red");


            const camera = document.querySelector("#camera");
            const camObj = camera.object3D;
            const direction = new THREE.Vector3();
            camObj.getWorldDirection(direction);
            direction.multiplyScalar(-0.4);

            let pos = this.cow.object3D.position;
            let hitPos = {
                x: pos.x + direction.x,
                y: pos.y,
                z: pos.z + direction.z
            };

            this.cow.setAttribute("animation__hit", {
                property: "position",
                to: `${hitPos.x} ${hitPos.y} ${hitPos.z}`,
                dur: 150,
                easing: "easeOutQuad"
            });

            setTimeout(() => {
                this.cow.setAttribute("color", "white");
            }, 1000);

            if (this.hitCount >= 5) {
                this.die();

                let steak = new Steak(this.x, this.y - 0.9, this.z);
                window.droppedBlocks = window.droppedBlocks || [];
                window.droppedBlocks.push({
                    obj: steak.obj,
                    type: "steak"
                });
            }
        });
    }


    update() {
        if (this.isDead) return;

        // Move hitbox to cow position
        this.hitbox.object3D.position.copy(this.cow.object3D.position);
        this.hitbox.object3D.position.y += 0.5;
    }

    die() {
        this.isDead = true;
        scene.removeChild(this.hitbox);
        this.cow.setAttribute("animation__fall", {
            property: "rotation",
            to: "0 0 90",
            dur: 800,
            easing: "easeOutQuad"
        });
        this.cow.setAttribute("animation__drop", {
            property: "position",
            to: `${this.x} 0 ${this.z}`,
            dur: 800,
            easing: "easeInQuad"
        });
    }
}
