          // j  i(atual)
let vetor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // [1,2,3,4,5,6]

const insertSort = (array) => {
  let tamanhoDoArray = array.length;

  for (let i = 1; i < tamanhoDoArray; i++) {
    let atual = array[i];

    let j = i - 1;

    while (j > -1 && atual < array[j]) {
      //atual      = j
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = atual;
  }
  return array;
};

console.log(insertSort(vetor));
