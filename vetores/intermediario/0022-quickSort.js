//[7, -2, 4, 1, 6, 0, -4, 2];

//dividir o array entre os numeros maiores e os menores que o pivo
const partition = (arr, start, end) => {
  const valorDoPivo = arr[end];
  let indexPivo = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < valorDoPivo) {
      [arr[i], arr[indexPivo]] = [arr[indexPivo], arr[i]];

      indexPivo++;
    }
  }
  [arr[indexPivo], arr[end]] = [arr[end], arr[indexPivo]];
  return indexPivo;
};

const quickSortRecursive = (arr, start, end) => {
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);

  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
};

const array = [7, -2, 4, 1, 6, 0, -4, 2];
quickSortRecursive(array, 0, array.length - 1);
console.log(array);
