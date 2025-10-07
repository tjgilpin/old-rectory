export default function() {
  return {
    permalink: function(data) {
      const path = data.page.filePathStem;
      const parts = path.split("/");
      const section = parts[2];
      const file = parts[3];
      let slug;
      if (data.additional && data.additional.slug) {
        slug = data.additional.slug 
      } else {
        slug = data.title;
      }
      console.log(data.additional);
      slug = this.slugify(slug);
      if (section === 'pages') {
        if (file === 'index') {
          return '/index.html'; // Home page
        }
        else {
          return `/${slug}/index.html`; // Other pages in pages folder
        }
      }
      else {
        if (file === 'index') {
          return `/${section}/index.html`; // Section index pages
        } else {
          return `/${section}/${slug}/index.html`; // Other pages in section folders
        }
      }
    },
    eleventyComputed: {
      eleventyNavigation: data => {
        // Check if the page has `eleventyNavigation.hide` set to `true`
        if (data.additional && data.additional.show) {
          return {
            key: data.title,
            order: data.additional.order || 0,
          };
        } else {
          return undefined; // Exclude from navigation
        }
      }
    },
    // layout: "default.njk", 
  }
}