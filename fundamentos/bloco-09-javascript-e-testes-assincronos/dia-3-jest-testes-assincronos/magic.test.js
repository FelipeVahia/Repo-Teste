const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');

trybeSimulator(magic, 'getMagicCard');
const { getMagicCard } = magic;

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

describe(' Testa a função getMagicCard', () => {
  it('Deve retornar um objeto com as propriedades esperadas', () => {
    const response = await getMagicCard('130550');
    
    const {
      name,
      manaCost,
      types,
      subtypes,
      rarity
    } = response;

    expect(response).toEqual(expected);
    expect(types).toBeInstanceOf(Array);
    expect(subtypes).toHaveLength(2);
    expect(rarity).toBe('Uncommon');
    expect(name).toBe('Ancestor\'s Chosen');
    expect(manaCost).toBe('{5}{W}{W}');
  });
});