var inherit = require('./inherit');
module.exports = function Class(define) {
  define = define || {};
  if (!define.extend && this.init) {
    this.init.call(this, define);
    return this;
  } else {
    console.log(define);
    var Gozen = function Gozen() {
      return Class.apply(this, arguments);
    };
    delete define.extend;
    Gozen.prototype = Object.create(define);
    inherit(Gozen, this);
    return Gozen;
  }
};