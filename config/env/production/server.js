module.exports = ({ env }) => ({
  host: env('STRAPI_URL'),
  url: env("RENDER_EXTERNAL_URL"),
});

