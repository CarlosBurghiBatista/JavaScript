function tabuada() {

        let n1  = Number(document.getElementById('num').value)
        let res = document.getElementById('res')
        let cont = 1

            if (n1 == 0) { window.alert('Digite um número válido !') } else {
        
        res.innerHTML = ''

        while( cont <= 10) {
            res.innerHTML += `${cont}X${n1}=${cont * n1} <br> `
           cont++  
        } 

}


}