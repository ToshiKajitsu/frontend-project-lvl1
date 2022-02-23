import {
  mainFunction,
  getRandomNumber,
} from '../index.js';

const checkNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkFunction = () => {
  const numberOne = getRandomNumber(1, 100);
  const question = `${numberOne}`;
  const rigthAnswer = checkNumber(numberOne) ? 'yes' : 'no';
  return { question, rigthAnswer };
};

export default () => mainFunction(condition, checkFunction);
