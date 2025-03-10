import {gameLogic} from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';
const gcd = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

const conditions = () => {
  const randomNumFirst = Math.floor(Math.random() * 100);
  const randomNumSecond = Math.floor(Math.random() * 100);
  const expression = `${randomNumFirst} ${randomNumSecond}`;
  const correctAnswer = gcd(randomNumFirst, randomNumSecond).toString();

  return [expression, correctAnswer];
};

const initGcdGame = () => {
  gameLogic(question, conditions);
};

export {initGcdGame};
