var extend = require('./extend');
module.exports = function inherit(childClass, parentClass) {
  extend.call(childClass.prototype, Object.create(parentClass.prototype || parentClass));
  childClass.prototype.constructor = childClass;
  if(!Object.keys(childClass.prototype._super).length) {
    childClass.prototype._super = parentClass.prototype || {};
  }
};