$("#botao-placar").click(mostraPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar(){
    const posicaoPlacar = $(".placar").offset().top;
    $("body").animate(
        {
            scrollTop: posicaoPlacar+"px"
        }, 1000);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    //$(this).parent().parent().remove(); *Remove a linha td
    const linha = $(this).parent().parent();
    linha.fadeOut(); //*fadeOut apenas diminui a opacidade, não remove o elemento do local
    //linha.remove(700); * De acordo com a documentação do Jquery, usar um tempo no remove é um metodo errado

    setTimeout(() => { //*criar um tempo
        linha.remove()
    }, 500);

}


function mostraPlacar() {
    //$(".placar").show();  *Mostrar, só que aparece de modo bruto
    //$(".placar").hide(); * Esconder, só que esconde de modo bruto
    //$(".placar").toggle(); *Mostrar e Esconder, só que aparece e esconde de modo bruto
    //$(".placar").slidedown(1500); * Mostrar mais suavel, dentro do (tempo) 
    //$(".placar").slideup(1500); * Esconde mais suavel, dentro do (tempo) 
    $(".placar").stop().slideToggle(500); // * Mostrar mais suavel, dentro do (tempo) 
}

