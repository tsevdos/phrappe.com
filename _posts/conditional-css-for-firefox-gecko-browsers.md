---
title: "Conditional CSS for Firefox/Gecko browsers"
date: "2012-08-20"
type: "post"
permalink: /css/conditional-css-for-firefox-gecko-browsers/
categories:
  - css
tags:
  - browsers
  - conditional
  - css
  - firefox
  - gecko
---

Last year I posted how to add [conditional comments for webkit-based browsers](http://phrappe.com/css/conditional-css-for-webkit-based-browsers/ "Conditional CSS for Webkit-based browsers"). This time I found [a really cool hack on how to do the very same thing for Firefox/Gecko-based browsers](http://css-tricks.com/snippets/css/css-hacks-targeting-firefox/ "CSS Hacks Targeting Firefox") (from [Chris Coyier](http://css-tricks.com/ "CSS-Tricks")). The solution is again very simple and it's based on a media query that only Firefox/Gecko-based browsers will parse.

```css
@-moz-document url-prefix() {
  .selector {
    color: lime;
  }
}
```

```html
<h1 class="selector">Lime text color in Firefox/Gecko browsers!</h1>
```
