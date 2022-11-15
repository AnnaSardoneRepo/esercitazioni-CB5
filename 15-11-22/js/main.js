import {cr, q, GET, POST} from './utils.js'

const form = document.forms.pokemon;
const element = form.elements;
const ul = q(".pokemonList");
const url ="http://localhost:3000/pokemon";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        id: uuidv4(),
        name: element.pokeName.value,
        type: element.pokeType.value
    }
    POST(url, data)
        .then((res) => res.json())
        .then((res) => {
            console.log("Dati inviati", res);
        })
        .catch((error) => {
            console.error('Error:', error);
        })

})

window.onload = GET(url).then(res => res.map(pkm => ul.innerHTML += `<li>${pkm.name}</li>``<li>${pkm.type}</li>`));
