function sortear(){
    let quantidade=parseInt(document.getElementById('quantidade').value);
    let de=parseInt(document.getElementById('de').value);
    let ate=parseInt(document.getElementById('ate').value);
    
    let numero;
    let sorteados=[];
    for(let contador=quantidade;contador!=0;contador--){
        numero=obterNumeroAleatorio(de,ate);
        while(sorteados.includes(numero)){
            numero=obterNumeroAleatorio(de,ate);
        }
        sorteados.push(numero);
        alterarStatusBotao();
    }
    let label=document.getElementById('textoLabel');
    label.textContent=`Números sorteados:  ${sorteados}`;
}

function obterNumeroAleatorio(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}
function alterarStatusBotao(){
    let botao=document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        
    }
}
function reiniciar(){
    document.getElementById('quantidade').value='';
    document.getElementById('de').value='';
    document.getElementById('ate').value='';
    label.textContent=`Números sorteados:  nenhum até agora`;
    alterarStatusBotao();
}