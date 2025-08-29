export default function() {
  return {
    permalink: function (data) {
      if (data.title === 'Home') {
        return '/index.html'; // Home page
      }
      if (data.type === 'subpage') {
        let slugParent =  data.parent_slug ?? data.parent_page;
        let slugChild = data.subpageslug ?? data.title;
        slugParent = this.slugify(slugParent);
        slugChild = this.slugify(slugChild);
        let slug = `${slugParent}/${slugChild}`;
        return `/${slug}/index.html`; // Default permalink
      } else {
        let slug = data.pageslug ?? data.title;
        slug = this.slugify(slug);
        return `/${slug}/index.html`; // Default permalink
      }
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
