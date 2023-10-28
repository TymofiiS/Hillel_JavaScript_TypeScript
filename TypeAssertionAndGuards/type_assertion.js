"use strict";
class Fish1 {
    constructor() {
        this.a = "1";
    }
    swim() { }
}
const nemo = {
    swim() { },
};
const notNemo = {
    notSwim() { },
};
let fishNemo = nemo;
let fish2 = nemo;
let fish3 = notNemo;
//********************************* */
class DataProvider {
    constructor(data) {
        this.data = data;
    }
}
let str = new DataProvider("string");
let arr = str.data.split(",");
let statusCode = 200;
const requestBody = { status: statusCode };
let a = {
    status: 200,
    data: {
        role: "user",
    },
};
a.status = 404;
a.data.role = "user";
//******************************* */
function isStringAssert(condition) {
    if (!condition) {
        throw new Error("");
    }
}
function isString(value) {
    return typeof value === "string";
}
function isStringAssertCombined(value) {
    if (typeof value !== "string") {
        throw new Error("");
    }
}
const testScope = (text) => {
    try {
        //isStringAssert(isString(text));
        isStringAssertCombined(text);
        text.toUpperCase();
    }
    catch (error) { }
};
