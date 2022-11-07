
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(utenti => utenti.map((datiUtenti) => console.log("Nome: " + datiUtenti.name, "Indirizzo: " +  Object.values(datiUtenti.address), datiUtenti.address.city)))
.catch((e) => console.log("errore:" + e))
.finally((f) => console.log("done"));


fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(tutti => tutti.map((datitutti) => console.log(datitutti.id, datitutti.title)))
.catch((e) => console.log("errore:" + e))
.finally((f) => console.log("done"));

// test 2

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then((utenti) => utenti.map((datiUtenti) => console.log(datiUtenti.name, datiUtenti.address, datiUtenti.address.city)))
.catch((e) => console.log("errore:" + e))
.finally((f) => console.log("done"));
