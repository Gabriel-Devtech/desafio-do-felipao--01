
console.log("Bem Vindo Herói, escolha seu nome.")
const nomeHeroi = ("GuerreiroMaster20 ")
console.log("Você terá missões a frente " + nomeHeroi)

let pontosDeExperiencia = 0

for(let i = 0; i < 11 ; i++){
    pontosDeExperiencia += 1
    console.log(nomeHeroi + "Completou uma missão " + i) 
    
}

console.log(pontosDeExperiencia + (989) + " de experiência")

let xpHeroi = "1000"; 

switch (xpHeroi) {
  case "1000":
    console.log("O Herói de nome " + nomeHeroi + "está no nível de " + "Ferro");
    break;
  case "2000":
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + "Bronze");
    break;
  case "5000":
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + "Prata");
    break;
  case "7000":
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + "Ouro");
    break;
  case "8000":
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + "Platina");
    break;
    case "9000":
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + "Ascendente");
    break;
    case "10000":
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + "Imortal");
    break;
    case "10001":
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + "Radiante");
    break;
} 


 


