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
      slug = this.slugify(slug);
      if (section === 'pages') {
        return `/${slug}/index.html`; // Pages at root level
      }
      if (section === 'index') {
        if (file === 'home') {
          return `/index.html`; // Index page
        } else {        
          return `/${file}/index.html`; // Section index pages
        }
      }
      if (data.additional && data.additional.shorterurl === true) {
        return `/${slug}/index.html`; // Remove section / category from URL
      }      
      else {
        return `/${section}/${slug}/index.html`; // Other pages in section folders
      }
    },
    eleventyComputed: {
      eleventyNavigation: data => {
        // Check if the page has `eleventyNavigation.show` set to `true`
        if (data.additional && data.additional.show === true) {
          return {
            key: data.title,
            order: data.additional.order || 0,
          };
        } else {
          return undefined; // Exclude from navigation
        }
      },
      type: data => {
        const path = data.page.filePathStem;
        const parts = path.split("/");
        return parts[2];
      },
      slug: data => data.additional && data.additional.slug ? data.additional.slug : data.title
    },
    layout: "default.njk", 
  }
}