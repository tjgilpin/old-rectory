export default {
  eleventyComputed: {
    title: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.title;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.title;
      if (data.page.fileSlug === "food-drink" && data['food-drink']) return data['food-drink'].title;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.title;
      if (data.page.fileSlug === "treatment-rooms" && data['treatment-rooms']) return data['treatment-rooms'].title;
      if (data.page.fileSlug === "upcoming-events" && data['upcoming-events']) return data['upcoming-events'].title;
      return "";
    },
    sections: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.sections;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.sections;
      if (data.page.fileSlug === "food-drink" && data['food-drink']) return data['food-drink'].sections;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.sections;
      if (data.page.fileSlug === "treatment-rooms" && data['treatment-rooms']) return data['treatment-rooms'].sections;
      if (data.page.fileSlug === "upcoming-events" && data['upcoming-events']) return data['upcoming-events'].sections;
      return "";
    },
    headerimage: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.headerimage;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.headerimage;
      if (data.page.fileSlug === "food-drink" && data['food-drink']) return data['food-drink'].headerimage;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.headerimage;
      if (data.page.fileSlug === "treatment-rooms" && data['treatment-rooms']) return data['treatment-rooms'].headerimage;
      if (data.page.fileSlug === "upcoming-events" && data['upcoming-events']) return data['upcoming-events'].headerimage;
      return "";
    },
    body: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.body;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.body;
      if (data.page.fileSlug === "food-drink" && data['food-drink']) return data['food-drink'].body;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.body;
      if (data.page.fileSlug === "treatment-rooms" && data['treatment-rooms']) return data['treatment-rooms'].body;
      if (data.page.fileSlug === "upcoming-events" && data['upcoming-events']) return data['upcoming-events'].body;
      return "";
    },    
  }
}