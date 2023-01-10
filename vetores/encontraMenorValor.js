const lis = require("./intermediario/arrays");

function encontraMenor(array) {
  let maisBarato = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].preco < array[maisBarato].preco) {
      maisBarato = i;
    }
  }
  return maisBarato;
}

console.log(encontraMenor(lis));

module.exports = encontraMenor;
