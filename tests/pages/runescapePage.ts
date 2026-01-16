import { BasePage } from './basePage';
import { expect } from '@playwright/test';

export class RunescapePage extends BasePage {
  async searchForFruitTrees(searchWord: string) {
    await expect(this.page.getByRole('combobox', { name: 'Search' })).toBeVisible();
    await this.page.getByRole('combobox', { name: 'Search' }).fill(searchWord);
    await this.page.getByRole('button', { name: 'search' }).click();
  }

  async getResultsTable() {
    return this.page.locator('//table[7]');
  }
}

