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
