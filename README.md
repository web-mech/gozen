Gozen
======
####A flexible javascript class system for node

I didn't like how most javascript class systems worked or how they were implemented, so I made Gozen.


######Example 1.

```
var Foo = new Class({
  extend: true,
  __construct: function(options) {
    this.name = 'foo';
  }
});

var foo = new Foo();

console.log(foo.name);
```
######Out:
```
foo
```

######Example 2.
```
var Bar = new Foo({
  extend: true,
  __construct: function(options) {
    this._super.__construct();
    this.name = this.name + options.name;
  }
});

var bar = new Bar({name: ' bar'});

console.log(bar.name);
```
######Out:
```
foo bar
```