export default function() {
  return {
    permalink: function (data) {
      if (data.home) {
        return `/index.html`; // Home page permalink
      }
      const slug = data.slug || data.title
      return `/${this.slugify(slug)}/index.html`; // Default permalink
    },
    eleventyComputed: {
      eleventyNavigation: data => {
        // Check if the page has `eleventyNavigation.hide` set to `true`
        if (data.eleventyNavigation && data.eleventyNavigation.hide) {
          return undefined; // Exclude from navigation
        }
        // Include in navigation if no `hide` flag is set
        return {
          key: data.title,
          order: data.order
        };
      }
    },
    layout: "layout.njk", 
  }
}
