const ce = (el) => document.createElement(el);
const qs = (el) => document.querySelector(el);


const GET = async (URL) => {
	const response = await fetch(URL);
	return await response.json()
}

export { ce, qs, GET }