"use strict";
//----------------------------
class FirstUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = minutiDurata * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate += 1;
        }
        else {
            console.log("credito non sufficiente");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let fistSmartphone = new FirstUser();
fistSmartphone.numero404();
fistSmartphone.getNumeroChiamate();
fistSmartphone.ricarica(10);
fistSmartphone.chiamata(3);
fistSmartphone.numero404();
fistSmartphone.getNumeroChiamate();
fistSmartphone.azzeraChiamate();
fistSmartphone.numero404();
fistSmartphone.getNumeroChiamate();
//----------------------------
class SecondUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = minutiDurata * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate += 1;
        }
        else {
            console.log("credito non sufficiente");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let secondSmartphone = new SecondUser();
secondSmartphone.numero404();
secondSmartphone.getNumeroChiamate();
secondSmartphone.ricarica(10);
secondSmartphone.chiamata(3);
secondSmartphone.numero404();
secondSmartphone.getNumeroChiamate();
secondSmartphone.azzeraChiamate();
secondSmartphone.getNumeroChiamate();
secondSmartphone.chiamata(3);
secondSmartphone.getNumeroChiamate();
//----------------------------
class ThirdUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = minutiDurata * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate += 1;
        }
        else {
            console.log("credito non sufficiente");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let thirdSmartphone = new ThirdUser();
thirdSmartphone.numero404();
thirdSmartphone.getNumeroChiamate();
thirdSmartphone.ricarica(5);
thirdSmartphone.chiamata(10);
thirdSmartphone.numero404();
thirdSmartphone.getNumeroChiamate();
thirdSmartphone.chiamata(3);
thirdSmartphone.ricarica(5);
thirdSmartphone.numero404();
thirdSmartphone.getNumeroChiamate();
thirdSmartphone.azzeraChiamate();
thirdSmartphone.getNumeroChiamate();
//# sourceMappingURL=app.js.map