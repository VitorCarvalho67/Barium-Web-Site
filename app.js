function GoToHome (){
    window.location.assign("/");
}

function Ativar(num){
    num = num.toString();

    const ativoAtual = document.querySelector("#ativo");
    ativoAtual.id = "";

    const ativo = document.querySelector(`.a${num}`);
    ativo.id = "ativo";

    const conteudoAtual = document.querySelector("#conteudo");
    conteudoAtual.id = "";

    const conteudo = document.querySelector(`.conteudo${num}`);
    conteudo.id = "conteudo";
}