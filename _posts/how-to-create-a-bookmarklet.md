---
title: "How to create a bookmarklet"
date: "2010-11-17"
type: "post"
permalink: /javascript/how-to-create-a-bookmarklet/
categories:
  - javascript
---

A bookmarklet is a small Javascript program stored into a url. A user can bookmark the specific url, and execute the Javascript code on any page. The good news is that it’s not so hard to create one. A very simple example is the bookmarklet below:

```html
<a href="javascript:alert("Phrappe.com rocks!")>A vary basic bookmarklet!</a>
```

As you can see, you instruct the browser to run a javascript url. You can drag & drop the link to your bookmarks, and execute the bookmarklet on any page! That’s the power of bookmarklets. Go on try it 😉

Unfortunately, we have some browser limitations on url size (usually 2000 characters), that makes it impossible to write serious js code straight into a url. To tackle this limitation we can use our bookmarklet as a loader to an external js file using the below code :

```js
javascript: (function () {
  var s = document.createElement("script");
  s.src = "http://phrappe.com/script.js";
  document.body.appendChild(s);
})();
```

We start with the standard js url notation, and then we create a self executing anonymous function. Into that function, we just create a new script element, pass a source attribute to it and append it to our current document. Then we can finally start writing some serious javascript code to our external script, without any of the usual bookmarklet limitations! The script itself can again be a self executing anonymous function (because we don’t want to mess with document’s js code and variables).

```js
(function () {
  //code
})();
```

Keep in mind that bookmarklets have access to all the content and code of the document within which we ran them. So if you don’t trust a boorkmarklet code, don’t use it on sensitive pages, because the bookmarklet can access sensitive and personal data such as cookies, variables or elements! Be extra careful when you use them and if you don’t trust the source/author don’t use them at all!

Below you can see a very simple bookmarklet I created to transform sites to a more console-like layout (black background, monospace green fonts, etc.).

[Console it!](javascript:(function(){var s=document.createElement("script");s.src="http://phrappe.com/wp-content/uploads/consoleit.js";document.body.appendChild(s);})();) (drag'n drop it to your bookmarks and try it at google.com 😉 ). You can see the code below or simply [download it](http://phrappe.com/wp-content/uploads/consoleit.js "Consoleit source code").

```js
(function () {
  var body = document.body,
    links = document.getElementsByTagName("a");

  body.setAttribute(
    "style",
    'background-color:#000; color:#fff; font-family: "Courier New", Courier, monospace;',
  );

  for (i in links) {
    links[i].setAttribute(
      "style",
      'color:#347c17; font-family: "Courier New", Courier, monospace;',
    );
  }
})();
```

Finally, a very useful bookmarklet I use all the time is [jQuerify](http://www.learningjquery.com/2009/04/better-stronger-safer-jquerify-bookmarklet "jQuerify"). It loads jQuery on any page. Then I can just do the cool stuff through console 😉
