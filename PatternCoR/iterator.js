"use strict";
/*
Завдання: Iterator
Створіть систему обробки товарів у магазині з використанням паттерна ітератора.

Створіть клас Product (Товар):
Кожен товар має власну назву, ціну та унікальний код.

Створіть клас ProductCollection (Колекція товарів):
Клас містить список товарів.
Реалізуйте метод для додавання товару до колекції.

Створіть інтерфейс Iterator та клас ProductIterator:
Інтерфейс має методи next() та hasNext().

ProductIterator реалізує інтерфейс та дозволяє обходити товари в колекції.
Створіть метод createIterator в класі ProductCollection:

Метод повинен повертати екземпляр ProductIterator, який може обходити товари у колекції.
Створіть декілька об'єктів Product та додайте їх до ProductCollection:

Додайте мінімум 5 товарів до колекції.
Використайте ітератор для обходу та виведення інформації про кожен товар:

Створіть ітератор для колекції та використайте його для
виведення назви, ціни та унікального коду кожного товару.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterator = void 0;
var Iterator;
(function (Iterator) {
    class Product {
        constructor(_name, _price, _id) {
            this._name = _name;
            this._price = _price;
            this._id = _id;
        }
        toString() {
            return `{ name: ${this._name}, price: ${this._price}, id: ${this._id} }`;
        }
    }
    class ProductCollection {
        constructor() {
            this._products = [];
        }
        add(product) {
            this._products.push(product);
        }
        createIterator() {
            return new ProductIterator(this._products);
        }
    }
    class ProductIterator {
        constructor(_products) {
            this._products = _products;
            this._index = 0;
        }
        next() {
            return this._products[this._index++];
        }
        hasNext() {
            return this._index < this._products.length;
        }
    }
    class Demo {
        run() {
            const products = new ProductCollection();
            for (let i = 0; i < 5; i++) {
                products.add(new Product('name_' + i, 100 + i, i));
            }
            const iterator = products.createIterator();
            while (iterator.hasNext()) {
                console.log(iterator.next().toString());
            }
        }
    }
    Iterator.Demo = Demo;
})(Iterator || (exports.Iterator = Iterator = {}));
//# sourceMappingURL=iterator.js.map