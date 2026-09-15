const prompt = require("prompt-sync")();

let valor = Number(prompt("indique o valor para o calculo:"))
function desconto(){
    desconto = valor * 0.10
    valorFinal = valor - desconto
    return valorFinal
}

function acrescimo (){
    console.log("no cartao de crédito tem um acrécimo de 10%")
    acre = valor * 0.10
    valorfina = valor + acre
    return valorfina
}
desconto()
acrescimo()