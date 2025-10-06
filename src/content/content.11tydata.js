export default function() {
  return {
    permalink: function(data) {
      const path = data.page.filePathStem;
      const parts = path.split("/");
      const section = parts[2];
      const file = parts[3];
      if (section === 'pages') {
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
    // layout: "default.njk", 
  }
}