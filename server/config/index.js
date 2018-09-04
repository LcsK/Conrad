const {
  NODE_ENV, PORT,
} = process.env;

/**
 * Get the application's configuration
 * @returns object containing the application's configuration
 */
module.exports = () => ({
  env: NODE_ENV || 'local',
  port: PORT || 8080,
});
