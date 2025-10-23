export default {
  eleventyComputed: {
    indexTitle: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.title;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.title;
      if (data.page.fileSlug === "food-drink" && data.fooddrink) return data.fooddrink.title;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.title;
      if (data.page.fileSlug === "treatment-rooms" && data.treatmentrooms) return data.treatmentrooms.title;
      if (data.page.fileSlug === "upcoming-events" && data.upcomingevents) return data.upcomingevents.title;
      return "";
    }
  }
}