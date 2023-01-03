/**
 * Intermediário 13. Leia um vetor de 10 posições
 *  e verifique se existem valores iguais e os escreva.
 *
 * vetor => [5,3,2,3,4,5,6,7,8,9]
 *
 * => 5,3
 *
 **/
const listaNumeros = [5, 3, 2, 3, 4, 5, 6, 7, 8, 9];

const verificaSeONumeroEhIgual = (array) => {
  if (array.length === 0) {
    throw new Error("o array nao pode ser vazio");
  }
  let n = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i]) {
        n.push(array[i]);
      }
    }
  }
  return n;
};

console.log(verificaSeONumeroEhIgual(listaNumeros));
