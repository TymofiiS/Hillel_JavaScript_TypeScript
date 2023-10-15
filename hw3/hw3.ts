/*
Створіть класи Circle, Rectangle, Square і Triangle. 
У кожного з них є загальнодоступний метод calculateArea. 
У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення. 
У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
*/

enum Color {
  red,
  yellow,
  green,
}

interface IShape {
  calculateArea(): number;
  color: Color;
  name: string;
}

interface IPrintable {
  print(): string;
}

abstract class Shape implements IShape {
  protected readonly _color: Color;
  public get color(): Color {
    return this._color;
  }

  protected readonly _name: string;
  public get name(): string {
    return this._name;
  }

  public constructor(color: Color, name: string) {
    this._color = color;
    this._name = name;
  }

  public abstract calculateArea(): number;
}

class Circle extends Shape {
  public calculateArea(): number {
    return 0;
  }
}

class Triangle extends Shape {
  public calculateArea(): number {
    return 0;
  }
}

class Rectangle extends Shape implements IPrintable {
  public print(): string {
    return `S = a * h / 2`;
  }

  public calculateArea(): number {
    return 0;
  }
}

class Square extends Shape implements IPrintable {
  public print(): string {
    return `S = a * a`;
  }

  public calculateArea(): number {
    return 0;
  }
}
