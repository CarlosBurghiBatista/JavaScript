function verificar() {
  var data = new Date() //coleta a data do sistema automaticamente.
  var ano  = data.getFullYear() //Armazenada pelo ano completo. 
  
  var fano = document.getElementById('txtano')//armazena o 'ano'digitado no input (number).
  var res  = document.getElementById('res') //conecta a div de id 'res' à função.
  var limit = 1926 //variável criada para limitar a idade gerada em 100 anos.
  var fsex = document.getElementsByName('radsex') //conecta os inputs tipo 'radio' à função.
  var idade = ano - fano.value //Armazena - Ano atual menos o ano de nascimento.
  var gênero = ''//Armazena o sexo selecionado no 'input-radio' ou no 'Label'.

  var img = document.createElement('img')//Cria variável 'img' direto no script.js.
      img.setAttribute('id', 'foto') //Atribui o arquivo de imagem por id.

  if (fano.value > ano || fano.value < limit) {
    window.alert('[ERRO] Verifique os dados e tente novamente !')
  } 
  else { if (fsex[0].checked) { gênero = 'Homem'
     
      if (idade >= 0 && idade < 10){
         img.setAttribute('src' , 'foto-Menino.png')
    } else if (idade < 21 ){
         img.setAttribute('src' , 'foto-Rapaz.png')
    } else if (idade < 50 ){
         img.setAttribute('src' , 'foto-Adulto.png')
    } else {
         img.setAttribute('src' , 'foto-Idoso.png')
    }
    
} else if ( fsex[1]) { 
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10){
        img.setAttribute('src' , 'foto-Menina.png')
    } else if (idade < 21 ){
        img.setAttribute('src' , 'foto-Moça.png')
    } else if (idade < 50 ){
        img.setAttribute('src' , 'foto-Adulta.png')
    } else {
        img.setAttribute('src' , 'foto-Idosa.png')
    }
    
}
      
      
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`//O texto mostrado muda conforme as variáveis
      res.appendChild(img) //Acrescenta 'filho' na árvore DOM.  
    }


  

}