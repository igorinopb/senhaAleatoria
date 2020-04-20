//senhas geradas com caracteres da tabela ASCII de 33 a 126
function gerarSenha() {
    pass = []
    num = document.getElementById('tamanho').value
    if(num >= 8 && num <= 126){
        for (i = 0; i < num; i++) {
            pass[i] = String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33))
        }
    senha = pass.join('')
    prompt("Sua senha gerada é:", senha)
    }
    else{
        alert("Escolha um número entre 8 e 126")
    }
}

function salvarSenha(){
    let blob = new Blob([senha], { type: "text/plain;charset=utf-8" })
    saveAs(blob);
}