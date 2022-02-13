"use strict";

var _cliente = _interopRequireDefault(require("../assets/js/cliente.js"));

var _impuesto = _interopRequireDefault(require("../assets/js/impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customerOneTax = new _impuesto["default"](40000, 5000);
var customerOne = new _cliente["default"]("Frane", customerOneTax);
console.log(customerOne);
console.log(customerOne.calcularImpuesto());