---
title: "jQuery lights off effect"
date: "2011-09-12"
type: "post"
permalink: /javascript/jquery-lights-off-effect/
categories:
  - javascript
tags:
  - code
  - javascript
  - jquery
  - lights_off
  - plugin
---

I've been working on a "lights off" effect for videos the other day. Here's a [demo page](http://phrappe.com/demos/lightsoff/lights_off.html) (with the appropriate code) that I might turn into a proper plugin if there is enough interest. Enjoy...

```js
$(document).ready(function () {
  // Build the link
  $(".lightsoff").append(
    '<div class="lightsoffbtn"><a href="#">Lights Off</a></div>',
  );

  // Prepare the overlay
  $("body").append(
    '<div class="lightsoff-ovelay off" style="position:relative; z-index:1; display:none;">close</div>',
  );

  // Variables
  var $overlay = $(".lightsoff-ovelay"),
    $containers = $(".lightsoff"),
    $lightsoffTrigger = $(".lightsoffbtn a");

  // LightsOff events
  $lightsoffTrigger.each(function () {
    // Variables
    var $container = $(this).parent().parent();

    // Apply some CSS
    $container.css({ position: "relative" });

    $(this).click(function (e) {
      e.preventDefault();

      if ($overlay.hasClass("off")) {
        $container.css({
          "z-index": 4000,
        });

        $overlay.css({
          position: "fixed",
          display: "block",
          "text-indent": -99999,
          "background-color": "#000000",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          "z-index": 3000,
          opacity: 0.7,
          cursor: "pointer",
        });

        $overlay.removeClass("off").addClass("on").fadeIn();
      } else if ($overlay.hasClass("on")) {
        e.preventDefault();
        $containers.css({ "z-index": 0 });
        $overlay.removeClass("on").addClass("off").fadeOut();
      }
    });
  });

  $overlay.click(function (e) {
    e.preventDefault();
    $containers.css({ "z-index": 0 });
    $overlay.removeClass("on").addClass("off").fadeOut();
  });
});
```
