import readlineSync from 'readline-sync';
import userName from '../cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const getRandomNumber = () => Math.floor(Math.random() * (100 - 1)) + 1;

export default () => {
  let number = 0;
  while (number < 3) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answerNumber = readlineSync.question('Your answer: ');
    const checkNumber = (answer) => {
      if (answer === 'yes' && randomNumber % 2 === 0) {
        return true;
      } else if (answer === 'no' && randomNumber % 2 !== 0) {
        return true;
      } else return false;
    };
    if (checkNumber(answerNumber)) {
      console.log('Correct!');
      number += 1;
    } else {
      if (answerNumber === 'yes' && randomNumber % 2 !== 0) {
        console.log(`${answerNumber} is wrong answer ;(. Correct answer was 'no'.`);
        break;
      } else if (answerNumber === 'no' && randomNumber % 2 === 0) {
        console.log(`${answerNumber} is wrong answer ;(. Correct answer was 'yes'.`);
        break;
      }
    }
  }
  if (number === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

