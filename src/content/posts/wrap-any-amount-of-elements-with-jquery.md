---
title: "Wrap any amount of elements with jQuery"
date: "2011-02-24"
type: "post"
permalink: /javascript/wrap-any-amount-of-elements-with-jquery/
categories:
  - javascript
tags:
  - jQuery
---

**Update**: Get the [nwrapper plugin](http://plugins.jquery.com/nwrapper/) from the official jQuery plugins site.

jQuery provides a large variety of functions for element [manipulation](http://api.jquery.com/category/manipulation/ "jQuery Manipulation methonds"), that in most cases will manipulate the selected elements in no time. A very useful function for every day manipulation is the [.wrap()](http://api.jquery.com/wrap/ ".wrap() function") function that we can use to wrap an HTML structure around each jQuery element. But what happens when we want to wrap an HTML structure on every n'th number of the selected elements? Unfortunately, jQuery doesn't provide any options to the warp function in order to to do something similar.

After a bit of search I came across [this solution](http://forum.jquery.com/topic/how-to-automatically-group-wrap-n-elements-with-a-div "How to automatically group/wrap n elements with a div?") for the jQuery forum, and created the below jQuery plug in.

```js
(function ($) {
  $.fn.nwrapper = function (options) {
    var defaults = {
      wrapEvery: 1,
      defaultClasses: true,
      extraClasses: false,
      htmlStructure: "div",
    };

    settings = $.extend({}, defaults, options);

    var elements = $(this).children();
    var elementsLen = elements.length;

    for (var i = 0, numb = 1; i < elementsLen; i += settings.wrapEvery, numb++) {
      // Default Classes Array
      var classes = [];
      if (settings.defaultClasses) {
        classes[0] = "wrapper";
        classes[1] = "wrapper-" + numb;

        if (numb == 1) {
          classes[2] = "first";
        }

        if (numb == Math.ceil(elementsLen / settings.wrapEvery)) {
          classes[2] = "last";
        }
      }

      // Merge Default class with Extra Class
      if (settings.extraClasses) {
        $.merge(classes, settings.extraClasses);
      }

      // If you find any classes crete the class string
      if (classes.length > 0) {
        htmlClassesString = 'class="' + classes.join(" ") + '"';
      } else {
        htmlClassesString = "";
      }

      elements
        .filter(":eq(" + i + "), :lt(" + (i + settings.wrapEvery) + "):gt(" + i + ")")
        .wrapAll("<" + settings.htmlStructure + " " + htmlClassesString + " />");
    }

    return $(this);
  };
})(jQuery);

$("#container").nwrapper({
  wrapEvery: 2,
  //defaultClasses : true,
  //extraClasses   : ['class1', 'class2'],
  //htmlStructure  : 'span'
});
```

To use it, select the parent element of the elements you want to wrap, choose how often you'll apply the wrap (wrapEvery attribute - default is 1), choose if you need any default classes or even provide your own extra classes (extraClasses), and finally provide the HTML structured element you'll use for a wrapper (the default is div, but you can also use a span).

Now you can wrap every n'th of your elements.
