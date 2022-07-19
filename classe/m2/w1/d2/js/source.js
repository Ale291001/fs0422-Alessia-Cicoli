
let rand = (max = 0) => Math.floor(Math.random() * max) + 1 //con funz. freccia

/*
funzione lunga
function rand(max){           
    max = max || 0  //coalescenza
    return Math.floor(Math.random()*max) + 1
}
*/

let interface = document.querySelector("#interface")
let testo = document.createElement("input") //facendo cosi ottengo <input>
testo.setAttribute("type", "number")//metti l'attributo type di tipo numero <input type = 'number'>
testo.setAttribute("placeholder", "inserire budget")
testo.setAttribute("value", 0)
interface.append(testo)//questo mi permette di visualizzarlo all'interno del documento

let button = document.createElement("button") // <button></button>
button.innerHTML = "salva budget"
interface.append(button)

let div = document.createElement("div");
interface.append(div)

button.addEventListener("click", budgetSet) //aggiungiamo l'evento click al bottone

function budgetSet() {
  const BUDGET = parseInt(testo.value); //prendo la stringa value dall'input, la rendo un intero tramite parseInt (se avessi voluto un numero con la virgola dovevo mettere parseFloat) e lo assegno al BUDGET

  div.innerHTML = '';

  // ? indica la condizione : sinistra true destra false 

  BUDGET > 0 ? scale(BUDGET) : div.innerHTML = `Il budget inserito è inferiore o uguale a 0`;

  /*if (BUDGET > 0) { 
    scale(BUDGET) 
  }else{
    div.innerHTML = `Il budget inserito è inferiore o uguale a 0`
  }
*/
}

function scale(BUDGET) {
  let spese = 0

  while (spese <= BUDGET) {
    spese += rand(BUDGET - spese);

    if (spese >= BUDGET / 2 && BUDGET - spese > BUDGET / 100 * 5) {
      //console.log(BUDGET - spese)
      //console.log('hai raggiunto metà del tuo budget');
      div.innerHTML += `Ti rimangono ${BUDGET - spese}, hai raggiunto metà del tuo budget <br>`
    }

    if (BUDGET - spese <= BUDGET / 100 * 5) {
      //console.log(BUDGET - spese)
      // return console.log('hai quasi esaurito il tuo budget');
      return div.innerHTML += `Ti rimangono ${BUDGET - spese}, hai quasi esaurito il tuo budget <br>`

    }
  }

}

