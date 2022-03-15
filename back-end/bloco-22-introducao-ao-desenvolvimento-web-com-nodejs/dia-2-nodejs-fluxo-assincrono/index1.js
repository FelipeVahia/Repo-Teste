const fs = require('fs').promises;

function replaceNelson () {

  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpreta o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtra o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Cria um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escreve o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
