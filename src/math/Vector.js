export default class Vector {
  setX(x) {
    this.x = x;
    return this;
  }

  setY(y) {
    this.y = y;
    return this;
  }

  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    if (this.len > 2) this.z = z;
    if (this.len > 3) this.w = w;
    return this;
  }

  copy(v) {
    this.x = v.x;
    this.y = v.y;
    if (this.len > 2) this.z = v.z;
    if (this.len > 3) this.w = v.w;
    return this;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    if (this.len > 2) this.z += v.z;
    if (this.len > 3) this.w += v.w;
    return this;
  }

  addScalar(s) {
    this.x += s;
    this.y += s;
    if (this.len > 2) this.z += s;
    if (this.len > 3) this.w += s;
    return this;
  }

  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    if (this.len > 2) this.z = a.z + b.z;
    if (this.len > 3) this.w = a.w + b.w;
    return this;
  }

  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    if (this.len > 2) this.z += v.z * s;
    if (this.len > 3) this.w += v.w * s;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    if (this.len > 2) this.z -= v.z;
    if (this.len > 3) this.w -= v.w;
    return this;
  }

  subScalar(s) {
    this.x -= s;
    this.y -= s;
    if (this.len > 2) this.z -= s;
    if (this.len > 3) this.w -= s;
    return this;
  }

  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    if (this.len > 2) this.z = a.z - b.z;
    if (this.len > 3) this.w = a.w - b.w;
    return this;
  }

  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    if (this.len > 2) this.z *= v.z;
    if (this.len > 3) this.w *= v.w;
    return this;
  }

  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    if (this.len > 2) this.z *= s;
    if (this.len > 3) this.w *= s;
    return this;
  }

  multiplyVectors(a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    if (this.len > 2) this.z = a.z * b.z;
    if (this.len > 3) this.w = a.w * b.w;
    return this;
  }

  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    if (this.len > 2) this.z /= v.z;
    if (this.len > 3) this.w /= v.w;
    return this;
  }

  divideScalar(s) {
    return this.multiplyScalar(1 / s);
  }

  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    if (this.len > 2) Math.min(this.z, v.z);
    if (this.len > 3) Math.min(this.w, v.w);
    return this;
  }

  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    if (this.len > 2) Math.max(this.z, v.z);
    if (this.len > 3) Math.max(this.w, v.w);
    return this;
  }

  clamp(minVec, maxVec) {
    this.x = Math.max(minVec.x, Math.min(maxVec.x, this.x));
    this.y = Math.max(minVec.y, Math.min(maxVec.y, this.y));
    if (this.len > 2) Math.max(minVec.z, Math.min(maxVec.z, this.z));
    if (this.len > 3) Math.max(minVec.w, Math.min(maxVec.w, this.w));
    return this;
  }

  clampScalar(minScalar, maxScalar) {
    this.x = Math.max(minScalar.x, Math.min(maxScalar.x, this.x));
    this.y = Math.max(minScalar.y, Math.min(maxScalar.y, this.y));
    if (this.len > 2) Math.max(minScalar.z, Math.min(maxScalar.z, this.z));
    if (this.len > 3) Math.max(minScalar.w, Math.min(maxScalar.w, this.w));
    return this;
  }

  clampLength(minVal, maxVal) {
    const { length } = this;
    this.divideScalar(length || 1);
    this.multiplyScalar(Math.max(minVal, Math.min(maxVal, length)));
    return this;
  }

  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    if (this.len > 2) this.z = Math.floor(this.z);
    if (this.len > 3) this.w = Math.floor(this.w);
    return this;
  }

  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    if (this.len > 2) this.z = Math.ceil(this.z);
    if (this.len > 3) this.w = Math.ceil(this.w);
    return this;
  }

  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    if (this.len > 2) this.z = Math.round(this.z);
    if (this.len > 3) this.w = Math.round(this.w);
    return this;
  }

  roundToZero() {
    this.x = this.x > 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y > 0 ? Math.ceil(this.y) : Math.floor(this.y);
    if (this.len > 2) {
      this.z = this.z > 0 ? Math.ceil(this.z) : Math.floor(this.z);
    }
    if (this.len > 3) {
      this.w = this.w > 0 ? Math.ceil(this.w) : Math.floor(this.w);
    }
    return this;
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    if (this.len > 2) this.z = -this.z;
    if (this.len > 3) this.w = -this.w;
    return this;
  }

  normalize() {
    return this.divideScalar(this.length() || 1);
  }

  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }

  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    if (this.len > 2) this.z += (v.z - this.z) * alpha;
    if (this.len > 3) this.w += (v.w - this.w) * alpha;
  }

  lerpVectors(v1, v2, alpha) {
    return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
  }

  equals(v) {
    let result = this.x === v.x && this.y === v.y && this.len === v.len;
    if (this.len > 2) result = result && this.z === v.z;
    if (this.len > 3) result = result && this.w === v.w;
    return result;
  }
}
