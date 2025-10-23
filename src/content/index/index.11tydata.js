export default {
  eleventyComputed: {
    displayTitle: data => {
      if (data.title) return data.title;
      if (data.page.fileSlug === "home" && data.home) return data.home.title;
      if (data.page.fileSlug === "food-drink" && data.food_drink) return data.food_drink.title;
      // Add more cases as needed
      return "";
    }
  }
}