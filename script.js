let dados = [];

fetch("data.json")
  .then(res => res.json())
  .then(json => {
    dados = json.items;
  });

function buscar() {
  const termo = document.getElementById("search").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  const filtrados = dados.filter(item =>
    item.nome.toLowerCase().includes(termo)
  );

  resultado.innerHTML = "";

  if (filtrados.length === 0) {
    resultado.innerHTML = "<p>Nenhum item encontrado</p>";
    return;
  }

  filtrados.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${item.nome}</h3>
      <p><b>Raridade:</b> ${item.raridade}</p>
      <p>${item.descricao}</p>
    `;
    resultado.appendChild(div);
  });
}
