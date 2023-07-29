import { test, expect, beforeAll, afterAll, vi } from "vitest";
import { getPostBody } from "@/utils/index.js";
import { setupServer } from "msw/node";
import { rest } from "msw";

vi.stubGlobal("fetch", async () => {
  return {
    json() {
      return {
        body: "foo",
      };
    },
  };
});

test("should fetch", async () => {
  const result = await getPostBody(1);

  expect(result).toMatchInlineSnapshot(`"foo"`);
});
