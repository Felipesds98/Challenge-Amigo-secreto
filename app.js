
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style="color: green; font-weight: bold;">O nome sorteado foi: ${nomeSorteado}</li>`;
    }
function limparLista() {
    amigos = []; // Zera o array
    atualizarLista(); // Atualiza a lista vazia
    document.getElementById("resultado").innerHTML = ""; // Limpa o sorteio
}