const config = require('./config')();
const init = require('./server.init.js');

/**
 * Configure and init server
 * @param {Object} app express app instance
 * @returns express app instance
 */
module.exports = (app) => {
  init(app, config);
  return app;
};
