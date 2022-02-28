import generalModule from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rigthAnswer };
};

export default () => generalModule(description, generateRound);
