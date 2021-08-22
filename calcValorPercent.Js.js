function valorP (receitLiq,custProdVend){
lucBruto = receitLiq-custProdVend
margBruta= lucBruto/receitLiq
return margBruta*100
}
console.log("R$",valorP(50,10).toFixed(2))

