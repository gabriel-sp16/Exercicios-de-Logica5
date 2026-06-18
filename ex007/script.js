function digaOla(nome) {

    document.getElementById("resultado")
    .innerText =
    `Olá, ${nome}!`;

}

function iniciar() {

    let nome =
    prompt("Digite seu nome:");

    digaOla(nome);

}