"use strict";
function f(param) {
    let val = typeof param !== "string" ? param() : param;
}
class Animal {
    constructor() {
        this.type = "type";
    }
}
function f1(param) {
    let val = !(param instanceof Animal) ? param() : param;
}
//***************** */
var EAnimalType;
(function (EAnimalType) {
    EAnimalType["fish"] = "fish";
    EAnimalType["bird"] = "bird";
})(EAnimalType || (EAnimalType = {}));
class Abbility {
    fly() { }
}
class AnimalBase {
}
class Bird extends AnimalBase {
    constructor() {
        super(...arguments);
        this.type = EAnimalType.bird;
        this.abbility = new Abbility();
    }
}
class Fish extends AnimalBase {
    constructor() {
        super(...arguments);
        this.type = EAnimalType.fish;
    }
    swim() { }
}
function f2(param) {
    var _a;
    if (param.type === EAnimalType.bird) {
        param;
    }
    else {
        param;
    }
    let f = param.type === EAnimalType.bird ? (_a = param === null || param === void 0 ? void 0 : param.abbility) === null || _a === void 0 ? void 0 : _a.fly() : param.swim();
}
//*********************** */
class A {
    constructor() {
        this.a = 1;
    }
}
class B {
    constructor() {
        this.b = "1";
    }
}
function f4(param) {
    if ("a" in param) {
        return param.a;
    }
    else {
        return param.b;
    }
}
//************************ */
class TypeValidator {
    static isBird(param) {
        return param.type === EAnimalType.bird;
    }
    static isFish(param) {
        return param instanceof Fish;
    }
}
function f5(param) {
    var _a;
    if (TypeValidator.isBird(param)) {
        return (_a = param.abbility) === null || _a === void 0 ? void 0 : _a.fly();
    }
}
function f6(param) {
    if (TypeValidator.isFish(param)) {
        param.swim();
    }
}
