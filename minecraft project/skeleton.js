class Skeleton {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.hitCount = 0;
        this.isDead = false;

        this.skeleton = document.createElement("a-gltf-model");
        this.skeleton.setAttribute("static-body", "");
        this.skeleton.setAttribute("scale", "0.9 0.9 0.9");
        this.skeleton.setAttribute("src", "#skelly");
        this.skeleton.setAttribute("animation-mixer", "clip: idle");
        this.skeleton.setAttribute("position", { x: x, y: 1, z: z });

        scene.append(this.skeleton);
        this.addClickListener();
    }


walk(playerPos) {
    if (this.isDead) return;

    const obj = this.skeleton.object3D;

    // Direction vector
    const dx = playerPos.x - obj.position.x;
    const dz = playerPos.z - obj.position.z;
    const dist = Math.hypot(dx, dz);

    // Rotate to face player (Three.js models face -Z)
    obj.rotation.y = Math.atan2(dx, dz) + Math.PI;

    const attackRange = 1.2;
    const moveSpeed = 0.02;

    if (dist > attackRange) {
        // Move toward player
        obj.position.x += (dx / dist) * moveSpeed;
        obj.position.z += (dz / dist) * moveSpeed;

        this.skeleton.setAttribute("animation-mixer", "clip: walk");
    } else {
        // Attack animation
        this.skeleton.setAttribute("animation-mixer", "clip: aim");
    }
}



addClickListener() {
    this.skeleton.addEventListener("click", () => {
        if (this.isDead) 
            return;

        this.hitCount++;

        //FOR CAMERA DIRECTION
        const camera = document.querySelector("#camera");
        const camObj = camera.object3D;
        const direction = new THREE.Vector3();
        camObj.getWorldDirection(direction);
        direction.multiplyScalar(-0.4);

        let pos = this.skeleton.getAttribute("position");

        let hitPos = {x: pos.x + direction.x,y: pos.y,z: pos.z + direction.z};

        this.skeleton.setAttribute("animation__hit", {property: "position",to: `${hitPos.x} ${hitPos.y} ${hitPos.z}`,dur: 150,easing: "easeOutQuad"});

        setTimeout(() => {this.skeleton.setAttribute("color", "white");}, 1000);

        if (this.hitCount >= 5) {
                this.die();
            }

    });
}

die() {
    this.isDead = true;
    this.skeleton.setAttribute("animation-mixer", "clip: die");
    this.skeleton.setAttribute("animation__fall", {property: "rotation",to: "0 0 90",dur: 800,easing: "easeOutQuad"});
    this.skeleton.setAttribute("animation__drop", {property: "position",to: `${this.x} 0 ${this.z}`,dur: 800,easing: "easeInQuad"});
}
}
