export default function() {
  return {
    permalink: function(data) {
      const path = data.page.filePathStem;
      const parts = path.split("/");
      const section = parts[2];
      const file = parts[3];   
      let slug = data.slug || data.title;
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
    // eleventyNavigation: data => {
    //   // Check if the page has `eleventyNavigation.hide` set to `true`
    //   console.log(`data.additional.hide = ${data.additional.hide}`);
    //   if (data.additional.hide !== true) {
    //     return {
    //       key: data.title,
    //       order: data.order || 0,
    //     };
    //   }
    // }    
    // layout: "default.njk", 
  }
}