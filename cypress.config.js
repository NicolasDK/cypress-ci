const { defineConfig } = require("cypress")
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  projectId: '4avc81',
  video: false,
  e2e: {
    specPattern: 'cypress/e2e/*/**.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
        allureWriter(on, config);
        return config;
    }
  },
});
