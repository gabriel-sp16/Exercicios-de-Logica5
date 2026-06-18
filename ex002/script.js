function adicionarItem() {

    let item = document.createElement("li");

    item.innerText = "Novo Item";

    document.getElementById("lista")
    .appendChild(item);

}