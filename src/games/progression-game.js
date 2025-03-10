import {gameLogic} from '../index.js';

const question = 'What number is missing in the progression?';
const generateArithmeticProgression = () => {
  const progressionLength = 10;
  const firstTerm = Math.floor(Math.random() * 100);
  const commonDifference = Math.floor(Math.random() * 10) + 1;

  const progression = [];
  for (let i = 0; i < progressionLength; i++) {
    progression.push(firstTerm + i * commonDifference);
  }

  return progression;
};

const conditions = () => {
  const progression = generateArithmeticProgression();
  const randomIndex = Math.floor(Math.random() * progression.length);
  const expression = progression
    .map((num, index) => {
      const result = index === randomIndex ? '..' : num;
      return result;
    })
    .join(' ');
  const correctAnswer = progression[randomIndex].toString();

  return [expression, correctAnswer];
};

const initProgressionGame = () => {
  gameLogic(question, conditions);
};

export {initProgressionGame};
