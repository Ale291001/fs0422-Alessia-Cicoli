
//esercizio 1

let clock = document.querySelector("#clock");
let p = document.createElement("p");
let currentDate = new Date();

p.innerHTML = currentDate;

clock.append(p);

// esercizio 2

let ul = document.createElement("ul");

prendi(currentDate.getDate());
prendi(currentDate.getMonth());
prendi(currentDate.getFullYear());
prendi(currentDate.getHours());
prendi(currentDate.getMinutes());
prendi(currentDate.getSeconds());

function prendi(gg) {
    let li = document.createElement("li");
    li.innerHTML = gg;
    ul.appendChild(li);
}

clock.append(ul);

//esercizio 3

let h1 = document.createElement('h1');

h1.innerHTML = 'Oggi è il:' + currentDate.getDate() +'/'+ currentDate.toLocaleString('it-IT', {month: 'long'}) +'/'+ currentDate.getFullYear();

currentDate.getMonth('long');

clock.append(h1);

