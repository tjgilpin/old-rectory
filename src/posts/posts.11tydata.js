export default function(data) {
  return {
    permalink: function (data) {
      const slug = data.slug || data.title
      return `/${this.slugify(slug)}/index.html`; // Post permalink
    },    
    layout: "post.njk",
    tags: "posts"
  }
}
