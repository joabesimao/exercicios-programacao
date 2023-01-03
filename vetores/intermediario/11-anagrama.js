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

function imprimeAnagrama(resultado) {
  if (resultado === true) {
    return "é um anagrama";
  } else {
    return "nao é um anagrama";
  }
}

function verificaAnagrama(nome1, nome2) {
  const arrayNome1 = [...nome1];
  const arrayNome2 = [...nome2];

  const novo = arrayNome2.filter((letra) => arrayNome1.includes(letra));

  if (novo.length === 4) {
    return true;
  } else {
    return false;
  }
}

console.log(imprimeAnagrama(verificaAnagrama("PATO", "TITE")));
console.log(imprimeAnagrama(verificaAnagrama("PATO", "TOPA")));
console.log(imprimeAnagrama(verificaAnagrama("TATU", "TUTA")));
console.log(imprimeAnagrama(verificaAnagrama("BETO", "BETO")));
console.log(imprimeAnagrama(verificaAnagrama("BETO", "BETA")));
