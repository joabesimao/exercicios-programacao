const listaLivros = require("./arrays");

function findSmallest(pivot, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco < pivot.preco) {
      menores++;
    }
  }
  changePosition(array, array.indexOf(pivot), menores);
  return array;
}

function changePosition(array, start, end) {
  const elemento1 = array[start];
  const elemento2 = array[end];

  array[end] = elemento1;
  array[start] = elemento2;
}

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  findSmallest(pivo, array);
  let valoresMenores = 0;

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];
    if (atual.preco <= pivo.preco && atual !== pivo) {
      changePosition(array, analisando, valoresMenores);
      valoresMenores++;
    }
  }
  return array;
}

console.log(divideNoPivo(listaLivros));

module.exports = changePosition;
