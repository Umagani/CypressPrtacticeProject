import { defineConfig } from 'cypress'

export default defineConfig({

  env: {
    // url: 'https://rahulshettyacademy.com', // one way

    GreenCartUrl: "/seleniumPractise/#/",   // green cart
    POMUrl: "/angularpractice/",    // page Object Model
    loginUrl: "/client/",      //  login
    DropDownUrl: "/AutomationPractice/",

    UserName: "kumarglina@gmail.com",
    Password: "Jaisriram@1234",
  },
  //experimentalSessionAndOrigin: true,
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 100000,
  responseTimeout: 100000,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: false,
  watchForFileChanges: true,
  // cypress will save the video recordings if you run in headless browser only with command "npx cypress run"
  // to run in particular browser we need to use command " cypress run e2e --"
  video: false,
  videoUploadOnPasses: false, // actually we need to keep true to save the videos
  //reporter: 'junit',
  // reporterOptions: {
  //   mochaFile: 'results/my-test-output.xml',
  //   toConsole: true,
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://rahulshettyacademy.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true,  //Normally, Cypress restricts testing across different origins (e.g., moving from example.com to sub.example.com), 
    //but enabling experimentalSessionAndOrigin: true relaxes this restriction, allowing tests to visit multiple origins within the same test. 
    //This is useful when your application interacts with multiple domains, such as authentication flows with third - party providers.

  },

})