var inherit = require('./inherit');
module.exports = function Class(define) {
  define = define || {};
  if (!define.extend && this.__construct) {
    this.__construct.call(this, define);
    return this;
  } else {
    var Gozen = function Gozen() {
      return Class.apply(this, arguments);
    };
    delete define.extend;
    Gozen.prototype = define;
    inherit(Gozen, this);
    return Gozen;
  }
};