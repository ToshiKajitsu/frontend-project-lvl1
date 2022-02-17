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
  let number = 0;
  while (number < 3) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const answerNumber = readlineSync.question('Your answer: ');
    if (checkNumber(answerNumber, randomNumber)) {
      console.log('Correct!');
      number += 1;
    } else {
      if (!checkNumber) {
        console.log(`${answerNumber} is wrong answer ;(. Correct answer was 'no'.`);
        break;
      }
      console.log(`${answerNumber} is wrong answer ;(. Correct answer was 'yes'.`);
      break;
    }
  }
  if (number === 3) {
    console.log(`Congratulations, ${name[0]}!`);
  }
};
