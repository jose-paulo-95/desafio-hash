const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "test/**/*.spec.js",
    supportFile: false,
    video: false,
    baseUrl: "https://the-internet.herokuapp.com",
    watchForFileChanges: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: [
      "cypress/e2e/api/**/*.cy.js",
      "cypress/e2e/web/**/*.cy.js",
    ]
  },
  env: {
    apiUrl: "https://jsonplaceholder.typicode.com",
    
  },
 
});