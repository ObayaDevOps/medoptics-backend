//https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html#_6-install-the-pg-node-module

// Path: ./config/env/production/server.js`

module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
  });
  
  