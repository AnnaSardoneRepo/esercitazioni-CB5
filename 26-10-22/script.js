//prima prova esercizio

// let myIdentity = ["Mario", "Rossi", 30, "laurea" ];
// console.log(myIdentity);
// let indice = myIdentity.indexOf(30);
// myIdentity.splice(indice,1);
// console.log(myIdentity);
// let date = "ott 16 2000";
// myIdentity.push(date);
// console.log(myIdentity);
// let newIdentity = myIdentity.slice(0,2);
// console.log(newIdentity);
// let myString = newIdentity.join(", ");
// console.log(myString.toUpperCase());

//rimuovo e sostituisco eta con data
let myIdentity = ["Mario", "Rossi", 30, "laurea" ];
let indice = myIdentity.indexOf(30);
myIdentity.splice(indice,1, "ott 16 2000");
console.log(myIdentity);