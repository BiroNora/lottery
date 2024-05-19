import { expect, test } from '@playwright/test';

// Home Page Tests
test('Index page has expected p', async ({ page }) => {
	await page.goto('https://lotto-ashen.vercel.app');
	await expect(page.getByText('Welcome to Control Your Numbers')).toBeVisible();
});


test.describe('Navbar navigation links test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://lotto-ashen.vercel.app');
  });

  test('should navigate to Home when Home link is clicked', async ({ page }) => {
    await page.click('text=Home');
    await expect(page).toHaveURL('https://lotto-ashen.vercel.app');
  });

  test('should navigate to Pick 5 when Pick 5 link is clicked', async ({ page }) => {
    await page.click('text=Pick 5');
    await expect(page).toHaveURL('https://lotto-ashen.vercel.app/five');
  });

  test('should navigate to Pick 6 when Pick 6 link is clicked', async ({ page }) => {
    await page.click('text=Pick 6');
    await expect(page).toHaveURL('https://lotto-ashen.vercel.app/six');
  });

  test('should navigate to Skandi when Skandi link is clicked', async ({ page }) => {
    await page.click('text=Skandi');
    await expect(page).toHaveURL('https://lotto-ashen.vercel.app/skandi');
  });
});

test.describe('Error page test', () => {
  test('should navigate to error page for a bad link', async ({ page }) => {
    // Go to the bad link directly
    await page.goto('https://lotto-ashen.vercel.app/56');

    // Check for specific elements that signify the error page
    const errorMessage = await page.locator('text=Sorry, looks like something went wrong.');
    const returnHomeLink = await page.locator('text=Click here to return to the Home Page');

    // Assert that these elements are visible
    await expect(errorMessage).toBeVisible();
    await expect(returnHomeLink).toBeVisible();

		// Click the 'Click here to return to the Home Page' link
    await returnHomeLink.click();

    // Verify that the navigation to the home page is successful
    await expect(page).toHaveURL('https://lotto-ashen.vercel.app/');
  });
});
