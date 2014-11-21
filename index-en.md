---
layout: "index-en"
title: "Home"
tagline: Reusable Accessible Mapping Platform
published: true
---

{% include JB/setup %}

# Reusable, Accessible, Mapping Platform (RAMP) {#wb-cont}

## What is the RAMP?

* A collaborative open source project led by [Environment Canada](http://ec.gc.ca/).
* RAMP provides the ability to rapidly deploy a theme based Web Mapping application, or to support the implementation of a dynamic Web Mapping viewer.
* Built off of the ESRI JavaScript API, but strives for platform neutrality.


## Key Resources

* [Documentation]({{ BASE_PATH }}/docs/index-en.html)
* [Downloads]({{ BASE_PATH }}/versions/download-en.html)
* [Version history]({{ BASE_PATH }}/versions/index-en.html) and [roadmap]({{ BASE_PATH }}/versions/roadmap-en.html)
* [Examples]({{ BASE_PATH }}/demos/index-en.html)
* [Terms and conditions]({{ BASE_PATH }}/license-en.html) (MIT license)
* [Source code repository](https://github.com/RAMP-PCAR/RAMP-PCAR)

## Recent Blog Posts

<ul>
  {% for post in site.posts limit: 5 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> [{{ post.date | date_to_string }}]</li>
  {% endfor %}
</ul>


## Benefits

### Accessibility, Usability, and Interoperability

* Prioritizes [WCAG 2.0](http://www.w3.org/TR/WCAG20/) level AA compliance
* Leverages [WAI-ARIA](http://www.w3.org/TR/wai-aria/) to further enhance accessibility
* Iterative approach to design, adapting to change all the time
* Built on [HTML5](http://www.w3.org/TR/html5/)
* Supports a wide variety of browsers (IE, Firefox, Chrome, Safari, Opera)

### Themeable and Reusable

* Flexible framework that supports custom templates and widgets
* Allows teams to reuse their work across multiple projects

### Reduces Development Costs

* Provides with an out-of-the-box solution to reduce development costs
* Avoids duplication of effort, continuously building a core toolset of cross-cutting project requirements
* Breeds better quality solutions by working with proven technology

### Inspiring Collaboration

* Project managed on GitHub
* External contributions welcome
* Report issues and suggestions
* Documentation
* Testing