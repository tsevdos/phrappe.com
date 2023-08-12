---
title: "Coffeescript gotchas (part 4): Scope and Objects"
date: "2015-06-06"
type: "post"
permalink: /coffeescript/coffeescript-gotchas-part-4-scope-and-objects/
categories:
  - coffeescript
tags:
  - class
  - classes
  - constructor
  - objects
  - scope
  - super
  - this
---

This is the fourth and final part of the CoffeeScript gotchas series. On this part I'll demonstrate Coffeescript's syntactic sugar on Objects, constructors and classes! Ready, set, go...

##### Update: Table of contents

1. [CoffeeScript gotchas (part 1): Comments, strings, booleans, arrays and functions](http://phrappe.com/coffeescript/coffeescript-gotchas-part-1-comments-strings-booleans-arrays-and-functions/)
2. [Coffeescript gotchas (part 2): Operators and aliases](http://phrappe.com/coffeescript/coffeescript-gotchas-part-2-operators-and-aliases/)
3. [Coffeescript gotchas (part 3): Switch statement and loops](http://phrappe.com/coffeescript/coffeescript-gotchas-part-3-switch-statement-and-loops/)
4. [Coffeescript gotchas (part 4): Scope and Objects](http://phrappe.com/coffeescript/coffeescript-gotchas-part-4-scope-and-objects/)

## Classes

Probably the most valuable feature that CoffeeScript syntax offers at the moment. With the `class` keyword you can create a new class (CoffeeScript is using the constructor function under the hood) and with the `extend` keyword you can extend one. To make things even easier, CoffeeScript provides an `initialization` (aka `constructor`) function, in case you need it. Just use the `contstructor` method and you are ready to go. You can use the concept of `super` method which represents a reference to the superclass version of the method you're in (very Ruby-like). I'm sure that all these will make more sense with the following example...

```
class Animal
  constructor: (@name) ->
  move: (meters) ->
    console.log "#{@name} moved #{meters} meters."

class Snake extends Animal
  move: ->
    console.log "Slithering..."
    super 5

class Horse extends Animal
  move: ->
    console.log "Galloping..."
    super 45

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()
```

## Constructors

You can set up instance variables with the classic `this` Javascript keyword (CoffeeScript translates to Javascript after all), but you can save a couple of characters and maybe lines, by using the `@` symbol. You can also save a couple of more lines by omitting the instance name.

```
class Animal
  constructor: (name, height, weight) ->
    @name = name
    @height = height
    @weight = weight

# same as above
class Animal
  constructor: (@name, @height, @weight) ->
```

## Scope

Finally, if you want to pass an instance method as a callback, use the `=>`, also known as "fat arrow". The "fat arrow" binds the object's instance to `this` and makes your code easier to read. This will also be an [ES6 feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "ES6 fat arrow"), so it makes a lot of sense to get used to it.

```
class Message
  constructor: (@txt) ->
  thin: -> console.log @txt
  fat:  => console.log @txt

msg = new Message "yo"
msg.thin() # works
msg.fat()  # works

fn = (callback) -> callback()

fn(msg.thin) # => "undefined"
fn(msg.fat)  # works
fn(-> msg.thin()) # works
```

This has been the final part of the series - see you around and stay tuned.
