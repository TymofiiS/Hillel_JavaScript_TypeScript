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
    secondName: "SecondName",
  },
  AGE: 10,
};

/*
Стоврити тип, що на основі єнаму генерує тип об'єкту, що як ключ має назву 
ключа єнаму з додатковим префіксом 'get-' а як значення просто функцію
*/

/*
І саме цікаве. Створіть тип ObjectToPropertyDescriptor, 
який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
Створити тип, що буде повертати тип параметру функції 
(Якщо в параметрі вказано массив number[] то вірним типом буде number)
*/
