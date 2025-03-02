# Playwright Test Automation Framework

This repository contains a Playwright-based test automation framework implemented in TypeScript. The framework is designed to automate the testing of the application available at https://www.saucedemo.com/v1.

## Test Structure

- **Page Objects**: Located in `src/pages`, these classes encapsulate interactions with specific pages of the application.
- **Test Files**: Located in `src/tests`, these files contain the test cases that utilize the page objects to perform actions and assertions.

## How to Run Tests

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npx playwright test
   ```

## Test Scenarios

### View Available Products
- Verify that the product list is displayed with images, names, descriptions, prices, and 'Add to Cart' buttons.
- Verify that products are sorted by the default sorting option (e.g., price low to high).
