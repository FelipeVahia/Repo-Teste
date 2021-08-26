let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica = 0;
let maiorValor = 0;
let contagemImpar = 0;
let menorValor = numbers[0];

for (index = 0; index < numbers.length; index++) {          // 1)
  console.log(numbers[index]);

  soma += numbers[index];                                   // 2)

  mediaAritmetica += (numbers[index] / numbers.length);     // 3)

  if (numbers[index] > maiorValor) {                        // 5)
    maiorValor = numbers[index];
  }

  if (numbers[index] % 2 != 0) {                            // 6)
    contagemImpar++;
  }

  if (numbers[index] < menorValor) {                        // 7)
    menorValor = numbers[index];
  }
}

console.log(soma);                           // 2)
console.log(mediaAritmetica);                // 3)

if (mediaAritmetica > 20) {                                 // 4)
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

console.log(maiorValor);                    // 5)

if (contagemImpar > 0) {                                    // 6)
  console.log(contagemImpar);
} else {
  console.log("nenhum valor ímpar encontrado");
}

console.log(menorValor);                    // 7)

let novoArray = [];                                         // 8)
for (indexnovo = 1; indexnovo < 26; indexnovo++) {
  novoArray.push(indexnovo);
}
console.log(novoArray);

for (let divididoPor2 of novoArray) {                       // 9)
  divididoPor2 /= 2;
  console.log (divididoPor2);
}
