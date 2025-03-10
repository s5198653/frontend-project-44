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

export {initCalcGame};
