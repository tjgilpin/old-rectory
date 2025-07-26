---
type: page
title: Contact Test
hide: true
---

<section class="contact-form">
  <h1>Contact Us</h1>
  <form class="form" name="contact" method="POST" id="contact-form" action="/api/submit-contact-form">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
    <input type="text" id="contact-name" name="contact-name">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
    <button type="submit" class="cta">Send</button>
  </form>
</section>