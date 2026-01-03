import { test, expect } from '@playwright/test';

test.describe('Mobile Menu', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to homepage
		await page.goto('/');
		// Set viewport to mobile size (iPhone 5)
		await page.setViewportSize({ width: 375, height: 667 });
	});

	test('burger button should be visible on mobile', async ({ page }) => {
		const burgerButton = page.locator('.mobile-menu-btn');
		await expect(burgerButton).toBeVisible();
	});

	test('clicking burger button should show mobile menu', async ({ page }) => {
		const burgerButton = page.locator('.mobile-menu-btn');
		const mobileMenu = page.locator('.mobile-menu');

		// Burger button should be visible
		await expect(burgerButton).toBeVisible();

		// Mobile menu should initially be hidden
		await expect(mobileMenu).not.toBeVisible();

		// Click the burger button
		await burgerButton.click();

		// Mobile menu should now be visible
		await expect(mobileMenu).toBeVisible();
	});

	test('burger icon should change to X when menu is open', async ({ page }) => {
		const burgerButton = page.locator('.mobile-menu-btn');

		// Click the burger button to open menu
		await burgerButton.click();

		// Burger button should have 'active' class
		await expect(burgerButton).toHaveClass(/active/);
	});

	test('clicking burger button again should close mobile menu', async ({ page }) => {
		const burgerButton = page.locator('.mobile-menu-btn');
		const mobileMenu = page.locator('.mobile-menu');

		// Open the menu
		await burgerButton.click();
		await expect(mobileMenu).toBeVisible();

		// Close the menu
		await burgerButton.click();
		await expect(mobileMenu).not.toBeVisible();
	});

	test('clicking a menu link should close the mobile menu', async ({ page }) => {
		const burgerButton = page.locator('.mobile-menu-btn');
		const mobileMenu = page.locator('.mobile-menu');
		const menuLink = page.locator('.mobile-nav-links a').first();

		// Open the menu
		await burgerButton.click();
		await expect(mobileMenu).toBeVisible();

		// Click a menu link
		await menuLink.click();

		// Menu should be closed
		await expect(mobileMenu).not.toBeVisible();
	});
});
