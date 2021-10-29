---
title: "Responsive web design and touch devices"
date: "2013-06-19"
type: "post"
permalink: /articles/responsive-web-design-and-touch-devices/
categories:
  - articles
tags:
  - design
  - development
  - devices
  - ipad
  - iphone
  - mobile
  - responsive web design
  - rwd
  - touch
---

Well you've just finished your glorious [responsive](http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/) [web design](http://www.smashingmagazine.com/responsive-web-design-guidelines-tutorials/), using all the latest trends and best practices, like [mobile first](http://www.abookapart.com/products/mobile-first), [HTML5 semantics](http://coding.smashingmagazine.com/2011/11/18/html5-semantics/), [progressive enhancement](http://coding.smashingmagazine.com/2009/04/22/progressive-enhancement-what-it-is-and-how-to-use-it/) and [many](http://www.sitepoint.com/progressive-enhancement-graceful-degradation-basics/) [more](http://mobile.smashingmagazine.com/2011/07/22/responsive-web-design-techniques-tools-and-design-strategies/). You've also tested it to various desktop, tablet and mobile browsers and indeed it looks great, but you're absolutely sure that something is missing, and you are right...

## Am I missing something here?

Well it is very possible that you are. You might need to implement/adjust a couple of things to achieve perfection before you start working on your new masterpiece. But let's start at the beginning. We all know that we need to apply 3 main principles in order to take web design to the next level and make it **Responsive Web Design (RWD)**. These principles are the **fluid grid**, **media queries** and **flexible media**. But why take it to the next level anyway? Why make it responsive?

> Because, [according to wikipedia](http://en.wikipedia.org/wiki/Responsive_web_design "Responsive web design"), you want with a single web site to provide an optimal viewing experience across a wide range of devices, from desktop computer monitors to mobile phones.

But you've already done that and you've done it right. That's the exact point were most people stop and start working on their new masterpiece and that's where you'll continue and stand out from the crowd. Most believe that their jobs done, when visually everything looks great. But what about the rest of it? Below I'm sure you'll find out some valuable tips in order to really polish your responsive web design, and I'm not talking about the visual part.

## Adapt to touch devices (fingers !== mouse pointer)

Well the first and easiest addition you can make is to ensure that the User Interface (UI) is working properly on touch devices, and when I say working, I mean working superbly. Are the **navigation and call to action links** large enough to be pressed or do they need more padding? What about the **drop-down menus**, are they usable or do they feel and behave very strangely on touch devices? Do the **form elements** have the appropriate [input types](http://www.456bereastreet.com/archive/201004/html5_input_types/) in order to bring the appropriate virtual keyboard on the devices? I expect you hate it as much as I do it when forms elements don't display the correct keyboard layout. What about your **image sliders/carousels, tabs and accordions**, do they respond to touch events? What about the **tooltips** and all the other **mouse over** effects you have? They aren't so useful in the "touch" world right? (basically there is no mouse-over in the "touch" world). What about **modals**? Are they useful enough just like on the desktop version or do they just make the experience worse?

As you can see many traditional weapons of our web design arsenal don't really work (some of them don't work at all) on touch devices out of the box. But don't worry, if your web site is well structured and built, it won't be so hard to tackle all these new challenges. In most cases all you need is some HTML5 attributes, like the new [input types and attributes](http://diveintohtml5.info/forms.html), some basic CSS rules and most of the above issues are history! But since you've already started, don't stop here. Try to fully adapt to this new "touch" world.

## You can(t?) get there from here

Working with touch events isn't as hard at it sounds. The majority of the mentioned issues can be very easily fixed, simply by using a javascript touch library. After all, why reinvent the wheel, when other people have already built it, tested it (on many devices/browsers) and continue to support it? I personally tend to like lean touch libraries like [Hammer.js](http://eightmedia.github.com/hammer.js/), which is tiny (just 2k) and easy to use for smaller projects. But there are times where a more complete library like [QUO.js](http://quojs.tapquo.com/) (with a larger footprint of course), might be a more suitable solution because it provides more events and functionality. Don't be afraid, I'm sure you'll find the one that suits your site's requirements, just be adventurous and try as many as you can. There are [many](http://quojs.tapquo.com/) [other](http://jqtouch.com/) [libraries](http://www.iui-js.org/) and even [large](http://www.sencha.com/products/touch/) [mobile frameworks](http://jquerymobile.com/) that also provide UI elements, but my advice is to start small and lean and try to avoid the huge frameworks that at the end of the day will contain code and styles you won't use. In most cases you'll be fine with the bare touch libraries, but if you really need something more complete, don't hesitate to use it ([jQuery mobile](http://jquerymobile.com/) is my choice on this area). Finally, try to avoid loading a huge framework, then using just one widget it provides. Be smart, load only what you really need!

As you've already noticed, these touch libraries and a bit of your magic will resolve most of your remaining problems, and tackle the touch interactions on image sliders/carousels, tabs and accordions etc. These small details are reletevly easy to implement, but believe me, they make a huge difference! Remember to make everything more "finger" friendly and try to avoid UI functionality that doesn't really work on touch devices and you'll be just fine. In any case, check and recheck your responsive web site to as many devices you can and try to tackle every piece of functionality that doesn't seems smooth enough. When your done, there is more...

## Don't stop there

So you've fixed all the above issues and you've provided touch alternative events to all your mouse events. You've even implemented your [responsive navigation pattern](http://bradfrostweb.com/blog/web/responsive-nav-patterns/) of choice. I'm sure you're already proud of that, but since you've started, don't stop there... Touch devices such as cell phones can do more than simply rendering. They can call a phone number or even send sms!

```html
<a href="tel:+306948123456">call me</a> <a href="sms:+306948123456">text me</a>
```

They can even capture images or video using plain HTML forms! The below code will work on most mobile/tablet browsers on Windows Mobile, iOS and Android devices. Why not take advantage of it.

```html
<input type="file" accept="image;capture=camera" />
<input type="file" accept="video;capture=camcorder" />
<input type="file" accept="audio;capture=microphone" />
```

## Always pair responsive design with a feature detection and adaptation strategy

A huge mistake I'm running into over and over again online, is that an average site is not rewarding modern browser users and in most cases it actually punishes them! How? The answer is simple and reasonable in some cases, old browser support. The good news is that you can still use most of these technologies by providing reasonable fall-backs for older browsers, you don't have a good excuse not to do it. With libraries like [modernizr](http://modernizr.com) you can very easily reward the modern browser (aka mobile browsers) users, whilst at the same time providing reasonable fall-back functionality for older browsers. There is nothing wrong with that, after all you can't build the next big thing if you don't "stand on the shoulders of giants" ([Isaac Newton](http://en.wikipedia.org/wiki/Isaac_Newton) knew it). So next time you want to use an image grandient think twice before serving an image in **all** browsers just for compatibility purposes. Be nice to modern browsers and help them use that bandwidth for more elegant purposes. Client-side feature detection is here to stay and we must adapt to develop sites that way if we really want to take the web forward.

Speaking of rewards, why not take advantage of the latest cool client-side storage solutions like [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB), [Web SQL](http://www.w3.org/TR/webdatabase/) or [Local Storage](http://coding.smashingmagazine.com/2010/10/11/local-storage-and-how-to-use-it/). The majority of modern browsers support the above standards, but have you actually used one? Well, just start using them! [Brian's LeRoux](https://twitter.com/brianleroux) [lawnchair](http://brian.io/lawnchair/) is a brilliant project for using client-side storage that provides excellent fall-back support for everyone!

Finally, use the [HTML5 geolocation API](http://diveintohtml5.info/geolocation.html). It's super easy to use it, you can easily provide fallback support and is extremely convenient on touch devices (where form submission sucks).

## Final thoughts

As you might have discovered here, a "ready" responsive web design is sometimes not as ready as we expected. Hundreds of times I've encounter responsive web designs that looked great on my phone or tablet, but they didn't behave/perform so well. They didn't feel so mobile... Hopefully this post can be a great reminder next time you're about to hand over a responsive web design. After all, you don't want to destroy your visitors' high expectations, right? In most cases the polishing is easy to implement and fortunately there are many tools out there that can help us in this task. Remember, aesthetics are good, but sometimes helping a phone/tablet user to fill a form (aka converting) or complete a admin task is more important... It’s as simple and as hard as that.

**Update**

The above article was based on the latest presentation I gave (with the same title). You can find the slides below.
