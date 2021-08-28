let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {                       // 1)
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let aux = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = aux;
    }
  }
}
console.log(numbers);


for (let index = 1; index < numbers.length; index += 1) {                        // 2)
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let aux = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = aux;
    }
  }
}
console.log(numbers);

/* 

Lógica do numbers[index] > numbers[secondIndex]]:

Se fosse number[4,3,2,5] pra ordem decrescente,

até o index = 3, nada ocorreria.

4, 3, 2, 5
number[3] > number[0]? Sim, troca
5, 3, 2, 4
number[3] > number[1]? Sim, troca
5, 4, 2, 3
number[3] > number[2]? Sim, troca
5, 4, 3, 2

*/

numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];                                 // 3)
numbers2replic = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = (numbers2.length - 1); index >= 0; index -= 1) {     
  if (index != (numbers2.length -1)) {
    numbers2[index] *= numbers2replic[index + 1];
  } else {
    numbers2[index] *= 2;
  }
}
console.log(numbers2);