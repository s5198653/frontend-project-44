import gameLogic from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const conditions = () => {
  const expression = Math.floor(Math.random() * 100);
  const correctAnswer = isPrime(expression) ? 'yes' : 'no';

  return [expression, correctAnswer];
};

const initPrimeGame = () => {
  gameLogic(question, conditions);
};

export default initPrimeGame;
