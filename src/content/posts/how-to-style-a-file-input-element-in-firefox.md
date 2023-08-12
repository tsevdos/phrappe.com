---
title: "How to style a file input element in Firefox"
date: "2013-02-05"
type: "post"
permalink: /markup/how-to-style-a-file-input-element-in-firefox/
categories:
  - css
  - markup
tags:
  - element
  - field
  - file
  - firefox
  - form
  - input
---

Working on a recent project I found out the hard way that Firefox doesn't allow you to style a file input element the way you want. I'm using Chrome for surfing and development, which let's you style a file input field without any constraints so I was a bit frustrated when I checked my form in Firefox! With a quick search I discovered that Firefox doesn't let you do too much with the file input element. I also discovered some [workarounds](http://www.quirksmode.org/dom/inputfile.html "Styling an input type="file""), but most of them were too complicated for the simple effect I wanted to achieve (to place a background image in the file input field). With a little help from [stackoverflow](http://stackoverflow.com/questions/7197835/resize-the-input-type-file-browse-button-in-firefox "Resize the input type=“file” browse button in firefox?") **and no javascript** at all, I managed to make it work in Firefox as well as other browsers (see code below).

```html
<label>
  <input type="file" />
</label>
```

```css
label {
  display: block;
  width: 100px;
  height: 20px;
  background: url(../images/icons/file_input_background.png) 0 0 no-repeat;
  cursor: pointer;

  border: 1px solid #000; /* Just for viewinf the box. Remove it after you apply your own background image */
}

label input {
  -moz-opacity: 0;
  filter: alpha(opacity: 0);
  opacity: 0;
  cursor: pointer;
}
```
