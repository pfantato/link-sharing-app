const path = require("path");

const sassOptions = {
  prependData: `@import "src/styles/variables.scss"; @import "src/styles/functions.scss"; @import "src/styles/mixins.scss"; @import "src/styles/index.scss";`,
  includePaths: [path.join(__dirname, "styles")],
};

// @see https://nextjs.org/docs/advanced-features/compiler
const compiler = {
  // removeConsole: {
  //   exclude: ["error"],
  // },
};

const webpack = (
  /** @type {{ module: { rules: { test: RegExp; use: string[]; include: string[]; }[]; }; }} */ config
) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
    include: [
      path.resolve(__dirname, "public"),
      path.resolve(__dirname, "src"),
    ],
  });
  return config;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler,
  experimental: {
    instrumentationHook: true,
  },
  webpack,
  sassOptions,
};

module.exports = nextConfig;
