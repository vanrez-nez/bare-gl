import * as GL from '../const/GL';
import * as GLex from '../const/GLex';
import { BLEND_FUNCTIONS, BLEND_EQUATIONS } from '../const/GLBlend';

export default class RendererState {
  constructor({ gl, extensions, utils, capabilities }) {
    this.gl = gl;
    this.blendFunc = GLex.BLEND_NORMAL;
    this.blendEquation = GLex.BLEND_ADD_EQUATION;
    this.enabledCapabilities = {};
    this.blendFuncDirty = false;
    this.blendEquationDirty = false;
    this.alphaBlend = false;
    this.width = 0;
    this.height = 0;
  }

  setCapability(cap, enabled) {
    const { enabledCapabilities, gl } = this;
    if (enabledCapabilities[cap] !== enabled) {
      enabledCapabilities[cap] = enabled;
      if (enabled) {
        gl.enable(cap);
      } else {
        gl.disable(cap);
      }
    }
  }

  setBlend(enabled) {
    this.alphaBlend = enabled;
  }

  setBlendFunc(blendFunc) {
    if (this.blendFunc !== blendFunc) {
      this.blendFunc = blendFunc;
      this.blendFuncDirty = true;
    }
  }

  setBlendEquation(blendEquation) {
    if (this.blendEquation !== blendEquation) {
      this.blendEquation = blendEquation;
      this.blendEquationDirty = true;
    }
  }

  applyBlending(gl, premultiplied) {
    const { enabledCapabilities, blendFunc, blendEquation } = this;

    if (this.alphaBlend !== enabledCapabilities[GL.BLEND]) {
      this.setCapability(GL.BLEND, this.alphaBlend);
      if (!this.alphaBlend) {
        return;
      }
    }

    if (this.blendFuncDirty) {
      this.blendFuncDirty = false;
      const preset = BLEND_FUNCTIONS[blendFunc];
      const f = premultiplied ? preset[0] : preset[1];
      if (f.length === 2) {
        gl.blendFunc(f[0], f[1]);
      } else if (f.length === 4) {
        gl.blendFuncSeparate(f[0], f[1], f[2], f[3]);
      }
    }

    if (this.blendEquationDirty) {
      this.blendEquationDirty = false;
      const eq = BLEND_EQUATIONS[blendEquation];
      if (eq.length === 1) {
        gl.blendEquation(eq[0]);
      } else if (eq.length === 2) {
        gl.blendEquationSeparate(eq[0], eq[1]);
      }
    }
  }
}
