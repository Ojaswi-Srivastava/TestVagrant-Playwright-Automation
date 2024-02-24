import { test, expect } from '@playwright/test';

test.describe('Product Selection and Verification',()=>{

  test('has title', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Store' }).click();
    await expect(page.locator('.collection-hero__title')).toHaveText('Collection: Products')
    await page.getByRole('link', { name: '5 Panel Camp Cap' }).click();
    page.waitForURL('**\/5-panel-hat')
    await expect(page.url()).toContain('5-panel-hat');
    await expect(page.getByRole('heading',{ name: '5 Panel Camp Cap' })).toBeVisible()
  });
})

