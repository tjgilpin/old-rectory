import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",

  // Eleventy configuration
  ssgName: "eleventy",
  nodeVersion: "18",

  // Eleventy dev server used by Visual Editor
  devCommand: "npx @11ty/eleventy --serve --port {PORT}",

  // Required for Eleventy Visual Editor integration
  experimental: {
    ssg: {
      proxyWebsockets: true,
      logPatterns: {
        up: ["Server at"],
      },
    },
  },

  customContentReload: true,

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,

      contentDirs: ["src/content"],

      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/rooms/{slug}/",
          filePath: "src/content/pages/{slug}.md",
      
          fields: [
            {
              name: "title",
              type: "string",
              required: true,
            },
            {
              name: "headerimage",
              type: "image",
              required: false,
            },
            {
              name: "body",
              type: "markdown",
              required: false,
            },
          ],
        },
      ],      
    }),
  ],
});