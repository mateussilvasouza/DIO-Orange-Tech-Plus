/* Desafio - Somando Múltiplos
  Dado um número A e o seu limite N, encontre a
  soma de todos os múltiplos A até o seu limite N.

  Entrada
  A entrada deverá ser composta pelo valor A
  na primeira linha, seguido do valor N na segunda. 

  Saída
  A saída deverá retornar o valor da soma de todos
  os múltiplos A até o seu limite N.

  Exemplo
  Entrada 5 e 20, Saída 50
*/
var readlineSync = require('readline-sync');

var num1 = parseInt(readlineSync.question('Insira o primeiro valor.\n'));

var num2 = parseInt(readlineSync.question('Insira o segundo valor.\n'));
var soma = 0
somaMultiplos(num1,num2)

function somaMultiplos(valor1, valor2){
    for(i = valor1; i <= valor2; i++){
        if(i%valor1 === 0){
          soma += i
        }
      }
    console.log(`A soma dos múltiplos é igual à ${soma}.`)
}