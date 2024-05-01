import App from "../app";
import { test, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";

test("can render some component", async () => {
  await renderSuspended(App);
  expect(screen.getByText("Hello World!")).toBeDefined();
});
