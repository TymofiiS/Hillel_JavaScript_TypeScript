class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log(`Draw circle with radius ${this.radius}`);
        };
    }
}
const circle = new Circle(1);
class Editor {
    constructor() {
        this.shapes = [];
    }
    addShape(shape) {
        return this.shapes.push(shape);
    }
    drawAllShapes() {
        this.shapes.forEach(x => x.draw());
    }
}
const editor = new Editor();
editor.addShape(circle);
editor.drawAllShapes();
class Elips {
    constructor(radius1, radius2) {
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.draw = function () {
            console.log(`Draw elips with radius1: ${this.radius1} and raduis2: ${this.radius2}`);
        };
    }
}
const elips = new Elips(2, 3);
editor.addShape(elips);
editor.drawAllShapes();
//# sourceMappingURL=ocp.js.map