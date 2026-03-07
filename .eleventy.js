const markdownIt = require("markdown-it");
const katex = require("@iktakahiro/markdown-it-katex");

module.exports = function(eleventyConfig) {
// ------------ LaTeX ---------- 
  const mdLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(katex);

  eleventyConfig.setLibrary("md", mdLib);

// ------------ ajout de collections --------
  eleventyConfig.addCollection("recentPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse().slice(0, 3);
  });
  
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });
  
// ----------------- ajout de filtres ---------------- 
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dateObj.toLocaleDateString('fr-CA', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

// --------------- Passthrough copies -------------
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/script");
  eleventyConfig.addPassthroughCopy("src/lightbox2-2.11.4");

// ---------------- ignore files ----------------
  eleventyConfig.ignores.add("_site");
  eleventyConfig.ignores.add("src/_includes/_site/"); 

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};