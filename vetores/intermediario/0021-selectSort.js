let arrayDeNumeros = [5, 7, 8, 6, 4, 2, 1, 3, 10, 9];

const selectionSort = (array) => {
  let tamanhoDoArray = array.length;

  for (let i = 0; i < tamanhoDoArray; i++) {
    let minimo = i;

    for (let j = i + 1; j < tamanhoDoArray; j++) {
      if (array[j] < array[minimo]) {
        minimo = j;
      }
    }
    if (minimo != i) {
      let acc = array[i];
      array[i] = array[minimo];
      array[minimo] = acc;
    }
  }
  return array;
};
