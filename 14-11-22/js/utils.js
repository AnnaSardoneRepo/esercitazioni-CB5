//  creo funzione per creare elementi HTML
const c = (el) => document.createElement(el);
// creo funzione per selezionare le classi
const q = (el) => document.querySelector(el);

// creo la funzione per accedere/avere ai/i dati
const GET = async URL => {
	const response = await fetch(URL);
	const data = await response.json();
	return await data;
}
// creo funzione per prendere e formattare l'id
const getId = (n) => {
	if (!n) return "000";

	let id = n;
	if (id < 10) {
		id = '00' + id
	} else if (id < 100) {
		id = '0' + id
	}
	return id;
}

// creo l'export per comunicare col file main.js e poter utilizzare le funzioni
export { q, c, getId, GET }; 