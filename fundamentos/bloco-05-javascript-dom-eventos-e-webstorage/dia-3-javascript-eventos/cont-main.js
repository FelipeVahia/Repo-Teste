const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado. Deve existir apenas um elemento com a classe 'tech'.
function changeTech (newElement) {
  const elementTech = document.querySelector('.tech');         // OU  document.getElementsByClassName('tech')[0];
  elementTech.classList.remove('tech');
  newElement.target.classList.add('tech');          // aplica a classe tech a quem deu target no newElement (na função).
  input.value = '';
}

firstLi.addEventListener('click', changeTech);
secondLi.addEventListener('click', changeTech);
thirdLi.addEventListener('click', changeTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function changeText (newText) {
  const oldText = document.querySelector('.tech');
  oldText.innerText = newText.target.value;
}
input.addEventListener('input', changeText);

/* Dá para por direto dentro da função.

input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

 */

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele direcione para seu portifólio.
function finishTop3 () {
  window.location.replace('https://blog.betrybe.com/');
}
myWebpage.addEventListener('dblclick', finishTop3);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', function (changeColor) {
  changeColor.target.style.color = 'red'          // OU   myWebpage.style.color = 'yellow';
});
myWebpage.addEventListener('mouseout', function (changeColor) {
  changeColor.target.style.color = 'unset'         // OU   myWebpage.style.color = 'unset';
});

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.