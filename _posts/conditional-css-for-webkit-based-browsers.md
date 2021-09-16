---
title: "Conditional CSS for Webkit-based browsers"
date: "2011-04-04"
type: "post"
permalink: /css/conditional-css-for-webkit-based-browsers/
categories:
  - css
tags:
  - conditional
  - css
  - media queries
  - webkit
---

**Edit**: Please keep in mind that the below code works also on [MS Edge](#comment-47906). You can re-write **MS Edge** specific CSS using `@supports (-ms-accelerator:true) {}` ([read more on the comment section](#comment-47907)).

On a recent project I had to find a way to apply CSS only on webkit-based browsers. We are all, more or less, very familiar with [IE's conditional comments](http://www.quirksmode.org/css/condcom.html "IE conditional comments"), but what about other browsers? For webkit-based browsers, the solution is fairly simple. We only need to add our CSS statements into a "special" [media query](http://www.w3.org/TR/css3-mediaqueries/ "W3C Media Queries"), that only webkit-based browsers will parse :

```css
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  /* CSS Statements that only apply on webkit-based browsers (Chrome, Safari, etc.) */
  body {
    background: #ccc;
  }
}
```

Nice 'n easy 😉
