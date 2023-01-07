const dorme = (milisegundos) => {
  return new Promise((resolve) => setTimeout(resolve, milisegundos));
};

async function incrementaNumero(numero) {
  console.log(numero);
  await dorme(2000);

  if (numero === 3) {
    return console.trace();
  }

  return incrementaNumero(numero + 1);
}

incrementaNumero(1);
