import { type Page, expect, test } from "@playwright/test";

test.beforeEach(async ({ page }: { page: Page }): Promise<void> => {
  await page.goto("/");
});

test.describe("Basic routing", () => {
  test("allows signed in user to nav from Homepage to Auth SignIn page and back", async ({
    page
  }) => {
    // Give each expect call a generous timeout.
    const customTimeout = { timeout: 30000 };

    // Click on the sign in/up link button.
    await page.click('text="Ohio State Student Sign In/Up"');
    await expect(page).toHaveURL("/auth/signin", customTimeout);

    // Click on the home link button.
    await page.click('text="Home"');
    await expect(page).toHaveURL("/", customTimeout);
  });
});
