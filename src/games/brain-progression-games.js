import generalModule from '../index.js';
import getRandomNumber from '../utils.js';

const progressionLength = getRandomNumber(6, 11);

const generateProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const startProgression = getRandomNumber(2, 100);
  const stepProgression = getRandomNumber(2, 5);
  const progression = generateProgression(startProgression, stepProgression);
  const randomIndex = getRandomNumber(1, progression.length - 1);
  progression[randomIndex] = '..';
  const question = `${progression.join(' ')}`;
  const rigthAnswer = `${progression[randomIndex - 1] + stepProgression}`;
  return { question, rigthAnswer };
};

export default () => generalModule(description, generateRound);
