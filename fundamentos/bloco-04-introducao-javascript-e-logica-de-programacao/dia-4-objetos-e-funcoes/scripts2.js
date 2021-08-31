// 1) Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra) {
  let resultado
  for (index = 0; index < palavra.length / 2; index++) {        // OU  for(index in palavra) {......
    if (palavra[index] != palavra[palavra.length - index - 1]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome('arara'));

// 2) Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function menorIndiceDoArray(array) {
  let menorIndex = 0;
  for (index = 1; index < array.length; index++)        // OU   for (let index in array) {.....
    if (array[index] > array[menorIndex]) {
      menorIndex = index;
    }

  return menorIndex;
}

console.log(menorIndiceDoArray([2, 3, 6, 7, 10, 1]));

// 3) Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorIndiceDoArray(array) {
  let menorIndex = 0;
  for (index = 1; index < array.length; index++)        //   OU   for (let index in array) {.....
    if (array[index] < array[menorIndex]) {
      menorIndex = index;
    }

  return menorIndex;
}

console.log(menorIndiceDoArray([2, 4, 6, 7, 10, 0, -3]));

// 4) Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function nomeMaiorCaracteresDoArray(array) {
  let maiorNome = array[0]
  for (index = 1; index < array.length; index++)        // OU for (let index in array) {......
    if (array[index].length > maiorNome.length) {
      maiorNome = array[index];
    }

  return maiorNome;
}

console.log(nomeMaiorCaracteresDoArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5) Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function inteiroMaisRepeteDoArray(array) {
  let maiorRepeticao = 0;
  let repeticao = 0;
  for (index = 0; index < array.length; index++) {          // Poderia ser com for in também, let index in array
    for (index2 = 0; index2 < array.length; index2++) {     // e o segundo for ser let index2 in array
      if (array[index] === array[index2]) {
        repeticao += 1;
      }
    }
    if (repeticao > maiorRepeticao){
      maiorRepeticao = repeticao;
      indexMaisrepete = array[index]
    }
    repeticao = 0;
  }

  return indexMaisrepete + " repete " + maiorRepeticao + " vezes.";
}

console.log(inteiroMaisRepeteDoArray([2, 3, 2, 5, 8, 2, 3]));

// 6) 

function somaTodosNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index += 1) {
    total = total + index;
  }
  return total;
}
console.log(somaTodosNumeros(5));

// 7)

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  console.log(palavra)
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
};

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));