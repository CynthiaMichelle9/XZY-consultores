export default class Cliente {
    constructor(nombre) {
      this._nombre = nombre;
      this._impuesto = null;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }

    set impuesto(nuevoImpuesto) {
      this._impuesto = nuevoImpuesto;
    }
  
    calcularImpuesto() {
      return this._impuesto.calcularImpuesto(); 
    }
  };