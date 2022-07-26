const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://suitsupply.com/en-nl'
  },
  includeShadowDom: true,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000
});
