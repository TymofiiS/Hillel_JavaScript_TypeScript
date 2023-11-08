/*
Вам потрібно створити тип DeepReadonly який буде робити доступними 
тільки для читання навіть властивості вкладених обʼєктів.
*/
type DeepReadonly<T> = {
  +readonly [K in keyof T]: DeepReadonly<T[K]>;
};

interface IUser {
  name: {
    firstName: string;
    secondName?: string;
  };
  age: number;
}

type DeepReadonlyIUser = DeepReadonly<IUser>;

let x: DeepReadonlyIUser = {
  name: {
    firstName: "FirstName",
    secondName: undefined,
  },
  age: 10,
};

/*
Вам потрібно створити тип DeepRequireReadonly який буде робити доступними 
тільки для читання навіть властивості вкладених обʼєктів та ще й робити 
їх обовʼязковими.
*/
type DeepRequireReadonly<T> = {
  +readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};

type DeepRequireReadonlyIUser = DeepRequireReadonly<IUser>;

let x1: DeepRequireReadonlyIUser = {
  name: {
    firstName: "FirstName",
    secondName: "SecondName",
  },
  age: 10,
};

/*
Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи 
до верхнього регістру.
*/
type UpperCaseKeys<T> = {
  [K in keyof T as `${Uppercase<string & K>}`]: T[K];
};

type UpperCaseKeysIUser = UpperCaseKeys<IUser>;

let x2: UpperCaseKeysIUser = {
  NAME: {
    firstName: "FirstName",
    secondName: undefined,
  },
  AGE: 10,
};

/*
Стоврити тип, що на основі єнаму генерує тип об'єкту, що як ключ має назву 
ключа єнаму з додатковим префіксом 'get-' а як значення просто функцію
*/
enum Keys {
  Key1,
  Key2,
  Key3,
}

type TypeFromEnum = {
  [K in keyof typeof Keys as `get-${K}`]: () => void;
};

const x3: TypeFromEnum = {
  "get-Key1": () => {},
  "get-Key2": () => {},
  "get-Key3": () => {},
};

/*
І саме цікаве. Створіть тип ObjectToPropertyDescriptor, 
який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
*/
type ObjectToPropertyDescriptor<T extends object> = {
  [K in keyof T]: PropertyDescriptor | undefined;
};

interface IUserShort {
  name: string;
  age: number;
}

const userShort: IUserShort = {
  name: "Name",
  age: 5,
};

const x4: ObjectToPropertyDescriptor<IUserShort> = {
  name: Object.getOwnPropertyDescriptor(userShort, "name"),
  age: Object.getOwnPropertyDescriptor(userShort, "age"),
};

console.log(x4);

/*
Створити тип, що буде повертати тип параметру функції 
(Якщо в параметрі вказано массив number[] то вірним типом буде number)
*/
function fArrayStr(param: string[]): number {
  return 0;
}

function fArrayUserShort(param: IUserShort[]): number {
  return 0;
}

function fStr(param: string): number {
  return 0;
}

type ParamTypeCustom<T> = T extends (param: (infer U)[]) => any
  ? U
  : T extends (param: infer U) => any
  ? U
  : undefined;

let r1: ParamTypeCustom<typeof fArrayStr>;
let r2: ParamTypeCustom<typeof fArrayUserShort>;
let r3: ParamTypeCustom<typeof fStr>;
