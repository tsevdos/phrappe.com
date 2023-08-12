---
title: "CoffeeScript gotchas (part 1): Comments, strings, booleans, arrays and functions"
date: "2014-06-25"
type: "post"
permalink: /coffeescript/coffeescript-gotchas-part-1-comments-strings-booleans-arrays-and-functions/
categories:
  - coffeescript
tags:
  - arrays
  - booleans
  - coffescript
  - comments
  - functions
  - heredocs
  - iife
  - javascript
  - strings
---

In the last couple of months I took some time to learn and work on a [CoffeeScript](http://coffeescript.org/ "CoffeeScript") project. Writing **CoffeeScript** is a lot of fun, and if you know plain Javascript you already know most of the Coffeescript syntax - just start removing all the syntax cluttering like semicolons, parenthesis and square brackets and suddenly you are writing Coffeescript!

The really cool stuff begins when you dig a bit more into the language. There's some nice demonstrations of features that I had to learn the hard way.

Before jumping into these, have a look at the well-written, free on-line book [Coffeescript Cookbook](http://coffeescriptcookbook.com/ "CoffeeScript Cookbook"). This excellent resource saved me a lot of time in many situations.

##### Update: Table of contents

1. [CoffeeScript gotchas (part 1): Comments, strings, booleans, arrays and functions](http://phrappe.com/coffeescript/coffeescript-gotchas-part-1-comments-strings-booleans-arrays-and-functions/)
2. [Coffeescript gotchas (part 2): Operators and aliases](http://phrappe.com/coffeescript/coffeescript-gotchas-part-2-operators-and-aliases/)
3. [Coffeescript gotchas (part 3): Switch statement and loops](http://phrappe.com/coffeescript/coffeescript-gotchas-part-3-switch-statement-and-loops/)
4. [Coffeescript gotchas (part 4): Scope and Objects](http://phrappe.com/coffeescript/coffeescript-gotchas-part-4-scope-and-objects/)

## Comments

You can have **single-line** and **multi-line** comments in CoffeeScript. Always keep in mind that during compilation, the compiler will completely ignore the single line comments (they wont appear in your final Javascript file) but will keep the multi-line comments intact. In the Codepen examples below you can click the "view compiled" link to see the generated JS code and the result tab to see the result (if any)...

```
# Single-line comment. The compiler removes it completely
###
Multiline comment
The compiler keeps it
as a normal multiline JS
comment :-)
###
```

## String Interpolation

Probably the best feature Coffeescript provides! You can finally do things like this:

```
name = "John"
greeting1 = "Hello, #{name}!" # -> Hello, John!
greeting2 = 'Hello, #{name}!' # -> Hello, #{name}!

document.write greeting1
document.write '<br/>'
document.write greeting2
```

Keep in mind that double quotes are needed to compile correctly. You can even use functions!

```
mrFunc = (name) -> "Mr. " + name
message = "Hello, #{mrFunc 'John'}"

document.write message
```

## Heredoc (multiline strings)

You can also use `Heredocs`. They even support interpolation!

```
multiline = """
This is
a multiline
string
of #{3+2}
lines
"""


document.write multiline
```

## Booleans

Not much news here, apart from some syntax goodies... You can use `true` with two more keywords, `yes` and `on` and you can use `false` with the opposites, `no` and `off`. Sometimes it makes more sense to use these keywords instead of the normal `true/false`.

```
# true === yes === on
if true
  document.write 'true<br/>'

if yes
  document.write 'yes<br/>'

if on
  document.write 'on<br/><br/>'


# false === no === off
if !false
  document.write 'false<br/>'

if !no
  document.write 'no<br/>'

if !off
  document.write 'off<br/>'

```

## Arrays

CoffeeScript allows a very convenient syntax to create specific array ranges. You can create any range using the two dots syntax (inclusive range, which simply means that it will include the last value). Adding three dots instead excludes the last value (exclusive range). Finally you can use reverse ranges the same way. Have a look at the examples, they are much easier than they sound...

```
range1  = [0..10]  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range2  = [0...10] # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range20 = [20..0]  # [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

## Functions default values

One of the coolest and most usable CoffeeScript features is the default values on functions. Instead of checking if a value exists, etc. you can simply apply the default value right next to the parameter.

```
greeting = (name = "friend") ->
  "Hello #{name}"

document.write greeting('John')
document.write '<br />'
document.write greeting()
```

## IIFE - Immediately Invoked Function Expressions

Another tricky part when start to learn CoffeeScript is how you write an **IIFE**. The syntax is a bit tricky, so have a look below (keep in mind that only CoffeeScript 1.3 and above supports default values on IIFE).

```
do (doc = document, jQuery = $) ->
  console.log "IIFE magic"
```

Stay tuned for more CoffeeScript 😉
