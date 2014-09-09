//test inheritance
//test calling super
//test encapsulation
var expect = require('chai').expect;
var Class = require('../lib/class');

describe('Class', function() {
  it('Should call its parent contstructor when it has none', function() {
    var Foo = new Class({
      init: function() {
        this.name = 'foo';
      }
    });

    var Bar = new Foo({
      extend: true,
      init: function() {
        this._super.init.call(this);
        this.age = 50;
      }
    });

    var Baz = new Bar({
      extend: true
    });

    var baz = new Baz();

    expect(baz).to.have.property('name');
    expect(baz).to.have.property('age');
  });

  it('Should should initialize', function() {
    var Person = new Class({
      extend: true,
      init: function __construct_person(options) {
        this.name = 'person';
      }
    });
    var Mike = new Person({
      extend: true,
      cool: 'Y',
      init: function __construct_mike(options) {
        this._super.init.call(this, options || {});
        this.name = this.name + ' ' + 'mike';
      },
      bar: function() {
        //console.log('mike ', 'bar');
      }
    });

    var Mav = new Mike({
      extend: true,
      init: function __construct_mav(options) {
        this._super.init.call(this, options || {});
        this.name = this.name + ' ' + options.name;
        //this.name = this.name + ' '+ options.name;
      },
      bar: function() {
        this._super.bar();
      }
    });

    var mav = new Mav({
      name: 'mav'
    });
    expect(mav.name).to.eql('person mike mav');
    expect(mav).to.have.property('cool');
    //expect(Mav.prototype._super).to.eql(Mike.prototype);
  });
});