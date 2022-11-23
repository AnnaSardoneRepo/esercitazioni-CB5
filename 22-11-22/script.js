import {
    somma,
    sottrazione,
    divisione,
    moltiplicazione
} from "./calcolatrice.js";
import http from "http";
import url from "url";
import fs from "fs";

const createBtnNav = (res) =>{
    
}

// creo il server
const server = http.createServer((req, res) => {
    const my_url = url.parse(req.url, true).pathname; //localhost
    const params = url.parse(req.url, true).query; //richiesta 
    const {
        param1,
        param2
    } = params;
    console.log(param1, param2);

    switch (my_url) {
        case "/home":
            res.write("Benvenuto nella mia home");
            break;
            
        case "/calcolatrice":
            const dataCalc = fs.readFileSync(`./html/calcolatrice.html`);
            res.write(dataCalc.toString());
            break;
        case "/somma":
            const dataSomma = fs.readFileSync(`./html/somma.html`);
            res.write(dataSomma.toString());
            res.write(`Il risultato dell'operazione è: ${somma(param1,param2)}`);
            break;

        case "/sottrazione":
            const dataSottrazione = fs.readFileSync(`./html/sottrazione.html`);
            res.write(dataSottrazione.toString());
            res.write(`Il risultato dell'operazione è: ${sottrazione(param1,param2)}`);
            break;
            case "/divisione":
                const dataDivisione = fs.readFileSync(`./html/divisione.html`);
            res.write(dataDivisione.toString());
            res.write(`Il risultato dell'operazione è: ${divisione(param1,param2)}`);
            break;
        case "/moltiplicazione":
            const dataMoltiplicazione = fs.readFileSync(`./html/moltiplicazione.html`);
            res.write(dataMoltiplicazione.toString());
            res.write(`Il risultato dell'operazione è: ${moltiplicazione(param1,param2)}`);
            break;
            case "/style.css":
            const style = fs.readFileSync('./style.css');
            res.write(style.toString());
            break;
        default:
            res.write("<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>home</a></p>");
    }


    res.end();
});
server.listen(3000)