import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import yaml from "js-yaml";

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/static/");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);  
	eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));
};

export const config = {
  dir: {
    input: "src",
    output: "_site"
  }
};
