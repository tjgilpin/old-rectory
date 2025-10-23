export default {
  eleventyComputed: {
    title: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.title;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.title;
      if (data.page.fileSlug === "food-drink" && data.fooddrink) return data.fooddrink.title;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.title;
      if (data.page.fileSlug === "treatment-rooms" && data.treatmentrooms) return data.treatmentrooms.title;
      if (data.page.fileSlug === "upcoming-events" && data.upcomingevents) return data.upcomingevents.title;
      return "";
    },
    sections: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.sections;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.sections;
      if (data.page.fileSlug === "food-drink" && data.fooddrink) return data.fooddrink.sections;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.sections;
      if (data.page.fileSlug === "treatment-rooms" && data.treatmentrooms) return data.treatmentrooms.sections;
      if (data.page.fileSlug === "upcoming-events" && data.upcomingevents) return data.upcomingevents.sections;
      return "";
    },
    headerimage: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.headerimage;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.headerimage;
      if (data.page.fileSlug === "food-drink" && data.fooddrink) return data.fooddrink.headerimage;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.headerimage;
      if (data.page.fileSlug === "treatment-rooms" && data.treatmentrooms) return data.treatmentrooms.headerimage;
      if (data.page.fileSlug === "upcoming-events" && data.upcomingevents) return data.upcomingevents.headerimage;
      return "";
    },
    body: data => {
      if (data.page.fileSlug === "home" && data.home) return data.home.body;
      if (data.page.fileSlug === "rooms" && data.rooms) return data.rooms.body;
      if (data.page.fileSlug === "food-drink" && data.fooddrink) return data.fooddrink.body;
      if (data.page.fileSlug === "weddings" && data.weddings) return data.weddings.body;
      if (data.page.fileSlug === "treatment-rooms" && data.treatmentrooms) return data.treatmentrooms.body;
      if (data.page.fileSlug === "upcoming-events" && data.upcomingevents) return data.upcomingevents.body;
      return "";
    },    
  }
}