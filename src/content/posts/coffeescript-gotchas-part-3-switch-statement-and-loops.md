---
title: "Coffeescript gotchas (part 3): Switch statement and loops"
date: "2015-05-23"
type: "post"
permalink: /coffeescript/coffeescript-gotchas-part-3-switch-statement-and-loops/
categories:
  - coffeescript
tags:
  - coffeescript
  - for
  - javascript
  - loops
  - statement
  - switch
  - while
---

Welcome to the third part of Coffeescript gotchas. If you haven't yet read the [first](http://phrappe.com/coffeescript/coffeescript-gotchas-part-1-comments-strings-booleans-arrays-and-functions/) and [second](http://phrappe.com/coffeescript/coffeescript-gotchas-part-2-operators-and-aliases/) part of the series I strongly recommend to have a look. The main topic today is loops plus the switch statement. CoffeeScript offers a lot of enchantments and syntactic sugar to them.

##### Update: Table of contents

1. [CoffeeScript gotchas (part 1): Comments, strings, booleans, arrays and functions](http://phrappe.com/coffeescript/coffeescript-gotchas-part-1-comments-strings-booleans-arrays-and-functions/)
2. [Coffeescript gotchas (part 2): Operators and aliases](http://phrappe.com/coffeescript/coffeescript-gotchas-part-2-operators-and-aliases/)
3. [Coffeescript gotchas (part 3): Switch statement and loops](http://phrappe.com/coffeescript/coffeescript-gotchas-part-3-switch-statement-and-loops/)
4. [Coffeescript gotchas (part 4): Scope and Objects](http://phrappe.com/coffeescript/coffeescript-gotchas-part-4-scope-and-objects/)

## Switch statement

At last, an easier way to write switch statements. If your switch case contains a single line of code, you can write the entire thing in a single line using the `then` keyword (see second example).

```
name = "John"

# normal switch statement
switch name
  when "John"
    console.log "This guy rocks!"
  when "Jon"
    console.log "Still cool guy"
  else
    console.log "Good lad."

# switch statement using the then keyword
switch name
  when "John" then console.log "This guy rocks!"
  when "Jon" then console.log "Still cool guy"
  else console.log "Good lad."
```

## For Loops

For loops have many flavors and great potential in CoffeeScript. You can loop through arrays and objects and still keep your code clean and hassle-free. Just take a deep breath and try to absorb as many flavours as you can. They can all come very handy.

### Arrays

Iterating Arrays have never been easier...

```
arr = ["Ned Stark", "Jon Snow", "Arya Stark", "Jaime Lannister"]

# basic array iteration
for name in arr
    console.log name

# array iteration (with index)
for name, i in arr
    console.log "#{i}: #{name}"

# array filtering (with index)
for name, i in arr when name.indexOf "J" is 0
    console.log "#{i}: #{name}"

# array iteration for every second item
for name, i in arr by 2
    console.log "#{i}: #{name}"
```

### Objects

Looping through an object's key/value pairs is also very easy. You can also loop through just the direct key/value pairs (not the inherited ones) by using the `own` keyword (which will use the `hasOwnProperty` method under the hood).

```
ned =
  name : "Ned Stark"
  house : "Stark"
  words : "Winter is coming"

# print all properties of an object
for key, value of ned
  console.log "#{key} : #{value}"

# print all own properties of an object
for own key, value of ned
  console.log "#{key} : #{value}"
```

### While Loops

The `while` loop has 3 syntax flavors to make your code more descriptive and your life easier. Try to use `unless` instead of `while not`, as it's easier and preferable.

```
# Normal while
num = 10
while num
  console.log num
  num--

# while not
num = 10
while not (num is 0)
  console.log num
  num--

# exactly the same as the above example
num = 10
until num is 0
  console.log num
  num--
```

As you can see CoffeeScript is very handy when it comes to loops. Keep in mind and stay tuned for the fourth and final part of the **Coffeescript gotchas** series where we'll have a look at the syntactic sugar that CoffeeScript provides on Scope and Objects.
