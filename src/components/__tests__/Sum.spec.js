import { test, expect } from "vitest";

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

test("1 + 1", () => {
  expect(sum(1, 1)).toEqual(2);
});

test("1 + 2 + 3", () => {
  expect(sum(1, 2, 3)).toEqual(6);
});
