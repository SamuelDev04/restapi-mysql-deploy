"use strict";

var _colors = _interopRequireDefault(require("colors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var message = function message(mensaje, tipo) {
  switch (tipo) {
    case 'danger':
      console.log(mensaje.bgRed);
      break;
    case 'warning':
      console.log(mensaje.bgYellow);
      break;
    case 'success':
      console.log(mensaje.bgGreen);
      break;
    default:
      console.log(mensaje.bgWhite);
      break;
  }
};
module.exports = message;