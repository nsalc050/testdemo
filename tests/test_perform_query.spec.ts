import { expect, test } from '@playwright/test';
    
test('should search for top 5 soccer teams and verify results', async ({ page }) => {
            // Navigate to Google
            await page.goto('https://serebii.net/');
            await page.getByRole('link', { name: '-Diamond/Pearl Pokédex' }).click();
            await page.locator('form[name="nav"]').getByRole('combobox').selectOption('/pokedex-dp/001.shtml');
            await page.goto('https://serebii.net/pokedex-dp/001.shtml');
            await expect(page.getByRole('main')).toMatchAriaSnapshot(`- cell /#\\d+ Bulbasaur/`);
    
            
 });