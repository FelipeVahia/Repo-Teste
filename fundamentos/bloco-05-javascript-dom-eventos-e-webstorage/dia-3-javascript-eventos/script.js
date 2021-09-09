function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// 1) O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function createDays() {
  let dezList = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dayList = document.createElement('li');
    dayList.innerHTML = dezDaysList[i];
    dayList.className = 'day';

    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
      dayList.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
      dayList.classList.add('friday');
    }

    dezList.appendChild(dayList);
  }
}

createDays();

// 2) Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function feriadoButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  
  newButton.id = 'btn-holiday'
  newButton.innerHTML = buttonName;
  buttonContainer.appendChild(newButton);
}

feriadoButton('Feriados');

// 3) Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

function changeHolidayColor() {
  let buttonContainer = document.querySelector('#btn-holiday');
  
  buttonContainer.addEventListener('click', function () {
    let allHolidays = document.querySelectorAll('.holiday');

    for (let index = 0; index < allHolidays.length; index += 1) {
      if (allHolidays[index].style.backgroundColor === 'lightgray') {
        allHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        allHolidays[index].style.backgroundColor = 'lightgray';
      }
    }
  });

};

changeHolidayColor();

// 4) Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

function fridayButton (buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');

  newButton.id = 'btn-friday';
  newButton.innerHTML = buttonName;
  buttonContainer.appendChild(newButton);
}

fridayButton('Sexta-Feira');

// 5) Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

function fridayClick (fridaysArray) {
  let fridayButton = document.getElementById('btn-friday');
  let fridays = document.getElementsByClassName('friday');

  fridayButton.addEventListener('click', function() {
    for (index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== 'Sexta!!') {
        fridays[index].innerHTML = 'Sexta!!';
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let fridaysArray = [4, 11, 18, 25];
fridayClick(fridaysArray);

// 6) Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomEffect () {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};
zoomEffect();

// 7) Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');
// 8) Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');
// 9) Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';         // event.target é o myTasks que foi clicado
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();
// 10) Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');    // a bolinha selecionada
  let days = document.querySelector('#days');                             // todos os dias
  let taskDiv = document.querySelector('.task');                          // a bolinha não selecionada
  let taskColor = taskDiv.style.backgroundColor;                          // cor da bolinha não selecionada
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;      // cor do dia clicado
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {      // se selectedtask > 0, é porque ela está ativa
      let color = selectedTask[0].style.backgroundColor;  // cor da bolinha selecionada. Poderia ser color = taskColor, pois já está armazenado de quando era a classe .task.
      event.target.style.color = color;                   // cor do dia clicado
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {  // cor do dia clicado = cor da bolinha não selecionada
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();