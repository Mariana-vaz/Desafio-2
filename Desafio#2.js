saldoVitoria(212, 107)

function saldoVitoria(a, b){
    let nivel
    let pontuacao = a - b
   

    if (pontuacao < 10){
        nivel = "Ferro"
        console.log("O Herói tem de saldo de " + pontuacao + " está no nível de " + nivel)
    }

    else if (pontuacao >= 11 && pontuacao <= 20){
        nivel = "Bronze"
        console.log("O Herói tem de saldo de " + pontuacao + " está no nível de " + nivel)
    }

    else if (pontuacao >= 21 && pontuacao <= 50){
        nivel = "Prata"
        console.log("O Herói tem de saldo de " + pontuacao + " está no nível de " + nivel)
    }

    else if (pontuacao >= 51 && pontuacao <= 80){
        nivel = "Ouro"
        console.log("O Herói tem de saldo de " + pontuacao + " está no nível de " + nivel)
    }

    else if (pontuacao >= 81 && pontuacao <= 90){
        nivel = "Diamante"
        console.log("O Herói tem de saldo de " + pontuacao + " está no nível de " + nivel)
    }

    else if (pontuacao >= 91 && pontuacao <= 100){
        nivel = "Lendário"
        console.log("O Herói tem de saldo de " + pontuacao + " está no nível de " + nivel)
    }

    else if (pontuacao >= 101){
        nivel = "Imortal"
        console.log("O Herói tem de saldo de " + pontuacao + " está no nível de " + nivel)
    }

    }
