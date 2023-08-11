---
title: "How to style placeholder text"
date: "2012-08-28"
type: "post"
permalink: /css/how-to-style-placeholder-text/
categories:
  - css
tags:
  - attribute
  - css
  - gecko
  - html5
  - placeholder
  - styles
  - webkit
---

The [placeholder attribute](http://www.w3.org/TR/html5/common-input-element-attributes.html#the-placeholder-attribute "The placeholder attribute") is one of the most useful **HTML5** attributes, because with just a tiny attribute you provide a better user experience to the end user, you make your code more semantic and all of this is achieved without writing a single line of javascript. But this super easy and time saving attribute is a bit difficult to style. The typical input styles **don't apply** to our placeholder! No worries though, in webkit-based and gecko-based browsers you can apply the below rules and style your placeholders.

```html
<input type="text" placeholder="Placeholder Text" />
```

```css
::-webkit-input-placeholder {
  font-style: italic;
  font-weight: bold;
  color: blue;
}

::-moz-placeholder {
  font-style: italic;
  font-weight: bold;
  color: blue;
}
```

**Note 1**: Don't try to combine the selectors because it **won't work**! If a browser doesn't understand a selector it invalids all the following rules and this will always be true in our case, since webkit-based browsers won't understand the `:-moz-placeholder` selector while the gecko-based brosers won't understand the `::-webkit-input-placeholder`!

```css
/* This won't work */
::-webkit-input-placeholder,
::-moz-placeholder {
  font-style: italic;
  font-weight: bold;
  color: blue;
}
```

**Note 2**: The placeholder inherits all the input stytles (ex. color, background etc.) in gecko-based browsers (tested in Firefox 14). If you encounter this problem just make your selector more specific.

```html
<input type="text" placeholder="Placeholder Text" class="someclass" />
```

```css
input.someclass::-moz-placeholder {
  font-style: italic;
  font-weight: bold;
  color: blue;
}
```
