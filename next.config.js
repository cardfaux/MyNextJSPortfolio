const path = require('path');

module.exports = {
  webpack: (config) => {
    return config;
  },
  env: {
    HOST: process.env.HOST,
  },
};
