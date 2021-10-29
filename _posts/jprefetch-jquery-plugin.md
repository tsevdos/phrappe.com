---
title: "jPrefetch jQuery plugin"
date: "2013-05-14"
type: "post"
permalink: /javascript/jprefetch-jquery-plugin/
categories:
  - javascript
tags:
  - html5
  - jPrefetch
  - jquery
  - plugin
  - prefetching
---

I just released [jPrefetch](https://github.com/tsevdos/jPrefetch "jPrefetch") a nice little jQuery plugin that makes [HTML5 prefetching](http://phrappe.com/markup/html5-prefetching/ "HTML5 Prefetching") a bit easier. You can very easily use it for your current solution (static website or even CMS), just by including it and adding `data-prefetch="true"` to the link that you want to prefetch. You can also pass a url (string) in order to start prefetching the provided url, in case you are loading a page that doesn&#8217;t have any link with the data-prefetch attribute. [jPrefetch](https://github.com/tsevdos/jPrefetch "jPrefetch") will take care all the rest, and start adding the necessary markup (metatags) in order to allow prefetching in supported browsers (tested in Chrome and Firefox). As you can see, the use of this is very easy and elegant. The plugin was mainly inspired by these two excellent articles, [Mastering HTML5 Prefetching](http://www.catswhocode.com/blog/mastering-html5-prefetching "Mastering HTML5 Prefetching") and [Prefetching with HTML 5 and jQuery](http://gavinmorrice.com/blog/posts/tagged/optimization "Link Prefetching with HTML 5 and jQuery").

Feel free to fork it, use it, whatever 😉
