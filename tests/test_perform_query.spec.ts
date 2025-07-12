import { expect, test } from '@playwright/test';
    
    test.describe('Google Soccer Teams Search', () => {
        test('should search for top 5 soccer teams and verify results', async ({ page }) => {
            // Navigate to Google
            await page.goto('https://www.google.com');
    
            // Accept cookies if the consent dialog appears (EU/UK users)
            const consentButton = await page.$('button[aria-label="Accept all"]');
            if (consentButton) {
                await consentButton.click();
            }

            // Ensure the page is loaded and the search input is visible
            
          
            // Perform a search for top 5 soccer teams
            await page.fill('input[name="q"]', 'top 5 soccer teams');
            await page.keyboard.press('Enter');
    
            // Wait for search results to appear
            await page.waitForSelector('h3');
    
            // Get the titles of the first 5 results
            const resultTitles = await page.$$eval('h3', elements =>
                elements.slice(0, 5).map(el => el.textContent?.trim() || '')
            );
    
            // Verify that at least 5 results are returned and titles are not empty
            expect(resultTitles.length).toBeGreaterThanOrEqual(5);
            resultTitles.forEach(title => {
                expect(title).not.toBe('');
            });
        });
    })