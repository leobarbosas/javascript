var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não vota')
}else if( idade >= 16 && idade < 18 || idade > 70){//PODERIA TIRAR O idade >=16 POIS JÁ ESTÁ DIZENDO LOGO ACIMA NO PRIMEIRO if QUE É MENOR QUE 16, LOGO AQUI VAI SER MAIOR QUE 16.
        console.log('Voto opcional')
    }else{
        console.log('Voto obrigaório')
    }