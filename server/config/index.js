const path = require('path');

const {
  NODE_ENV, PORT,
} = process.env;

/**
 * Get the application's configuration
 * @param {String} dirname references to the aplication's root directory
 * @returns object containing the application's configuration
 */
module.exports = dirname => ({
  env: NODE_ENV || 'local',
  local: {
    httpsOptions: {
      cert: path.join(dirname, 'server', 'config', 'certs', 'local-cert.pem'),
      key: path.join(dirname, 'server', 'config', 'certs', 'local-key.pem'),
    },
  },
  port: PORT || 8080,
});
