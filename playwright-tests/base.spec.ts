import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(
    "Twenty One Southend – Venue, Cafe & Cultural Centre",
  );
});

test("has heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Welcome to Twenty One – a wonderful venue, exhibition space and café & bar on Southend seafront",
    }),
  ).toBeVisible();
});
