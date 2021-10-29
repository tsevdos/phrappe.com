---
title: "Get element's tagname using DOM's tagName property"
date: "2013-09-03"
type: "post"
permalink: /javascript/get-element-tagname-using-doms-tagname-property/
categories:
  - javascript
tags:
  - DOM
  - element
  - get()
  - jquery
  - prop()
  - tag
  - tagname
---

A couple of weeks ago I posted how can you [get an element's tagname](http://phrappe.com/javascript/jquery-elements-tag-name/ "jQuery element’s tag name") using [jQuery's .prop() method](http://api.jquery.com/prop/ ".prop()"). A simpler alternative could be the below code :

```js
$(el).get(0).tagName.toLowerCase();

// example
$("#someElement").get(0).tagName.toLowerCase();
```

The [.get() method](http://api.jquery.com/get/ ".get()") (don't confuse this method with the [jQuery's AJAX .get()](http://api.jquery.com/jQuery.get/ "jQuery.get()"), they are completely different) retrieves the DOM element and then we simply get it's `tagName` property (and convert it to lowercase). We can even retrieve the DOM element from a jQuery array using the below syntax (without the [.get() method](http://api.jquery.com/get/ ".get()")) and have the exact same result.

```js
$(el)[0].tagName.toLowerCase();

// example
$("#someElement")[0].tagName.toLowerCase();
```

I believe that the above method is easier and faster than [the previous one](http://phrappe.com/javascript/jquery-elements-tag-name/ "jQuery element’s tag name").
