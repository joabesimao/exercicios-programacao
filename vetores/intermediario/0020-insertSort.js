let vetor = [5, 2, 4, 6, 1, 3];

const insertSort = (array) => {
  let tamanhoDoArray = array.length;

  for (let i = 1; i < tamanhoDoArray; i++) {
    let atual = array[i];

    let j = i - 1;

    while (j > -1 && atual < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = atual;
  }
  return array;
};

console.log(insertSort(vetor));
