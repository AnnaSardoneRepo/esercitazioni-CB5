import { q, getId, GET } from './utils.js'

//seleziono tutti gli elementi del dom attraverso la funzione q > classi
const postId = q(".post-id")
const postTitle = q(".post-title")
const postBody = q(".post-body")

const btnPrev = q(".btn-prev")
const btnNext = q(".btn-next")



// seleziono loading div
const loader = document.querySelector(".lds-ring");

// mostro loading
function displayLoading() {
  loader.classList.add("display");

  // stop loading dopo tot secondi
  setTimeout(() => {
      loader.classList.remove("display");
  }, 200);
}

// nascondo loading 
function hideLoading() {
  loader.classList.remove("display");
}

// variabili globali
const url = "https://jsonplaceholder.typicode.com/posts/"
let index = 1;

// Seleziono i bottoni e creo l'eventListener
btnPrev.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getpost(instruction)
	displayLoading();
})

btnNext.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getpost(instruction)
	displayLoading();
})

const getpost = (instruction) => {

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
            postId.textContent = `# ${getId(res?.id)}`;
			postTitle.textContent = res?.title;
			postBody.textContent = res?.body;
			

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

window.onload = getpost();