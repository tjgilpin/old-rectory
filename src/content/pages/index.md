---
layout: default.njk
title: Home
---

<div class="content">{% for section in home.sections %}
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
<behold-widget feed-id="LuryILy9SycrrOzuBkBm"></behold-widget>
<script>
  (() => {
    const d=document,s=d.createElement("script");s.type="module";
    s.src="https://w.behold.so/widget.js";d.head.append(s);
  })();
</script> 
