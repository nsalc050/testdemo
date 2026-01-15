import { expect, test } from '@playwright/test';
    
type character = {
    name: string;   
    grade: '4' | '5';
    element: 'Hydro' | 'Pyro' | 'Anemo' | 'Electro' | 'Dendro' | 'Cryo' | 'Geo';
    weapon: 'Sword' | 'Claymore' | 'Polearm' | 'Bow' | 'Catalyst';
};

test('should search for top 5 Genshin Impact characters and verify results', async ({ page }) => {
    // Navigate to Genshin Impact Wiki
    await page.goto('https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki');
    await page.getByRole('link', { name: 'Characters' }).nth(1).click();

});


test('should search for top 5 soccer teams and verify results', async ({ page }) => {
            // Navigate to Google
            await page.goto('https://serebii.net/');
            await page.getByRole('link', { name: '-Diamond/Pearl Pokédex' }).click();
            await page.locator('form[name="nav"]').getByRole('combobox').selectOption('/pokedex-dp/001.shtml');
            await page.goto('https://serebii.net/pokedex-dp/001.shtml');
            await expect(page.getByRole('main')).toMatchAriaSnapshot(`- cell /#\\d+ Bulbasaur/`);
    
            
 });



 test('Search Runescape - Name of Fruit trees and their details',async ({page})=>{
    const searchWord = "fruit trees" 
    var data = null;
    var table;
    //go to runescape wiki
     await page.goto("https://runescape.wiki/");
     await expect(page.getByRole('combobox',{name:'Search'})).toBeVisible();
  // search for fruit seeds
    await page.getByRole('combobox',{name:'Search'}).fill(searchWord);
    await page.getByRole('button',{
        name:'search'}).click()

   
  //retrive Details 
  await expect(page.locator('span').filter({hasText: searchWord}).first()).toBeVisible();
  // validate Table is visible 
   table  = await page.locator("//table[7]");
    expect(table,"Fruit seed table not visible and found").toBeVisible();
  //store them into JSON format
data = {level: , seed: , protection:,
    growthTime: , experience:{
        plant: ,checkhealth: , harvest: 
    }, cost:,fruit: ,ProduceUses:
   }
  // build table with information

 });

