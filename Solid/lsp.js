function drawShape(shape) {
    shape.draw();
}
class Circle1 {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log(`Draw circle with radius ${this.radius}`);
        };
    }
}
let shape = new Circle1(1);
drawShape(shape);
class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.draw = function () {
            console.log(`Draw rectangle with a: ${this.a} and b: ${this.b}`);
        };
    }
}
shape = new Rectangle(2, 3);
drawShape(shape);
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.draw = function () {
            console.log(`Draw triangle with a: ${this.a} and b: ${this.b} and c: ${this.c}`);
        };
    }
}
shape = new Triangle(4, 5, 6);
drawShape(shape);
//# sourceMappingURL=lsp.js.map