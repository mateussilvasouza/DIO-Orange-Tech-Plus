/*
Desafio - FizzBuzz
    Neste desafio, você terá que criar uma função que faça um número
    como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

Entrada
    Você receberá um número onde: 
    Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
    Se o número for apenas múltiplo de 3 -> "Fizz" ; 
    Se o número for apenas múltiplo de 5 -> "Buzz"; 
    Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

Saída
    Retorne a palavra correta de acordo com o seu múltiplo. 
    Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:

    Exemplos:
    Entrada         |           Saída
        3                       Fizz
        5                       Buzz
        15                      FizzBuzz
        4                         4
*/
var readlineSync = require('readline-sync');

let entrada = parseInt(readlineSync.question('Informe o número.\n'))

function fizzBuzz(valor){
  if(valor%3 === 0 && valor%5 === 0){
    return "FizzBuzz";
  } else  if(valor%3 === 0){
    return "Fizz";
  } else if(valor%5 === 0){
    return "Buzz";
  } else {
    return valor;
  }
}

console.log(fizzBuzz(entrada));