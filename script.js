//Saldo de vitórias
let saldoVitorias = vitoriasDerrotas (10, 5)
//Seu nivel
let nivel = rank()
//Seu nome
let name = "GuerreiroImbativel"

//Log do servidor
console.log(`${name} acabou de entrar no servidor!`)
console.log(" ")
console.log(`${name} iniciou sua jornada!`)

//Função para classificar seu Rank
function vitoriasDerrotas(vitoria, derrota){
    return vitoria - derrota
}

function rank(){
    if (saldoVitorias < 10){
        return "Ferro"
    }

    else if( saldoVitorias > 11 && saldoVitorias < 20){
        return "Bronze"
    }
    
    else if( saldoVitorias > 21 && saldoVitorias < 50){
        return "Prata"
    }

    else if( saldoVitorias > 51 && saldoVitorias < 80){
        return "Ouro"
    }

    else if( saldoVitorias > 81 && saldoVitorias < 90){
        return "Diamante"
    }

    else if(saldoVitorias > 91 && saldoVitorias < 100){
        return "Lendário"
    }

    else{
        return "Imortal"
    }

}

//Repetição para falar quantas partidas você venceu
for(let i = 1; i <= saldoVitorias; i++){
console.log(`Partidas Ganhas ${i}. Parabéns você ganhou mais 1XP`)
console.log(" ");
}

//Saída final
console.log(`O Herói tem de saldo de ${saldoVitorias} vitorias e está no nível de ${nivel}`)