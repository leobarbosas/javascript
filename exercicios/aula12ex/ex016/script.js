function carregar(){
    var mensagem = document.querySelector('div#msg')
    var imagem = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    var min = data.getMinutes()
    //var horacomp = String(hora) + ':' + String(min)
    mensagem.innerHTML = `Agora são ${hora}:${min}`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#72c3f9'
        //mensagem.innerHTML += ' <p>Bom dia</p>'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        imagem.src = 'fototarde.png'
        document.body.style.background = '#fdcd9d'
    }else{
        //BOA NOITE
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#0c2134'
    }
}