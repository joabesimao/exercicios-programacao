const listaLivros = require("./arrays");
const changePosition = require("./menores_que_o_Pivo");

function quickSort(arr, esq, dir) {
  if (arr.length > 1) {
    let indiceAtual = particiona(arr, esq, dir);
    if (esq < indiceAtual - 1) {
      quickSort(arr, esq, indiceAtual - 1);
    }
    if (indiceAtual < dir) {
      quickSort(arr, indiceAtual, dir);
    }
  }
  return arr;
}

function particiona(arr, esq, dir) {
  let pivo = arr[Math.floor((esq + dir) / 2)];
  let atualEsquerda = esq;
  let atualDir = dir;

  while (atualEsquerda <= atualDir) {
    while (arr[atualEsquerda].preco < pivo.preco) {
      atualEsquerda++;
    }
    while (arr[atualDir].preco > pivo.preco) {
      atualDir--;
    }
    if (atualEsquerda <= atualDir) {
      changePosition(arr, atualEsquerda, atualDir);
      atualEsquerda++;
      atualDir--;
    }
  }
  return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
