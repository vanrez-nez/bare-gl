import * as VecFunc from './VecFunctions';
import Vector from './Vector';

export default class Vector2 extends Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.len = 2;
    return this;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  set(x, y) {
    return VecFunc.set(this, x, y);
  }

  setScalar(s) {
    return VecFunc.setScalar(this, s);
  }

  copy(v) {
    return VecFunc.copy(this, v);
  }

  add(v) {
    return VecFunc.add(this, v);
  }

  addScalar(s) {
    return VecFunc.addScalar(this, s);
  }

  addVectors(a, b) {
    return VecFunc.addVectors(this, a, b);
  }

  addScaledVector(v, s) {
    return VecFunc.addScaledVector(this, v, s);
  }

  sub(v) {
    return VecFunc.sub(this, v);
  }

  subScalar(s) {
    return VecFunc.subScalar(this, s);
  }

  subVectors(a, b) {
    return VecFunc.subVectors(this, a, b);
  }

  multiply(v) {
    return VecFunc.multiply(this, v);
  }

  multiplyScalar(s) {
    return VecFunc.multiplyScalar(this, s);
  }

  divide(v) {
    return VecFunc.divide(this, v);
  }

  divideScalar(s) {
    return VecFunc.divideScalar(this, s);
  }

  applyMatrix3(m) {
    const { x, y } = this;
    const { e } = m.elements;
    this.x = e[0] * x + e[3] * y + e[6];
    this.y = e[1] * x + e[4] * y + e[7];
    return this;
  }

  min(v) {
    return VecFunc.min(this, v);
  }

  max(v) {
    return VecFunc.max(this, v);
  }

  clamp(min, max) {
    return VecFunc.clamp(this, min, max);
  }

  clampScalar(min, max) {
    return VecFunc.clampScalar(this, min, max);
  }

  clampLength(min, max) {
    return VecFunc.clampLength(this, min, max);
  }

  floor() {
    return VecFunc.floor(this);
  }

  ceil() {
    return VecFunc.ceil(this);
  }

  round() {
    return VecFunc.round(this);
  }

  roundToZero() {
    return VecFunc.roundToZero(this);
  }

  negate() {
    return VecFunc.negate(this);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }

  normalize() {
    return VecFunc.normalize(this);
  }

  angle() {
    let angle = Math.atan2(this.y, this.x);
    if (angle < 0) {
      angle += 2 * Math.PI;
      return this;
    }
    return angle;
  }

  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }

  distanceToSquared(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }

  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }

  setLength(length) {
    return VecFunc.setLength(this, length);
  }

  lerp(v, alpha) {
    return VecFunc.lerp(this, v, alpha);
  }

  lerpVectors(v1, v2, alpha) {
    return VecFunc.lerpVectors(this, v1, v2, alpha);
  }

  equals(v) {
    return VecFunc.equals(this, v);
  }
}
