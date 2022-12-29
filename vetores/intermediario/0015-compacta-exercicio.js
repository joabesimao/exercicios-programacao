/**
 * Intermediário 14. Leia um vetor de 50 posições e o compacte, ou seja,
 * elimine as posições com valor zero avançando uma posição,
 * com os com os valores subseqüentes do vetor.
 * Dessa forma todos “zeros” devem ficar para as posições finais do vetor.
 *
 *vetor => [0,1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,0]

 expect => [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,0,0,0]

 *
 *
 */

let array = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0,
];

const compactaArray = (array) => {
  let result = [];
  let zeros = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeros.push(array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result.concat(zeros);
};

console.log(compactaArray(array));
