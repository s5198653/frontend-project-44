import readlineSync from 'readline-sync';
import {cli} from './cli.js';

const userName = cli();
const quantityOfQuestions = 3;

const gameLogic = (question, conditions) => {
  console.log(question);
  for (let i = 1; i <= quantityOfQuestions; i += 1) {
    const [expression, correctAnswer] = conditions();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {gameLogic};
