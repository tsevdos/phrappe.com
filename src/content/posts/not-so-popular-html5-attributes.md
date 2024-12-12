---
title: "Not so popular HTML5 attributes"
date: "2013-04-08"
type: "post"
permalink: /markup/not-so-popular-html5-attributes/
categories:
  - markup
tags:
  - attribute
  - attributes
  - autofocus
  - download
  - hidden
  - html5
---

HTML5 offers many new attributes that make our lives easier and our code more semantic. In many cases they even provide functionality that we used to implement with javascript, like the [placeholder attribute](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#the-placeholder-attribute "The placeholder attribute"). I'm pretty sure you all know the placeholder attribute, but what about the following ones?

## hidden attribute

The hidden attribute, as you can easily guess, hides the element that it is set on. It acts almost identical to style `{ display: none; }`, but it's simpler, cleaner and more semantic (since you are hiding the element directly on DOM rather than style). It is also ridiculously easy to make a fallback on browsers that do not support the specific attribute, just hide it in your styles ( { display: none; } ) or javascript...

```html
<!-- div is hidden (act just like display:none) -->
<div hidden>You can't see me!</div>
```

## download attribute

Do you have downloadable content in your website (like PDF files etc)? If yes then with a little HTML5 attribute you can provide better semantics to the link element, give a better description/title to your file and enforce the browser to download it! Just use the download attribute followed by a string that represents the description/title of your download. Even if your filename is a timestamp or a temp name, the user will download the file, having as its name the title you used.

```html
<!-- will download as "issue28.pdf" -->
<a href="/files/temp-name.pdf" download="issue28">Download Latest Issue</a>
```

## autofocus attribute

Finally with the autofocus attribute you can autofocus any `input`, `textarea` or `button` you want. Simple as that.

```html
<input type="text" autofocus />

<!-- Works with all form alements 
<button autofocus>Hi!</button>
<textarea autofocus></textarea>
-->
```

To conclude, whenever possible, try to use the new HTML5 attributes. They will always be more semantically correct and it's super easy to implement them. Also, most of them have very simple fallbacks but even if you don't provide any, most of the time you won't break something, so you don't have any excuse.
