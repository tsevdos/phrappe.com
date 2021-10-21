---
title: "HTML5 video and mobile browsers"
date: "2012-04-30"
type: "post"
permalink: /markup/html5-video-and-mobile-browsers/
categories:
  - markup
  - mobile
tags:
  - element
  - html5
  - media queries
  - mobile-friendly
  - mp4
  - video
  - webm
---

The brand new **[HTML5 video element](http://html5doctor.com/the-video-element/ "The video element")** is surely very impressive. You've encoded your videos in multiple formats (well, at least **.mp4** and **.webm** to support all browsers), you might've also provided **[Flash fall-backs](http://praegnanz.de/html5video/ "HTML5 Video Player Comparison")** and you are very proud of your good work. But what happens with the mobile users?

The majority of mobile browsers will recognize/play the HTML5 video, but the problem is not the browser support, nor the file format. The problem is the **bandwidth**. Your brand new HD video might take ages to download through 3G! Wouldn't it be great if you could provide a mobile-friendly version of your video source (with smaller resolution, less fps, and much smaller file size)?

Well, you can very easily do that, with the use of some very basic **[media queries](http://www.w3.org/TR/css3-mediaqueries/ "W3C : Media Queries")**. The below code will serve two **mobile only** video sources (again an .mp4 and a .webm file) in order to support as many mobile devices as we can. Of course keep the specific video files small and optimized (otherwise there is no point in implementing this)!

```html
<video controls>
  <source src="movie.mp4" media="(min-device-width:750px)" />
  <source src="movie-small.mp4" />
  <source src="movie.webm" media="(min-device-width:750px)" />
  <source src="movie-small.webm" />
  <!-- Flash drawback goes here -->
</video>
```

Don't waste your mobile visitors bandwidth and time. Provide smaller, mobile-friendly alternatives!
