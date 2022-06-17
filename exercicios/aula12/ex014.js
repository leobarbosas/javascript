var agora = new Date()
var hora = agora.getHours()//PEGA A HORA ATUAL DO SISTEMA EM QUE O SCRIPT ESTÁ RODANDO.
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom Dia')
}else if(hora >= 12 && hora <= 18){
    console.log('Boa Tarde')
}else{
    console.log('Boa Noite')
}