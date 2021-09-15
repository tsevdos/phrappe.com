---
title: "4 convenient jQuery tips"
date: "2010-06-05"
type: "post"
permalink: /javascript/4-convenient-jquery-tips/
categories:
  - javascript
tags:
  - jquery
---

I just read the last page of the [jQuery Cookbook](http://www.amazon.com/jQuery-Cookbook-Solutions-Examples-Developers/dp/0596159773/ref=sr_1_1?ie=UTF8&s=books&qid=1274048822&sr=8-1 "jQuery Cookbook") (great book by the way), and I'd like to present 4 very convenient jQuery tips I used to ignore. Better late than ever I guess 😉

## Specify a context

By specifying a context, we help jQuery identify the elements we need, and as a result speed up things, especially on larger projects with complicated DOMs. It's also ridiculously easy to implement. Just pass a second parameter at the jQuery wrapper, for example :

```js
$("h1", "div#posts"); //using jQuery wrapper as context

// ex.
var title = $("h1", "div#posts").css("color", "red");
```

[Check out this Pen!](http://codepen.io/tsevdos/pen/ovzfk)

The above example will select all the h1 headers from the div element with an id of "posts". Our second **context** parameter is using a typical jQuery selector to refer the context element. We can refer the context in any way we want, using simple CSS expressions or even DOM references.

```js
$("h1", "body"); // using an expression
$("input", document.form[0]); // using a DOM reference
```

Keep this tip in mind because it can really boost up your web apps.

## "Chaining" rocks

Just take advantage of the jQuery "chaining" functions! It might feel a little awkward at first, but can save a lot of time and sweat. Below, I'm creating a div element (with an id of "test"), that contains a paragraph element with an anchor node and the text "John". Then I'm selecting that anchor and passing an attribute (a hypertext reference to be more specific or simply href), then re-selecting my first element (the div) using the `end()` function, and finally appending everything to the body of the document. Chaining rocks!

```js
$('<div id="test"><p><a>John</a></p></div>')
  .find("a")
  .attr("href", "http://phrappe.com/")
  .end()
  .appendTo("body");
```

A good habit is to change lines on each function to increase readability. So the above one-line spaghetti code can be re-written like this :

```js
$('<div id="test"><p><a>John</a></p></div>')
  .find("a")
  .attr("href", "http://phrappe.com/")
  .end()
  .appendTo("body");
```

Easy, clean, readable...

## Select elements based on their content

Yes, it can be done easily using the `:contains()` filter. The snippet below will select all the paragraph elements that contain the string "Hello". Keep in mind that the specific filter is case-sensitive, so paragraphs with the text "hello" (lowercase h), won't be selected...

```js
$('p:contains("Hello")');

// example
$('p:contains("Hello")').css("color", "red");
```

## Replace DOM elements

I wasn't aware of this jQuery function. You can use the `replaceWith()` function and replace the selected elements with new ones! Below I'm selecting all the list items with the "old" class, and replacing them with a new list item. Very convenient.

```js
$("li.old").replaceWith("<li>new li</li>");
```

Well, that's it for now. If you have any convenient jQuery tips, don't hesitate to leave a comment below, and of course stay tuned for more...
