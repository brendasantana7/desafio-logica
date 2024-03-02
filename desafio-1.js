let nomeHeroi = "Minerva000"
let nivelXP = 5000


let mensagem;

if (nivelXP <= 1000){
    mensagem = "O Herói de nome "+ nomeHeroi + " está no nível de Ferro"
} 
else if (nivelXP >= 1001 && nivelXP <=2000){
    mensagem = "O Herói de nome "+ nomeHeroi + " está no nível de Bronze" 
} 
else if (nivelXP >= 2001 && nivelXP <=5000){
    mensagem = "O Herói de nome "+ nomeHeroi + " está no nível de Prata"
} 
else if (nivelXP >= 6001 && nivelXP <=7000){
    mensagem = "O Herói de nome "+ nomeHeroi + " está no nível de Ouro"
} 
else if (nivelXP >= 7001 && nivelXP <=8000){
    mensagem = "O Herói de nome "+ nomeHeroi + " está no nível de Platina"
} 
else if (nivelXP >= 8001 && nivelXP <=9000){
    mensagem = "O Herói de nome "+ nomeHeroi + " está no nível de Ascendente"
}
else if (nivelXP >= 9001 && nivelXP <=10000){
    mensagem = "O Herói de nome "+ nomeHeroi + " está no nível de Imortal"
}
else if (nivelXP >= 10001){
    mensagem = "O Herói de nome "+ nomeHeroi + " está no nível de Radiante"
}
console.log(mensagem)