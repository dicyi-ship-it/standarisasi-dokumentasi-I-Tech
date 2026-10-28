const { test, expect } = require('@playwright/test');
const fs = require('node:fs');

test('screenshot halaman utama', async ({ page }) => {
  const base = process.env.APP_TEST_URL || 'http://127.0.0.1:8000';
  await page.goto(base, { waitUntil: 'networkidle' });
  await expect(page.locator('body')).toBeVisible();
  fs.mkdirSync('docs/assets/screenshots/public', { recursive: true });
  await page.screenshot({ path: 'docs/assets/screenshots/public/homepage-desktop.png', fullPage: true });
});
