---
title: "Gulp boilerplate for web designers"
date: "2014-02-17"
type: "post"
permalink: /javascript/gulp-boilerplate-for-web-designers/
categories:
  - javascript
tags:
  - gulp
---

Two weeks ago, I published a [Grunt.js boilerplate](http://phrappe.com/javascript/grunt-boilerplate-for-web-designers/ "Grunt boilerplate for web designers") with common tasks for web designers. This week I'm trying out the new kid on the block, [gulp](http://gulpjs.com/ "gulp.js"). Gulp is also a node-based task manager, but it works a bit different than [Grunt](http://gruntjs.com/ "Grunt"). It works with **streams** and **pipes,** making it very fast and easy to understand. I strongly recommend you have a look at this eye-opening [presentation on gulp](http://slid.es/contra/gulp "Gulp - The streaming build system") to better understand how it works and why it's here to stay.

My [gulp boilerplate](https://github.com/tsevdos/Gulp-boilerplate-for-web-designers "Gulp boilerplate for web designers") has more or less the same features as my [Grunt boilerplate](https://github.com/tsevdos/Grunt-boilerplate-for-web-designers "Grunt boilerplate for web designers"). To mention a few :

- OOCSS and [SMACSS (Scalable and Modular Architecture for CSS) ](http://smacss.com/)ready infrastructure
- Compile Sass files
- Autoprefix styles (you only need to write the web-standard version)
- [Compass](http://compass-style.org/) support
- Compiles and lints Coffee scripts files
- JsLinter
- CSS and JS minification
- Compiles Jade
- Image optimization
- Live-reload (Only works with the appropriate live-reload browser plugin. If you use Chrome you can use [livereload chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei). For other browsers have a look at [livereload browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-))

If you want to learn more about how gulp works, feel free to have a look at the [repository](https://github.com/tsevdos/Gulp-boilerplate-for-web-designers "Gulp boilerplate for web designers"). Also if you have any recommendations or comments feel free to pull, fork, star etc. 😉
