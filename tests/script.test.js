const { addition } = require("../script");

test("addition de 2 + 3 = 5", () => {
  expect(addition(2, 3)).toBe(5);
});

test("addition de -1 + 1 = 0", () => {
  expect(addition(-1, 1)).toBe(0);
});

test("addition de 10 + 15 = 25", () => {
  expect(addition(10, 15)).toBe(25);
});
