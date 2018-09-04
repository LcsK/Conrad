const http = require('http');

const logger = require('./logger')();

/**
 * Facade to init server
 * @param {Object} app express app instance
 * @param {Object} config configuration object
 * @returns http server instance
 */
module.exports = (app, config) => {
  const server = http
    .createServer(app)
    .listen(config.port, () => logger.info(`Server running on development mode at ${config.port}`));
  return server;
};
