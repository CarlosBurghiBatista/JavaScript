console.log('Função parimpar()')

function parimpar(n) {

if(n%2 == 0) { return 'Par !'}
else { return 'Impar !'}

}

console.log(`${parimpar(33)}\n`)
//Nova função:

console.log('Função soma()')

//Nova função.
function soma(n1,n2,n3,n4) { return n1 + n2 + n3 + n4}
 
console.log(soma(1, 9, 6, 4))
let cv = soma(1, 9, 6, 4)
console.log(`${cv}\n`)

//Com parâmetros pré-definidos, podemos deixar lacunas em aberto.
console.log('Função soma() com parâmetros pré-definidos')

function soma(n1=0, n2=0, n3=0, n4=0) { return n1 + n2 + n3 + n4}

console.log(`${soma(4, 7)}\n`)

//Variável recebendo uma função.
console.log('Variável pode armazenar uma função.')
let v = function(x) {
             return x*2}
        
console.log(`${v(3)}\n`)

//Função Fatorial.
console.log('Função fatorial()')

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--)
{ fat *= c}
 return fat}

 console.log(`${fatorial(5)}\n`)

//Recursividade.
console.log('Função com Recursividade.')

function fatorial(n) {
     if (n==1) { return 1} else {
        return n * fatorial(n-1)
     }
}

console.log(`${fatorial(5)}`)

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/