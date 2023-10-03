"use strict";
const hello = "hello world";
console.log(hello);
const sum = (a, b) => a / b;
const c = sum(10, 5);
console.log(c);
const validate = (s) => !!s;
class Validator {
    static StrIsValid(arg) {
        return !!arg;
    }
}
class Controller {
    Check(arg) {
        const isValid = validate(arg);
        const extraCheck = Validator.StrIsValid(arg);
        return isValid && extraCheck;
    }
}
