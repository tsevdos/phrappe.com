---
title: 'How to remove junk from your WordPress "head" section'
date: "2011-07-01"
type: "post"
permalink: /wordpress/how-to-remove-junk-from-your-wordpress-head-section/
categories:
  - wordpress
tags:
  - ambrosia
  - code
  - functions.php
  - head
  - theme
  - wordpress
---

The default WordPress installation has some messy code in it's "head" section. There's too much useless meta data and noise that can cause issues, and even lead to security vulnerabilities, like the "generator" tag that informs the world the Wordrpress version you are running. You can clean up the mess by removing the bellow actions (copy and paste the below code to your theme’s **functions.php** file).

For some reason WordPress's theme reviewers didn't allow me to include the above code on **[Ambrosia theme](http://wordpress.org/extend/themes/ambrosia "Ambrosia WordPress theme")**, so feel free to include it.
