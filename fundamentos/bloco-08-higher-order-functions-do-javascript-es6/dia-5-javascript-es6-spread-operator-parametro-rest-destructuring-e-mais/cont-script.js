// Spread Operator - 1) Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

const specialFruit = ['Banana', 'Maçã', 'Uva'];
const additionalItens = ['Abacaxi', 'Melancia', 'Coco'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log('---------------- Spread Operator 1) ----------------');
console.log(fruitSalad(specialFruit, additionalItens));



// Array Destructuring - 1) Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá    -> Acessa o segundo valor (função) com [1] e depois insere o primeiro valor do array [0] como parâmetro da função.

const [saudacao, realizaSaudacao] = saudacoes

console.log('---------------- Array Destructuring 1) ----------------');
realizaSaudacao(saudacao);



// Array Destructuring - 2) A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log('---------------- Array Destructuring 2) ----------------');
console.log(comida, animal, bebida);



// Array Destructuring - 3) O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log('---------------- Array Destructuring 3) ----------------');
console.log(numerosPares);



// Default Destructuring - 1) Do jeito que está, quando passamos person para a função getNationality o retorno é João is undefined . Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log('---------------- Default Destructuring 1) ----------------');
console.log(getNationality(person));



// Object Property Shorthand - 1) Altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log('---------------- Object Property Shorthand 1) ----------------');
console.log(getPosition(-19.8157, -43.9542));



// Default Parameters - 1) Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  return number * value;
};

console.log('---------------- Default Parameters - 1) ----------------');
console.log(multiply(8));
console.log(multiply(8, 3));