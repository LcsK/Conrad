// log4js: https://github.com/log4js-node/log4js-node
// docs: https://log4js-node.github.io/log4js-node/index.html

const { getLogger } = require('log4js');

const DEFAULT_LEVEL = 'debug';
const defaultLogger = getLogger();
defaultLogger.level = DEFAULT_LEVEL;

/**
 * Get a logger instance, if level param is default, it will return a global logger instance
 * @param {String} level logger level (default: 'debug')
 * @returns logger instance
 */
module.exports = (level = DEFAULT_LEVEL) => {
  if (level === DEFAULT_LEVEL) {
    return defaultLogger;
  }
  const logger = getLogger();
  logger.level = level;
  return logger;
};
