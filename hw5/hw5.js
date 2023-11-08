"use strict";
let x = {
    name: {
        firstName: "FirstName",
        secondName: undefined,
    },
    age: 10,
};
let x1 = {
    name: {
        firstName: "FirstName",
        secondName: "SecondName",
    },
    age: 10,
};
let x2 = {
    NAME: {
        firstName: "FirstName",
        secondName: undefined,
    },
    AGE: 10,
};
/*
Стоврити тип, що на основі єнаму генерує тип об'єкту, що як ключ має назву
ключа єнаму з додатковим префіксом 'get-' а як значення просто функцію
*/
var Keys;
(function (Keys) {
    Keys[Keys["Key1"] = 0] = "Key1";
    Keys[Keys["Key2"] = 1] = "Key2";
    Keys[Keys["Key3"] = 2] = "Key3";
})(Keys || (Keys = {}));
const x3 = {
    "get-Key1": () => { },
    "get-Key2": () => { },
    "get-Key3": () => { },
};
const userShort = {
    name: "Name",
    age: 5,
};
const x4 = {
    name: Object.getOwnPropertyDescriptor(userShort, "name"),
    age: Object.getOwnPropertyDescriptor(userShort, "age"),
};
console.log(x4);
/*
Створити тип, що буде повертати тип параметру функції
(Якщо в параметрі вказано массив number[] то вірним типом буде number)
*/
function fArray(param) {
    return 0;
}
let r1;
