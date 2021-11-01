---
title: "Extending Class methods with Module Mixins"
date: "2016-02-01"
type: "post"
permalink: /ruby/extending-class-methods-with-module-mixins/
categories:
  - ruby
tags:
  - class
  - module
  - ruby
  - singleton
---

I'm about to finish the [Eloquent Ruby book](http://www.amazon.com/gp/product/0321584104/) (excellent book by the way) and keep finding ruby pearls of wisdom. One of these is that you can actually use **module mixins** to extend **class methods**! You only need to declare a module mixin as normal, and then include it on the **singleton class** of your declared class ("Klass" in our example).

```ruby
# module
module Findable
  def find_by_name(name)
    # find something
  end
end

# Class
class Klass
  # class stuff
  class << self
    include Findable
  end
end
```

Then we can use it just like any other **class method**.

```ruby
Klass.find_by_name('John')
```
