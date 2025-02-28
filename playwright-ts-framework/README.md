# Playwright TypeScript Test Automation Framework
## Features
- **Page Object Model (POM) Implementation**
- **Reusable Functions in an Abstraction Layer**
- **API Test Utilities**
- **GitHub Actions for CI/CD**
- **Allure Reports Integration**
## Installation & Setup
Clone the repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/playwright-ts-framework.git
   cd playwright-ts-framework
   ```
Install dependencies:
```sh
npm install
```
Install Playwright browsers:
```sh
npx playwright install --with-deps
```

## Running Tests
Run all tests:
```sh
npx playwright test
```

Run UI tests only:
```sh
npx playwright test src/tests/ui/
```

Run API tests only:
```sh
npx playwright test src/tests/api/
```

## CI/CD Integration
The framework includes GitHub Actions for automated testing on every push/pull request.