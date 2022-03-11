const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`);

// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
if (script) require(script.script);