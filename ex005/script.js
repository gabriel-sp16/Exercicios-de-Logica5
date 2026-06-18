function quadrado(numero) {
    return numero * numero;
}

function calcularQuadrado() {

    let numero = Number(
        prompt("Digite um número:")
    );

    alert(
        quadrado(numero)
    );

}