//test inheritance
//test calling super
//test encapsulation
var expect = require('chai').expect;
var Class = require('../lib/class');

describe('Class', function() {
  it('Should should initialize', function() {
    var Person = new Class({
      extend: true,
      __construct: function __construct_person(options) {
        console.log('person');
      }
    });
    var Mike = new Person({
      extend: true,
      name: 'mike',
      __construct: function __construct_mike(options) {
        this._super.__construct();
        console.log('mike');
      },
      bar : function(){
        console.log('mike ', 'bar');
      }
    });

  
    var Mav = new Mike({
      extend: true,
      __construct: function __construct(options) {
        this._super.__construct();
        console.log(options.name, ': son of:', this.name);
      },
      bar: function(){
        this._super.bar();
      }
    });

    var mav = new Mav({name: 'maverick'});
    mav.bar();
  });
});