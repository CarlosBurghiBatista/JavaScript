function contador() {
let cont = Number(document.getElementById('ini').value)
let n2   = Number(document.getElementById('fim').value)
let n3   = Number(document.getElementById('pass').value)
let res = document.getElementById('res')


if ( n3 <= 0) {window.alert('Digite o passo !')} else

if (cont < n2 && n3 <= n2) {
res.innerHTML = ''
for(cont ; cont <= n2 ; cont = cont + n3 ) {
res.innerHTML += `&#128073 ${cont} `
}
} else{ res.innerHTML = ''
for(cont ; cont >= n2 ; cont = cont - n3 ) {
res.innerHTML += `&#128073 ${cont} `
}           
}
}