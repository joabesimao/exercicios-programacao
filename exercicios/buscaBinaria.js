const listaDeLivros = require("./arrayOrdenado");

const busca = (arr, de, ate, valorBuscado) => {
  const meio = Math.floor((de + ate) / 2);
  const atual = arr[meio];

  if (de > ate) {
    throw new Error("nao existe um livro com esse valor!");
  }

  if (valorBuscado === atual.preco) {
    return meio;
  }

  if (valorBuscado < atual.preco) {
    return busca(arr, de, meio - 1, valorBuscado);
  }

  if (valorBuscado > atual.preco) {
    return busca(arr, meio + 1, ate, valorBuscado);
  }
};

console.log(busca(listaDeLivros, 0, listaDeLivros.length - 1, 100));
