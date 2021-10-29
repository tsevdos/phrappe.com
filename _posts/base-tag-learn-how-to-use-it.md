---
title: "Base tag: Learn how to use it"
date: "2013-05-08"
type: "post"
permalink: /markup/base-tag-learn-how-to-use-it/
categories:
  - markup
tags:
  - base
  - markup
  - tag
---

Every now and then a friend/colleague of mine asks me to have a look at his latest masterpiece (aka site). In many cases the second request is to have a look at why a specific client side feature is not working. Most of the time, I'm given a URL of the live version of the site that uses many internal and external resources (css files, javascript files etc). As you can imagine, it's super time-consuming to recreate the online page locally to start working on it (downloading and linking all these files).

But don't worry, the `base` tag can save us from this hard task, and help up recreate the online page locally within two simple steps.

1. Copy and paste the markup from the online page in a local file (.html)
2. Use the `base` tag to link all the dependencies/resources (you must place it into the `head` section of the page) to that html file

```html
<!-- base tag -->
<base href="http://www.example.com/" />
```

You'll end up with a fully functional web-page that uses exactly all the online resources. Now you can either start adding your code to it, or simply download specific files that need re-factoring. Easy and clean, don't you think?
