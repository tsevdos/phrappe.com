---
title: "Ruby Hash iteration with index"
date: "2015-12-12"
type: "post"
permalink: /ruby/ruby-hash-iteration-with-index/
categories:
  - ruby
tags:
  - enumerable
  - hash
  - index
  - iteration
  - mixin
  - module
  - ruby
---

[Ruby Hash](http://ruby-doc.org/core-2.2.3/Hash.html) (and [Array](http://ruby-doc.org/core-2.2.3/Array.html)) includes the [Enumerable module (mixin)](http://ruby-doc.org/core-2.2.3/Enumerable.html), which provides a lot of neat, but also slightly hidden in the documentation, methods. This means that despite the poor advertising you can iterate not only each key and value, but the index as well:

```ruby
months = { January: 31, February: 28, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31 }

months.each_with_index do |(key, val), i|
	puts "#{i}: #{key} has #{val} days"
end
```
