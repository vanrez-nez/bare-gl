export function set(out, x, y, z, w) {
  out.x = x;
  out.y = y;
  if (out.len > 2) out.z = z;
  if (out.len > 3) out.w = w;
  return out;
}

export function copy(out, v) {
  out.x = v.x;
  out.y = v.y;
  if (out.len > 2) out.z = v.z;
  if (out.len > 3) out.w = v.w;
  return out;
}

export function add(out, v) {
  out.x += v.x;
  out.y += v.y;
  if (out.len > 2) out.z += v.z;
  if (out.len > 3) out.w += v.w;
  return out;
}

export function addScalar(out, s) {
  out.x += s;
  out.y += s;
  if (out.len > 2) out.z += s;
  if (out.len > 3) out.w += s;
  return out;
}

export function addVectors(out, a, b) {
  out.x = a.x + b.x;
  out.y = a.y + b.y;
  if (out.len > 2) out.z = a.z + b.z;
  if (out.len > 3) out.w = a.w + b.w;
  return out;
}

export function addScaledVector(out, v, s) {
  out.x += v.x * s;
  out.y += v.y * s;
  if (out.len > 2) out.z += v.z * s;
  if (out.len > 3) out.w += v.w * s;
  return out;
}

export function sub(out, v) {
  out.x -= v.x;
  out.y -= v.y;
  if (out.len > 2) out.z -= v.z;
  if (out.len > 3) out.w -= v.w;
  return out;
}

export function subScalar(out, s) {
  out.x -= s;
  out.y -= s;
  if (out.len > 2) out.z -= s;
  if (out.len > 3) out.w -= s;
  return out;
}

export function subVectors(out, a, b) {
  out.x = a.x - b.x;
  out.y = a.y - b.y;
  if (out.len > 2) out.z = a.z - b.z;
  if (out.len > 3) out.w = a.w - b.w;
  return out;
}

export function multiply(out, v) {
  out.x *= v.x;
  out.y *= v.y;
  if (out.len > 2) out.z *= v.z;
  if (out.len > 3) out.w *= v.w;
  return out;
}

export function multiplyScalar(out, s) {
  out.x *= s;
  out.y *= s;
  if (out.len > 2) out.z *= s;
  if (out.len > 3) out.w *= s;
  return out;
}

export function multiplyVectors(out, a, b) {
  out.x = a.x * b.x;
  out.y = a.y * b.y;
  if (out.len > 2) out.z = a.z * b.z;
  if (out.len > 3) out.w = a.w * b.w;
  return out;
}

export function divide(out, v) {
  out.x /= v.x;
  out.y /= v.y;
  if (out.len > 2) out.z /= v.z;
  if (out.len > 3) out.w /= v.w;
  return out;
}

export function divideScalar(out, s) {
  return multiplyScalar(out, 1 / s);
}

export function min(out, v) {
  out.x = Math.min(out.x, v.x);
  out.y = Math.min(out.y, v.y);
  if (out.len > 2) Math.min(out.z, v.z);
  if (out.len > 3) Math.min(out.w, v.w);
  return out;
}

export function max(out, v) {
  out.x = Math.max(out.x, v.x);
  out.y = Math.max(out.y, v.y);
  if (out.len > 2) Math.max(out.z, v.z);
  if (out.len > 3) Math.max(out.w, v.w);
  return out;
}

export function clamp(out, minVec, maxVec) {
  out.x = Math.max(minVec.x, Math.min(maxVec.x, out.x));
  out.y = Math.max(minVec.y, Math.min(maxVec.y, out.y));
  if (out.len > 2) Math.max(minVec.z, Math.min(maxVec.z, out.z));
  if (out.len > 3) Math.max(minVec.w, Math.min(maxVec.w, out.w));
  return out;
}

export function clampScalar(out, minScalar, maxScalar) {
  out.x = Math.max(minScalar.x, Math.min(maxScalar.x, out.x));
  out.y = Math.max(minScalar.y, Math.min(maxScalar.y, out.y));
  if (out.len > 2) Math.max(minScalar.z, Math.min(maxScalar.z, out.z));
  if (out.len > 3) Math.max(minScalar.w, Math.min(maxScalar.w, out.w));
  return out;
}

export function clampLength(out, minVal, maxVal) {
  const { length } = out;
  divideScalar(out, length || 1);
  multiplyScalar(out, Math.max(minVal, Math.min(maxVal, length)));
  return out;
}

export function floor(out) {
  out.x = Math.floor(out.x);
  out.y = Math.floor(out.y);
  if (out.len > 2) out.z = Math.floor(out.z);
  if (out.len > 3) out.w = Math.floor(out.w);
  return out;
}

export function ceil(out) {
  out.x = Math.ceil(out.x);
  out.y = Math.ceil(out.y);
  if (out.len > 2) out.z = Math.ceil(out.z);
  if (out.len > 3) out.w = Math.ceil(out.w);
  return out;
}

export function round(out) {
  out.x = Math.round(out.x);
  out.y = Math.round(out.y);
  if (out.len > 2) out.z = Math.round(out.z);
  if (out.len > 3) out.w = Math.round(out.w);
  return out;
}

export function roundToZero(out) {
  out.x = out.x > 0 ? Math.ceil(out.x) : Math.floor(out.x);
  out.y = out.y > 0 ? Math.ceil(out.y) : Math.floor(out.y);
  if (out.len > 2) {
    out.z = out.z > 0 ? Math.ceil(out.z) : Math.floor(out.z);
  }
  if (out.len > 3) {
    out.w = out.w > 0 ? Math.ceil(out.w) : Math.floor(out.w);
  }
  return out;
}

export function negate(out) {
  out.x = -out.x;
  out.y = -out.y;
  if (out.len > 2) out.z = -out.z;
  if (out.len > 3) out.w = -out.w;
  return out;
}

export function normalize(out) {
  return divideScalar(out, out.length() || 1);
}

export function setLength(out, length) {
  return multiplyScalar(normalize(out), length);
}

export function lerp(out, v, alpha) {
  out.x += (v.x - out.x) * alpha;
  out.y += (v.y - out.y) * alpha;
  if (out.len > 2) out.z += (v.z - out.z) * alpha;
  if (out.len > 3) out.w += (v.w - out.w) * alpha;
}

export function lerpVectors(out, v1, v2, alpha) {
  subVectors(out, v2, v1);
  multiplyScalar(out, alpha);
  return add(out, v1);
}

export function equals(out, v) {
  let result = out.x === v.x && out.y === v.y && out.len === v.len;
  if (out.len > 2) result = result && out.z === v.z;
  if (out.len > 3) result = result && out.w === v.w;
  return result;
}
