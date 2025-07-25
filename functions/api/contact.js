export async function onRequest(context) {
  const { request } = context;

  if (request.method === "POST") {
    try {
      const formData = await request.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Log the form data (for debugging purposes)
      console.log({ name, email, message });

      // Example: Send the form data to an email or external API
      // await fetch("https://example.com/api", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, email, message }),
      // });

      return new Response("Form submitted successfully!", { status: 200 });
    } catch (error) {
      console.error("Error handling form submission:", error);
      return new Response("Error processing form submission.", { status: 500 });
    }
  }

  return new Response("Method not allowed.", { status: 405 });
}
