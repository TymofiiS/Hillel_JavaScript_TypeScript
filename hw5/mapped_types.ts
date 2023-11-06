// Record

interface IValues {
  name: string;
  age: number;
}

type KeyNames = "Name1" | "Name2" | "Name3";

const a1: Record<KeyNames, IValues> = {
  Name1: { name: "n1", age: 1 },
  Name2: { name: "n2", age: 2 },
  Name3: { name: "n3", age: 3 },
};

type CustomRecord<K extends keyof any, V> = {
  [T in K]: V;
};

const c1: CustomRecord<KeyNames, IValues> = {
  Name1: { name: "n1", age: 1 },
  Name2: { name: "n2", age: 2 },
  Name3: { name: "n3", age: 3 },
};

// Calculate parameter/return type
function f1(param: string): number {
  return 0;
}

function f2(param: number): void {}

type ParamType<T> = T extends (param: infer U) => any ? U : undefined;
type ReturnTypeCustom<T> = T extends (param: any) => infer U ? U : undefined;

let t1: ParamType<typeof f1>;
let t2: ParamType<typeof f2>;
let t3: ReturnTypeCustom<typeof f1>;
let t4: ReturnTypeCustom<typeof f2>;
