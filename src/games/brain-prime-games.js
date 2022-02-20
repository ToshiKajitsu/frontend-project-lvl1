import readlineSync from 'readline-sync';
import {
  hello,
  name,
  getRandomNumber,
} from '../index.js';

export default () => {
  hello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let current = 0;
  while (current < 3) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const checkNumber = (number) => {
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) return false;
      }
      return true;
    };
    const result = checkNumber(randomNumber);
    if (result) {
      if (answer === 'yes') {
        current += 1;
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
        break;
      }
    } else if (!result) {
      if (answer === 'no') {
        current += 1;
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
        break;
      }
    }
  }
  if (current === 3) console.log(`Congratulations, ${name}!`);
};
