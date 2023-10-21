"use strict";
const a = { k1: 1 };
const b = { k2: "2" };
console.log(a, b);
const c = {
    m1(a) {
        console.log(`From m1 ${a}`);
    },
    m2(a) {
        console.log(`From m2 ${a}`);
    },
};
c.m1("any string");
c.m2(true);
const d = {
    0: "Zero",
    1: "One",
    2: "Two",
};
for (let i = 0; i < 3; i++) {
    console.log(d[i]);
}
const e = {
    name: "name",
    newName: "new name",
    age: 1,
};
for (const k in e) {
    console.log(e[k]);
}
const j = {
    age: 5,
    heigh: 10.5,
    wight: 15.8,
};
const t = (x) => {
    for (const k in x) {
        let temp = x[k];
        console.log(`${temp} is ${Number.isFinite(temp) ? "" : "not "}a number`);
    }
};
t(j);
