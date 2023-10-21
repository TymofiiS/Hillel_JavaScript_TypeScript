/*
Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. 
Наприклад, тип значення для кожного ключа може бути число | рядок.
*/
interface IOne {
  [key: string]: number | string;
}

const a: IOne = { k1: 1 };
const b: IOne = { k2: "2" };

console.log(a, b);

/*
Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. 
Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
*/
interface ITwo {
  [key: string]: (a: any) => void;
}

const c: ITwo = {
  m1(a: string) {
    console.log(`From m1 ${a}`);
  },
  m2(a: boolean) {
    console.log(`From m2 ${a}`);
  },
};

c.m1("any string");
c.m2(true);

/*
Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. 
Ключі повинні бути числами, а значення - певного типу.
*/
interface IThree {
  [key: number]: string;
}

const d: IThree = {
  0: "Zero",
  1: "One",
  2: "Two",
};

for (let i = 0; i < 3; i++) {
  console.log(d[i]);
}

/*
Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
Наприклад, ви можете мати властивості типу name: string 
та індексну сигнатуру для додаткових динамічних властивостей.
*/
interface IFour {
  name: string;
  [key: string]: number | string;
}

const e: IFour = {
  name: "name",
  newName: "new name",
  age: 1,
};

for (const k in e) {
  console.log(e[k]);
}

/*
Створіть два інтерфейси, один з індексною сигнатурою, 
а інший розширює перший, додаючи специфічні властивості.
Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, 
чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
*/
interface IBase {
  [key: string]: number;
}

interface IExtend extends IBase {
  age: number;
}

const j: IExtend = {
  age: 5,
  heigh: 10.5,
  wight: 15.8,
};

const t = (x: IExtend) => {
  for (const k in x) {
    let temp = x[k];
    console.log(`${temp} is ${Number.isFinite(temp) ? "" : "not "}a number`);
  }
};

t(j);
