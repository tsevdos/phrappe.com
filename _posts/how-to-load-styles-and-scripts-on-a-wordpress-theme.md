---
title: "How to load styles and scripts on a WordPress theme"
date: "2011-07-21"
type: "post"
permalink: /wordpress/how-to-load-styles-and-scripts-on-a-wordpress-theme/
categories:
  - wordpress
tags:
  - ambrosia
  - css
  - functions.php
  - javascript
  - styles
  - theme
  - wordpress
---

WordPress provides two useful functions to help you keep the head section on your **header.php** template file clean. The **[wp_enqueue_style](http://codex.wordpress.org/Function_Reference/wp_enqueue_style "wp_enqueue_style on Codex")** will help you load your styles and the **[wp_enqueue_script](http://codex.wordpress.org/Function_Reference/wp_enqueue_script "wp_enqueue_script on Codex")** will help you load your scripts. Both take the same parameters (name, source, dependencies, version, media - only for wp_enqueue_style - and in_footer - only for wp_enqueue_script) and the official WordPress documentation explains everything in great detail. Below I'll demonstrate a simple way to use them, this is the same way it works on my latest free WordPress theme, **[Ambrosia](http://wordpress.org/extend/themes/ambrosia "Ambrosia free wordpress theme")**.

These two functions "live" into the **functions.php** file. So let’s load the styles first. We only have to create an include function (for example **ambrosia_load_styles()**) that will load all the files using one or multiple **wp_enqueue_style** functions. To be more specific, we’ll only load styles in our wordpress theme and not at the admin area (**!is_admin()**). Then an [action hook](http://codex.wordpress.org/Plugin_API/Action_Reference "Action hooks") will run the include function (**ambrosia_load_styles()**), just before the **header.php** template file is loaded. It’s simpler than it sounds, have a look at the below code.

It's much more simple to load script files. We only include our scripts using the **wp_enqueue_script** function (again excluding the admin area).

Don’t forget that you can create dependencies on both CSS and javascript files, and of course load your javascript files in your footer area (after the page content is fully loaded).

Unfortunately, wp_enqueue_style and wp_enqueue_script functions don’t support any **conditional comment** mechanism, so if you have Internet Explorer (IE) only styles and scripts, you have to include them manually to your **header.php** file.

That’s all you need to know, so next time you’re building a theme, keep your **header.php** file clean by doing all the dirty work into the **functions.php** file!
