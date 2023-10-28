function f(param: string | (() => string)) {
  let val: string = typeof param !== "string" ? param() : param;
}

class Animal {
  public type: string = "type";
}

function f1(param: Animal | (() => Animal)) {
  let val: Animal = !(param instanceof Animal) ? param() : param;
}

//***************** */
enum EAnimalType {
  fish = "fish",
  bird = "bird",
}

class Abbility {
  fly(): void {}
}

class AnimalBase {}

class Bird extends AnimalBase {
  type: EAnimalType.bird = EAnimalType.bird;
  abbility: Abbility | null = new Abbility();
}

class Fish extends AnimalBase {
  type: EAnimalType.fish = EAnimalType.fish;
  swim(): void {}
}

function f2(param: Bird | Fish) {
  if (param.type === EAnimalType.bird) {
    param;
  } else {
    param;
  }

  let f =
    param.type === EAnimalType.bird ? param?.abbility?.fly() : param.swim();
}

//*********************** */
class A {
  public a: number = 1;
}

class B {
  public b: string = "1";
}

function f4(param: A | B): any {
  if ("a" in param) {
    return param.a;
  } else {
    return param.b;
  }
}

//************************ */
class TypeValidator {
  static isBird(param: Bird | Fish): param is Bird {
    return param.type === EAnimalType.bird;
  }

  static isFish(param: AnimalBase): param is Fish {
    return param instanceof Fish;
  }
}

function f5(param: Fish | Bird) {
  if (TypeValidator.isBird(param)) {
    return param.abbility?.fly();
  }
}

function f6(param: AnimalBase) {
  if (TypeValidator.isFish(param)) {
    param.swim();
  }
}
