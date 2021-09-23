// 1) Crie uma função que receba um número e retorne seu fatorial.

const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
}

console.log(factorial(5));

// Em 1 linha:

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;

console.log(factorial2(5));


// 2) Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Em 1 linha:

const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu"));


// 3) No arquivo index2.html.

/* 4) Crie um código JavaScript com a seguinte especificação:

- Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string 
qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

- Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array 
global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. */

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );
                                                 // let abaixo chama a função fun1 (que faz o texto de apresentação) e depois apresenta o texto 'Minhas...'
    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

// ForEach, como funciona:

console.log(buildSkillsPhrase("Lucas"));

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
});
