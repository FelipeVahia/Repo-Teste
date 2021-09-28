const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Substituir uma lesson em outra:
//
// const addNightTurn = (actualNightTurn, futureNightTurn) => {
//   Object.assign(actualNightTurn, futureNightTurn);
//   console.log(actualNightTurn);
// }

const addNightTurn = (lesson, key, value) => {
  lesson[key] = value;
  console.log(lesson2);
}

addNightTurn(lesson2, 'turno', 'noite');

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

const showSize = (obj) => Object.keys(obj).length;
console.log(showSize(lesson1));

// Agrupar todas as aulas:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Número total de estudantes em todas as aulas:

// Como resolvi:

const allStudents = (obj) => {
  let total = 0
  for (index in Object.values(obj)) {
    total += (Object.values(obj)[index].numeroEstudantes)
  }
  return total
}

console.log(allStudents(allLessons));

// Outra forma de resolver: 

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);                 // console.log(array) retorna: [ 'lesson1', 'lesson2', 'lesson3' ]
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons)); 

// Valor da chave de acordo com sua posição no objeto.

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// Verificar se (chave e valor) existe na função.

const verifyPair = (obj, key, value) => {
  const arrayKeys = Object.keys(obj);
  const arrayValues = Object.values(obj);

  for (index in arrayKeys) {
    if (arrayKeys[index] === key && arrayValues[index] === value) {
      return 'true'
    }
  }
  return 'false'
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false


// Bônus 1) Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

const mathStudentCount = (obj) => {
  let totalMath = 0
  const values = Object.values(obj);
  
  for (index in values) {
    if (values[index].materia === 'Matemática') {
      totalMath += (values[index].numeroEstudantes)
    }
  }
  return totalMath
}
  
  console.log(mathStudentCount(allLessons));

// Bônus 2) Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, 
// as aulas que ele ou ela ministrou e o número total de estudantes.

const relatory = (obj, name) => {
  const keys = Object.values(obj);
  const allLessons = [];
  let numberOfStudents = 0;

  for (index in keys) {
    if (keys[index].professor === name) {
      allLessons.push(keys[index].materia);
      numberOfStudents += keys[index].numeroEstudantes;
    }
  }
  // console.log(keys)
  
  return { 
    professor: name, 
    lessons: allLessons, 
    estudantes: numberOfStudents,
  }
}

console.log(relatory(allLessons, 'Maria Clara'));
// console.log(relatory(allLessons));
