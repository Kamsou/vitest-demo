import { test, expect, vi } from "vitest";
import { greeting } from "../../utils/index";

test("greeting", () => {
  const spy = vi.spyOn(console, "log");

  greeting("World");
  expect(spy).toBeCalledTimes(1);
  expect(spy).toBeCalledWith("Hello World");

  spy.mockReset();

  greeting("Camille");
  expect(spy).toBeCalledTimes(1);
  expect(spy).toBeCalledWith("Hello Camille");
});
