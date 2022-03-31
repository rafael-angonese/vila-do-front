const Clients = () => {
  const clienteJoao = {
    nome: "João",
    idade: 37,
    compras: [
      { nome: "Notebook", preco: "2500" },
      { nome: 'Motocicleta"', preco: "10000" },
      { nome: "Smartphone", preco: "1500" },
      { nome: "Conjunto de panelas", preco: "2000" },
    ],
    cidade: "Belém",
  };

  const clienteMaria = {
    nome: "Maria",
    idade: 18,
    compras: [
      { nome: "Computador", preco: "2500" },
      { nome: "Coletânia de livros", preco: "1000" },
      { nome: "Smartphone", preco: "1500" },
    ],
    cidade: "Rio de Janeiro",
  };

  const totalJoao = clienteJoao.compras.reduce(
    (sum, item) => sum + Number(item.preco),
    0
  );

  const totalMaria = clienteMaria.compras.reduce(
    (sum, item) => sum + +item.preco,
    0
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Página dos Clientes</h1>
      <p>
        <strong>Cliente 1:</strong> {clienteJoao.nome}
      </p>
      <ul style={{ listStyle: "circle" }}>
        <li>Idade: {clienteJoao.idade}</li>
        <li>Total de Compras: R${totalJoao}</li>
      </ul>
      <p>
        <strong>Cliente 2:</strong> {clienteMaria.nome}
      </p>
      <ul style={{ listStyle: "circle" }}>
        <li>Idade: {clienteMaria.idade}</li>
        <li>Total de Compras: R${totalMaria}</li>
      </ul>
    </div>
  );
};

export default Clients