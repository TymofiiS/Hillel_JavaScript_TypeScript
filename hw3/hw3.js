"use strict";
/*
Створіть класи Circle, Rectangle, Square і Triangle.
У кожного з них є загальнодоступний метод calculateArea.
У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
*/
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
class Shape {
    get color() {
        return this._color;
    }
    get name() {
        return this._name;
    }
    constructor(color, name) {
        this._color = color;
        this._name = name;
    }
}
class Circle extends Shape {
    constructor(color, name, radius) {
        super(color, name);
        this._radius = radius;
    }
    calculateArea() {
        return (Math.PI * this._radius * this._radius) / 4;
    }
}
class Triangle extends Shape {
    constructor(color, name, base, height) {
        super(color, name);
        this._base = base;
        this._height = height;
    }
    calculateArea() {
        return (this._base * this._height) / 2;
    }
}
class Square extends Shape {
    constructor(color, name, base) {
        super(color, name);
        this._base = base;
    }
    print() {
        return `S = base * base`;
    }
    calculateArea() {
        return this._base * this._base;
    }
}
class Rectangle extends Square {
    constructor(color, name, base, height) {
        super(color, name, base);
        this._height = height;
    }
    print() {
        return `S = base * height`;
    }
    calculateArea() {
        return this._base * this._height;
    }
}
const shapes = [
    new Circle(Color.green, "circle", 2),
    new Triangle(Color.yellow, "triangle", 2, 5),
    new Square(Color.red, "square", 2),
    new Rectangle(Color.green, "rectangle", 2, 5),
];
function isIPrintable(obj) {
    return "print" in obj;
}
shapes.forEach((s) => {
    let str = `
    Name : ${s.name};
    Area: ${s.calculateArea()}; 
    Color index: ${s.color};`;
    if (isIPrintable(s)) {
        str += `
    Formula: ${s.print()};`;
    }
    console.log(str);
});
