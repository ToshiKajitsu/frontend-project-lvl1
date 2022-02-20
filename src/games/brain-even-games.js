import readlineSync from 'readline-sync';
import {
  hello,
  name,
  getRandomNumber,
  checkNumber,
} from '../index.js';

export default () => {
  hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let current = 0;
  while (current < 3) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkNumber(answer, randomNumber)) {
      console.log('Correct!');
      current += 1;
    } else {
      if (!checkNumber) {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
        break;
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
      break;
    }
  }
  if (current === 3) console.log(`Congratulations, ${name}!`);
};
