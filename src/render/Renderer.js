import RendererState from './RendererState.js';

function getGLContext(canvas, contextAttributes) {
  const names = ['webgl2', 'experimental-webgl2', 'webgl', 'experimental-webgl'];
  for (const i in names) {
    try {
      const ctx = canvas.getContext(names[i], { contextAttributes });
      if (ctx) {
        return ctx;
      }
    } catch (e) {}
  }
  return null;
}

export default class Renderer {
  constructor({
    canvas = document.createElement('canvas'),
    pixelRatio = 1,
    depth = true,
    alpha = false,
    stencil = false,
    antialias = true,
    powerPreference = 'default',
    premultipliedAlpha = true,
  } = {}) {
    this.canvas = canvas;
    this.gl = getGLContext(canvas, {
      depth,
      alpha,
      stencil,
      antialias,
      powerPreference,
      premultipliedAlpha,
    });
    this.state = new RendererState({
      gl: this.gl,
    });
    this.pixelRatio = pixelRatio;
    this.setSize(canvas.width, canvas.height);
  }

  setSize(width, height, updateStyle = false) {
    const { canvas, pixelRatio } = this;
    this.width = width;
    this.height = height;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    if (updateStyle) {
      Object.assign(canvas.style, {
        width: `${width}px`,
        height: `${height}px`,
      });
    }
  }

  getPixelRatio() {
    return this.pixelRatio;
  }

  setPixelRatio(ratio) {
    this.pixelRatio = ratio;
    this.setSize(this.width, this.height);
  }

  setViewport(width, height) {
    this.viewport.set(width, height);
    this.gl.setViewport(width, height);
  }
}

const a = new Renderer({});
