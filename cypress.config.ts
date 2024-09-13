import { defineConfig } from 'cypress'

export default defineConfig({

  env: {
    username: 'umadevikonani',
    password: 'Gak@996312'
  },

  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 100000,
  responseTimeout: 100000,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: false,
  // cypress will save the video recordings if you run in headless browser only with command "npx cypress run"
  // to run in particular browser we need to use command " cypress run e2e --"
  video: false,
  videoUploadOnPasses: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },

  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}'
  },

})