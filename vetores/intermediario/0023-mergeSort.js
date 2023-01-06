const listaLivros = require("./arrays");

function mergeSort(array) {
  if (array.length > 1) {
    const meioDoArray = Math.floor(array.length / 2);
    const parteUm = mergeSort(array.slice(0, meioDoArray));
    const parteDois = mergeSort(array.slice(meioDoArray, array.length));
    array = ordena(parteUm, parteDois);
  }
  return array;
}

function ordena(parteUm, parteDois) {
  let posicaoAtualParteUm = 0;
  let posicaoAtualParteDois = 0;
  const resultado = [];

  while (
    posicaoAtualParteUm < parteUm.length &&
    posicaoAtualParteDois < parteDois.length
  ) {
    let produtoAtualDaParteUm = parteUm[posicaoAtualParteUm];
    let produtoAtualDaParteDois = parteDois[posicaoAtualParteDois];

    if (produtoAtualDaParteUm.preco < produtoAtualDaParteDois.preco) {
      resultado.push(produtoAtualDaParteUm);
      posicaoAtualParteUm++;
    } else {
      resultado.push(produtoAtualDaParteDois);
      posicaoAtualParteDois++;
    }
  }
  return resultado.concat(
    posicaoAtualParteUm < parteUm.length
      ? parteUm.slice(posicaoAtualParteUm)
      : parteDois.slice(posicaoAtualParteDois)
  );
}

console.log(mergeSort(listaLivros));
