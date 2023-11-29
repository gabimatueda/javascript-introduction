function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
  if (imc < 18.5) {
    console.log('Abaixo do peso');
  } else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
  } else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
  } else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
  } else {
    console.log('Obesidade Grave');
  }
}


function main() {
    const peso = 55;
    const altura = 1.56;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main()