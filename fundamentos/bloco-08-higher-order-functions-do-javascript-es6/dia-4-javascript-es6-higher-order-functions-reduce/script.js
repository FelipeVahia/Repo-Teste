// 1) Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten1() {
  return arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
  }, []);
}

// Para só precisar de 1 return, por na mesma linha:

function flatten2() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log('----------------------- Exercício 1) -----------------------');
console.log(flatten2());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéisaaaaaaaaaaaaaaaaaaaa',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2) Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames1() {
  const names = (acc, curr, index, array) => (index !== array.length - 1) ? `${acc} ${curr.author.name},` : `${acc} ${curr.author.name}.`;
  return books.reduce(names, '')
}

function reduceNames2() {
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');

  return names.trim();
}

console.log('----------------------- Exercício 2) -----------------------');
console.log(reduceNames2());

// 3) Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge() {
  const sumOfAges = books.reduce((acc, curr) => acc + curr.releaseYear - curr.author.birthYear, 0)
  const numberOfBooks = books.length;
  return sumOfAges / numberOfBooks;
}

console.log('----------------------- Exercício 3) -----------------------');
console.log(averageAge());

// 4) Encontre o livro com o maior nome.

const expectedResult4 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}

function longestNamedBook1() {
  const longestName = books.reduce((acc, curr) => (acc.name.length > curr.name.length) ? acc : curr)
  return longestName;
}

function longestNamedBook2() {
  return books.reduce((biggestBook, currentBook) => {
    if (currentBook.name.length > biggestBook.name.length) {
      return currentBook;
    }
    return biggestBook;
  });
}

function longestNamedBook3() {
  const expectedResult = books.reduce((accumulator, currentValue) => {
    if (accumulator.name.length > currentValue.name.length) {
      return accumulator;
    } else { return currentValue }
  });
  return expectedResult;
}

console.log('----------------------- Exercício 4) -----------------------');
console.log(longestNamedBook3());

// 5) Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA1() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}

function containsA2() {
  const values = names.reduce((acc, name) => acc.concat(name)).split('');
  const result = values.filter((value) => value === 'A' || value === 'a').length;
  return result;
}

console.log('----------------------- Exercício 5) -----------------------');
console.log(containsA2());

// 6) Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage1() {
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((acc, curr) => acc + curr) / grades[index].length,
  }));
  return nameAndAverage;
}

function studentAverage2() {
  const resultStudent = students.map((student, index) => ({
    name: `${student}`,
    average: grades[index].reduce((acc, grade) => acc + grade) / grades[index].length
  })) 

  return resultStudent;
}

console.log('----------------------- Exercício 6) -----------------------');
console.log(studentAverage1());