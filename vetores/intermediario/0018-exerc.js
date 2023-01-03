/**
 * 18. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
 *  e que exiba a lista desses nomes na tela. Após exibir essa lista, o programa deve mostrar
 * também os nomes na ordem inversa em que o usuário os digitou, um por linha.
 *
 *
 */
const arraysNomes = ["joabe", "lucas", "tania", "eliezer", "delvangela"];

const exibeNomes = (array) => {
  const nomes = `\n${array}\n`;

  const result = ` \n${nomes}\n`;
  const nomesAoContrario = array.reverse();
  return `\n${result} \n ${nomesAoContrario}`;
};
console.log(exibeNomes(arraysNomes));
