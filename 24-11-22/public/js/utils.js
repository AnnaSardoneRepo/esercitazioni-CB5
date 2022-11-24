// somma btn
function func_somma() {
    const fai_somma = async () => {
        const url = "http://localhost:3000/somma?param1=2&param2=3";
        console.log("Async start");
        const res = await fetch(url);
        console.log(res);
        //alert(res);
        return await res.json();
    }
    let result =  fai_somma(); 
    alert(result);
}
// sottrazione btn
function func_sottrazione() {
    const fai_sottrazione = async () => {
        const url = "http://localhost:3000/sottrazione?param1=10&param2=5";
        console.log("Async start");
        const res = await fetch(url);
        console.log(res);
        //alert(res);
        return await res.json();
    }
    let result =  fai_sottrazione(); 
    alert(result);
}
// moltiplicazione btn
function func_moltiplicazione() {
    const fai_moltiplicazione = async () => {
        const url = "http://localhost:3000/moltiplicazione?param1=2&param2=4";
        console.log("Async start");
        const res = await fetch(url);
        console.log(res);
        //alert(res);
        return await res.json();
    }
    let result =  fai_moltiplicazione(); 
    alert(result);
}
// divisione btn
function func_divisione() {
    const fai_divisione = async () => {
        const url = "http://localhost:3000/divisione?param1=10&param2=5";
        console.log("Async start");
        const res = await fetch(url);
        console.log(res);
        //alert(res);
        return await res.json();
    }
    let result =  fai_divisione(); 
    alert(result);
}

const formElement = document.forms.formEl.elements;
console.log(formElement);
 
const resEl = document.querySelector("h3");

const GET = async (url) => { 
    await fetch(url)
        .then((res) => res.json())
        .then((data) => resEl.textContent = `Risultato: ${data}`);
    }
// somma
const btnSum = formElement.btnSum;
btnSum.addEventListener("click", (e) => {
    e.preventDefault()
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
});

// sottrazione
const btnSub = formElement.btnSub;
btnSub.addEventListener("click", (e) => {
    e.preventDefault()
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
});

// moltiplicazione
const btnMol = formElement.btnMol;
btnMol.addEventListener("click", (e) => {
    e.preventDefault()
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
});