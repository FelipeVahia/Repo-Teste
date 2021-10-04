// 1)

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));

// 2)

const verifyResult = (number, selectedNumber) => {
  if (number === selectedNumber) {
    return 'Parabéns, você ganhou';
  }

  return 'Tente novamente';
}

const raffleResult = (number, callback) => {
  const selectedNumber = Math.floor((Math.random() * 5) + 1);
  
  return callback(number, selectedNumber);
}

console.log(raffleResult(3, verifyResult));

// Outra forma de fazer:

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';   // Verifica se numberChecker é verdadeiro, se sim: 'Lucky da...', se não: 'Try ag...'
};

console.log(lotteryResult(2, numberChecker));

// 3)

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const studentAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
  return callback(RIGHT_ANSWERS, STUDENT_ANSWERS);
}

const verifyAnswers = (rightAnswers, studentAnswers) => {
  let sum = 0;
  
  for (i = 0; i < rightAnswers.length; i += 1) {
    if (studentAnswers[i] === rightAnswers[i]) {
      sum += 1;
    } else if (studentAnswers[i] !== rightAnswers[i] && studentAnswers[i] !== 'N.A') {
      sum -= 0.5;
    };
  }

  return sum
}

console.log(studentAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));

// Outra forma:

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));