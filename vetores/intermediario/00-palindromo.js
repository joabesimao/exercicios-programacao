/**
 * Intermediário 10.
 * Leia um vetor de 4 posições
 *  e verifique se o vetor é um palíndromo
 *
 * BETO - False
 * OTTO - True
 * TITE - False
 * POOP - True
 */

function verificaPalindromo(vetor) {
  const copiaDoVetor = vetor.map((e) => e);
  const inverso = copiaDoVetor.reverse();
  const result = JSON.stringify(inverso) === JSON.stringify(vetor);

  return result;
}

console.log(verificaPalindromo(["B", "E", "T", "O"]));
console.log(verificaPalindromo(["O", "T", "T", "O"]));
console.log(verificaPalindromo(["T", "I", "T", "E"]));
console.log(verificaPalindromo(["P", "O", "O", "P"]));
