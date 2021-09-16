---
title: 'A really simple "equal heights" method for jQuery!'
date: "2010-09-29"
type: "post"
permalink: /javascript/a-really-simple-equal-heights-method-for-jquery/
categories:
  - javascript
tags:
  - jquery
---

Nothing special, a really basic "equal heights" method written in jQuery.

```js
$.fn.equalHeights = function () {
  var maxHeight = 0;
  $(this).each(function (index) {
    var height = $(this).height();

    if (maxHeight < height) {
      maxHeight = height;
    }
  });
  $(this).height(maxHeight);
};

$("ul li").equalHeights();
```

Then you just need to apply the method on the element you want using `$("ul li").equalHeights();`.
