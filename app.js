alert("Bem-vindo(a) ao Game NumberSecret!");

let numeroSecreto = 10;
let palpiteDoUsuario;
let tentativasDoUsuario = 1;

while (palpiteDoUsuario != numeroSecreto) {
    palpiteDoUsuario = prompt("Eu pensei em um número entre 0 e 10, tente adivinhar qual é...");

    if (palpiteDoUsuario == numeroSecreto) {
        alert(`Isso aí! Você acertou, o número que eu estava pensando era o número (${numeroSecreto}). Total de palpites: ${tentativasDoUsuario}`);
    } else {
        if (palpiteDoUsuario > numeroSecreto) {
            alert(`O valor ${palpiteDoUsuario} é maior que o número que pensei... tente novamente!`);
        } else {
            alert(`O valor ${palpiteDoUsuario} é menor que o número que pensei... tente novamente!`);
        }
    };

    tentativasDoUsuario++;
}