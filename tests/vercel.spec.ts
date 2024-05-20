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
    // Go to a bad link directly
    await page.goto('https://lotto-ashen.vercel.app/56');

    // Check for specific elements that signify the error page
    const errorMessage = page.locator('text=Sorry, looks like something went wrong.');
    const returnHomeLink = page.locator('text=Click here to return to the Home Page');

    await expect(errorMessage).toBeVisible();
    await expect(returnHomeLink).toBeVisible();

		// Click the 'Click here to return to the Home Page' link
    await returnHomeLink.click();

    // Verify that the navigation to the home page is successful
    await expect(page).toHaveURL('https://lotto-ashen.vercel.app/');
  });
});

// Pick 5 tests
test.describe('Form submission test five', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://lotto-ashen.vercel.app/five');
  });

  test('pick 5 invalid data', async ({ page }) => {
    const numbers = [1, 5, 4, 2, 3];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }
    await page.click('button[type="submit"]');

    const noResultMessage = page.locator('text=No result.');
    await expect(noResultMessage).toBeVisible();
  });

  test('pick 5 valid data', async ({ page }) => {
    const numbers = [47, 15, 59, 83, 4];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }

    await page.click('button[type="submit"]');

    const amountText = page.locator('text=Amount: 6.523.768.955 Ft');
    const yearWeekText = page.locator('text=Year/Week: 2024/8');

    // Assert that these elements are visible
    await expect(amountText).toBeVisible();
    await expect(yearWeekText).toBeVisible();
  });
});

// Pick 6 tests
test.describe('Form submission test six', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://lotto-ashen.vercel.app/six');
  });

  test('pick 6 invalid data', async ({ page }) => {
    const numbers = [1, 5, 4, 2, 6, 3];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }
    await page.click('button[type="submit"]');

    const noResultMessage = page.locator('text=No result.');
    await expect(noResultMessage).toBeVisible();
  });

  test('pick 6 valid data', async ({ page }) => {
    const numbers = [26, 15, 2, 38, 43, 9];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }

    await page.click('button[type="submit"]');

    const amountText = page.locator('text=Amount: 1.883.128.190 Ft');
    const yearWeekText = page.locator('text=Year/Week: 2023/45');

    await expect(amountText).toBeVisible();
    await expect(yearWeekText).toBeVisible();
  });
});

// Skandi tests
test.describe('Form submission test skandi', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://lotto-ashen.vercel.app/skandi');
  });

  test('should submit the form with invalid values', async ({ page }) => {
    const numbers = [7, 1, 5, 4, 2, 6, 3];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }
    await page.click('button[type="submit"]');

    const noResultMessage = page.locator('text=No result.');
    await expect(noResultMessage).toBeVisible();
  });

  test('submit with specific values and display lottery data, machine draw', async ({ page }) => {
    const numbers = [7, 11, 15, 19, 22, 26, 33];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }

    await page.click('button[type="submit"]');

    const amountText = page.locator('text=Amount: 339.571.185 Ft');
    const yearWeekText = page.locator('text=Year/Week: 2023/39');
    const machineDrawText = page.locator('text=Machine Draw');

    await expect(amountText).toBeVisible();
    await expect(yearWeekText).toBeVisible();
    await expect(machineDrawText).toBeVisible();
  });

  test('submit with specific values and display lottery data, hand draw', async ({ page }) => {
    const numbers = [19, 14, 35, 27, 20, 16, 13];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }

    await page.click('button[type="submit"]');

    const amountText = page.locator('text=Amount: 392.476.815 Ft');
    const yearWeekText = page.locator('text=Year/Week: 2023/27');
    const machineDrawText = page.locator('text=Hand Draw');

    await expect(amountText).toBeVisible();
    await expect(yearWeekText).toBeVisible();
    await expect(machineDrawText).toBeVisible();
  });
});

// Mobile use tests
test.describe('Hamburger menu test', () => {
  test.beforeEach(async ({ page }) => {
    // Set the viewport size to a mobile screen resolution
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('https://lotto-ashen.vercel.app');
  });

  test('Display the mobile menu when the hamburger button is clicked', async ({ page }) => {
    const hamburgerButton = page.locator('#hamburger-button');
    await expect(hamburgerButton).toBeVisible();

    await hamburgerButton.click();

    // Verify that the mobile menu is displayed
    const mobileMenu = page.locator('nav[aria-label="mobile"]');
    await expect(mobileMenu).toBeVisible();

    // Verify that menu items are displayed
    const menuItems = mobileMenu.locator('ul li a');
    await expect(menuItems).toHaveCount(4);
    await expect(menuItems.nth(0)).toHaveText('Pick 5');
    await expect(menuItems.nth(1)).toHaveText('Pick 6');
    await expect(menuItems.nth(2)).toHaveText('Skandi');
    await expect(menuItems.nth(3)).toHaveText('Home');
  });

  test('Navigate to page Pick 5', async ({ page }) => {
    await page.click('#hamburger-button');

    await page.click('nav[aria-label="mobile"] >> text=Pick 5');

    await expect(page).toHaveURL('https://lotto-ashen.vercel.app/five');
    const numbers = [47, 15, 59, 83, 4];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }

    await page.click('button[type="submit"]');

    const amountText = page.locator('text=Amount: 6.523.768.955 Ft');
    const yearWeekText = page.locator('text=Year/Week: 2024/8');

    await expect(amountText).toBeVisible();
    await expect(yearWeekText).toBeVisible();
  });

  test('Navigate to page Pick 6', async ({ page }) => {
    await page.click('#hamburger-button');

    await page.click('nav[aria-label="mobile"] >> text=Pick 6');

    await expect(page).toHaveURL('https://lotto-ashen.vercel.app/six');
    const numbers = [26, 15, 2, 38, 43, 9];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }

    await page.click('button[type="submit"]');

    const amountText = page.locator('text=Amount: 1.883.128.190 Ft');
    const yearWeekText = page.locator('text=Year/Week: 2023/45');

    await expect(amountText).toBeVisible();
    await expect(yearWeekText).toBeVisible();
  });

  test('Navigate to page Skandi', async ({ page }) => {
    await page.click('#hamburger-button');

    await page.click('nav[aria-label="mobile"] >> text=Skandi');

    await expect(page).toHaveURL('https://lotto-ashen.vercel.app/skandi');
    const numbers = [19, 14, 35, 27, 20, 16, 13];
    for (let i = 0; i < numbers.length; i++) {
      await page.fill(`input[type="number"]:nth-of-type(${i + 1})`, numbers[i].toString());
    }

    await page.click('button[type="submit"]');

    const amountText = page.locator('text=Amount: 392.476.815 Ft');
    const yearWeekText = page.locator('text=Year/Week: 2023/27');
    const machineDrawText = page.locator('text=Hand Draw');

    await expect(amountText).toBeVisible();
    await expect(yearWeekText).toBeVisible();
    await expect(machineDrawText).toBeVisible();
  });

  test('Navigate to Home page', async ({ page }) => {
    await page.click('#hamburger-button');

    await page.click('nav[aria-label="mobile"] >> text=Home');

    await expect(page).toHaveURL('https://lotto-ashen.vercel.app');
  });
});
