async function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const de = document.getElementById("moedaOrigem").value;
    const para = document.getElementById("moedaDestino").value;

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("resultado").innerText = "Digite um valor válido.";
        return;
    }

    try {
        const res = await fetch(`https://api.exchangerate.host/convert?access_key=4097b1e41e529285f9693e0558fc340b&from=${de}&to=${para}&amount=${valor}`);
        const data = await res.json();

        if (!data.success || typeof data.result !== "number") {
            const mensagem = data.error?.info || "Erro ao converter.";
            document.getElementById("resultado").innerText = mensagem;
            return;
        }

        document.getElementById("resultado").innerText =
            `${valor} ${de} = ${data.result.toFixed(2)} ${para}`;

    } catch (error) {
        document.getElementById("resultado").innerText = "Erro ao converter.";
    }
}

document.getElementById("conversor-form").addEventListener("submit", function(e) {
    e.preventDefault();
    converter();
});