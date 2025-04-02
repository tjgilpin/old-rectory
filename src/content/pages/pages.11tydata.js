export default function() {
  return {
    permalink: function (data) {
      let slug = data.title
      if (slug === 'Home') {
        return '/index.html'; // Home page
      }
      if (data.parent_page) {
        const slugPage = this.slugify(data.parent_page);
        const slugSub = this.slugify(data.title);
        slug = `${slugPage}/${slugSub}`;
      } else {
        slug = this.slugify(slug);
      }
      return `/${slug}/index.html`; // Default permalink
    },
    eleventyComputed: {
      eleventyNavigation: data => {
        // Check if the page has `eleventyNavigation.hide` set to `true`
        if (data.hide === true) {
          return undefined; // Exclude from navigation
        }
        // Include in navigation if no `hide` flag is set
        return {
          key: data.title,
          order: data.order || 0,
        };
      }
    },
    layout: "default.njk", 
  }
}
