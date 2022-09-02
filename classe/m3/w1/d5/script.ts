
interface ISmartphone {

    carica: number
    numeroChiamate: number
    costoMinuto: number

    ricarica(unaRicarica: number): void //ricarica smartphone
    chiamata(minutiDurata: number): void //scala soldi su carica & aumenta numeroChiamate
    numero404(): number //restituisce il valore della carica disponibile
    getNumeroChiamate(): number //restituisce il valore di numeroChiamate
    azzeraChiamate(): void //azzera numeroChiamate

}

//----------------------------

class FirstUser implements ISmartphone {

    carica: number
    numeroChiamate: number
    costoMinuto: number

    constructor() {
        this.carica = 0
        this.numeroChiamate = 0
        this.costoMinuto = 0.20
    }


    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica
    }

    
    chiamata(minutiDurata: number): void {

        let costoChiamata: number = minutiDurata * this.costoMinuto

        if (this.carica >= costoChiamata) {

            this.carica -= costoChiamata
            this.numeroChiamate += 1

        } else{
            console.log("credito non sufficiente")
        }

    }

    
    numero404(): number {
        return this.carica
    }


    getNumeroChiamate(): number{
       return this.numeroChiamate
    } 


    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

}

let fistSmartphone:FirstUser = new FirstUser()

fistSmartphone.numero404()
fistSmartphone.getNumeroChiamate()

fistSmartphone.ricarica(10)
fistSmartphone.chiamata(3)

fistSmartphone.numero404()
fistSmartphone.getNumeroChiamate()

fistSmartphone.azzeraChiamate()

fistSmartphone.numero404()
fistSmartphone.getNumeroChiamate()

//----------------------------

class SecondUser implements ISmartphone {

    carica: number
    numeroChiamate: number
    costoMinuto: number

    constructor() {
        this.carica = 0
        this.numeroChiamate = 0
        this.costoMinuto = 0.20
    }

    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica
    }

    
    chiamata(minutiDurata: number): void {

        let costoChiamata: number = minutiDurata * this.costoMinuto

        if (this.carica >= costoChiamata) {

            this.carica -= costoChiamata
            this.numeroChiamate += 1

        } else{
            console.log("credito non sufficiente")
        }

    }

    
    numero404(): number {
        return this.carica
    }


    getNumeroChiamate(): number{
       return this.numeroChiamate
    }
 

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

}

let secondSmartphone:SecondUser = new SecondUser()

secondSmartphone.numero404()
secondSmartphone.getNumeroChiamate()

secondSmartphone.ricarica(10)
secondSmartphone.chiamata(3)

secondSmartphone.numero404()
secondSmartphone.getNumeroChiamate()

secondSmartphone.azzeraChiamate()

secondSmartphone.getNumeroChiamate()

secondSmartphone.chiamata(3)

secondSmartphone.getNumeroChiamate()

//----------------------------

class ThirdUser implements ISmartphone {

    carica: number
    numeroChiamate: number
    costoMinuto: number

    constructor() {
        this.carica = 0
        this.numeroChiamate = 0
        this.costoMinuto = 0.20
    }

    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica
    }

    
    chiamata(minutiDurata: number): void {

        let costoChiamata: number = minutiDurata * this.costoMinuto

        if (this.carica >= costoChiamata) {

            this.carica -= costoChiamata
            this.numeroChiamate += 1

        } else{
            console.log("credito non sufficiente")
        }

    }

    
    numero404(): number {
        return this.carica
    }


    getNumeroChiamate(): number{
       return this.numeroChiamate
    }
 

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

}

let thirdSmartphone:ThirdUser = new ThirdUser()

thirdSmartphone.numero404()
thirdSmartphone.getNumeroChiamate()

thirdSmartphone.ricarica(5)
thirdSmartphone.chiamata(10)

thirdSmartphone.numero404()
thirdSmartphone.getNumeroChiamate()

thirdSmartphone.chiamata(3)
thirdSmartphone.ricarica(5)

thirdSmartphone.numero404()
thirdSmartphone.getNumeroChiamate()

thirdSmartphone.azzeraChiamate()

thirdSmartphone.getNumeroChiamate()