module.exports = function(eleventyConfig) {
  // copy the css / images directly to the output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
