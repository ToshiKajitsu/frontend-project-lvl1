import {
  mainFunction,
  getRandomNumber,
} from '../index.js';

const even = (number) => number % 2 === 0;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const checkFunction = () => {
  const question = getRandomNumber(1, 100);
  const rigthAnswer = even(question) ? 'yes' : 'no';
  return { question, rigthAnswer };
};

export default () => mainFunction(condition, checkFunction);
