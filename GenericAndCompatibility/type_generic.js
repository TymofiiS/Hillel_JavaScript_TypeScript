"use strict";
const value = {
    name: "str",
    age: 10,
};
//************************** */
class Identifire {
    constructor(id) {
        this.id = id;
    }
    identifire(arg, arg2) { }
}
const x = new Identifire(2);
x.identifire(3, "str");
//********************************* */
function f10(arg) {
    let a = arg;
    return a;
}
class ClassA {
}
class ClassB extends ClassA {
}
class ClassC extends ClassA {
}
//****************************************** */
class User {
    constructor(id) {
        this.id = id;
    }
}
const adm = new User("name1");
