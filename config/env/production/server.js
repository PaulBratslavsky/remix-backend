module.exports = ({ env }) => {
  console.log(env, `###############  env #####################`, env("RENDER_EXTERNAL_URL"));
  return {
    url: env("RENDER_EXTERNAL_URL"),
  }
};
