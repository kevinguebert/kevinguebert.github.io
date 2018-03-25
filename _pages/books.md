---
layout: content
title: Books of 2018
permalink: /books/
---

<ul>
{% assign counter = 0 %}
  {% for book in site.books reversed %}
    <li>
      {% if book.finished == false %}
        <a href="{{ book.url }}" rel="book" class="not-finished">
      {% else %}
        <a href="{{ book.url }}" rel="book">
      {% endif %}
        {% if book.current == true %}{% endif %}
        {{book.name}}
      </a>
    </li>
  {% assign counter = counter | plus:1 %}
{% endfor %}
</ul>
