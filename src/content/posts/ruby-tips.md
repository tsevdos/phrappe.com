---
title: "Ruby tips"
date: "2015-09-14"
type: "post"
permalink: /ruby/ruby-tips/
categories:
  - ruby
tags:
  - arguments
  - block_given?
  - case statement
  - here docs
  - here documents
  - methods
  - object instance
  - ranges
  - ruby
  - tips
  - variables
  - yields
---

I just read the [Ruby Pocket Reference](http://www.amazon.com/Ruby-Pocket-Reference-OReilly/dp/0596514816/ref=sr_1_2?s=books&ie=UTF8&qid=1439116366&sr=1-2&keywords=Ruby+Pocket+Reference), a great intro for the [Ruby language](https://www.ruby-lang.org/) and want to share a few helpful Ruby tips learned.

## Parallel assignment of variables

In Ruby, you can assign several values to several variables in a single expression (aka. one-liner). The values can be of any type, making it even better! The result is pretty impressive, check out the snippet below:

```ruby
a, b, c = 50, 'cent', :test

# a => 50
# b => 'cent'
# c => :test
```

You can even return multiple values from methods!

```ruby
def return_stuff
  return 50, 'cent', :test
end

a, b, c = return_stuff
# a => 50
# b => 'cent'
# c => :test
```

And in case the above example didn't quite impress you, see how convenient it can be on a real-world example:

```ruby
def strong_and_weak
  return @players.select{|player| player.strong? }, @players.select{|player| !player.strong? }
end

strong_players, weak_players = strong_and_weak
```

## Here Documents

You can build multiple line strings using here documents. Ruby supports both single and double-quoted strings on here documents, have a look at the examples:

```ruby
name = 'John'

# default acts as double-quoted string
puts <<heredoc
Hello #{name}
other line 1,
other line 2.
heredoc

# double-quoted string
puts <<"double-quoted"
Hello #{name}
other line 1,
other line 2.
double-quoted

# single-quoted string (string interpolation won't work on the below example)
puts <<'single-quoted'
Hello #{name}
other line 1,
other line 2.
single-quoted
```

## Ranges

Ruby supports ranges of numbers which can be very handy. You can define a range of numbers using the starting value followed by `..` (2 dots) or `...` (3 dots) and the end value. On the first case the range includes the last value, and on the other one excludes it. For example:

```ruby
1..10 # => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
1...10 # => 1, 2, 3, 4, 5, 6, 7, 8, 9
```

Ranges can be used in many cases such as:

**Loops**

```ruby
(1..10).each_entry {|val| puts "#{val}"}
(1..10).each_with_index {|val, i| puts "#{i} : #{val}"}
```

**Comparison**

```ruby
(1..10) === 4 # => true
(1...10) === 10 # => false
```

**and creating arrays**

```ruby
(1..10).to_a # => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Default arguments

Another great feature!

```ruby
def hello(name = "world")
  puts "hello #{name}!"
end

hello # => hello world!
hello('John') # => hello John!
```

## `block_given?` on `yields`

A `yield` statement executes a code block associated with a method. You probably know that already (if not have a look at the examples below), what you probably don't know is the `block_given?` method that checks if a code block is passed to the method.

```ruby
def yo
  if block_given?
    yield
  else
    puts "No block :-("
  end
end

yo # => No block :-(
yo { puts "Yo man" } # => Yo man
```

## Case statement tricks

Case staments in Ruby are very flexible. They come in two main flavors, multiline for writing many statements and one-liners, that looks much better:

```ruby
lang = 'en'

# multiline case statement
case lang
when 'en'
  puts 'welcome'
  # ... more statements
when 'de'
  puts 'willkommen'
  # ... more statements
when 'fr'
  puts 'bienvenue'
  # ... more statements
else
  'yo'
  # ... more statements
end

# one-line case statement. Don't forget the 'then' keyword
case lang
when 'en' then puts 'welcome'
when 'de' then puts 'willkommen'
when 'fr' then puts 'bienvenue'
when 'de' then puts 'bienvenida'
else 'yo'
end
```

You can also assign a value using the case statement in Ruby:

```ruby
lang = 'en'

welcome_msg = case lang
when 'en' then 'welcome'
when 'de' then 'willkommen'
when 'fr' then 'bienvenue'
when 'de' then 'bienvenida'
else 'yo'
end
```

## Usefull object instance methods

As a final tip, I enlist the most useful public methods of the Object class (the base class for Ruby, all other types inherit these methods). All of them are helpful, but I tend to use the debugging-oriented ones the most:

- `obj.inspect`
- `obj.class`
- `obj.ancestors`
- `obj.instance_variables`
- `obj.methods` (also `obj.private_methods`, `obj.protected_methods` and `obj.public_methods` can be handy as well)
- `obj.to_s` (sometimes `obj.to_a` can be handy as well)

Not bad for an introductory Ruby book. If you like the post stay tuned for more!
