// Page Object Model (POM) implementation
import { BasePage } from '../framework/basePage';
export class LoginPage extends BasePage {
  async login(username: string, password: string) {
    await this.type('#user-name', username);
    await this.type('#password', password);
    await this.click('#login-button');
  }
}