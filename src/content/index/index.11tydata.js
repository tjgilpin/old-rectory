export default {
  eleventyComputed: {
    displayTitle: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.title;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.title;
      // Add more cases as needed
      return "";
    }
  }
}