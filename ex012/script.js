function adicionarTarefa() {

    let texto =
    document.getElementById("tarefa").value;

    let item =
    document.createElement("li");

    item.innerText = texto;

    document.getElementById("lista")
    .appendChild(item);

}