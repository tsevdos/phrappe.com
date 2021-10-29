---
title: "Coffeescript gotchas (part 2): Operators and aliases"
date: "2014-07-17"
type: "post"
permalink: /coffeescript/coffeescript-gotchas-part-2-operators-and-aliases/
categories:
  - coffeescript
tags:
  - aliases
  - chaining comparison
  - coffeescript
  - operators
  - ternary
---

For this second part of the series, we'll dig into **CoffeeScript operators** and their **aliases**, which make our lives easier and our code much cleaner and more expressive. In case you missed the [first part](http://phrappe.com/coffeescript/coffeescript-gotchas-part-1-comments-strings-booleans-arrays-and-functions/ "CoffeeScript gotchas (part 1): Comments, strings, booleans, arrays and functions") I recommend you have a look at it, I'm sure you'll find something interesting.

##### Update: Table of contents

1. [CoffeeScript gotchas (part 1): Comments, strings, booleans, arrays and functions](http://phrappe.com/coffeescript/coffeescript-gotchas-part-1-comments-strings-booleans-arrays-and-functions/)
2. [Coffeescript gotchas (part 2): Operators and aliases](http://phrappe.com/coffeescript/coffeescript-gotchas-part-2-operators-and-aliases/)
3. [Coffeescript gotchas (part 3): Switch statement and loops](http://phrappe.com/coffeescript/coffeescript-gotchas-part-3-switch-statement-and-loops/)
4. [Coffeescript gotchas (part 4): Scope and Objects](http://phrappe.com/coffeescript/coffeescript-gotchas-part-4-scope-and-objects/)

## Basic operators and their aliases

When it comes to `if` statements (and not only them), CoffeeScript provides many syntax aliases that keep our code clean and readable. For starters, we can forget triple equals (===) and negative double equals (!==), and use their easier aliases, the `is` and `isnt` keywords. Have a look at the example below.

```
name = "John"

if name is "John" # true ( is equals === )
  console.log('is demonstration')

if name isnt "Johnny" # false ( isnt equals !== )
  console.log('isnt demonstration')
```

You can also use the `not` keyword and get rid of Javascript's exclamation mark (!) operator. Much more readable!

```
if not false # compiles as if (!false) in Javascript
  console.log('not demonstration')
```

Want to make it even more readable? You can even replace the `if not` statement with the much more descriptive `unless` keyword. It makes more sense in some cases:

```
# if not === unless

person =
  isRunning : false,
  startRunning : ->
  	console.log('start running!')

if not person.isRunning
  person.startRunning()

unless person.isRunning
  person.startRunning()
```

Finally, you can forget boolean operators such as double ampersands (&&) and the double vertical bars (||) and start using the much more convenient `and` and `or` keywords. The real fun starts when you combine all these new keywords. Writing Javascript becomes as easy as english!

```
name = 'John'
sex  = 'male'
isCool = true

if name is "John" and sex is "male" # compiles as if ( name === "John" && sex === "male" )
  console.log('do something')

if name is "John" or isCool is true # compiles as if ( name === "John" || isCool === true )
  console.log('do something else')
```

## Ternary Operator

The ternary Operator in CoffeeScript looks a bit tricky at first, and in my opinion is probably the only operator that actually looks better in plain good old Javascript, but in case you need to use it, it looks like this:

```
maxValue = 10
minValue = 1
value = if 10 > 0 then 5 else 15 # value = 5

document.write(value)
```

## CoffeeScript's question mark operator

This is a unique CoffeeScript feature that checks if a variable (or property) has a value. So it basically tests if the value isn't `null` or of type `undefined`. Keep in mind that this is not testing if a value is "falsey" (like a empty string, number 0, empty array, etc.). For more details on "truthy" and "falsy" values have a look at this excellent [article on Sitepoint](http://www.sitepoint.com/javascript-truthy-falsy/ "Truthy and Falsy: When All is Not Equal in JavaScript").

```
if name? # compiles as if ( name !== null || name !== "undifined" )
  document.write('Safely use name value.')
```

You can also use this feature on object properties or when you want to check if the value isn't `null` or of type `undefined`. Have a look at the examples below and discover a nicely added feature that will save you a lot of typing...

```
person =
	name: 'John'

console.log( person?.name )

nullName = null
nullName?= "Johnny"

console.log(nullName)

nullName = null
otherName = nullName ? "Yiannis"

console.log(otherName)
```

## The OR operator (on value assignments)

It looks better and more compact...

```
name = false # falsy value

name ||= "John" # name || (name = "John");

console.log(name)
```

## Chaining comparison

Another CoffeeScript only feature. If your condition is between a range you can finally combine them, just like in algebra. Nicely done.

```
x = 8

if 0 <= x <= 10 # compiles to if ( 0 <= x && x <= 10 )
  console.log('true')
```

As you can see CoffeeScript can be very expressive and in many cases you can write code that is as expressive as english! The well chosen aliases make the entire experience more fun and let you focus more on problem solving than on typos and missing curly braces.

If you like this article, stay tuned because the following CoffeeScript articles will be mind blowing...
