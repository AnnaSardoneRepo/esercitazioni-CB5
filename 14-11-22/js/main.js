import { q, getId, GET } from './utils.js'

//seleziono tutti gli elementi del dom attraverso la funzione q > classi
const pokemonName = q(".poke-name")
const pokemonId = q(".poke-id")
const pokemonType = q(".poke-type")
const pokemonAvatar = q(".poke-avatar")
const btnPrev = q(".btn-prev")
const btnNext = q(".btn-next")
const loader = q(".loading")

// variabili globali
const url = "https://pokeapi.co/api/v2/pokemon"
let index = 1;

// Seleziono i bottoni e creo l'eventListener
btnPrev.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getPokemon(instruction)
})

btnNext.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getPokemon(instruction)
})

const getPokemon = (instruction) => {

	if (!instruction) { 
		instruction = 1;
	} else {
		instruction = instruction.toLowerCase();
	};

	switch (instruction) {
		case 'prev':
			index = index - 1;
			break;
		case 'next':
			index = index + 1;
			break;
		default:
			index = instruction;
	}
    
    GET(`${url}/${index}`)
	
		.then(res => {
			pokemonName.textContent = res?.name;
			pokemonId.textContent = `# ${getId(res?.id)}`;
			pokemonType.textContent = `Type: ${res?.types[0]?.type?.name}`;
			pokemonAvatar.setAttribute("src", res?.sprites?.other["official-artwork"]?.front_default);
			pokemonAvatar.setAttribute("alt", res?.name);

			if (index <= 1) {
				btnPrev.disabled = true;
				btnPrev.classList.add("disabled")
			} else {
				btnPrev.disabled = false;
				btnPrev.classList.remove("disabled")
			}

			if (index >= 5) {
				btnNext.disabled = true;
				btnNext.classList.add("disabled")
			} else {
				btnNext.disabled = false;
				btnNext.classList.remove("disabled")
			}
		})
}

window.onload = getPokemon();
