var expect = require('chai').expect;
var inherit = require('../lib/inherit');

describe('inherit', function() {
  it('Makes functions inherit from each other', function() {
    function a(){ }

    a.prototype.move = function move(){
      console.log('move');
    };

    function b(){
    }

    inherit(b, a);

    b.prototype.move = function() {
      this._super.move();
    };
    b.prototype.junk = function() {
      this.move();
    };
    var c = new b();
    c.junk();
  });
});