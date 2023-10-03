const hello: string = "hello world";
console.log(hello);

const sum = (a: number, b: number): number => a / b;
const c: number = sum(10, 5);
console.log(c);

const validate = (s: string): boolean => !!s;

class Validator {
  public static StrIsValid(arg: string): boolean {
    return !!arg;
  }
}

class Controller {
  public Check(arg: string): boolean {
    const isValid: boolean = validate(arg);
    const extraCheck: boolean = Validator.StrIsValid(arg);

    return isValid && extraCheck;
  }
}
