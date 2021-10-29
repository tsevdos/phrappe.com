---
title: "Conditional styles for IE10"
date: "2013-07-10"
type: "post"
permalink: /css/conditional-styles-for-ie10/
categories:
  - css
tags:
  - conditional comments
  - ie
  - IE10
  - internet explorer 10
---

As you probably know Internet Explorer 10 doesn&#8217;t support the [good-old IE CSS conditional comments](<http://msdn.microsoft.com/en-us/library/ms537512(v=VS.85).aspx> "Conditional comments"). This means that the below code **won't work in IE10**!

```html
<!-- Not working :-( -->
<!--[if IE 10]>
  <link type="text/css" rel="stylesheet" media="all" href="/path/to/ie10.css" />
<![endif]-->
```

But don't worry, you can still apply CSS styles only to **IE10** by using the below syntax. Great tip, that I learned from [Chris Coyer's blog](http://css-tricks.com/ie-10-specific-styles/ "CSS tricks").

```css
html[data-useragent*="MSIE 10.0"] body {
  background: #ccc; /* IE10-only */
}
```
