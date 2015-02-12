'use strict';

var os  = require('os');
var exp = new RegExp(os.EOL + '$');

module.exports = function hasTrailingNewline (text) {
  return exp.test(text);
};
