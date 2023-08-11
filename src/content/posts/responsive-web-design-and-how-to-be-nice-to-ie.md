---
title: "Responsive web design and how to be nice to IE"
date: "2013-01-15"
type: "post"
permalink: /javascript/responsive-web-design-and-how-to-be-nice-to-ie/
categories:
  - javascript
  - markup
tags:
  - html5
  - internet explorer
  - media queries
  - responsive web design
---

Many people believe that **Internet Explorer** (especially 7 and 8) cannot render correctly responsive web sites. Well the truth is that IE sucks big time (especially versions previous to 9), although the above statement is partially true. With a tiny bit of effort you can make your responsive web site play nicely with IE as well. Let me tell you how.

The first thing you must do in any case (this tip is not only for **responsive web design**), is to make sure that IE is using the latest rendering engine it supports. We can do this very simply by including the below **metatag**. Finally, if the user has [Google Frame](https://www.chromium.org/developers/how-tos/chrome-frame-getting-started "Google Chrome frame") (does anyone have it?) we tell IE to use that rendering engine.

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

Easy so far, the next major problem is that IE8 and below doesn't recognise **HTML5 elements**. Again you can include either [html5shiv](http://code.google.com/p/html5shiv/ "html5shiv") or [modernizr](http://modernizr.com/ "modernizr") to fix this. **[Html5shiv](http://code.google.com/p/html5shiv/ "html5shiv") **is smaller in filesize and does the job but **[Modernizr](http://modernizr.com/ "modernizr")** can help you detect browser features (and not only that), the choice is yours.

Finally you can make IE understand **media queries** (a very important part of responsive web design) with the excellent Javascript polyfill **[Respond.js](https://github.com/scottjehl/Respond "Respond.js")**. That's it, you've made it! With these very simple steps we can be nice to IE and make it treat right our responsive web sites.
