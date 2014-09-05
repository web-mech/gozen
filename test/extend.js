var expect = require('chai').expect;
var extend = require('../lib/extend');

describe('extend', function() {
  it('Should add properties', function() {
    var foo = {};
    var o = {
      bar: 1
    };
    extend.call(foo, o);
    expect(foo).to.have.property('bar');
  });

  it('Should create a function with super', function() {
    /**var foo = {
      bar: function() {
        console.log('hello');
      }
    };

    var baz = {
      bar: function(){
        this._super.bar();
        console.log('world');
      }
    };

    var cat = {
      bar: function(){
        this._super.bar();
        console.log('cat');
      }
    };

    var dog = {
      bar: function(){
        this._super.bar();
        console.log('dog');
      }
    };

    extend.call(baz, foo);
    extend.call(cat, baz);
    extend.call(dog, cat);
    //dog.bar();
    expect(baz).to.have.property('_super');
    expect(baz._super).to.have.property('bar');**/
  });
});