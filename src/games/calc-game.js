import {gameLogic} from '../index.js';

const question = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const conditions = () => {
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  const randomNumFirst = Math.floor(Math.random() * 100);
  const randomNumSecond = Math.floor(Math.random() * 100);
  const expression = `${randomNumFirst} ${randomOperator} ${randomNumSecond}`;
  let answer;
  switch (randomOperator) {
    case '+':
      answer = randomNumFirst + randomNumSecond;
      break;
    case '-':
      answer = randomNumFirst - randomNumSecond;
      break;
    case '*':
      answer = randomNumFirst * randomNumSecond;
      break;
    default:
      break;
  }
  const correctAnswer = answer.toString();

  return [expression, correctAnswer];
};

const initCalcGame = () => {
  gameLogic(question, conditions);
};

// const initCalcGame = () => {
//   const quantityOfQuestions = 3;
//   const operators = ['+', '-', '*'];

//   console.log('What is the result of the expression?');
//   for (let i = 1; i <= quantityOfQuestions; i += 1) {
//     const randomIndex = Math.floor(Math.random() * operators.length);
//     const randomOperator = operators[randomIndex];
//     const randomNumFirst = Math.floor(Math.random() * 100);
//     const randomNumSecond = Math.floor(Math.random() * 100);
//     const expression = `${randomNumFirst} ${randomOperator} ${randomNumSecond}`;
//     console.log(`Question: ${expression}`);
//     const userAnswer = readlineSync.question('Your answer: ');
//     const correctAnswer = randomNumFirst + randomOperator + randomNumSecond;
//     if (userAnswer === correctAnswer) {
//       console.log('Correct!');
//     } else {
//       return console.log(
//         `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`
//       );
//     }
//   }
//   return console.log(`Congratulations, ${userName}!`);
// };

export {initCalcGame};
