function tabuada() {

    let n1  = Number(document.getElementById('num').value)
    let sel = document.getElementById('sel')
    let cont = 1

        
    
    
    if (n1 == 0) { window.alert('Digite um número válido !') } else {
    

    while( cont <= 10) { 
        
        let res = document.createElement('option')
        sel.appendChild(res)
        
        res.text = `${cont}X${n1}=${cont * n1} `
        cont++  
    } 

}


}