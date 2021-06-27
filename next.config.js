module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./helpers/generateSiteMap");
    }

    return config;
  },
};
