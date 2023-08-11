---
title: "HTML5 Prefetching"
date: "2013-04-16"
type: "post"
permalink: /markup/html5-prefetching/
categories:
  - markup
tags:
  - attribute
  - html5
  - prefetch
  - prefetching
  - prerender
---

One of the most interesting, but not widely known features of HTML5 is prefetching. By using it you can start loading pages (or even files) before the user requests them. This can increase your site's speed and the user's experience! Did I mention that it's super easy to implement it? Just put the below code into the head section of your page:

```html
<link rel="prefetch" href="http://www.example.com/" />
```

For prefetching a specific file use the same code by pointing directly to the file.

```html
<link rel="prefetch" href="http://www.example.com/path/to/sprite.png" />
```

The above feature works only on Firefox. If you want to use it in Chrome as well you have to use the "prerender" attribute as well:

```html
<!-- Firefox -->
<link rel="prefetch" href="http://www.example.com/" />
<!-- Chrome -->
<link rel="prerender" href="http://www.example.com/" />
```

Browsers that don't support prefecthing will simply ignore it (Safari and IE) but sooner or later they will implement it, so you have no reason not to use it asap! Please try not to prefetch everything, it's wrong! For more details regarding this neat HTML5 feature have a look at [Mastering HTML5 Prefetching](http://www.catswhocode.com/blog/mastering-html5-prefetching "Mastering HTML5 Prefetching"), an excellent resource on the topic.
