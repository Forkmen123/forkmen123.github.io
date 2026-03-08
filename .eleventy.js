const markdownIt = require("markdown-it");
const katex = require("@iktakahiro/markdown-it-katex");
const cheerio = require('cheerio');

module.exports = function(eleventyConfig) {
// ------------ LaTeX ---------- 
  const mdLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(katex);

  eleventyConfig.setLibrary("md", mdLib);

// ------------ table of contents ------------------

  eleventyConfig.addFilter('getTOC', function(content) {
    const $ = cheerio.load(content);
    
    let toc = '<ul class="toc-list">';
    
    $('h1, h2, h3').each(function() {
      const text = $(this).text();
      let id = $(this).attr('id');
      
      // Create ID if it doesn't exist
      if (!id) {
        id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        $(this).attr('id', id);
      }
      
      const level = this.name; // h1, h2, or h3
      toc += `<li class="${level}"><a href="#${id}">${text}</a></li>`;
    });
    
    toc += '</ul>';
    return toc;
  });



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