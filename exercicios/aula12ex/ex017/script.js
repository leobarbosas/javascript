//ESSA FUNÇÃO ABAIXO É PARA NÃO PRECISAR CLICAR TODA VEZ NO BOTÃO, SÓ APERTAR ENTER.
document.addEventListener('keypress',function(e)
{ 
    if(e.key === 'Enter'){
        var btn = document.querySelector('#ver')
        btn.click()
    }
})


function mostrar(){
    var data = new Date()//PEGA A DATA ATUAL NO ESTILO Sat Jul 02 2022 17:43:56 GMT-0300 (GMT-03:00)
    var ano = data.getFullYear()//PEGA O ANO ATUAL COMPLETO COM 4 DÍGITOS - 2022
    var fano = document.querySelector('input#txtnum') //PEGA A TAG E O ID DESSA div ESSE fano, É O ANO QUE A PESSOA DIGITA LÁ NA CAIXA DE TEXTO.
    var res = document.getElementById('resultado')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
    var fsex = document.getElementsByName('radsex') //NESSE CASO USAMOS O getElementsByName, POIS PRECISAMOS PEGAR O name DOS DOIS RADIO
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img') // CRIA UMA TAG img DINÂMICAMENTE
    img.setAttribute('id', 'foto')// ADICIONA UM id='foto' NA TAG CRIADA NA LINHA ACIMA
    if(fsex[0].checked){
        genero = 'Homem'
        //AQUI VAMOS VERIFICAR A FAIXA ETÁRIA E EXIBIR A FOTO DE ACORDO COM ELA
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'foto-bebe-m.png')
        }else if(idade >= 10 && idade < 21){
            img.setAttribute('src', 'foto-jovem-m.png')
        }else if(idade >= 21 && idade < 50){
            img.setAttribute('src', 'foto-adulto-m.png')
        }else{
            img.setAttribute('src', 'foto-idoso-m.png')
        }
    }else{
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'foto-bebe-f.png')
        }else if(idade >= 10 && idade < 21){
            img.setAttribute('src', 'foto-jovem-f.png')
        }else if(idade >= 21 && idade < 50){
            img.setAttribute('src', 'foto-adulto-f.png')
        }else{
            img.setAttribute('src','foto-idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)//COLOCA UM CONTEÚDO DEPOIS DA FRASE QUE ESTÁ EXIBINDO ACIMA
    }
}


