/*
1) Fazer  
*****
*****
*****
*****
*****
*/
n1 = 5
for (index = 0; index < n1; index++) {
  console.log("*****");
}

/*
2) Fazer  
*
**
***
****
*****
*/

n2 = 5
let linha = "";
for (index = 0; index < n2; index++) {
  linha += "*";
  console.log(linha);
}

/*
3) Fazer  
    *
   **
  ***
 ****
*****
*/

n3 = 5
for (let index = 1; index <= n3; index++) {
  console.log(" ".repeat(n3 - index) + "*".repeat(index));
}

/*
4) Fazer  
  *
 ***
*****
*/

n4 = 5
if (n4 % 2 === 0) {
  console.log("Não é possível fazer uma pirâmide com um valor par.")
} else {
  for (let index = 1; index <= n4 - (n4 / 2 - 0.5); index++) {

    console.log(" ".repeat((n4 + 2) / 2 - 0.5 - index) + "*".repeat(2 * index - 1));
  }
}