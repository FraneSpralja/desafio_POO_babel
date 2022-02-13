export default class Cliente {

    constructor(nombre, impuesto) {
        this.nombre = nombre;
        this.impuesto = impuesto || {};
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        return this.nombre.push();
    }

    get getImpuesto() {
        return this.impuesto;
    }

    set setImpuesto(impuesto) {
        this.impuesto.push(impuesto);
    }

    calcularImpuesto() {
        return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21
    }
}