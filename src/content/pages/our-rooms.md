---
type: page
title: Our Rooms
headerimage: /assets/img/our-rooms-hero.jpg
sections:
  - title: Crown Room
    url: the-crown
    sectionimage: /assets/img/36-dsc00377.jpg
    body: This is the crown text
    cta: CTA
hide: false
order: 10
---
Rest and relax in our boutique bedrooms, each one different from the others but all equally luxurious; with high quality linens, bespoke Old Rectory toiletries, artisanal tea and coffee facilities and homemade biscuits.


<div class="content">{% for section in sections %}
  <section class="section-panel">
    <div class="image">
      <a href="{{ section.url }}">
        <img src="{{ section.sectionimage }}" alt="{{ section.title }}">
      </a>
    </div>
    <div class="title">
      <a href="{{ section.url }}">
        <h2>{{ section.title }}</h2>
      </a>
    </div>
    <div class="text">
      <a href="{{ section.url }}">
        <p>{{ section.body }}</p>
      </a>
      <a href="{{ section.url }}" class="cta">{{section.cta}}</a>
    </div>
  </section>{% endfor %}
</div>
