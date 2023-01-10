const listaLivros = require("../arrays");
const menorValor = require("./menorValor");

for (let atual = 0; atual < listaLivros.length; atual++) {
  let menor = menorValor(listaLivros, atual);

  let livroAtual = listaLivros[atual];
  console.log("posicao atual", atual);
  console.log("livro atual", listaLivros[atual]);
  let livroValorMenor = listaLivros[menor];
  console.log("livro menor", listaLivros[menor]);

  listaLivros[atual] = livroValorMenor;
  listaLivros[menor] = livroAtual;
}

console.log(listaLivros);
