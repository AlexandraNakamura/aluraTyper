//inicio de pegar palavras da frase
let frase = $(".frase").text();  // simbolo $ significa jQuery, e o texto() está selecionando o texto que está dentro da string.
let numPalavras = frase.split(" ").length;
//final de pegar palavras da frase


//inicio de pegar o numero que quer alterar
let tamanhoFrase = $('#tamanho-Frase');
//final de pegar o numero que quer alterar

//inicio de trocar o numero que aparece no texto
tamanhoFrase.text(numPalavras); //dentro do () do text, dese modo ele troca oque vai ser escrito, se estivesse no let tamanhoFrase, teria apenas selecionado.
//final de trocar o numero que aparece no texto

// * Obsevando acima, o text() serve como pegar o valor, mas text("valor") serve como atribuir um novo valor. 

//inicio de pegar o campo de digitação e contar
let campo = $(".campo-digitacao");
campo.on("input", function() {
    let conteudo = campo.val();  // o Val acessa o valor dos inputs do usuário, dando acesso ao conteudo que tem valor.

    let quantidadePalavras = conteudo.split(/\S+/).length -1; //S maiusculo conta só as palavras, com o s minusculo ele conta os espaço vazio, e se colocar o g no final ele conta as palavras globais. /\s+/g
    $("#contador-palavras").text(quantidadePalavras).length;

    let quantidadeCaracteres = conteudo.length;
    $("#contador-caracteres").text(quantidadeCaracteres);
});

// .val da acesso ao conteudo do input, number, text area e etc. já o .text da acesso ao texto p, h, span e etc.


