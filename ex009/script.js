function formatarTexto(texto) {

    return texto.toUpperCase() +
    " (" +
    texto.length +
    " caracteres)";

}

function executar() {

    let texto =
    prompt("Digite um texto:");

    alert(
        formatarTexto(texto)
    );

}