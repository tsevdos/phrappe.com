---
title: "Creating an element in jQuery 1.4"
date: "2010-06-09"
type: "post"
permalink: /javascript/creating-an-element-in-jquery-1-4/
categories:
  - javascript
tags:
  - jquery
---

Creating a new DOM element in jQuery is super easy. Just add the element of your choice into the jQuery "wrapper" and you're ready! Really simple. This works like a charm for simple elements, but what happens when you want to add multiple attributes, styles, content, or even events on the new element? Unfortunately you have to "chain" many different functions to build the desired element.

jQuery 1.4 is tackling this problem and provides a quick, easy to use and flexible way to create new and more complicated elements, just by passing an object literal with the appropriate details. In other words, trying to make the element construction a more robust and elegant process, rather than a huge chain of functions. But enough theory, let's have a look at an actual example. Below I'm appending a new div element to the document's body. The second parameter (object literal) is responsible for adding all these attributes, styles, content and events on the div!

```js
$("<div/>", {
  id: "feature",
  class: "post",
  css: {
    border: "1px solid red",
    padding: "5px",
  },
  html: "<p>This is a featured <strong>super</strong> post</p>",
  click: function () {
    alert("You click the featured post!");
  },
}).appendTo("body");
```

Not impressed yet? Well get creative! Try the below example and you'll see what I mean!

```js
$("<input>", {
  type: "text",
  val: "text input",
  css: {
    border: "1px solid #000",
    padding: "5px",
  },
  focusin: function () {
    $(this).val("").addClass("active");
  },
  focusout: function () {
    $(this).val("text input").removeClass("active");
  },
}).appendTo("form");
```

Finally for the spec-junkies have a look at the [official documentation](http://api.jquery.com/jQuery/#jQuery2 "jQuery").
