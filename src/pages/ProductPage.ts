import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/v1');
  }

  async getProductList() {
    return this.page.locator('.inventory_item');
  }

  async getProductNames() {
    return this.page.locator('.inventory_item_name');
  }

  async getProductPrices() {
    return this.page.locator('.inventory_item_price');
  }

  async getAddToCartButtons() {
    return this.page.locator('.btn_inventory');
  }
}