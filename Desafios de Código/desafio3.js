/*
Desafio - Uma Chamada Recursiva
    Neste desafio, receba um número inteiro N, calcule e imprima o somatório
    de todos os números de N até 0.   

Entrada
    A Entrada será composta por um número inteiro, N. 

Saída
    Será  impresso o somatório de N até 0, como no exemplo a baixo: 

    Exemplos:
    Entrada             |           Saída
      10	                          55
      4	                              10
      15	                         120
*/
var readlineSync = require('readline-sync');

let entrada = parseInt(readlineSync.question('Informe o número.\n'))

function recursiva(n){
  if(n === 0) {return 0;}
  else{
    return n + recursiva(n - 1)
  }
}

console.log(recursiva(entrada))