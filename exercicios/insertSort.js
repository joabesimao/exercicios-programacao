const listaDeLivros = require("./arrays");

const insertSort = (array) => {
  let tamanho = array.length;

  for (let i = 1; i < tamanho; i++) {
    let atual = array[i].preco;
    let j = i - 1;

    while (j > -1 && atual < array[j].preco) {
      array[j + 1].preco = array[j].preco;
      j--;
    }
    array[j + 1].preco = atual;
  }
  return array;
};

console.log(listaDeLivros);
