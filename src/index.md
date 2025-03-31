---
layout: default.njk
---

<header>
  <img src="{{ home.headerlogo }}" class="logo">
  <img src="{{ home.headerimage }}" class="hero">
</header>
<div class="content">{% for section in home.sections %}
    <section class="section-panel">
      <div class="image">
        <a href="{{ section.url }}">
          <img src="{{ section.sectionimage }}" alt="{{ section.title }}">
        </a>
      </div>
      <div class="copy">
        <a href="{{ section.url }}">
          <h2>{{ section.title }}</h2>
        </a>
        <a href="{{ section.url }}">
          <p>{{ section.body }}</p>
        </a>
        <a href="{{ section.url }}" class="cta">{{section.cta}}</a>
      </div>
    </section>{% endfor %}
</div>
