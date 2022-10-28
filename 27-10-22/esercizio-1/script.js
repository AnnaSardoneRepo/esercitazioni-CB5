let primoNum = prompt('scrivi primo numero:');
let secondoNum = prompt('scrivi secondo numero:');
let operazione = prompt('scrivi operazione - simboli ammessi: "+", "-", "*", "/"');

function calcola(primoNum, secondoNum, operazione) {
  let result = null;
  let parsedprimoNum = parseInt(primoNum);
  let parsedsecondoNum = parseInt(secondoNum);

  switch (operazione) {
    case '+':
      result = parsedprimoNum + parsedsecondoNum;
      break;
    case '-':
      result = parsedprimoNum - parsedsecondoNum;
      break;
    case '*':
      result = parsedprimoNum * parsedsecondoNum;
      break;
    case '/':
      result = parsedprimoNum / parsedsecondoNum;
      break;
    default:
      result = null;
  }

  return result;
}

let result = calcola(primoNum, secondoNum, operazione);

console.log('Il risultato è:', result);