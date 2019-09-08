import * as GL from './GL';
import * as GLex from './GLex';

export const BLEND_EQUATIONS = {
  [GLex.ADD_EQUATION]: [GL.ADD_EQUATION, GL.ADD_EQUATION],
};

export const BLEND_FUNCTIONS = {
  [GLex.NONE]: [],
  [GLex.BLEND_NORMAL]: [
    [ // Premultiplied
      GL.ONE,
      GL.ONE_MINUS_SRC_ALPHA,
    ],
    [ // Straight
      GL.SRC_ALPHA,
      GL.ONE_MINUS_SRC_ALPHA,
      GL.ONE,
      GL.ONE_MINUS_SRC_ALPHA,
    ],
  ],

  [GLex.BLEND_ADD]: [
    [ // Premultiplied
      GL.ONE,
      GL.ONE,
    ],
    [ // Straight
      GL.SRC_ALPHA,
      GL.ONE,
      GL.SRC_ALPHA,
      GL.ONE,
    ],
  ],

  [GLex.BLEND_SUBTRACT]: [
    [ // Premultiplied
      GL.ZERO,
      GL.ZERO,
      GL.ONE_MINUS_SRC_COLOR,
      GL.ONE_MINUS_SRC_ALPHA,
    ],
    [ // Straight
      GL.ZERO,
      GL.ONE_MINUS_SRC_COLOR,
    ],
  ],

  [GLex.BLEND_MULTIPLY]: [
    [ // Premultiplied
      GL.ZERO,
      GL.SRC_COLOR,
      GL.ZERO,
      GL.SRC_ALPHA,
    ],
    [ // Straight
      GL.ZERO,
      GL.SRC_COLOR,
    ],
  ],
};
