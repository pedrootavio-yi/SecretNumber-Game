alert("Bem-vindo(a) ao Game NumberSecret!");

let numeroSecreto = 10;
let palpiteDoUsuario = prompt("Eu pensei em um número entre 0 e 10, tente adivinhar qual é...");

if (palpiteDoUsuario == numeroSecreto) {
    alert(`Isso aí! Você acertou, o número que eu estava pensando era o número (${numeroSecreto})`);
} else {
    alert("Você errou :(");
};