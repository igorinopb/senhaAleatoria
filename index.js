//senhas geradas com caracteres da tabela ASCII de 33 a 126
function gerarSenha() {
    pass = ""
    num = document.getElementById('tamanho').value
    if(num >= 8 && num <= 126){
        for (i = 0; i < num; i++) {
          pass += String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33))
        }
    prompt("Sua senha gerada é:", pass)
    }
    else{
        alert("Escolha um número entre 8 e 126")
    }
}

function salvarSenha(){
    let blob = new Blob([pass], { type: "text/plain;charset=utf-8" })
    saveAs(blob);
}



function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
  
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
  
    document.body.appendChild(textArea);
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
      window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
    }
  
    document.body.removeChild(textArea);
  }

  // Teste
var copyTest = document.querySelector('.copyTest');
copyTest.addEventListener('click', function(event) {
  copyTextToClipboard('Teste');
});