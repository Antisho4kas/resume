import { expect, test } from "@playwright/test";

const pages = [
  { locale: "de", heading: "Lebenslauf" },
  { locale: "en", heading: "Resume" },
  { locale: "ru", heading: "Резюме" },
];

for (const { locale, heading } of pages) {
  test(`renders the ${locale} page`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    const response = await page.goto(`/${locale}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("returns 404 for an unsupported locale", async ({ page }) => {
  const response = await page.goto("/fr");
  expect(response?.status()).toBe(404);
});
