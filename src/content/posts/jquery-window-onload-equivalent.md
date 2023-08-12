---
title: "jQuery window.onload equivalent"
date: "2011-08-01"
type: "post"
permalink: /javascript/jquery-window-onload-equivalent/
categories:
  - javascript
tags:
  - javascript
  - jquery
  - js
  - load()
  - window.onload
---

Last week a reader contacted me noting that my [equal heights script](http://phrappe.com/javascript/a-really-simple-equal-heights-method-for-jquery/ "A really simple “equal heights” method for jQuery!") was not working. When I took a closer look at his code, I found out that the reason for it not working correctly wasn’t my script but the way **jQuery** works! The normal jQuery behaviour is to run the code when the DOM is ready and won't wait for images/graphics etc, to load. There are some cases though, that someone needs to run a piece of code after the entire page is fully loaded. You can achieve that with the code bellow:

```js
$(window).load(function () {
  // When the entire page is fully loaded
  $("#content, #sidebar").equalHeights();
});
```

The elements that needed equal heights contain images, so the script was miscalculating the max-height value because it wasn't getting the correct height of the images (since they were still loading). The above code will fix that, since it will load the script when the entire window is fully loaded (including images).

Keep in mind that this is an [event handler method](http://api.jquery.com/load-event/ "jQuery - .load() event") (a shortcut for `.bind('load', handler)` ) and has nothing to do with the [ajax load() method](http://api.jquery.com/load/ "jQuery - Ajax .load() method").
