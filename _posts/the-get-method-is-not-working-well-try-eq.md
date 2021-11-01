---
title: "The get() method is not working! Well try eq()..."
date: "2012-04-02"
type: "post"
categories:
  - javascript
tags:
  - DOM
  - eq()
  - get()
  - jquery
  - object
---

Every now and then, I come across the very same issue, so I decided to write a post about it. Many new JS developers are struggling to find out why the below code is not working when applying jQuery’s [get()](http://api.jquery.com/get/) method:

```js
$(".class").get(1).addClass("test");
```

The selector is correct, and if we remove the `get()` method, it magically works!

The answer is pretty obvious if you check [get()](http://api.jquery.com/get/)'s documentation. The `get()` method returns a **DOM object**, not a **jQuery** one! This means that you don’t have access to jQuery’s fun methods... If you want a similar method (that returns a jQuery object) try [eq()](http://api.jquery.com/eq/), it works the exact same way.
