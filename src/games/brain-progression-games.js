import mainFunction from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (start, step) => {
  const result = [];
  for (let i = start; i <= (start + 100); i += step) {
    result.push(i);
  }
  return result;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const startProgression = getRandomNumber(2, 100);
  const stepProgression = getRandomNumber(2, 5);
  const resultArr = generateProgression(startProgression, stepProgression);
  resultArr.length = getRandomNumber(5, 10);
  const elementPosition = getRandomNumber(1, resultArr.length - 1);
  resultArr.splice(elementPosition, 1, '..');
  const question = `${resultArr.join(' ')}`;
  const rigthAnswer = `${resultArr[elementPosition - 1] + stepProgression}`;
  return { question, rigthAnswer };
};

export default () => mainFunction(description, generateRound);
