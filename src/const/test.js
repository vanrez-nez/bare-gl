/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */


// FUNCTIONAL
function set(out, x, y, z, w) {
  out.x = x;
  out.y = y;
  if (z) out.z = z;
  if (w) out.w = w;
  return out;
}

var Comp = ['x', 'y', 'z', 'w'];

function setComponent(out, index, value) {
  out[Comp[index]] = value;
  return out;
}
function Vector4Func(x, y, z, w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
}

Vector4Func.prototype.set = function(x, y, z, w) {
  return set(this, x, y, z, w);
};

Vector4Func.prototype.setX = function(x) {
  return setComponent(this, 0, x);
};

Vector4Func.prototype.setY = function(y) {
  return setComponent(this, 1, y);
};

Vector4Func.prototype.setY = function(z) {
  return setComponent(this, 2, z);
};

Vector4Func.prototype.setY = function(w) {
  return setComponent(this, 3, w);
};

// NORMAL
function Vector4(x, y, z, w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
}

Vector4.prototype.set = function(x, y, z, w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
};

Vector4Func.prototype.setX = function(x) {
  this.x = x;
  return this;
};

Vector4Func.prototype.setY = function(y) {
  this.y = y;
  return this;
};

Vector4Func.prototype.setZ = function(z) {
  this.y = z;
  return this;
};

Vector4Func.prototype.setW = function(w) {
  this.y = w;
  return this;
};

var v4Fn = new Vector4Func(6, 7, 8);
var v4 = new Vector4(6, 7, 8);

var total = 0;
