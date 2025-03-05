import readlineSync from 'readline-sync';
import {cli} from './cli.js';

const userName = cli();

const initEvenGame = () => {
  const rightAnswer = 'yes';
  const wrongAnswer = 'no';
  const quantityOfQuestions = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= quantityOfQuestions; i += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = num % 2 === 0 ? rightAnswer : wrongAnswer;
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

export {initEvenGame};
