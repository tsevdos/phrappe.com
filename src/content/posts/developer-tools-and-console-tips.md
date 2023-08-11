---
title: "Developer Tools and Console tips"
date: "2013-12-16"
type: "post"
permalink: /javascript/developer-tools-and-console-tips/
categories:
  - javascript
tags:
  - console
  - console.log
  - events
---

You can save a huge amount of time simply by learning to use the development tools (all modern browsers have them). Below I'm demonstrating some nice tricks that I'm sure will help you. Keep in mind that the browser I use for development is [Chrome](https://www.google.com/intl/en/chrome/browser/ "Google Chrome") ([Chromium](http://www.chromium.org/ "Chromium project") to be precise), so some tips might not work if you use the dev tools of another browser.

## Select element(s) without jQuery

You can select any element by using the dollar sign selector (`$("a")` ) even if you don't have jQuery available on the document! This convention is using the `document.querySelector` under the hood (for example `document.querySelector("a")`), so it returns only the **first** matched element.

If you want to select multiple elements you can use the double dollar sign selector ( $$("a") ) which returns an **array** of matched elements. The specific convention is using the `document.querySelectorAll` (for example `document.querySelectorAll("a")`).

Keep in mind that you can use any valid selectors like #ids, .classes, etc., depending your browser's CSS selectors capabilities.

## Console.log objects

It's a bit frustrating when you try to log an object, only to get the already useless output **[object Object]**. Well, try using a comma (,) instead of the plus sign (+). You can also log multiple items if you like...

## Console.log the event listeners of an element

This function will save you tons of working hours! Just pass the element you want to check at the `getEventListeners()` function, and voila, the console logs all the events of the element.

## Monitor every single event fired on an element

A very similar method that logs every single event triggered is the `monitorEvents()` function. It works just like the above function, simply pass the element you want to track and you are ready to go! If this function is driving you crazy (as I explained, it logs **everything**), you can limit the events you log by passing a string or an array of strings with the events you want to log. Don't forget to run the `unmonitorEvents()` function to stop the logging otherwise the browser will continue logging your events!

## Log arrays in beautiful tables using the console.table

If you want to log arrays in a more beautiful and useful way, then simply try the `console.table()` function.

## Log all properties of an element

By passing an element to the `dir()` function you can log **all the properties** of that element (identical to the view that you would see in the DOM panel).
