---
title: "Convert a jQuery object to raw DOM object"
date: "2010-07-06"
type: "post"
permalink: /javascript/convert-a-jquery-object-to-raw-dom-object/
categories:
  - javascript
tags:
  - jquery
---

There are two, easy ways to achieve this. The first one is simply by using the array [] notation directly on the jQuery object:

```js
var myDiv = $("div")[0]; // myDiv is a raw DOM object
myDiv.innerHTML = "New Hello World text!"; // and we can do all the normal things with it
```

The second one is by using the [get method](http://api.jquery.com/get/ "Get method - jQuery"), the "core get" method, not the "AJAX get" one. The get method returns an array with the selected elements, and we can optionally pass an index number parameter to return the element we need.

```js
var myDiv = $("div").get(0); // myDiv is again a raw DOM object
myDiv.innerHTML = "New Hello World text!"; // and we can do all the normal things with it
```

Super easy, isn’t it?
