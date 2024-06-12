import Cliente from './cliente.js';
import Impuestos from './impuestos.js';


document.addEventListener('DOMContentLoaded', function () {
    const cliente1 = new Cliente('Juan Perez');
    const impuestosCliente1 = new Impuestos(1000000, 50000);
    cliente1.impuesto = impuestosCliente1;

    console.log(`El nombre del cliente es ${cliente1.nombre}`);

    const impuestoCliente1 = cliente1.calcularImpuesto();
    console.log(`El impuesto total a pagar por ${cliente1.nombre} es: ${impuestoCliente1}`);

    document.getElementById('nombre').textContent = cliente1.nombre;
    document.getElementById('montoBruto').textContent = impuestosCliente1.montoBrutoAnual;
    document.getElementById('deducciones').textContent = impuestosCliente1.deducciones;
    document.getElementById('impuestoTotal').textContent = impuestoCliente1;
});

/* 
document.addEventListener('DOMContentLoaded', function () {
    const cliente2 = new Cliente('Lola María');
    const impuestosCliente2 = new Impuestos(2000000, 4000);
    cliente2.impuesto = impuestosCliente2;

    console.log(`El nombre del cliente es ${cliente2.nombre}`);

    const impuestoCliente2 = cliente2.calcularImpuesto();
    console.log(`El impuesto total a pagar por ${cliente2.nombre} es: ${impuestoCliente2}`);

    document.getElementById('nombre').textContent = cliente2.nombre;
    document.getElementById('montoBruto').textContent = impuestosCliente2.montoBrutoAnual;
    document.getElementById('deducciones').textContent = impuestosCliente2.deducciones;
    document.getElementById('impuestoTotal').textContent = impuestoCliente2;
}); */

/*
document.addEventListener('DOMContentLoaded', function () {
    const cliente3 = new Cliente('Rodolfo Flores');
    const impuestosCliente3 = new Impuestos(3000000, 100000);
    cliente3.impuesto = impuestosCliente3;

    console.log(`El nombre del cliente es ${cliente3.nombre}`);

    const impuestoCliente3 = cliente3.calcularImpuesto();
    console.log(`El impuesto total a pagar por ${cliente3.nombre} es: ${impuestoCliente3}`);

    document.getElementById('nombre').textContent = cliente3.nombre;
    document.getElementById('montoBruto').textContent = impuestosCliente3.montoBrutoAnual;
    document.getElementById('deducciones').textContent = impuestosCliente3.deducciones;
    document.getElementById('impuestoTotal').textContent = impuestoCliente3;
}); */