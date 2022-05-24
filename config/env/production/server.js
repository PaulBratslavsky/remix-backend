module.exports = ({ env }) => {
  console.log(env, `###############  env #####################`);
  return {
    url: env("RENDER_EXTERNAL_URL"),
  }
};
