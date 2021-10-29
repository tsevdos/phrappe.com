---
title: "Autocompletion with HTML5 datalists"
date: "2013-04-23"
type: "post"
permalink: /markup/autocompletion-with-html5-datalists/
categories:
  - markup
tags:
  - autocomplete
  - datalist
  - html5
  - input
---

We have all used (and most of us built) an autocomplete input element. There are [thousands](http://jqueryui.com/autocomplete/ "jQueryUI Autocomplete") [of plugins/widgets](http://www.devbridge.com/projects/autocomplete/jquery/ "Ajax autocomplete for jQuery") [out there](http://bassistance.de/jquery-plugins/jquery-plugin-autocomplete/ "jQuery plugin: Autocomplete"), although below I'm demonstrating the easiest, most semantic and HTML5 way to build it **without** using Javascript! Just put a normal input element and connect it with the new datalist element by using the `list` attribute. That's it! You're semantically correct, HTML5 autocomplete input is ready!

```html
<input name="frameworks" list="frameworks" />
<datalist id="frameworks">
  <option value="jQuery"></option>
  <option value="Ext JS"></option>
  <option value="MooTools"></option>
  <option value="Dojo"></option>
  <option value="YUI"></option>
</datalist>
```
