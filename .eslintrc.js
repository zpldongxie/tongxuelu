/*
 * @description: 
 * @author: zpl
 * @Date: 2020-01-30 14:36:34
 * @LastEditTime : 2020-01-30 15:40:50
 * @LastEditors  : zpl
 */
const path = require('path');

// 全局路径
const dirs = {
  src: path.join(__dirname, './src'),
  imgDir: path.join(__dirname, './src/images'),
  docDir: path.join(__dirname, './src/doc'),
};

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'airbnb',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'settings': {
    "import/resolver": {
      'alias': {
        'map': [
          ['@', dirs.src],
          ['Image', dirs.imgDir],
          ['Doc', dirs.docDir],
        ]
      }
    }
  },
  'rules': {
    'import/no-extraneous-dependencies': ["error", { "devDependencies": true }],
    'react/forbid-prop-types': 0,
    'linebreak-style': 0,
    "jsx-a11y/no-static-element-interactions":0,
    "jsx-a11y/click-events-have-key-events":0,
  },
};
