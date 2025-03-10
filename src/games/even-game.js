import {gameLogic} from '../index.js';

const isEven = (num) => num % 2 === 0;
const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const conditions = () => {
  const expression = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(expression) ? 'yes' : 'no';

  return [expression, correctAnswer];
};

const initEvenGame = () => {
  gameLogic(question, conditions);
};

export {initEvenGame};
