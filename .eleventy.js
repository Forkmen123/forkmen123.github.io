module.exports = function(eleventyConfig) {
  // copy the css / images directly to the output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/lightbox2-2.11.4");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
