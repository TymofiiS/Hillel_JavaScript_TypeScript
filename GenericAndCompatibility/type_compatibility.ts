class UserNew {
  name!: string;
}

class AdminNew {
  name!: string;
  age!: number;
}

let u: UserNew = new UserNew();
let a: AdminNew = new AdminNew();

a = new UserNew() as AdminNew;
u = new AdminNew();

//************************************ */
class UserA {
  login(name: string, email: string): void;
  login(name: string): void {}
}

class UserB {
  login(name: string, email: string): void {}
}

let userA: UserA = new UserA();
let userB: UserB = new UserB();

userA = new UserB();
userB = new UserA();

//****************************** */
// The same logic with generic

//********************************** */
// access identificator is matter!

//*************************************** */
interface ISmall {
  name: string;
  age: number;
}

interface ILarge {
  name: string;
  age: number;
  nik: string;
}

declare let s: ISmall;
declare let l: ILarge;

let s1: ISmall = l;
let l1: ILarge = s as ILarge;

//**************************************** */
type Small = number | string;
type Large = number | string | boolean;

declare let s2: Small;
declare let l2: Large;

let s3: Small = l2 as Small;
let l3: Large = s2;

//****************************************** */
type A5 = (n: number, s: string) => void;
const a5: A5 = (a: number, b: string): void => {};

//******************************************* */
type A6 = (param: number) => void;
type B6 = () => void;

const a61: A6 = (): void => {};
// const a62:A6 = (p:number, s:string):void =>{}; - not allowed
const b61: B6 = (): void => {};
const a62: A6 = b61;

// using keyof - return public keys
class Model<T> {
  constructor(private entity: T) {}

  public get<K extends keyof T>(key: K): T[K] {
    return this.entity[key];
  }
}
