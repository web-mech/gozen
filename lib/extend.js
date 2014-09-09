module.exports = function extend() {
  this._super = this._super || Object.create(null);
  var define = Array.prototype.slice.call(arguments);
  for (var i = 0; i < define.length; i++) {
    var props = define[i];
    for (var p in props) {
      if (typeof props[p] === 'function') {
        if (this[p]) {
          this._super[p] = (function(child, parent, fn) {
            return function() {
              var tmp = this._super;
              this._super = Object.keys(parent._super).length ? Object.create(parent._super) : parent;
              var ret = fn.apply(this, arguments);
              this._super = tmp;
              return ret;
            };
          })(this, props, props[p]);
        } else {
         this[p] = props[p];
        }
      } else {
        if (p === '_super') {
          extend.call(this._super, props[p]);
        } else {
          this[p] = props[p];
        }
      }
    }
  }
};