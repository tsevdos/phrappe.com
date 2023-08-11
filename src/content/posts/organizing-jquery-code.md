---
title: "Organizing jQuery Code"
date: "2011-05-09"
type: "post"
permalink: /javascript/organizing-jquery-code/
categories:
  - javascript
tags:
  - code
  - javascript
  - jquery
---

Organizing jQuery code is not easy. Up to now, especially on small/medium scale projects, I used to have a huge jQuery ready function and place all my code there. Some times if I needed to run something on specific elements I was just doing a quick test to check if the element was on the document.

```js
$(document).ready(function () {
  //jQuery code...
  if ($(".someClass").length) {
    // if element exists then run the below code
    // Do something
  }
});
```

The above technique is not too bad, it works just fine for a small or medium sized site, but what happens with a larger site that uses heavy javascript code? The answer came from a presentation I watched recently ([Simple JavaScript & CSS Management With Rack](http://ontwik.com/javascript/simple-javascript-css-management-with-rack-by-avand-amiri/ "Simple JavaScript & CSS Management with Rack by Avand Amiri") by Mr. [Avand Amiri](http://avandamiri.com/ "Avand Amiri") - I strongly encourage you to watch it as well). The solution is really clean and pretty smart. Just create a javascript file (actually you can break it to as many files as you want) that will hold all your main objects. Below is a very basic “Greetings” object.

```js
var Greetings = {
  alertFn: function () {
    alert("OK");
  },

  john: {
    sayHelloToJohn: function () {
      alert("Hello John!");
    },
  },
  // do something else, etc.
};
```

At the example above the object "Greetings" contains two methods (functions). As you can see, I could go further and create nested objects with their own methods. The idea is to organize my methods as well as I can.

Then I only have to call them into our usual jQuery ready function like this.

```js
$(document).ready(function () {
  Greetings.alertFn();
});
// or
$(document).ready(function () {
  Greetings.john.sayHelloToJohn();
});
```

Keep in mind that this way I can follow any code structure/organization I need, so for example I can follow my application's controllers structure and naming convention, or whatever makes more sense for my app. This way we get a simple, more robust, well-organised jQuery code, and not the classic document ready soup...
