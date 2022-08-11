var usuarios = document.querySelectorAll(".usuario");
// var botaoTabela = document.querySelectorAll(".botao-tabela");
// botaoTabela.addEventListener("click", function());

for(var i=0; i<usuarios.length; i++){
    var usuario = usuarios[i];
        
    var inputTabela = usuario.querySelector(".input-tabela");
    var botaoTabela = usuario.querySelector(".botao-tabela");

    botaoTabela.onclick = function(){
        inputTabela.classList.add("esconder");
        botaoTabela.classList.add("esconder");
        var cep = usuario.querySelector(".info-endereco");
        cep.textContent = "teste";
        
    }
        
}    