class Fish1 {
  swim(): void {}
  a: string = "1";
}

const nemo = {
  swim(): void {},
};

const notNemo = {
  notSwim(): void {},
};

let fishNemo = <Fish1>nemo;
let fish2 = nemo as Fish1;
let fish3 = <Fish1>(<any>notNemo);

//********************************* */
class DataProvider {
  constructor(public data: any) {}
}

let str = new DataProvider("string");
let arr: string[] = (str.data as string).split(",");

//*********************************** */
type StatusCode = 200 | 404;
type RequestBody = {
  status: StatusCode;
};
let statusCode = 200 as const;
const requestBody: RequestBody = { status: statusCode };

//******************************** */
type NotConstType = {
  status: number;
  data: {
    role: string;
  };
};

type ConstType = {
  status: 200 | 404;
  data: {
    role: "user" | "admin";
  };
};

let a: ConstType = {
  status: 200,
  data: {
    role: "user",
  },
} as const;

a.status = 404;
a.data.role = "user";

//******************************* */
function isStringAssert(condition: any): asserts condition {
  if (!condition) {
    throw new Error("");
  }
}

function isString(value: any): value is string {
  return typeof value === "string";
}

function isStringAssertCombined(value: any): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("");
  }
}

const testScope = (text: any) => {
  try {
    //isStringAssert(isString(text));
    isStringAssertCombined(text);
    text.toUpperCase();
  } catch (error) {}
};
