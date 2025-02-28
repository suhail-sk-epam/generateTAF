import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
};

export default config;