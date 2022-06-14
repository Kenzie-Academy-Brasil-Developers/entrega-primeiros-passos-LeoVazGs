let precoRefrigerante = parseFloat( prompt("Digite o valor do refrigerante:"))
let quantidadeRefrigerante = parseInt( prompt("Digite a quantidade de refrigerante:"))
let totalRefrigerante  = parseFloat (precoRefrigerante * quantidadeRefrigerante)
console.log (`Valor total do refrigerante é ${totalRefrigerante}`)

let precoMacarrao = parseFloat( prompt("Digite o valor do Macarrao:"))
let quantidadeMacarrao = parseInt( prompt("Digite a quantidade de Macarrao:"))
let totalMacarrao  = parseFloat ( precoMacarrao * quantidadeMacarrao )
console.log (`Valor total do Macarrao é ${ totalMacarrao }`)

let precoErvlha = parseFloat( prompt("Digite o valor do Ervlha:"))
let quantidadeErvlha = parseInt( prompt("Digite a quantidade de Ervlha:"))
let totalErvlha  = parseFloat ( precoErvlha * quantidadeErvlha )
console.log (`Valor total do Ervlha é ${ totalErvlha }`)

let precoArroz = parseFloat( prompt("Digite o valor do Arroz:"))
let quantidadeArroz = parseInt( prompt("Digite a quantidade de Arroz:"))
let totalArroz  = parseFloat ( precoArroz * quantidadeArroz )
console.log (`Valor total do Arroz é ${ totalArroz }`)

let precoFeijao = parseFloat( prompt("Digite o valor do Feijao:"))
let quantidadeFeijao = parseInt( prompt("Digite a quantidade de Feijao:"))
let totalFeijao  = parseFloat ( precoFeijao * quantidadeFeijao )
console.log (`Valor total do Feijao é ${ totalFeijao }`)

let precoVinho = parseFloat( prompt("Digite o valor do Vinho:"))
let quantidadeVinho = parseInt( prompt("Digite a quantidade de Vinho:"))
let totalVinho  = parseFloat ( precoVinho * quantidadeVinho )
console.log (`Valor total do Vinho é ${ totalVinho }`)

let somaTotal = totalRefrigerante + totalMacarrao + totalErvlha + totalArroz + totalFeijao + totalVinho
console.log (`Valor total das compras é ${ somaTotal }`)

let eu
let amigo


if (parseInt(somaTotal) % 2 == 0){
    somaTotal = somaTotal - totalVinho
    console.log(somaTotal)
    eu = somaTotal/2
    console.log(eu)
    amigo = somaTotal/2 + totalVinho
    console.log(amigo)

}else {
   voce = somaTotal/2
   amigo = somaTotal/2
}
console.log(`Eu pago ${eu} reais e meu amigo paga ${amigo} reais`)
alert (`Eu pago ${eu} reais e meu amigo paga ${amigo} reais`)

