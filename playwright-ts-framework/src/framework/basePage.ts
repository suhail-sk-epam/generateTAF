// Core abstraction layer
// Common UI actions
import { Page } from '@playwright/test';
export class BasePage {
  constructor(protected page: Page) {}
  async navigate(url: string) {
    await this.page.goto(url);
  }
  async click(selector: string) {
    await this.page.click(selector);
  }
  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }
}