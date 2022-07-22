
// finita 
//c'è un bag che non so come risolvere
//dispayIcon e startGame da riguardare (non capite benissimo) sicuramente il bag si risolve da li

let arrayAnimali = ['💐', '🌷', '🌹', '🥀', '🍀', '🌺', '🌸', '🌼', '🌻', '🍃', '🍂', '🍁', '💐', '🌷', '🌹', '🥀', '🍀', '🌺', '🌸', '🌼', '🌻', '🍃', '🍂', '🍁'];
let interval;
let arrayComparison = [];
let trovati=[];
let modal=document.querySelector("#modal");
let timer = document.querySelector(".timer");


//INIZIO GIOCO

document.body.onload = startGame();

function startGame(){

    let arrayShuffle = shuffle(arrayAnimali);
    let contenitore=document.querySelector("#griglia");

    if(contenitore.hasChildNodes()) {
        contenitore.innerHTML="";
      }

    for(let i=0;i<24;i++){
        let box = document.createElement('div');
        let icona = document.createElement("div");
        icona.classList.add("icon");
        icona.innerHTML=arrayShuffle[i];
        icona.addEventListener("click", displayIcon);
        contenitore.appendChild(box).appendChild(icona);
    }

    clearInterval(interval);
    startTimer();
}


//SHUFFLE - c'era già

function shuffle(a) {

    let currentIndex = a.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}


//TEMPO 

function startTimer(){

  let secondi = 0
  let minuti = 0  
  let ore = 0

  interval = setInterval(function(){

  timer.innerHTML = " Tempo: "  + minuti + " min " + secondi + " sec "
    secondi++

    if(secondi == 60){
      minuti++
      secondi = 0
    }

    if(minuti == 60){
      ore++
      minuti = 0
    }

  },1000)
}


//DISPAY ICON

function displayIcon() {
    var icon = document.querySelectorAll("icon");
    
    this.classList.add("show");
    this.classList.add("disabled")
    
    arrayComparison.push(this);
    
    var len = arrayComparison.length;

    if (len === 2) {
        
        if (arrayComparison[0].innerText === arrayComparison[1].innerText) {
            arrayComparison[0].classList.add("find","disabled");
            arrayComparison[1].classList.add("find","disabled");
            trovati.push(arrayComparison[0]);
            trovati.push(arrayComparison[1]);
            arrayComparison = [];
            fine();

        } else {
            
            arrayComparison[0].classList.remove("disabled");
            arrayComparison[1].classList.remove("disabled");
            
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icon.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < trovati.length; i++) {
                        trovati[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}


//FINE GIOCO

function fine(){
    if(trovati.length==24){
        modal.classList.add("active");
        document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
    }
}


// GIOCA ANCORA

function playAgain(){
    modal.classList.remove("active");
    startGame();
    trovati=[];
    arrayComparison=[];
}