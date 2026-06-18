function converterDolarParaReal(valor) {

    return valor * 5.65;

}

function converter() {

    let dolar = Number(
        prompt("Digite o valor em dólar:")
    );

    let real =
    converterDolarParaReal(dolar);

    document.getElementById("resultado")
    .innerText =
    `R$ ${real.toFixed(2)}`;

}