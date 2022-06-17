var agora = new Date()
var diaSem = agora.getDay()
/* COM O getDay(), A VARIÁVEL VAI PEGAR E EXIBIR O NÚMERO DO DIA DA SEMANA
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
switch(diaSem){
    case 0:
        console.log('Domingo')
        break//OBRIGATÓRIO PARA TODOS OS case NA ESTRUTURA DO switch
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
    default://É OPCIONAL, PODEMOS COLOCAR, CASO NEHUMA DAS CONDIÇÕES ACIMA FOREM ATENDIDAS, COMO POR EXEMPLO diaSem = 7.
        console.log('[ERRO] Dia inválido!')
}