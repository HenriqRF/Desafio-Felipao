/*Desafio do Felipe Aguiar, expert em JAVASCRIPT e Instrutor da DIO,
Trata-se de um Classificador de Nivel de Heroi*/

let heroName = "SuperDooper" //cria variavel de nome do heroi
let heroLevel = 5300 //cria variavel de nivel do heroi

if(heroLevel < 1000){
    console.log("O Herói de nome " + heroName + " está no nível de Ferro" )
}else if(heroLevel >= 1001 && heroLevel <=2000){
    console.log("O Herói de nome " + heroName + " está no nível de Bronze") 
}else if(heroLevel >= 2001 && heroLevel <=5000){
    console.log("O Herói de nome " + heroName + " está no nível de Prata")
}else if(heroLevel >= 5001 && heroLevel <=7000){
    console.log("O Herói de nome " + heroName + " está no nível de Ouro")
}else if(heroLevel >= 7001 && heroLevel <=8000){
    console.log("O Herói de nome " + heroName + " está no nível de Platina")
}else if(heroLevel >= 8001 && heroLevel <=9000){
    console.log("O Herói de nome " + heroName + " está no nível de Ascendente")
}else if(heroLevel >= 9001 && heroLevel <=10000){
    console.log("O Herói de nome " + heroName + " está no nível de Imortal")
}else if(heroLevel >= 10001){
    console.log("O Herói de nome " + heroName + " está no nível de Radiante")}