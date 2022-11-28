// inclusione modulo express
const express = require("express");
// inclusione nostro modulo calcolatrice
const mod_calc = require("./src/modulo_calcolatrice");

const app = express();

// rende disponibile all'esterno la cartella public
app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log("Server avviato sulla porta 3000!");
});

/*----- PAGINA HOME -----*/
app.get("/home", function(req, res){
    res.sendFile("index.html", {root: __dirname+"/src"});
});

app.get("/calcolatrice", function(req, res){
    console.log(req.query)
    let par1 = req.query.param1;
    let par2 = req.query.param2;
    let operazione = req.query.param3;
    let result;

switch(operazione){
    case "somma": 
    result = mod_calc.somma(par1, par2);
    res.status(200).json({risultato: result});
    break;
    case"sottrazione":
    result = mod_calc.sottrazione(par1, par2);
    res.status(200).json({risultato: result});
    break;
    case"moltiplicazione":
    result = mod_calc.moltiplicazione(par1, par2);
    res.status(200).json({risultato: result});
    break;
    case"divisione":
    result = mod_calc.divisione(par1, par2);
    res.status(200).json({risultato: result});
    break;
    case"modulo":
    result = mod_calc.modulo(par1, par2);
    res.status(200).json({risultato: result});
    break;
    default: console.log("error")
}

});

