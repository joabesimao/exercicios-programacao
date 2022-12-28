/**
 * Intermediário 11.
 * Leia dois vetores de 4 posições.
 * Verifique e escreva se um é anagrama de outro.
 *
 * PATO, TITE -> false
 * PATO, TOPA -> true
 * TATU, TUTA ->  true
 * BETO, BETO -> true
 * BETO, BETA -> false
 */

function verificaAnagrama(nome1, nome2) {
  const arrayNome1 = [...nome1];
  const arrayNome2 = [...nome2];

  const novo = arrayNome2.filter((letra) => arrayNome1.includes(letra));

  if (novo.length === 4) {
    return `a palavra ${nome2} é um anagrama da palavra ${nome1} !`;
  } else {
    return `a palavra ${nome2} não é um anagrama da palavra ${nome1} !`;
  }
}

console.log(verificaAnagrama("PATO", "TITE")); // false
console.log(verificaAnagrama("PATO", "TOPA")); // true
console.log(verificaAnagrama("TATU", "TUTA")); // true
console.log(verificaAnagrama("BETO", "BETO")); // true
console.log(verificaAnagrama("BETO", "BETA")); // false
