const livros = require("./arrays");
const encontraMenorValor = require("../vetores/encontraMenorValor.js");

for (let atual = 0; atual < livros.length; atual++) {
  let menor = encontraMenorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMenor = livros[menor];

  livros[atual] = livroMenor;
  livros[menor] = livroAtual;
}

console.log(livros);
