function geraAleatorios(quantidade){

var vetorNumeros = []; 
var vetorNumSel = [];

for(var j = 1; j <= 60; j++){
    vetorNumeros.push(j)
}

for(var i = 0; i < quantidade; i++){
    var aleatorio = Math.floor(Math.random()*vetorNumeros.length)
    var numSel = vetorNumeros.splice(aleatorio,1) 
    vetorNumSel = [...vetorNumSel, ...numSel] 
}

console.log(vetorNumSel) 
}

function main(quantidade){
  console.time("timer");
  geraAleatorios(quantidade);
  console.timeEnd("timer");
}
