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
    calculateArea() {
        return 0;
    }
}
class Triangle extends Shape {
    calculateArea() {
        return 0;
    }
}
class Rectangle extends Shape {
    print() {
        return `S = a * h / 2`;
    }
    calculateArea() {
        return 0;
    }
}
class Square extends Shape {
    print() {
        return `S = a * a`;
    }
    calculateArea() {
        return 0;
    }
}
