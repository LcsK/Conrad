const Config = require('./config');
const init = require('./server.init.js');

/**
 * Configure and init server
 * @param {Object} app express app instance
 * @returns express app instance
 */
module.exports = (app, dirname) => {
  const config = Config(dirname);
  init(app, config);
  return app;
};
