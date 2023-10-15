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
  private readonly _radius: number;

  public constructor(color: Color, name: string, radius: number) {
    super(color, name);
    this._radius = radius;
  }

  public calculateArea(): number {
    return (Math.PI * this._radius * this._radius) / 4;
  }
}

class Triangle extends Shape {
  private readonly _base: number;
  private readonly _height: number;

  public constructor(color: Color, name: string, base: number, height: number) {
    super(color, name);
    this._base = base;
    this._height = height;
  }

  public calculateArea(): number {
    return (this._base * this._height) / 2;
  }
}

class Square extends Shape implements IPrintable {
  protected readonly _base: number;

  public constructor(color: Color, name: string, base: number) {
    super(color, name);
    this._base = base;
  }

  public print(): string {
    return `S = base * base`;
  }

  public calculateArea(): number {
    return this._base * this._base;
  }
}

class Rectangle extends Square {
  private readonly _height: number;

  public constructor(color: Color, name: string, base: number, height: number) {
    super(color, name, base);
    this._height = height;
  }

  public print(): string {
    return `S = base * height`;
  }

  public calculateArea(): number {
    return this._base * this._height;
  }
}

const rec = new Rectangle(Color.green, "rec", 2, 5);
console.log(rec.calculateArea(), rec.print());

const sq = new Square(Color.red, "sq", 2);
console.log(sq.calculateArea(), sq.print());
