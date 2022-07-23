/*
Disputando o controle remoto da TV, dois irmãos, João e André decidiram quem ficaria com o controle jogando pedra, papel ou tesoura.

Cada jogador escolhe uma das opções para jogar, sendo que:

Perdra ganha de tesoura, mas perde de papel
Papel ganha de pedra, mas perde de tesoura
Tesoura ganha de papel, mas perde de pedra
Caso ambos os jogadores joguem a mesma coisa, há um empate
O seu objetivo é criar uma fução que determine quem é o vencedor do jogo, ou informar se houve um empate
Sua função vai receber dois parametros, onde o primeiro parametro é a escolha do jogador 1 e o segundo é a escolha do jogador 2

Dica: use a estrutura de condição
imprima no console:
"jogador 1 venceu" se o jogador 1 vencer,
"jogador 2 venceu" se o jogador 2 vencer 
"Empate" se ambos jogarem a mesma coisa
*/

function jokenpo (joao, andre) {

    
   
    if (joao === "PEDRA" && andre === "TESOURA" || joao === "PAPEL" && andre === "PEDRA" || joao === "TESOURA" && andre === "PAPEL") {  // wins possíveis do joao
        console.log("JOAO")
    } else if (andre === "PEDRA" && joao === "TESOURA" || andre === "PAPEL" && joao === "PEDRA" || andre === "TESOURA" && joao === "PAPEL") { // wins possíveis do andre
        console.log("ANDRE")
    } else if (joao === andre) {
        console.log("EMPATE")
    }

}   
jokenpo ("PEDRA","PEDRA")
