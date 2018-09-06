const fs = require('fs');
const https = require('https');

const logger = require('./logger')();

/**
 * Initialize server
 * @param {Object} app express app instance
 * @param {Number} port port number
 */
const initProd = (app, port) => {
  app.listen(app.listen(port, () => logger.info(`Server running on production mode at ${port}`)));
};

/**
 * Bootstrap https server for development.
 * @param {Object} app express app instance
 * @param {Object} config configuration object
 */
const initDev = (app, config) => {
  try {
    const options = {
      key: fs.readFileSync(config.local.httpsOptions.key),
      cert: fs.readFileSync(config.local.httpsOptions.cert),
    };
    https
      .createServer(options, app)
      .listen(config.port, () => logger.info(`Server running on development mode at ${config.port}`));
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

/**
 * Facade to init server
 * @param {Object} app express app instance
 * @param {Object} config configuration object
 */
module.exports = (app, config) => {
  if (config.env === 'local') {
    initDev(app, config);
  } else {
    initProd(app, config.port);
  }
};
