const argsv = process.argv
const arg = argsv.slice(2)
const calcola = arg[0]
const num1 = parseFloat(arg[1])
const num2 = parseFloat(arg[2])

if (calcola === "somma"){
    console.log("la " + calcola + " è: " + (num1 + num2));
}

if (calcola === "sottrazione"){
    console.log("la " + calcola + " è: " + (num1 - num2));
}

if (calcola === "divisione"){
    console.log("la " + calcola + " è: " + (num1 / num2));
}

if (calcola === "moltiplicazione"){
    console.log("la " + calcola + " è: " + (num1 * num2));
}
