const listaCores = ['vermelho', 'azul', 'verde', 'amarelo', 'roxo', 'laranja', 'rosa', 'marrom', 'cinza', 'ciano'];

const mapaCores = {
    vermelho: "red",
    azul: "blue",
    verde: "green",
    amarelo: "yellow",
    roxo: "purple",
    laranja: "orange",
    rosa: "pink",
    marrom: "brown",
    cinza: "gray",
    ciano: "cyan"
};

let corSorteada;
let tentativas;

function iniciarJogo() {
    corSorteada = listaCores[Math.floor(Math.random() * listaCores.length)];
    tentativas = 3;
    document.getElementById("tentativas").innerText = tentativas;
    document.getElementById("mensagem").innerText = "";
    document.getElementById("entradaCor").value = "";
    document.getElementById("btnAdivinhar").disabled = false;
    document.getElementById("btnReset").style.display = "none";
    document.body.style.backgroundColor = "white";
    console.log("Cor sorteada:", corSorteada);
}

document.getElementById("btnAdivinhar").addEventListener("click", () => {
    const input = document.getElementById("entradaCor").value.toLowerCase().trim();

    if (input === "") {
        document.getElementById("mensagem").innerText = "Digite uma cor!";
        return;
    }

    if (!mapaCores[input]) {
        document.getElementById("mensagem").innerText = "Essa cor não está na lista!";
        return;
    }

    if (input === corSorteada) {
        document.body.style.backgroundColor = mapaCores[corSorteada];
        document.getElementById("mensagem").innerText = "🎉 Parabéns! Você acertou!";
        document.getElementById("btnAdivinhar").disabled = true;
        document.getElementById("btnReset").style.display = "inline-block";
    } else {
        tentativas--;
        document.getElementById("tentativas").innerText = tentativas;

        if (tentativas > 0) {
            document.getElementById("mensagem").innerText = `❌ Errou! Tentativas restantes: ${tentativas}`;
        } else {
            document.getElementById("mensagem").innerText = `💀 Fim do jogo! A cor correta era: ${corSorteada}`;
            document.getElementById("btnAdivinhar").disabled = true;
            document.getElementById("btnReset").style.display = "inline-block";
        }
    }

    document.getElementById("entradaCor").value = "";
});

document.getElementById("btnReset").addEventListener("click", iniciarJogo);

iniciarJogo();
