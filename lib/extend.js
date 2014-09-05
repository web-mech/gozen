module.exports = function extend() {
  this._super = this._super || Object.create(null);
  var define = Array.prototype.slice.call(arguments);
  for (var i = 0; i < define.length; i++) {
    var props = define[i];
    for (var p in props) {
      if (typeof props[p] === 'function') {
        if (this[p]) {
          this._super[p] = props[p];
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