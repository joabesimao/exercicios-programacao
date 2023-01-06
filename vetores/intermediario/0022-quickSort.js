//[7, -2, 4, 1, 6, 0, -4, 2]; [-4,-2,0,1] [2,4,6,7]

const trocaDeLugar = (lista, posicao1, posicao2) => {
  [lista[posicao1], lista[posicao2]] = [lista[posicao2], lista[posicao1]];
};

//dividir o lista entre os numeros maiores e os menores que o pivo
const colocaOPivoNoIndexDele = (lista, start, end) => {
  const indexAtualDoPivo = end;
  const valorDoPivo = lista[indexAtualDoPivo]; // 2
  let indexOndeOPivoDeveEstar = start; //0

  for (let i = start; i < end; i++) {
    const valorAtual = lista[i];
    if (valorAtual < valorDoPivo) {
      trocaDeLugar(lista, i, indexOndeOPivoDeveEstar);
      indexOndeOPivoDeveEstar++;
    }
  }
  trocaDeLugar(lista, indexAtualDoPivo, indexOndeOPivoDeveEstar);

  const indexDoPivo = indexOndeOPivoDeveEstar;
  return indexDoPivo;
};

const quickSortRecursive = (lista, start, end) => {
  if (start >= end) {
    return;
  }

  let indexDoPivo = colocaOPivoNoIndexDele(lista, start, end);

  quickSortRecursive(lista, start, indexDoPivo - 1);
  quickSortRecursive(lista, indexDoPivo + 1, end);
};

const lista = [7, -2, 4, 1, 6, 0, -4, 2];
quickSortRecursive(lista, 0, lista.length - 1);
console.log(lista);
