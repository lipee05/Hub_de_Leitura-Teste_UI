const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '15pgv8',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:"http://localhost:3000",
    projectId: "15pgv8",
    video: true,

  },
});
