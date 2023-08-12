---
title: "Mobile Webkit form tips"
date: "2012-04-19"
type: "post"
permalink: /markup/mobile-webkit-form-tips/
categories:
  - markup
  - mobile
tags:
  - android
  - attributes
  - autocapitalization
  - autocorrect
  - forms
  - html5
  - ipad
  - iphone
  - keyboard
  - layout
  - mobile
  - webforms
  - webkit
---

One of the things I really hate when I surf from a tablet/phone browser (usually my iPad/iPhone) is filling in forms. I know, the lack of a physical keyboard sucks big time, but it's not just that. Most web developers out there don't give the appropriate attention when they develop web forms, and the combination of both these things can literally destroy the good will of a user who's trying to fill in the form. The use of some very basic attributes can change the above situation dramatically. You don't believe me? Well have a look...

## Keyboard Layout

One of the most important and easy fixes is to provide the correct keyboard layout. Well that's super easy, just use the appropriate [HTML5 input type](http://www.html5rocks.com/en/tutorials/forms/html5forms/#toc-inputs-attributes-types "MAKING FORMS FABULOUS WITH HTML5"). You'll make many tablet/mobile users happier!

```html
<!-- Default Keyboard -->
<input type="text" />

<!-- Numeric Keyboard -->
<input type="number" />

<!-- Pattern Keyboard -->
<input pattern="[0-9]*" type="text" />

<!-- Phone Keyboard -->
<input type="tel" />

<!-- URL Keyboard -->
<input type="url" />

<!-- e-mail Keyboard -->
<input type="email" />
```

## Autocorrect and AutoCapitalize

OK, let's admit it, **autocorrect** is a cool feature when writing an e-mail, but it's probably the worst one when you try to write your username (and iOS is correcting it over and over again). The exact same issue is caused with the **autocapitalization**. Well, nothing to worry about. Just use the below attributes to turn on and off the features from the elements you want. Now you're in control of things 😉

```html
<!-- Autocorrect on -->
<input type="text" autocorrect="on" />

<!-- Autocorrect off -->
<input type="text" autocorrect="off" />

<!-- Autocapitalize on -->
<input type="text" autocapitalize="on" />

<!-- Autocapitalize off -->
<input type="text" autocapitalize="off" />

<!-- Autocorrect off / Autocapitalize off -->
<input type="text" autocorrect="off" autocapitalize="off" />
```

Please try not to be lazy when you build forms, you might save a tablet/phone user's time and sanity!

The above markup works fine on **Android devices** as well (and probably on **Windows Phones**), although I only test them on **iOS iPhone/iPad** devices...
