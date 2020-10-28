$("#botao-reiniciar").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){ // novo, escondendo o spinner
        $("#spinner").toggle();
    });
}
    

function trocaFraseAleatoria(data){
        let frase = $(".frase");
        let numeroAleatorio = Math.floor(Math.random() * data.length); //gera um numero aleátorio com o Marth.random
        frase.text(data[numeroAleatorio].texto);
        atualizaTamanhoFrase();
        atualizaTempoInicial(data[numeroAleatorio].tempo);
};

$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data) {
    let frase = $(".frase");
    let numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}


function buscaFrase() {

    $("#spinner").toggle();
    let fraseId = $("#frase-id").val();

    let dados = {id : fraseId}; 

    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
    },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data) {

    console.log(data);

    let frase = $(".frase");
    frase.text(data.texto); 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

