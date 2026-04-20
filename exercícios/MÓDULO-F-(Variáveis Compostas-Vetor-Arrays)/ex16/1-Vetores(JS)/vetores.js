console.log('\n')
//Criando uma variável composta.
let num = [5,4,2,7,3]

console.log(`Nosso Vetor é o: ${num}`)

//Adicionando conteúdo
num[5] = 1 //Posição '5' recebe valor '1'.
num.push(6) //Última posição recebe o valor '7'.
num.push(0) //Última posição agora é '0'.

console.log(`Adicionado mais dois valores: ${num}`)

//Contagem de posições. " .length "
console.log(`O Vetor 'num' possui ${num.length} posições.`)

//Verificação de conteúdo por posição.
console.log(`A terceira posição do vetor 'num' é ${num[3]}`)

//Ordenando o vetor.
num.sort();
console.log(`O vetor ordenado fica assim: ${num}`)

console.log('\n')//Cada '\n' pula uma linha. 

//Vetor com laço de repetição 'for'.
let val = [6,9,3,7,5] //nova variável declarada.
console.log(`Novo vetor recebe ${val}`)

console.log('\n')

for(let pos=0; pos<val.length; pos++) {console.log(`A posição ${pos} recebe o valor:${val[pos]}`)}

console.log('\n')

//"for" simplificado.
for(let pos in val) {console.log(`Posição ${pos} = ${val[pos]}.`)}

console.log('\n')

//Buscar valores dentro de um vetor.
let pos = val.indexOf(6)

if (pos == -1) {console.log(`O valor não foi encontrado !`)} 

else {console.log(`O valor está na posição ${pos}`)}

console.log('\n')
