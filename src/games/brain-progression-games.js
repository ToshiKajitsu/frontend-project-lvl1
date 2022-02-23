import {
  mainFunction,
  getRandomNumber,
} from '../index.js';

const checkProgression = (start, step) => {
  const result = [];
  for (let i = start; i <= (start + 100); i += step) {
    result.push(i);
  }
  return result;
};

const condition = 'What number is missing in the progression?';

const checkFunction = () => {
  const startProgression = getRandomNumber(2, 100);
  const stepProgression = getRandomNumber(2, 5);
  const resultArr = checkProgression(startProgression, stepProgression);
  resultArr.length = getRandomNumber(5, 10);
  const elementPosition = getRandomNumber(1, resultArr.length - 1);
  resultArr.splice(elementPosition, 1, '..');
  const question = `${resultArr.join(' ')}`;
  const rigthAnswer = `${resultArr[elementPosition - 1] + stepProgression}`;
  return { question, rigthAnswer };
};

export default () => mainFunction(condition, checkFunction);
