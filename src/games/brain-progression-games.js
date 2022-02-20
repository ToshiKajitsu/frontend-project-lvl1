import readlineSync from 'readline-sync';
import {
  hello,
  name,
  getRandomNumber,
} from '../index.js';

export default () => {
  hello();
  console.log('What number is missing in the progression?');
  let current = 0;
  while (current < 3) {
    const result = [];
    const startProgression = getRandomNumber(2, 100);
    const currentProgression = getRandomNumber(2, 5);
    for (let i = startProgression; i <= (startProgression + 100); i += currentProgression) {
      result.push(i);
    }
    result.length = getRandomNumber(5, 10);
    const elementPosition = getRandomNumber(1, result.length - 1);
    result.splice(elementPosition, 1, '...');
    console.log(`Question: ${result.join(' ')}`);
    const answer = +readlineSync.question('Your answer: ');
    if (answer === (result[elementPosition - 1] + currentProgression)) {
      current += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result[elementPosition - 1] + currentProgression}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (current === 3) console.log(`Congratulations, ${name}!`);
};
