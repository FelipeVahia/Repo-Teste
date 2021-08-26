let age = 20;
let name = "Hulk";

console.log(age);
console.log(name);

let number1 = 12;
let number2 = 22;
let number3 = 72;

if (number1 > number2 && number1 > number3){
  console.log(number1);
} else if (number2 > number1 && number2 > number3){
  console.log(number2);
} else if (number3 > number1 && number3 > number2){
  console.log(number3);
} else {
  'Não há um número maior que todos.'
}

let angulo1= 22
let angulo2= 100
let angulo3= 58
if (angulo1 + angulo2 + angulo3 === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log('true');
} else {
  console.log('false');
}

const numberx1 = 1;
const numberx2 = 2;
const numberx3 = 2;
if (numberx1 % 2 === 0 || numberx2 % 2 === 0 || numberx3 % 2 === 0){
  console.log('true');
  console.log('Ao menos um dos números é par')
}
if (numberx1 % 2 != 0 || numberx2 % 2 != 0 || numberx3 % 2 != 0){
  console.log('false');
  console.log('Ao menos um dos números é ímpar')
}