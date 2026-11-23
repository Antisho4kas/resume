import { expect, it } from "vitest";
import { resolveLocale } from "../../src/i18n/routing";

it.each([undefined, "fr"])("falls back to English for locale %s", (locale) => {
  expect(resolveLocale(locale)).toBe("en");
});

it("preserves a supported locale", () => {
  expect(resolveLocale("ru")).toBe("ru");
});
