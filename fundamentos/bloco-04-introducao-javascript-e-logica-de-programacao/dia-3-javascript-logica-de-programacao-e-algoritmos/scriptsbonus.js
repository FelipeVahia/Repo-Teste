/*
1) Fazer  
   *
  * *
 *   *
*******
*/

n1 = 7;
if (n1 % 2 === 0) {
  console.log("Não é possível fazer uma pirâmide com um valor par.")
} else {
  for (let index = 1; index <= n1 - (n1 / 2 - 0.5); index++) {
    if (index === 1 || index === n1 - (n1 / 2 - 0.5)) {
      console.log(" ".repeat((n1 + 2) / 2 - 0.5 - index) + "*".repeat(-1 + 2 * index));
    } else {
      console.log(" ".repeat((n1 + 2) / 2 - 0.5 - index) + "*" + " ".repeat(2 * index - 3) + "*");
    }
  }
}

// 2) Primo ou não? 

numero = 71

for (index = 2; index <= numero; index++) { 
  if ((numero % index) === 0 && index != numero) {
    console.log(numero % index);  
    console.log("Não é um número primo");
    break;
  } else if (index === numero) {
    console.log("É um número primo");
    }
}