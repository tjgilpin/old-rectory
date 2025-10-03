import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import yaml from "js-yaml";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import path from "path";
import fs from "node:fs";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";


export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/admin/"); 
  eleventyConfig.addPassthroughCopy("./favicon.svg"); 
  eleventyConfig.addPassthroughCopy("./favicon.ico"); 

  eleventyConfig.addPlugin(eleventyNavigationPlugin);  
	eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  const markdownOptions = {
    html: true,
    breaks: false,
    linkify: true
  };
  const markdownRenderer = markdownIt(markdownOptions).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownRenderer);

  // Add the markdownify filter
  eleventyConfig.addFilter("markdownify", (content) => {
    if (!content) return "";
    return markdownRenderer.render(content);
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    urlPath: "/img/built/",
		outputDir: ".cache/@11ty/img/",
		// output image formats
		formats: ["avif", "webp", "jpeg"],
		// output image widths
		widths: ["auto"],
		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
        sizes: "auto",
			},
			pictureAttributes: {}
		},
	});
  eleventyConfig.on("eleventy.after", () => {
		fs.cpSync(".cache/@11ty/img/", path.join(eleventyConfig.directories.output, "/img/built/"), {
			recursive: true
		});
	});

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      const inputPath = data.page.inputPath;
  
      // Only process src/content files
      if (!inputPath.startsWith("./src/content/")) {
        return data.permalink;
      }
  
      // Relative path inside content folder
      const relative = path.relative("./src/content", inputPath); 
      const parts = relative.split(path.sep); // e.g., ["treatment-rooms", "index.md"]
  
      const folder = parts[0]; // top-level folder
      const fileSlug = data.page.fileSlug; // "index"
  
      // Pages special case
      if (folder === "pages") {
        if (data.title === "Home") return `/`;
        if (data.slug) return `/${data.slug}/`;
        return `/${fileSlug}/`;
      }
  
      // Section folders
      if (parts[1] === "index.md") return `/${folder}/`;        // <--- key fix for index.md
      if (data.slug) return `/${folder}/${data.slug}/`;
      return `/${folder}/${fileSlug}/`;
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true
  };
}
