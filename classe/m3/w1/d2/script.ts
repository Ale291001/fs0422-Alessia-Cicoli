class SonAccount {

    balanceInit:number = 0

    deposit(versamento:number) {
        return this.balanceInit += versamento

    }

    draw(prelievo:number) {

        if(this.balanceInit - prelievo < 0){
            return this.balanceInit -= prelievo
         }else{
             throw new Error(`Ciao non trovato`)
         }

    }

    stampBalance() { console.log(this.balanceInit) }
    
}

class MotherAccount extends SonAccount {

    private interest:number = 0

    set addInterest(interest:number){
        this.interest = interest
    }

    draw(prelievo: number): number {
        return this.balanceInit = this.balanceInit - prelievo - (prelievo / 100 * this.interest)
    }
    
}

let figlio = new SonAccount();
let madre = new MotherAccount();

figlio.deposit(100);
figlio.draw(10);

figlio.stampBalance()

madre.addInterest = 10

madre.deposit(200)
madre.draw(50)

madre.stampBalance()

