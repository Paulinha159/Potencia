const prompt = require('prompt-sync')();

let base = +prompt("Qual é a base da potência? ");
let expoente = +prompt("Qual é o expoente? ");

let resultado 
let base_aux = 1

for (let i = 0; i < expoente; i++) {
    resultado = 0
    for(let j = 0; j < base; j++) {
        resultado+=base_aux
    }
    base_aux = resultado
    
}

console.log("O resultado é: " + resultado)