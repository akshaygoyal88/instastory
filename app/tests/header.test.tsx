import { test, expect } from "@playwright/test";

test.describe("Header Component", () => {
  test("should render the Instagram logo and stories slider", async ({
    page,
  }) => {
    // Navigate to your application (adjust the URL accordingly)
    await page.goto("http://localhost:3000"); // Replace with your app's URL

    // Check if the Instagram logo is visible
    const logo = await page.locator('img[src*="instagram-wordmark.svg"]');
    await expect(logo).toBeVisible();

    // Check if the story slider is not visible initially
    const storySlider = page.locator(".story");
    await expect(storySlider).not.toBeVisible();

    // Click on a profile image to open the story slider
    const profileImage = page.locator('img[alt="avatar"]'); // Adjust the selector based on your component
    await profileImage.first().click();

    // Now the story slider should be visible
    await expect(storySlider).toBeVisible();

    // You can also check for specific text or other elements in the story slider
    const closeButton = page.locator('h1:has-text("X")'); // Adjust as necessary
    await expect(closeButton).toBeVisible();

    // Close the story slider
    await closeButton.click();
    await expect(storySlider).not.toBeVisible();
  });
});
