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

export module Iterator {

    class Product {
        constructor(
            private _name: string,
            private _price: number,
            private _id: number
        ) { }

        toString(): string {
            return `{ name: ${this._name}, price: ${this._price}, id: ${this._id} }`;
        }
    }

    class ProductCollection {
        private _products: Product[] = [];

        add(product: Product) {
            this._products.push(product);
        }

        createIterator(): ProductIterator {
            return new ProductIterator(this._products);
        }
    }

    interface Iterator<T> {
        next():T;
        hasNext():boolean;
    }

    class ProductIterator implements Iterator<Product> {
        private _index = 0;
        constructor(private readonly _products: Product[]) { }
        next(): Product {
            return this._products[this._index++];
        }
        hasNext(): boolean {
            return this._index < this._products.length;
        }
    }

    export class Demo {
        run() {
            const products: ProductCollection = new ProductCollection();
            for (let i = 0; i < 5; i++) {
                products.add(new Product('name_'+i,100+i,i));
            }

            const iterator = products.createIterator();
            while (iterator.hasNext()) {
                console.log(iterator.next().toString());
            }
            
        }
    }

}