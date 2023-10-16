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

interface ICircle extends IShape {
  radius: number;
}

interface ITriangle extends IShape {
  base: number;
}

interface ISquare extends IShape, IPrintable {
  base: number;
}

interface IRectangle extends IShape, IPrintable {
  base: number;
  height: number;
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

class Circle extends Shape implements ICircle {
  private readonly _radius: number;
  public get radius(): number {
    return this._radius;
  }

  public constructor(color: Color, name: string, radius: number) {
    super(color, name);
    this._radius = radius;
  }

  public calculateArea(): number {
    return (Math.PI * this._radius * this._radius) / 4;
  }
}

class Triangle extends Shape implements ITriangle {
  private readonly _base: number;
  public get base(): number {
    return this._base;
  }
  private readonly _height: number;
  public get height(): number {
    return this._height;
  }

  public constructor(color: Color, name: string, base: number, height: number) {
    super(color, name);
    this._base = base;
    this._height = height;
  }

  public calculateArea(): number {
    return (this._base * this._height) / 2;
  }
}

class Square extends Shape implements ISquare {
  protected readonly _base: number;
  public get base(): number {
    return this._base;
  }

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

class Rectangle extends Square implements IRectangle {
  private readonly _height: number;
  public get height(): number {
    return this._height;
  }

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

const shapes: IShape[] = [
  new Circle(Color.green, "circle", 2),
  new Triangle(Color.yellow, "triangle", 2, 5),
  new Square(Color.red, "square", 2),
  new Rectangle(Color.green, "rectangle", 2, 5),
];

function isIPrintable(obj: any): obj is IPrintable {
  return "print" in obj;
}

shapes.forEach((s) => {
  let str: string = `
    Name : ${s.name};
    Area: ${s.calculateArea()}; 
    Color index: ${s.color};`;

  if (isIPrintable(s)) {
    str += `
    Formula: ${s.print()};`;
  }

  console.log(str);
});
