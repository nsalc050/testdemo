import { expect, test } from '@playwright/test';


type Team = {
    name: string; 
    league: string;
    players: string[];
};
test.describe('Perform Query Tests', () => {
    test('should perform a query to google  and return results', async ({ page }) => {
        // Navigate to the application
        await page.goto('http://localhost:3000'); // Adjust the URL as needed
    
        // Perform a query
        await page.fill('#queryInput', 'test query'); // Adjust the selector as needed
        await page.click('#performQueryButton'); // Adjust the selector as needed
    
        // Wait for results to be displayed
        await page.waitForSelector('#results'); // Adjust the selector as needed
    
        // Verify that results are displayed
        const results = await page.$$('#results .result-item'); // Adjust the selector as needed
        expect(results.length).toBeGreaterThan(0);
    });
    })