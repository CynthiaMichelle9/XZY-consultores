"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.addEventListener('DOMContentLoaded', function () {
  var cliente1 = new _cliente.default('Juan Perez');
  var impuestosCliente1 = new _impuestos.default(1000000, 50000);
  cliente1.impuesto = impuestosCliente1;
  console.log("El nombre del cliente es ".concat(cliente1.nombre));
  var impuestoCliente1 = cliente1.calcularImpuesto();
  console.log("El impuesto total a pagar por ".concat(cliente1.nombre, " es: ").concat(impuestoCliente1));
  document.getElementById('nombre').textContent = cliente1.nombre;
  document.getElementById('montoBruto').textContent = impuestosCliente1.montoBrutoAnual;
  document.getElementById('deducciones').textContent = impuestosCliente1.deducciones;
  document.getElementById('impuestoTotal').textContent = impuestoCliente1;
});
document.addEventListener('DOMContentLoaded', function () {
  var cliente2 = new _cliente.default('Lola María');
  var impuestosCliente2 = new _impuestos.default(2000000, 4000);
  cliente2.impuesto = impuestosCliente2;
  console.log("El nombre del cliente es ".concat(cliente2.nombre));
  var impuestoCliente2 = cliente2.calcularImpuesto();
  console.log("El impuesto total a pagar por ".concat(cliente2.nombre, " es: ").concat(impuestoCliente2));
  document.getElementById('nombre').textContent = cliente2.nombre;
  document.getElementById('montoBruto').textContent = impuestosCliente2.montoBrutoAnual;
  document.getElementById('deducciones').textContent = impuestosCliente2.deducciones;
  document.getElementById('impuestoTotal').textContent = impuestoCliente2;
});
document.addEventListener('DOMContentLoaded', function () {
  var cliente3 = new _cliente.default('Rodolfo Flores');
  var impuestosCliente3 = new _impuestos.default(3000000, 100000);
  cliente3.impuesto = impuestosCliente3;
  console.log("El nombre del cliente es ".concat(cliente3.nombre));
  var impuestoCliente3 = cliente3.calcularImpuesto();
  console.log("El impuesto total a pagar por ".concat(cliente3.nombre, " es: ").concat(impuestoCliente3));
  document.getElementById('nombre').textContent = cliente3.nombre;
  document.getElementById('montoBruto').textContent = impuestosCliente3.montoBrutoAnual;
  document.getElementById('deducciones').textContent = impuestosCliente3.deducciones;
  document.getElementById('impuestoTotal').textContent = impuestoCliente3;
});
