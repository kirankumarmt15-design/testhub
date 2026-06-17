import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/openMRS.spec.js',
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: [['html', { open: 'never' }]],

  use: {
    testIdAttribute:   'data-test',
    actionTimeout:     20000,
    navigationTimeout: 60000,
    trace:             'on',
    screenshot:        'only-on-failure',
    video:             'retain-on-failure',
  },

  timeout: 90000,
  expect: { timeout: 15000 },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        actionTimeout:     20000,
        navigationTimeout: 60000,
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        actionTimeout:     20000,
        navigationTimeout: 60000,
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        actionTimeout:     30000,
        navigationTimeout: 90000,
      },
    },
  ],
});