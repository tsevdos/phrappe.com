---
title: "jQuery element's tag name"
date: "2013-05-22"
type: "post"
permalink: /javascript/jquery-elements-tag-name/
categories:
  - javascript
tags:
  - element
  - jquery
  - prop()
  - tag
  - tagname
---

Getting the selected element's tag name is very easy in jQuery. Just use the below code.

```js
$(el).prop("tagName");
```

Keep in mind that by default the returned tag's name is capitalized so if you want it lowercase you'll need this:

```js
$(el).prop("tagName").toLowerCase();
```
