import { TestClass } from "./TestClass";

test("using toSorted()", () => {
  const birthYears = [3, 2, 1];
  const sort = birthYears.sort();

  const st = new TestClass("");

  console.log(sort);

  expect(sort).toStrictEqual([1, 2, 3]);
});
