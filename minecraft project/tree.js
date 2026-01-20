class Tree {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");

    //trunk
    this.trunk = new OakLog(x, y, z);
    this.trunk1 = new OakLog(x, y + 1, z);
    this.trunk2 = new OakLog(x, y + 2, z);
    this.trunk3 = new OakLog(x, y + 3, z);
    this.trunk4 = new OakLog(x, y + 4, z);
    this.trunk5 = new OakLog(x, y + 5, z);
    
    // Create oak leaves for the canopy
    this.foliage1 = new OakLeaves(x, y + 6, z);
    this.foliage2 = new OakLeaves(x + 1, y + 7, z);
    this.foliage3 = new OakLeaves(x - 1, y + 7, z);
    this.foliage4 = new OakLeaves(x, y + 4, z + 1);
    this.foliage5 = new OakLeaves(x, y + 4, z - 1);

    this.obj.setAttribute("static-body", "");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }
}