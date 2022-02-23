import {
  mainFunction,
  getRandomNumber,
} from '../index.js';

const nod = (a, b) => {
  if (b > a) return nod(b, a);
  if (!b) return a;
  return nod(b, a % b);
};
const condition = 'Find the greatest common divisor of given numbers.';

const checkFunction = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const rigthAnswer = String(nod(numberOne, numberTwo));
  return { question, rigthAnswer };
};

export default () => mainFunction(condition, checkFunction);
