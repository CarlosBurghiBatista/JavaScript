let num   = document.getElementById('num')
let lista = document.getElementById('lista')
let res   = document.getElementById('res')
let valores = []

function é_Numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { return true}
    else {return false}
}

function na_lista(n, l) {
    if(l.indexOf(Number(n)) != -1) {return true}
    else {return false}

}

function adicionar() {
    if(é_Numero(num.value) && ! na_lista(num.value, valores)) { 
               valores.push(Number(num.value))
               valores.sort()
               res.innerHTML = `Os valores acumulados são: ${valores}`
               
               let item = document.createElement('option')
                   item.text = `O valor ${num.value} adicionado.`
                   lista.appendChild(item)
                }
    else {window.alert('Valor inválido ou já na lista')} 

num.value = ''
num.focus()
}
function finalizar() {
    valores.sort()
  res.innerHTML = `Ao todo temos ${valores.length} números cadastrados.<br><br>
  O maior valor informado foi ${valores[valores.length-1]}.<br><br>
  O menor valor informado foi ${valores[0]}.<br><br> 
  Somando todos os valores, temos ${valores}. <br><br>
  A média dos valores digitados é ${valores}.
  `  
}

