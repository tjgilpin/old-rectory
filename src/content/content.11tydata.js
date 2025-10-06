export default function() {
  return {
    permalink: function(data) {
      const path = data.page.filePathStem;
      const parts = path.split("/");
      const section = parts[2];
      const file = parts[3];
      if (section === 'pages') {

        console.log(`data.additional.hide = ${data.additional.hide}`);

        if (file === 'index') {
          return '/index.html'; // Home page
        }
        else {
          return `/${file}/index.html`; // Other pages in pages folder
        }
      }
      else {
        if (file === 'index') {
          return `/${section}/index.html`; // Section index pages
        } else {
          return `/${section}/${file}/index.html`; // Other pages in section folders
        }
      }
    },
    eleventyNavigation: data => {
      // Check if the page has `eleventyNavigation.hide` set to `true`
      console.log(`data.additional.hide = ${data.additional.hide}`);
      if (data.additional.hide === true) {
        return undefined; // Exclude from navigation
      }
      // Include in navigation if no `hide` flag is set
      return {
        key: data.title,
        order: data.order || 0,
      };
    }    
    // layout: "default.njk", 
  }
}