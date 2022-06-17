var agora = new Date()
var hora = agora.getHours()//PEGA A HORA ATUAL DO SISTEMA EM QUE O SCRIPT ESTÁ RODANDO.
console.log(`Agora são exatamente ${hora}.`)
if(hora > 0 && hora < 6){
    console.log('Boa Madrugada!')
} else if(hora < 12){//hora >= 6 NÃO PRECISO ESCREVER POIS NA CONDIÇÃO DE CIMA FALA QUE A hora < 6 ENTAO AQUI SÓ PODE SER >=6.
    console.log('Bom Dia!')
} else if(hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}