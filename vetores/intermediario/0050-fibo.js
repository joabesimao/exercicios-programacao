function fibbo(numero) {
  if (numero < 0) {
    throw new Error("nao pode ser negativo");
  }
  if (numero === 0 || numero === 1) {
    return 1;
  }

  return fibbo(numero - 1) + fibbo(numero - 2);
}

function mostraNumerosDaSequenciaFibbo(numeroLimite) {
  let result = [];
  for (let i = 0; i < numeroLimite; i++) {
    result.push(fibbo(i));
  }
  return result;
}

console.log(mostraNumerosDaSequenciaFibbo(10));
