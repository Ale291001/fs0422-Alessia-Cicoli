class Utenti {
    constructor(dataJson) {

        fetch(dataJson)
            .then(res => res.json())
            .then(utenti => {
                const lista=document.querySelector("#listaUtenti")
                for(let utente of utenti){

                    let tutto=document.createElement("div")
                    let scritte=document.createElement("div")
                    let img=document.createElement("img")
                    let username=document.createElement("h4")
                    let nomeCognome=document.createElement("p")
                    let sesso=document.createElement("p")
                    let email=document.createElement("p")

                    tutto.classList.add("utente")
                    let image = document.createAttribute("src")
                    image.value = utente.profileURL
                    let alt = document.createAttribute("alt")
                    alt.value ="Immagine Utente"
                    img.setAttributeNode(image)
                    img.setAttributeNode(alt)

                    username.innerHTML=utente.username
                    nomeCognome.innerHTML=utente.firstName+" "+utente.lastName
                    sesso.innerHTML=utente.gender
                    email.innerHTML=utente.email

                    if (sesso.innerHTML=="Male"){
                        tutto.classList.add("m");
                    }else{
                        tutto.classList.add("f");
                    }
                    scritte.append(username,nomeCognome,sesso,email)
                    tutto.append(img,scritte)
                    lista.append(tutto)

                }

            })
    }

}

let x = new Utenti('users.json');