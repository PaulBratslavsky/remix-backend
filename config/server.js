module.exports = ({ env }) => ({
  host: env('STRAPI_URL'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS')
  },
});
