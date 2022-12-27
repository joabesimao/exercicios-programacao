/**
 * 03 - Declare uma lista de 16 posições e troque os 8 primeiros valores pelos 8 últimos e vice-e-versa.
 *  Escreva ao final o vetor obtido.
 */

const lista = new Array(
  16,
  15,
  14,
  13,
  12,
  11,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  0
);

for (let i = 0; i < 8; i++) {
  const comeco = lista[i];
  const final = lista[16 - i];

  console.log("começo =>" + comeco);
  console.log("final =>" + final);

  lista[i] = final;
  lista[16 - i] = comeco;
}

console.log("resultado", JSON.stringify(lista));
