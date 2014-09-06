//test inheritance
//test calling super
//test encapsulation
var expect = require('chai').expect;
var Class = require('../lib/class');

describe('Class', function() {
  it('Should should initialize', function() {
    var Person = new Class({
      extend: true,
      init: function __construct_person(options) {
        this.name = 'person';
      }
    });
    var Mike = new Person({
      extend: true,
      cool: 'yes',
      init: function __construct_mike(options) {
        this._super.init.call(this, options || {});
        this.name = this.name +' '+'mike';
      },
      bar : function(){
        console.log('mike ', 'bar');
      }
    });

    var Mav = new Mike({
      extend: true,
      init: function __construct_mav(options) {
        this._super.init.call(this, options || {});
        this.name = this.name+' '+options.name;
        //this.name = this.name + ' '+ options.name;
      },
      bar: function(){
        this._super.bar();
      }
    });

    var mav = new Mav({name: 'mav'});
    expect(mav.name).to.eql('person mike mav');
    //expect(Mav.prototype._super).to.eql(Mike.prototype);
  });
});