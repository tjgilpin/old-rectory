import { DateTime } from "luxon";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import yaml from "js-yaml";

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/static/");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);  
	eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' });
  });

};

export const config = {
  dir: {
    input: "src",
    output: "_site"
  }
};

