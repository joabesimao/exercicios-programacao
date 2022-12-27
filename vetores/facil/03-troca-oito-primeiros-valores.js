/**
 * 03 - Declare uma lista de 16 posições e troque os 8 primeiros valores pelos 8 últimos e vice-e-versa.
 *  Escreva ao final o vetor obtido.
 */

var lista = new Array(16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0);

for (i = 0; i < 8; i++) {
  comeco = lista[i];

  final = lista[16 - i];
  console.log("comeco =>" + comeco);
  console.log("final =>" + final);

  lista[i] = final;

  lista[16 - i] = comeco;
}
console.log(lista);
