---
title: picture
---

{% html %}

 <div class="col-sm-4 col-mb-6 col-12 ">
    <div class="hovereffect">
      <a href="<%- config.root %><%- item.path %>">
        <img class="img-fluid portfolio-img" src="<%- config.root %><%- item.cover_image || theme.default_cover_image %>" alt="<%- item.title || theme.default_post_title || "Untitled" %>">
        <div class="overlay">
          <span class="overlay-text"><%- item.title || theme.default_post_title || "Untitled" %></span>
        </div>
      </a>
    </div>
  </div>

{% endhtml %}