const numeros = [10, 50, 80, 1, 2, 3];

const verificaMaiorNumero = (array) => {
  let maior = 0;

  for (let i = 0; i < array.length; i++) {
    for (j = 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        maior = array[j];
      }
    }
  }
  return maior;
};

console.log(verificaMaiorNumero(numeros));
