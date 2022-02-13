export default class Impuesto {

    constructor(montoBrutoAnual, deducciones) {

        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    get getMontoBruto() {
        return this.montoBrutoAnual
    }

    get getDeducciones() {
        return this.deducciones;
    }

    set setMontoBruto(montoBrutoAnual) {
        return this.montoBrutoAnual.push(montoBrutoAnual)
    }

    set setDeducciones(deducciones) {
        return this.deducciones.push(deducciones)
    }

    montoFinal() {
        return this.montoBrutoAnual - this.deducciones;
    }
}