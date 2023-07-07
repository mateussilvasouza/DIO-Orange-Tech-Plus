/*
Desafio - Os números são iguais
    Nesse desafio, dados dois números, verifique se eles são iguais.
    Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

Entrada
    As entradas serão dois valores, um em cada linha, representados por A e B,
    que sempre serão números inteiros. 

Saída
    A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor.
    Caso contrário,  retorne "Nao sao iguais!", sem as aspas.

    Exemplos
    ENTRADA         |       SAÍDA 
     1 & 2              Nao sao iguais! 
    50 & 50               Sao iguais! 
    38 & 90             Nao sao iguais! 
*/

var readlineSync = require('readline-sync');

let entrada1 = parseInt(readlineSync.question('Informe o primeiro número.\n'))
let entrada2 = parseInt(readlineSync.question('Informe o segundo número.\n'))

console.log((entrada1 === entrada2) ? "Sao iguais!" : "Nao sao iguais!")