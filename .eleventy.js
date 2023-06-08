const pluginWebc = require("@11ty/eleventy-plugin-webc");
const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/image/favicon/");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  eleventyConfig.addPlugin(pluginWebc, {
    components: "./src/_components/**/*.webc",
  });
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.setServerOptions({
    watch: ["_site/**/*.css"],
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
