import generalModule from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b > a) return getGcd(b, a);
  if (!b) return a;
  return getGcd(b, a % b);
};

const generateRound = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const rigthAnswer = String(getGcd(numberOne, numberTwo));
  return { question, rigthAnswer };
};

export default () => generalModule(description, generateRound);
