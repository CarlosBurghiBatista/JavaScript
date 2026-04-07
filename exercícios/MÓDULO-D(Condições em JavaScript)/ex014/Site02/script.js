function verificar() {
  var data = new Date()
  var ano  = data.getFullYear()
  
  var fano = document.getElementById('txtano')
  var res  = document.getElementById('res')

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente nvamente !')
  } 
  else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - fano.value
    var gênero = ''
    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (fsex[0].checked) { 
      gênero = 'Homem'
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
      
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
  }


  

}