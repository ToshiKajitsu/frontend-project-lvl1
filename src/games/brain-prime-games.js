import mainFunction from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const numberOne = getRandomNumber(1, 100);
  const question = `${numberOne}`;
  const rigthAnswer = isPrime(numberOne) ? 'yes' : 'no';
  return { question, rigthAnswer };
};

export default () => mainFunction(description, generateRound);
