// log4js: https://github.com/log4js-node/log4js-node
// docs: https://log4js-node.github.io/log4js-node/index.html

const { getLogger } = require('log4js');

const DEFAULT_LEVEL = 'debug';
const defaultLogger = getLogger();
defaultLogger.level = DEFAULT_LEVEL;

module.exports = (level = DEFAULT_LEVEL) => {
  if (level === DEFAULT_LEVEL) {
    return defaultLogger;
  }
  const logger = getLogger();
  logger.level = level;
  return logger;
};
