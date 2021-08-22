//variaveis
niveis=["Muito abaixo do peso","Abaixo do Peso","Peso Normal","Acima do peso","obesidade grau 1","obesidade grau 2","obesidade grau 3"]

pessoas=["Rodrigo","Sheila","Laura","Rose","Altair"]
massas=[83,65,18,65,75]
alturas=[1.65,1.57,1.07,1.56,1.73]





//-------------------------------------------------------
//Funções

function calcImc (massa,altura){
return massa/altura**2
return imc
}

function verificaNivel(imc){

var nivel = 0

if (imc<17){
nivel=0  
} else
  if (imc<=18.5){
    nivel=1
  } else 
    if (imc<=25){
      nivel=2
    } else 
      if (imc<=30){
        nivel=3
      } else
        if (imc<=35){
          nivel=4
        } else
          if (imc<=40){
            nivel=5
          } else {
             nivel=6
          }
  return nivel
}

//Execução-----------------------------------------------
for(indice=0; indice < pessoas.length ; indice++){
  
pessoa=pessoas[indice]
massa=massas[indice]
altura=alturas[indice]

imc = calcImc(massa,altura)
nivel = verificaNivel(imc)

console.log("Nome: "+pessoa)
console.log("Peso: "+massa)
console.log("Altura: "+altura)
console.log("IMC: "+imc.toFixed(2))
console.log(niveis[nivel])
console.log("")
}
