interface Type<T0, T1> {
  name: T0;
  age: T1;
}

const value: Type<string, number> = {
  name: "str",
  age: 10,
};

//********************** */
type Type2<T> = {
  name: T;
};

//************************** */
class Identifire<T> {
  constructor(readonly id: T) {}
  public identifire<U>(arg: T, arg2: U): void {}
}

const x = new Identifire<number>(2);
x.identifire<string>(3, "str");

//********************************* */
function f10<T>(arg: T): T {
  let a: T = arg;
  return a;
}

//************************************** */
interface IParent<T> {}
interface IChild1 extends IParent<string> {}
interface IChild2<T> extends IParent<T> {}

class ClassA<T> {}
class ClassB extends ClassA<string> implements IParent<number> {}
class ClassC<T, U> extends ClassA<T> implements IParent<U> {}

//****************************************** */
class User<T> {
  constructor(readonly id: T) {}
}

const adm: User<string> = new User("name1");

// *******************************************
interface IName {
  name: string;
}

class Collection<T extends IName> {
  private collection: T[] = [];

  public add(item: T): void {
    this.collection.push(item);
  }

  public get<U extends T>(name: string): U {
    return this.collection.find((x) => x.name === name) as U;
  }
}

//************************************* */
interface IUser {
  name: string;
  age: number;
}

let user: IUser;

class A<T extends typeof user> {}
class B<T extends number | string> {}
class C<T extends keyof IUser> {}
class D<T extends IUser[K], K extends keyof IUser> {}

//************************************************ */
// Default value
class A1<U extends IUser, T extends number = number> {}
let a1: A1<IUser>;
