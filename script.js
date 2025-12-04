const listaCores = ['preto', 'vermelho', 'azul', 'verde', 'amarelo', 'roxo', 'laranja', 'rosa', 'marrom', 'cinza', 'ciano']; 

const mapaCores = {
    preto: "black",
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
    // 👉 AQUI o erro foi corrigido: coresPT -> listaCores
    corSorteada = listaCores[Math.floor(Math.random() * listaCores.length)];
    tentativas = 3;

    document.getElementById("tentativas").innerText = tentativas;
    document.getElementById("mensagem").innerText = "";

    // se existir um elemento com id "dica", reseta ele também
    const dicaEl = document.getElementById("dica");
    if (dicaEl) {
        dicaEl.innerText = "";
        dicaEl.style.opacity = "0";
    }

    document.getElementById("entradaCor").value = "";
    document.getElementById("entradaCor").disabled = false;

    document.getElementById("btnAdivinhar").disabled = false;
    document.getElementById("btnReset").style.display = "none";

    // volta pro fundo cyberpunk padrão
    document.body.style.background = "radial-gradient(circle at top, #0f0030, #000)";

    console.log("Nova cor sorteada:", corSorteada);
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
        document.body.style.background = mapaCores[corSorteada];
        document.getElementById("mensagem").innerText = "🎉 Parabéns! Você acertou!";
        document.getElementById("btnAdivinhar").disabled = true;
        document.getElementById("btnReset").style.display = "inline-block";
    } else {
        tentativas--;
        document.getElementById("tentativas").innerText = tentativas;

        if (tentativas === 2) {
            document.getElementById("mensagem").innerText =
                `❌ Errou! Tentativas restantes: ${tentativas}\n🤓 Dica 1: começa com "${corSorteada[0].toUpperCase()}"`;
        } else if (tentativas === 1) {
            document.getElementById("mensagem").innerText =
                `❌ Errou! Tentativas restantes: ${tentativas}\n🤓 Dica 1: começa com "${corSorteada[0].toUpperCase()}"\n🔢 Dica 2: tem ${corSorteada.length} letras`;
        } else {
            document.getElementById("mensagem").innerText =
                `💀 Fim do jogo! A cor correta era: ${corSorteada}`;
            document.getElementById("btnAdivinhar").disabled = true;
            document.getElementById("btnReset").style.display = "inline-block";
        }
    }

    document.getElementById("entradaCor").value = "";
});

document.getElementById("btnReset").addEventListener("click", iniciarJogo);

iniciarJogo();
