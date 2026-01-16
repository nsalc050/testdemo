import { test, expect } from '@playwright/test';
import { RunescapePage } from '../pages/runescapePage';

test('Search Runescape - Name of Fruit trees and their details', async ({ page }) => {
  const runescapePage = new RunescapePage(page);
  
  await runescapePage.navigateTo('https://runescape.wiki/');
  await runescapePage.searchForFruitTrees('fruit trees');
  
  const table = await runescapePage.getResultsTable();
  expect(table, 'Fruit seed table not visible and found').toBeVisible();
});