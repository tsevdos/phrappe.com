---
title: "How to attach a custom apple iPhone/iPad icon to your website"
date: "2010-08-24"
type: "post"
permalink: /markup/how-to-attach-a-custom-apple-iphoneipad-icon-to-your-website/
categories:
  - markup
  - mobile
tags:
  - favicon
  - icon
  - ios
  - ipad
  - iphone
  - ipod
---

If you already have an iPhone, iPad or any other iOS-based device, you have definitely seen the strange bookmarking Safari option "**Add to home screen**". The specific option creates an application like bookmark to your iOS screen for quicker browsing.

Clever idea and it works great, but if the site you’ve just bookmarked doesn’t have a custom iOS icon, iOS adds a poor quality screenshot of the site for icon! But don’t worry the solutions to this problem are super easy.

Just create a 57 x 57 pixels PNG (for iPhone, or 114 x 114 for iPhone 4 or 72 x 72 for iPad) with your custom icon, name it **apple-touch-icon.png** and put it into the root directory of your site. That’s it! You don’t even have to worry about the rounded corners of the PNG image, since iOS is clever enough to add them for you! The final URL of your icon must be something like http://www.yoursite.com/**apple-touch-icon.png**. If you want to supprt all iOS devices a 114 x 114 will do the job, although iPhone classic and iPad will scale it down.

Now if you don’t have access to the root directory of the site (no way!), or simply you don’t want to mess things up there, you have an alternative. Just put it wherever you like (maybe into the images/icons folder), and point to it with the below markup:

```html
<link rel="apple-touch-icon" href="/images/mycustomiphoneicon.png" />
```

The above code must be placed in the `head` section of our document and it **must** have a `link` relation (`rel`) with the value "**apple-touch-icon**", that’s the only two requirements. As you noticed we can name our PNG file as we want. Finally, yes we can use absolute paths as well, or even load our icon from other domains!

```html
<link
  rel="apple-touch-icon"
  href="http://www.othersite.com/images/mycustomiphoneicon.png"
/>
```
