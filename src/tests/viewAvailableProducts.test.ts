import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test.describe('View Available Products', () => {
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    await productPage.navigate();
  });

  test('should display product list with images, names, descriptions, prices, and add to cart buttons', async () => {
    const productList = await productPage.getProductList();
    expect(await productList.count()).toBeGreaterThan(0);

    const productNames = await productPage.getProductNames();
    const productPrices = await productPage.getProductPrices();
    const addToCartButtons = await productPage.getAddToCartButtons();

    expect(await productNames.count()).toBe(await productList.count());
    expect(await productPrices.count()).toBe(await productList.count());
    expect(await addToCartButtons.count()).toBe(await productList.count());
  });

  test('should sort products by default sorting option (e.g., price low to high)', async () => {
    const productPrices = await productPage.getProductPrices();
    const prices = await productPrices.allTextContents();
    const sortedPrices = [...prices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')));
    expect(prices).toEqual(sortedPrices);
  });
});