import Cliente from '../assets/js/cliente.js';
import Impuesto from "../assets/js/impuesto.js";

const customerOneTax = new Impuesto(40000, 5000);

const customerOne = new Cliente("Frane", customerOneTax);


console.log(customerOne);
console.log(customerOne.calcularImpuesto());