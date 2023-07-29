import { test, expect } from "vitest";
import { deepMerge } from "@/utils/index.js";

test("shallow merge", () => {
  const merged = deepMerge({ name: "Camille" }, { github: "Kamsou" });

  expect(merged).toMatchSnapshot();
});

test("shallow merge with arrays", () => {
  const merged = deepMerge(["vue", "react"], ["svelte", "angular"]);

  expect(merged).toEqual(["vue", "react", "svelte", "angular"]);
});

test("throws errors on merging two different types", () => {
  expect(() => deepMerge(["foo", "bar"], { foo: "bar" })).toThrowError(
    "Cannot merge two different types"
  );
});
