const saldo = 1500;
const historico = [
    {tipo:"entrada", valor:500},
    {tipo:"saída", valor:200},
    {tipo:"entrada", valor:800}
];  

document.getElementById("saldo").innerText = saldo.toFixed(2);

const lista = document.getElementById("historico");

historico.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = `${item.tipo}: R$ ${item.valor.toFixed(2)}`;
    lista.appendChild(li);
});

console.log("entrou aqui");