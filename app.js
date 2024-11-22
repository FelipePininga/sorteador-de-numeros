function sortear(){
    let quantidade=parseInt(document.getElementById('quantidade').value);
    let de=parseInt(document.getElementById('de').value);
    let ate=parseInt(document.getElementById('ate').value);
    
    let numero;
    let sorteados=[];
    for(let contador=quantidade;contador!=0;contador--){
        numero=obterNumeroAleatorio(de,ate);
        sorteados.push(numero);
    }
}

function obterNumeroAleatorio(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}