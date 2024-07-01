alert("Bem-vindo(a) ao Game NumberSecret!");

let numeroSecreto = parseInt(Math.random() * 100 + 1);
let palpiteDoUsuario;
let tentativasDoUsuario = 1;

while (palpiteDoUsuario != numeroSecreto) {
    palpiteDoUsuario = prompt("Eu pensei em um número entre 0 e 100, tente adivinhar qual é...");

    if (palpiteDoUsuario == numeroSecreto) {
        break;
    } else {
        if (palpiteDoUsuario > numeroSecreto) {
            alert(`O valor ${palpiteDoUsuario} é maior que o número que pensei... tente novamente!`);
        } else {
            alert(`O valor ${palpiteDoUsuario} é menor que o número que pensei... tente novamente!`);
        }
    };

    tentativasDoUsuario++;
}

alert(`Isso aí! Você acertou, o número que eu estava pensando! Era o número (${numeroSecreto}). Total de palpites: ${tentativasDoUsuario}`);