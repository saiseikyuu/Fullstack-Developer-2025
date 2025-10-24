const add = require("./app");

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});
