---
title: "Safari's HTML5 search input"
date: "2011-07-08"
type: "post"
permalink: /markup/safaris-html5-search-input/
categories:
  - css
  - markup
tags:
  - ambrosia
  - css
  - field
  - html5
  - input
  - markup
  - safari
  - search
  - theme
---

The safest and easiest way to upgrade your markup to **HTML5** is to use the [new form input types](http://diveintohtml5.org/forms.html "Dive into HTML5 - web forms"). They will appear as ordinary text inputs on older browsers, and at the same time they'll save you tons of work on form validation, and as a bonus they'll assist your users in filling them (by providing more in-browser features, alternate keyboard layouts and more). This blog theme uses a search input to search the site.

```html
<input id="s" name="s" type="search" />
```

It works great, but unfortunately, Safari’s default search input generates a close button (x) into the input field (while you type). Supposedly this will help the users to view recent search keywords, but if they they decide that they don't need help, they can just click it and remove everything from list and the input field. I didn't need this in-browser style for my search input, so after [an investigation](http://diveintohtml5.org/forms.html "Dive into HTML5 - Web forms"), I discovered the below solution.

```css
input[type="search"] {
  -webkit-appearance: textfield;
}
```

This rule will transform your search input (with the strange close button) into a typical text field input that you can style properly.
