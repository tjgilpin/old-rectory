import { DateTime } from "luxon";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import yaml from "js-yaml";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";


export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/static/");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);  
	eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' });
  });

  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  const markdownRenderer = markdownIt(markdownOptions).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownRenderer);

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    if (content.length > 250) {
      return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
    }
    return content;
  });

  // eleventyConfig.addPairedShortcode(
  //   'element',
  //   (content, el = 'div', className) => {
  //     return `<${el}${className ? ` class="${className}"` : ''}>${content}</${el}>`
  //   }
  // )
};

export const config = {
  dir: {
    input: "src",
    output: "_site"
  },
  markdownTemplateEngine: "njk"
};
