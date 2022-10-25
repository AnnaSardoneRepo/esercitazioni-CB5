let primoNum = prompt('scrivi primo numero:');
let secondoNum = prompt('scrivi secondo numero:');
let operazione = prompt('scrivi operazione')
let parsedprimoNum = parseInt(primoNum);
let parsedsecondoNum = parseInt(secondoNum);


switch(operazione) {
  case '+':
    console.log('Il risultato è:', parsedprimoNum + parsedsecondoNum);
    break;
  case '-':
    console.log('Il risultato è:', parsedprimoNum - parsedsecondoNum);
    break;
  case '*':
    console.log('Il risultato è:', parsedprimoNum * parsedsecondoNum);
    break;
  case '/':
    console.log('Il risultato è:', parsedprimoNum / parsedsecondoNum);
    break;
  default:
    console.log('Non hai selezionato.')
}