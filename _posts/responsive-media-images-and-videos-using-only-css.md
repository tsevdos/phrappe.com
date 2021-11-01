---
title: "Responsive media (images and videos) using only CSS"
date: "2012-07-04"
type: "post"
permalink: /css/responsive-media-images-and-videos-using-only-css/
categories:
  - css
tags:
  - css
  - design
  - embedded
  - html5
  - images
  - javascript
  - layout
  - media
  - responsive
  - video
  - web
---

There's no reason to explain everything from scratch, there are plenty of [posts](http://www.alistapart.com/articles/responsive-images-how-they-almost-worked-and-what-we-need/ "Responsive Images: How they Almost Worked and What We Need") [on](http://adactio.com/journal/4997/ "Responsible responsive images") [this](http://filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing/ "Responsive Images: Experimenting with Context-Aware Image Sizing") [topic](http://unstoppablerobotninja.com/entry/responsive-images/ "RESPONSIVE IMAGES"), but if you are [building a responsive layout](http://www.alistapart.com/articles/responsive-web-design/ "Responsive Web Design"), don’t forget to apply these **media rules** to your CSS file.

```css
/* Images */
img {
  max-width: 100%;
  height: auto;
}

/* HTML5 videos */
video {
  max-width: 100%;
  height: auto;
}

/* Embedded Videos */
.video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video iframe,
.video object,
.video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

With the above styling rules we ensure that all of our media files (images and videos) are ready for responsive layouts. The first two rules are very easy to understand and probably the safest and simplest way to publish media online (since we are talking about pure HTML5 elements). The final two rules are for embedded media (objects, embeds and iframes), that we simply wrap into a container/wrapper element (with a class of video). I first read of this technique on a post entitled "[CSS: Elastic Videos](http://webdesignerwall.com/tutorials/css-elastic-videos "CSS: Elastic Videos")" and personally I believe that it's the best solution for responsive video embeds. I'm usually against Javascript solutions/alternatives, like for example [FitVids.JS](http://fitvidsjs.com "FitVids.JS"), since it's a pure presentational (CSS) issue and not a functional (Javascript) one.

So if you're building a responsive layout, try treating your media with the pure CSS approach. It’s the fastest, simplest and cleanest way to achieve **responsive media**...
