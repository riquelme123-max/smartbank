const saldoAtual = 1500;
document.getElementById("transferencia-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const destinatario = document.getElementById("destinatario").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const msg = document.getElementById("mensagem");

    if (!destinatario || isNaN(valor) || valor <= 0) {
        msg.innerText = "Por favor, preencha todos os campos corretamente.";
        msg.style.color = "red";
        return;
    }

    if (valor > saldoAtual) {
        msg.innerText = "Saldo insuficiente para realizar a transferência.";
        msg.style.color = "red";
        return;
    }

    msg.innerText = `Transferência de R$${valor.toFixed(2)} para ${destinatario} realizada com sucesso!`;
    msg.style.color = "green";

});
