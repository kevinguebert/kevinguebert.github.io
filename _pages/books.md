---
layout: content
title: Books of 2018
permalink: /books/
---

2018 has been a book-filled year so far. If you would like to check out my full list, including upcoming books, visit [my Trello board](https://trello.com/b/lVgkXJ30/reading-list)

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
      </a> by {{book.author}}
    </li>
  {% assign counter = counter | plus:1 %}
{% endfor %}
</ul>
