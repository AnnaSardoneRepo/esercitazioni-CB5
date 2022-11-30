//ricreiamo quello che fa postman in POST
const POST = async (url, body_message) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams(body_message), //converte il body_message in modo da poterlo mandare come parametro-trasforma il mio JSon
  });
  return await res.json();
};

function createActor(body_message) {
  const url = `http://localhost:3000/attore`;
  return POST(url, body_message);
}

const create_btn = document.getElementById("create-btn");
const idEl = document.getElementById("id");
const nameEl = document.getElementById("nome");
const surnameEl = document.getElementById("cognome");
const data_nascitaEl = document.getElementById("data_nascita");
const riconoscimentiEl = document.getElementById("riconoscimenti");
const inizio_attivitaEl = document.getElementById("inizio_attivita");
const fine_attivitaEl = document.getElementById("fine_attivita");
const in_attivitaEl = document.getElementById("in_attivita");

const container = document.getElementById("container");

create_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let actor = {
    id: idEl.value,
    nome: nameEl.value,
    cognome: surnameEl.value,
    data_nascita: data_nascitaEl.value,
    riconoscimenti: riconoscimentiEl.value,
    inizio_attivita: inizio_attivitaEl.value,
    fine_attivita: fine_attivitaEl.value,
    in_attivita: in_attivitaEl,
  };
  createActor(actor).then(console.log("Creato.")).catch(console.log("Errore"));
});
