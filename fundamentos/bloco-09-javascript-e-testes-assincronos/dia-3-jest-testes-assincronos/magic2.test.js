const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  favoriteCards.splice(4, favoriteCards.length - 4);
};

describe(' Testa a função getMagicCard', () => {
  afterEach(() => {
    retrievesFavoriteCards();
  });

  it('Testa se um novo card é adicionado a cada execução', async () => {

    expect.assertions(4);
    await getMagicCard('130553');

    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[4].name).toEqual('Beacon of Immortality');

    await getMagicCard('130554');

    expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {

    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);

    const namesOfFavoriteCards = favoriteCards.map(card => card.name);
    expect(namesOfFavoriteCards).toEqual(['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']);
  });  
});