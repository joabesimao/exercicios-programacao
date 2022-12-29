const numeros = [10, 50, 80, 1, 2, 3];

const verificaMaiorNumero = (array) => {
  let maior = 0;

  for (let i = 0; i < numeros.length; i++) {
    for (j = 1; j < numeros.length; j++) {
      if (numeros[j] > numeros[i]) {
        maior = numeros[j];
      }
    }
  }
  return maior;
};

console.log(verificaMaiorNumero(numeros));
