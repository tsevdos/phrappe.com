---
title: "Mobile media capture straight to your web form"
date: "2013-01-23"
type: "post"

permalink: /markup/mobile-media-capture-straight-to-your-web-form/
categories:
  - markup
  - mobile
tags:
  - file
  - form
  - input
  - iphone
  - mobile
---

So, you've just build your latest responsive web design masterpiece and you're adding the final touches for the mobile viewport. Suddenly you discover a form where the user must submit a profile **image** (or **video** or **audio**) in order to continue. Wouldn't it be nice to let the user use their phone in order to take a picture (or video or audio) with it, and at the same time keep the normal fall-back of the input file element for desktop browsers? Well you can, just use the below attributes on your **input fields**. Desktop browsers will use them as normal file inputs, while mobile devices will add this extra **native flavour**.

```html
<input type="file" accept="image;capture=camera" />
<input type="file" accept="video;capture=camcorder" />
<input type="file" accept="audio;capture=microphone" />
```

I tested them and they work on iPhone (both on **mobile Safari** and **mobile Chrome**), but they will (probably?) work on any mobile device/browser (android/windows etc.)… Let us know in the comments or via [twitter](https://twitter.com/tsevdos "Tsevdos twitter account") if they work for you.
